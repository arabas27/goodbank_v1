Goodbank Webapp (Thai) — Setup Guide

Frontend (React Router + Tailwind + TypeScript)

- Dev: `npm run dev`
- Build: `npm run build` then `npm start`
- Config: set `VITE_API_BASE_URL` in an `.env` file if your PHP API runs on a different origin (e.g., `VITE_API_BASE_URL=http://localhost:8080/api`).

Backend (PHP + MySQL)

1) Copy `server-php/config.sample.php` to `server-php/config.php` and update DB credentials and JWT secret.
2) Import `server-php/db/schema.sql` into your MySQL server.
3) Run: `php -S 0.0.0.0:8080 -t server-php/public`
4) Frontend should point to `http://localhost:8080/api` via `VITE_API_BASE_URL`.

Seed accounts

- admin: `admin` / `admin123`
- teacher: `teacher1` / `teacher123`
- example student code: `12345`

Roles & UX

- นักเรียน/ผู้ปกครอง: ค้นหาด้วยรหัสนักเรียน ดูรายการคะแนนและผลรวม
- ครู: เพิ่มคะแนนบวก/ลบ ใส่รายละเอียดและวันที่ ค้นหาตามนักเรียน/ห้อง/ระดับ
- ผู้ดูแล: ดูรายการผู้ใช้ (เริ่มต้น) และขยายเพิ่มสิทธิ์/ฟีเจอร์ได้

