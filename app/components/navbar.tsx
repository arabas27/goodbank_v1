import { useEffect, useState } from "react";
import { NavLink } from "react-router";

type NavItem = {
  label: string;
  to: string;
  disabled?: boolean;
};

const navigation: NavItem[] = [
  { label: "กระดานข้อมูล", to: "/" },
  { label: "บัญชี", to: "#", disabled: true },
  { label: "รายงาน", to: "#", disabled: true },
  { label: "เครื่องมือผู้ดูแล", to: "#", disabled: true },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
            GB
          </span>
          <span className="flex flex-col">
            <span className="text-base font-semibold text-slate-900 dark:text-gray-100">
              GoodBank
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-gray-400">
              พอร์ทัลงานปฏิบัติการ
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navigation.map((item) =>
            item.disabled ? (
              <span
                key={item.label}
                className="relative flex items-center gap-2 text-slate-400 transition dark:text-gray-600"
                aria-disabled
              >
                {item.label}
                <span className="rounded-full border border-slate-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:border-gray-700 dark:text-gray-500">
                  เร็วๆ นี้
                </span>
              </span>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 pb-1 transition-colors ${
                    isActive
                      ? "text-blue-700 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-blue-600 dark:text-blue-300 dark:after:bg-blue-400"
                      : "text-slate-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="mailto:support@goodbank.com"
            className="hidden rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:border-blue-200 hover:bg-blue-100 md:inline-flex dark:border-blue-500/40 dark:bg-blue-500/20 dark:text-blue-200 dark:hover:border-blue-400"
          >
            ฝ่ายสนับสนุน
          </a>
          <button
            type="button"
            className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/80"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-semibold text-white">
              AB
            </span>
            <span className="hidden text-xs leading-tight md:flex md:flex-col">
              <span className="font-semibold text-slate-900 dark:text-gray-100">
                Avery Banks
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-gray-400">
                ผู้ดูแลระบบ
              </span>
            </span>
            <span className="sr-only">การตั้งค่าบัญชี</span>
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200"
            aria-label={isMenuOpen ? "ปิดเมนูนำทาง" : "เปิดเมนูนำทาง"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden
              >
                <path
                  d="m7 7 10 10M7 17 17 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-slate-900/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden
          />
          <nav
            id="mobile-navigation"
            className="fixed inset-x-0 top-16 z-40 border-b border-slate-200/70 bg-white/95 px-6 pb-8 pt-4 shadow-xl shadow-slate-900/10 md:hidden dark:border-gray-800 dark:bg-gray-950/95"
          >
            <ul className="space-y-3 text-sm font-medium">
              {navigation.map((item) => (
                <li key={item.label}>
                  {item.disabled ? (
                    <span
                      className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3 text-slate-400 dark:bg-gray-900 dark:text-gray-600"
                      aria-disabled
                      tabIndex={-1}
                    >
                      {item.label}
                      <span className="rounded-full border border-slate-300 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:border-gray-700 dark:text-gray-500">
                        เร็วๆ นี้
                      </span>
                    </span>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl px-4 py-3 transition ${
                          isActive
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200"
                            : "text-slate-700 hover:bg-blue-50/80 dark:text-gray-200 dark:hover:bg-blue-500/10"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4"
                        aria-hidden
                      >
                        <path
                          d="m9 6 6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:support@goodbank.com"
                className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:border-blue-200 hover:bg-blue-100 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-200 dark:hover:border-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                ติดต่อฝ่ายสนับสนุน
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M5 12h14" strokeLinecap="round" />
                  <path
                    d="m13 6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-gray-700 dark:bg-gray-900/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  AB
                </span>
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-slate-900 dark:text-gray-100">
                    Avery Banks
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-gray-400">
                    Admin
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
