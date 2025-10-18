import { Link, useLocation } from "react-router";

const items = [
  { to: "/dashboard", label: "หน้าหลัก" },
  { to: "/teacher", label: "ครู" },
  { to: "/student", label: "นักเรียน" },
  { to: "/parent", label: "ผู้ปกครอง" },
  { to: "/admin", label: "ผู้ดูแล" },
];

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-20 border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 backdrop-blur">
      <ul className="flex items-center justify-between px-2 py-2">
        {items.map((it) => {
          const active = pathname.startsWith(it.to);
          return (
            <li key={it.to}>
              <Link
                to={it.to}
                className={`px-3 py-2 rounded-xl text-xs ${
                  active ? "text-primary font-semibold" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

