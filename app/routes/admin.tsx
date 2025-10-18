import type { Route } from "./+types/admin";
import { useEffect, useState } from "react";
import { api } from "~/lib/api";
import { useAuth, useToken } from "~/lib/auth";
import type { User } from "~/lib/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goodbank - ผู้ดูแลระบบ" },
    { name: "description", content: "จัดการผู้ใช้และข้อมูลระบบ" },
  ];
}

export default function AdminPage() {
  const { user } = useAuth();
  const token = useToken();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (!token) return;
      const res = await api.listUsers(token);
      if (!res.ok || !res.data) setError(res.error || "โหลดข้อมูลไม่สำเร็จ");
      else setUsers(res.data);
    })();
  }, [token]);

  const isAdmin = user?.role === "admin" || user?.role === "director";

  return (
    <main className="container mx-auto px-4">
      <div className="mt-6 grid gap-4">
        {!isAdmin && (
          <p className="text-red-600">ต้องเป็นผู้ดูแลระบบเท่านั้น</p>
        )}
        <section className="card">
          <h1 className="text-lg font-semibold mb-3">ผู้ดูแลระบบ</h1>
          <p className="text-sm text-gray-600">จัดการผู้ใช้ บทบาท ห้องเรียน และข้อมูลอื่นๆ</p>
        </section>

        <section className="card">
          <h2 className="font-semibold mb-2">ผู้ใช้งานทั้งหมด</h2>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600 dark:text-gray-300">
                  <th className="py-2 pr-4">ID</th>
                  <th className="py-2 pr-4">ชื่อผู้ใช้</th>
                  <th className="py-2 pr-4">ชื่อแสดง</th>
                  <th className="py-2 pr-4">บทบาท</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {users.map((u) => (
                  <tr key={u.id}>
                    <td className="py-2 pr-4">{u.id}</td>
                    <td className="py-2 pr-4">{u.username}</td>
                    <td className="py-2 pr-4">{u.displayName}</td>
                    <td className="py-2 pr-4">{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

