<?php
declare(strict_types=1);
require_once __DIR__ . '/../src/Db.php';
require_once __DIR__ . '/../src/Auth.php';
require_once __DIR__ . '/../src/Util.php';

Util::cors();

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// assume public root is `/` and API under `/api`
if (!str_starts_with($path, '/api')) {
  http_response_code(404);
  echo 'Not Found';
  exit;
}

$pdo = Db::pdo();

function body() {
  $raw = file_get_contents('php://input');
  return $raw ? json_decode($raw, true) : [];
}

// Routing
if ($path === '/api/auth/login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  $b = body();
  $stmt = $pdo->prepare('SELECT id, username, display_name, role, password_hash FROM users WHERE username = ? LIMIT 1');
  $stmt->execute([$b['username'] ?? '']);
  $u = $stmt->fetch();
  if (!$u || !password_verify($b['password'] ?? '', $u['password_hash'])) {
    Util::json(['error' => 'invalid credentials'], 401);
  }
  $payload = ['id' => (int)$u['id'], 'username' => $u['username'], 'role' => $u['role']];
  $token = Auth::generateToken($payload);
  Util::json([
    'id' => (int)$u['id'],
    'username' => $u['username'],
    'displayName' => $u['display_name'],
    'role' => $u['role'],
    'token' => $token,
  ]);
}

if ($path === '/api/auth/login-student' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  $b = body();
  $stmt = $pdo->prepare('SELECT s.id, s.student_code, s.first_name, s.last_name, u.id as user_id FROM students s LEFT JOIN users u ON u.student_id = s.id WHERE s.student_code = ? LIMIT 1');
  $stmt->execute([$b['studentCode'] ?? '']);
  $s = $stmt->fetch();
  if (!$s) Util::json(['error' => 'not found'], 404);
  $userId = $s['user_id'] ?? null;
  if (!$userId) {
    // create a lightweight user for student if not exists
    $pdo->prepare('INSERT INTO users (username, display_name, role, password_hash, student_id) VALUES (?, ?, "student", "", ?)')
      ->execute([
        'stu_'.$s['student_code'],
        $s['first_name'].' '.$s['last_name'],
        $s['id'],
      ]);
    $userId = (int)$pdo->lastInsertId();
  }
  $payload = ['id' => (int)$userId, 'username' => 'stu_'.$s['student_code'], 'role' => 'student'];
  $token = Auth::generateToken($payload);
  Util::json([
    'id' => (int)$userId,
    'username' => 'stu_'.$s['student_code'],
    'displayName' => $s['first_name'].' '.$s['last_name'],
    'role' => 'student',
    'token' => $token,
  ]);
}

if ($path === '/api/auth/me' && $_SERVER['REQUEST_METHOD'] === 'GET') {
  $u = Auth::getBearerUser();
  if (!$u) Util::json(['error' => 'unauthorized'], 401);
  Util::json($u);
}

if ($path === '/api/behaviors' && $_SERVER['REQUEST_METHOD'] === 'POST') {
  $u = Auth::getBearerUser();
  if (!$u) Util::json(['error' => 'unauthorized'], 401);
  if (!in_array($u['role'], ['teacher','admin'], true)) Util::json(['error' => 'forbidden'], 403);
  $b = body();
  // resolve student
  $stmt = $pdo->prepare('SELECT id FROM students WHERE student_code = ? LIMIT 1');
  $stmt->execute([$b['studentCode'] ?? '']);
  $s = $stmt->fetch();
  if (!$s) Util::json(['error' => 'student not found'], 404);
  $pdo->prepare('INSERT INTO behaviors (student_id, teacher_user_id, points, detail, issued_at) VALUES (?,?,?,?,?)')
    ->execute([
      (int)$s['id'],
      (int)$u['id'],
      (int)($b['points'] ?? 0),
      (string)($b['detail'] ?? ''),
      (string)($b['issuedAt'] ?? date('Y-m-d')),
    ]);
  $id = (int)$pdo->lastInsertId();
  $row = $pdo->query('SELECT id, student_id as studentId, teacher_user_id as teacherId, points, detail, issued_at as issuedAt FROM behaviors WHERE id = '.$id)->fetch();
  Util::json($row);
}

if (preg_match('#^/api/students/([^/]+)$#', $path, $m) && $_SERVER['REQUEST_METHOD'] === 'GET') {
  $code = urldecode($m[1]);
  $stmt = $pdo->prepare('SELECT id, student_code as studentCode, first_name as firstName, last_name as lastName, class_id as classId, level FROM students WHERE student_code = ? LIMIT 1');
  $stmt->execute([$code]);
  $s = $stmt->fetch();
  if (!$s) Util::json(['error' => 'not found'], 404);
  Util::json($s);
}

if (preg_match('#^/api/students/([^/]+)/behaviors$#', $path, $m) && $_SERVER['REQUEST_METHOD'] === 'GET') {
  $code = urldecode($m[1]);
  $stmt = $pdo->prepare('SELECT id FROM students WHERE student_code = ? LIMIT 1');
  $stmt->execute([$code]);
  $s = $stmt->fetch();
  if (!$s) Util::json(['error' => 'not found'], 404);
  $stmt = $pdo->prepare('SELECT id, student_id as studentId, teacher_user_id as teacherId, points, detail, issued_at as issuedAt FROM behaviors WHERE student_id = ? ORDER BY issued_at DESC, id DESC');
  $stmt->execute([(int)$s['id']]);
  Util::json($stmt->fetchAll());
}

if (preg_match('#^/api/classes/(\d+)/behaviors$#', $path, $m) && $_SERVER['REQUEST_METHOD'] === 'GET') {
  $classId = (int)$m[1];
  $stmt = $pdo->prepare('SELECT b.id, b.student_id as studentId, b.teacher_user_id as teacherId, b.points, b.detail, b.issued_at as issuedAt FROM behaviors b JOIN students s ON s.id = b.student_id WHERE s.class_id = ? ORDER BY b.issued_at DESC, b.id DESC');
  $stmt->execute([$classId]);
  Util::json($stmt->fetchAll());
}

if ($path === '/api/admin/users' && $_SERVER['REQUEST_METHOD'] === 'GET') {
  $u = Auth::getBearerUser();
  if (!$u) Util::json(['error' => 'unauthorized'], 401);
  if (!in_array($u['role'], ['admin','director'], true)) Util::json(['error' => 'forbidden'], 403);
  $rows = $pdo->query('SELECT id, username, display_name as displayName, role FROM users ORDER BY id DESC')->fetchAll();
  Util::json($rows);
}

Util::json(['error' => 'Not Found'], 404);

