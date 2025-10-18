-- Goodbank schema

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  display_name VARCHAR(200) NOT NULL,
  role ENUM('student','parent','teacher','admin','director') NOT NULL DEFAULT 'student',
  password_hash VARCHAR(255) NOT NULL,
  student_id INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS classes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  level VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_code VARCHAR(50) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  class_id INT NOT NULL,
  level VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (class_id) REFERENCES classes(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS behaviors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  teacher_user_id INT NOT NULL,
  points INT NOT NULL,
  detail VARCHAR(500) NOT NULL,
  issued_at DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (teacher_user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Optional link parents to students (many-to-many)
CREATE TABLE IF NOT EXISTS parent_children (
  parent_user_id INT NOT NULL,
  student_id INT NOT NULL,
  PRIMARY KEY (parent_user_id, student_id),
  FOREIGN KEY (parent_user_id) REFERENCES users(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed minimal data
INSERT INTO classes (name, level) VALUES ('1/1', 'ป.1') ON DUPLICATE KEY UPDATE name=name;

INSERT INTO students (student_code, first_name, last_name, class_id, level)
VALUES ('12345', 'สมชาย', 'ใจดี', 1, 'ป.1')
ON DUPLICATE KEY UPDATE first_name=VALUES(first_name), last_name=VALUES(last_name);

-- admin user (password: admin123)
INSERT INTO users (username, display_name, role, password_hash)
VALUES ('admin', 'ผู้ดูแลระบบ', 'admin', '$2y$10$ILK2v5Ghm3qTNQec9W0T2.2A4o0Ev8v3aFfM6oHPoG6xG6AJm0o5u')
ON DUPLICATE KEY UPDATE display_name=VALUES(display_name);

-- teacher user (password: teacher123)
INSERT INTO users (username, display_name, role, password_hash)
VALUES ('teacher1', 'ครูเอ', 'teacher', '$2y$10$8iT5H1k8kuy2Y0l6K3m3GOKcUo1P5r9lMckmN8yJ0vH1Z0F2r/0yG')
ON DUPLICATE KEY UPDATE display_name=VALUES(display_name);

