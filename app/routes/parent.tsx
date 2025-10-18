import type { Route } from "./+types/parent";
import { useState } from "react";
import { api } from "~/lib/api";
import type { BehaviorRecord } from "~/lib/types";
import { useToken } from "~/lib/auth";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goodbank - ผู้ปกครอง" },
    { name: "description", content: "ดูคะแนนบุตรหลานด้วยรหัสนักเรียน" },
  ];
}

export default function ParentPage() {
  const token = useToken();
  const [studentCode, setStudentCode] = useState("");
  const [records, setRecords] = useState<BehaviorRecord[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function search(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await api.getBehaviorsByStudent(token, studentCode.trim());
    setLoading(false);
    if (!res.ok || !res.data) setError(res.error || "ไม่พบข้อมูล");
    else setRecords(res.data);
  }

  return (
    <main className="container mx-auto px-4">
      <div className="mt-6 grid gap-4">
        <section className="card">
          <h1 className="text-lg font-semibold mb-3">ผู้ปกครอง</h1>
          <form onSubmit={search} className="grid gap-2 sm:grid-cols-3 items-end">
            <div className="sm:col-span-2">
              <label className="label">รหัสนักเรียนของบุตรหลาน</label>
              <input className="input" value={studentCode} onChange={(e) => setStudentCode(e.target.value)} placeholder="เช่น 12345" />
            </div>
            <button className="btn-primary" disabled={loading}>{loading ? "กำลังค้นหา..." : "ค้นหา"}</button>
          </form>
        </section>

        {records && (
          <section className="card">
            <h2 className="font-semibold mb-2">รายการคะแนน</h2>
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
              {records.map((r) => (
                <li key={r.id} className="py-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium">{r.detail}</p>
                    <p className="text-xs text-gray-500">{new Date(r.issuedAt).toLocaleDateString()}</p>
                  </div>
                  <div className={`font-semibold ${r.points >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {r.points > 0 ? "+" : ""}
                    {r.points}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </main>
  );
}

