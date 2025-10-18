import type { Route } from "./+types/login";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "~/lib/auth";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goodbank - เข้าสู่ระบบ" },
    { name: "description", content: "เข้าสู่ระบบเพื่อใช้งาน Goodbank" },
  ];
}

export default function LoginPage() {
  const { login, loginStudent } = useAuth();
  const [tab, setTab] = useState<"staff" | "student">("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      let ok = false;
      if (tab === "staff") ok = await login(username.trim(), password);
      else ok = await loginStudent(studentCode.trim());
      if (!ok) setError("ไม่สามารถเข้าสู่ระบบได้");
      else nav("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container mx-auto px-4">
      <div className="mx-auto max-w-md mt-8">
        <div className="card">
          <h1 className="text-xl font-semibold text-center mb-4">เข้าสู่ระบบ Goodbank</h1>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              className={`btn ${tab === "student" ? "btn-primary" : "btn-outline"}`}
              onClick={() => setTab("student")}
              type="button"
            >นักเรียน/ผู้ปกครอง</button>
            <button
              className={`btn ${tab === "staff" ? "btn-primary" : "btn-outline"}`}
              onClick={() => setTab("staff")}
              type="button"
            >ครู/ผู้ดูแล</button>
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            {tab === "staff" ? (
              <>
                <label className="label">รหัสผู้ใช้</label>
                <input className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <label className="label">รหัสผ่าน</label>
                <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••" />
              </>
            ) : (
              <>
                <label className="label">รหัสนักเรียน</label>
                <input className="input" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} placeholder="เช่น 12345" />
              </>
            )}

            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button className="btn-primary w-full" disabled={loading}>
              {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

