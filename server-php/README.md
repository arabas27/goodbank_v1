Goodbank PHP API

Endpoints (prefix `/api`):

- POST `/auth/login` → { username, password } → { id, username, displayName, role, token }
- POST `/auth/login-student` → { studentCode } → { id, username, displayName, role: "student", token }
- GET `/auth/me` (Bearer) → user
- POST `/behaviors` (Bearer teacher/admin) → { studentCode, points, detail, issuedAt } → created record
- GET `/students/:studentCode` (Bearer) → student
- GET `/students/:studentCode/behaviors` (Bearer optional) → list
- GET `/classes/:id/behaviors` (Bearer) → list
- GET `/admin/users` (Bearer admin) → users

Setup

1) Copy `server-php/config.sample.php` to `server-php/config.php` and set DB credentials and `JWT_SECRET`.
2) Import `server-php/db/schema.sql` into MySQL.
3) Run a PHP server pointing document root to `server-php/public` (e.g. `php -S 0.0.0.0:8080 -t server-php/public`).
4) In frontend, set `VITE_API_BASE_URL` to `http://localhost:8080/api`.

