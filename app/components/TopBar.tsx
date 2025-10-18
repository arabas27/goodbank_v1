import { Link } from "react-router";
import { useAuth } from "~/lib/auth";

export function TopBar() {
  const { user, logout } = useAuth();
  return (
    <header className="fixed top-0 inset-x-0 z-20 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 backdrop-blur">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/dashboard" className="font-semibold text-primary">Goodbank</Link>
        <div className="flex items-center gap-2 text-sm">
          {user ? (
            <>
              <span className="hidden sm:inline text-gray-700 dark:text-gray-200">
                {user.displayName} ({user.role})
              </span>
              <button className="btn-outline" onClick={logout}>ออกจากระบบ</button>
            </>
          ) : (
            <Link className="btn-primary" to="/login">เข้าสู่ระบบ</Link>
          )}
        </div>
      </div>
    </header>
  );
}

