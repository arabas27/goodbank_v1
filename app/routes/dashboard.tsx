import type { Route } from "./+types/dashboard";
import { Link } from "react-router";
import { useAuth } from "~/lib/auth";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Goodbank - แดชบอร์ด" },
    { name: "description", content: "ภาพรวมคะแนนความประพฤติ" },
  ];
}

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <main className="container mx-auto px-4">
      <div className="mt-6 grid gap-4">
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">สวัสดี {user?.displayName || "ผู้มาเยือน"}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">ยินดีต้อนรับสู่ Goodbank — ระบบคะแนนความประพฤตินักเรียน</p>
        </section>

        <section className="grid sm:grid-cols-2 gap-3">
          <QuickLink to="/student" label="ดูคะแนนนักเรียน (รหัสนักเรียน)" />
          <QuickLink to="/teacher" label="บันทึก/ดูคะแนนสำหรับครู" />
          <QuickLink to="/parent" label="ผู้ปกครองดูข้อมูลบุตรหลาน" />
          <QuickLink to="/admin" label="ผู้ดูแลระบบ" />
        </section>

        <section className="card gradient-student">
          <h3 className="font-semibold mb-1">แนวทางการใช้งาน</h3>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>ครูสามารถเพิ่มคะแนนบวก/ลบ พร้อมรายละเอียดและวันที่</li>
            <li>ค้นหาตามนักเรียน ห้องเรียน หรือระดับชั้น</li>
            <li>นักเรียน/ผู้ปกครองค้นหาด้วยรหัสนักเรียน</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

function QuickLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="card hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{label}</p>
        </div>
        <span className="text-primary">➔</span>
      </div>
    </Link>
  );
}

