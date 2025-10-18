<?php
class Auth {
  public static function generateToken(array $payload): string {
    $cfg = require __DIR__ . '/../config.php';
    $header = self::b64(json_encode(['alg'=>'HS256','typ'=>'JWT']));
    $payload['iat'] = time();
    $payload['exp'] = time() + 60*60*24*7; // 7 days
    $body = self::b64(json_encode($payload));
    $sig = self::b64(hash_hmac('sha256', "$header.$body", $cfg['JWT_SECRET'], true));
    return "$header.$body.$sig";
  }

  public static function verifyToken(?string $token): ?array {
    if (!$token) return null;
    $cfg = require __DIR__ . '/../config.php';
    $parts = explode('.', $token);
    if (count($parts) !== 3) return null;
    [$h,$b,$s] = $parts;
    $calc = self::b64(hash_hmac('sha256', "$h.$b", $cfg['JWT_SECRET'], true));
    if (!hash_equals($calc, $s)) return null;
    $payload = json_decode(self::ub64($b), true);
    if (!$payload || ($payload['exp'] ?? 0) < time()) return null;
    return $payload;
  }

  public static function getBearerUser(): ?array {
    $hdr = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (str_starts_with($hdr, 'Bearer ')) {
      $payload = self::verifyToken(substr($hdr, 7));
      return $payload ?: null;
    }
    return null;
  }

  private static function b64(string $s): string { return rtrim(strtr(base64_encode($s), '+/', '-_'), '='); }
  private static function ub64(string $s): string { return base64_decode(strtr($s, '-_', '+/')); }
}

