import type { Route } from "./+types/teacher";
import { useEffect, useMemo, useState } from "react";
import { api } from "~/lib/api";
import { useAuth, useToken } from "~/lib/auth";
import type { BehaviorRecord } from "~/lib/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goodbank - สำหรับครู" },
    { name: "description", content: "บันทึกและดูคะแนนนักเรียน" },
  ];
}

export default function TeacherPage() {
  const token = useToken();
  const { user } = useAuth();
  const [studentCode, setStudentCode] = useState("");
  const [points, setPoints] = useState<number>(1);
  const [detail, setDetail] = useState("");
  const [issuedAt, setIssuedAt] = useState<string>(() => new Date().toISOString().slice(0, 10));
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const disabled = useMemo(() => !user || (user.role !== "teacher" && user.role !== "admin"), [user]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    setLoading(true);
    const res = await api.addBehavior(token, {
      studentCode: studentCode.trim(),
      points,
      detail,
      issuedAt,
    } as any);
    setLoading(false);
    if (!res.ok) setError(res.error || "เกิดข้อผิดพลาด");
    else setOk("บันทึกข้อมูลเรียบร้อยแล้ว");
  }

  return (
    <main className="container mx-auto px-4">
      <div className="mt-6 grid gap-4">
        <section className="card">
          <h1 className="text-lg font-semibold mb-3">บันทึกคะแนนนักเรียน</h1>
          {disabled && (
            <p className="text-sm text-red-600 mb-2">เฉพาะครู/ผู้ดูแลระบบเท่านั้น</p>
          )}
          <form onSubmit={submit} className="grid gap-2 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="label">รหัสนักเรียน</label>
              <input className="input" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} placeholder="เช่น 12345" />
            </div>
            <div className="sm:col-span-1">
              <label className="label">วันที่</label>
              <input className="input" type="date" value={issuedAt} onChange={(e) => setIssuedAt(e.target.value)} />
            </div>
            <div className="sm:col-span-1">
              <label className="label">คะแนน (+/-)</label>
              <input className="input" type="number" value={points} onChange={(e) => setPoints(parseInt(e.target.value || "0", 10))} />
            </div>
            <div className="sm:col-span-2">
              <label className="label">รายละเอียด</label>
              <textarea className="input min-h-24" value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="เช่น ช่วยงานห้องเรียน, ส่งการบ้านช้า" />
            </div>
            <div className="sm:col-span-2 mt-2">
              <button className="btn-primary" disabled={disabled || loading}>
                {loading ? "กำลังบันทึก..." : "บันทึกคะแนน"}
              </button>
            </div>
            {error && <p className="text-red-600 text-sm sm:col-span-2">{error}</p>}
            {ok && <p className="text-green-600 text-sm sm:col-span-2">{ok}</p>}
          </form>
        </section>

        <section className="card">
          <h2 className="font-semibold mb-2">การค้นหาและสรุปผล</h2>
          <p className="text-sm text-gray-600">ค้นหาตามนักเรียน ห้องเรียน หรือระดับชั้น (ต่อ API)</p>
        </section>
      </div>
    </main>
  );
}

