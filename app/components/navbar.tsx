import { NavLink } from "react-router";

type NavItem = {
  label: string;
  to: string;
  disabled?: boolean;
};

const navigation: NavItem[] = [
  { label: "Information board", to: "/" },
  { label: "Accounts", to: "#", disabled: true },
  { label: "Reporting", to: "#", disabled: true },
  { label: "Admin tools", to: "#", disabled: true },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
            GB
          </span>
          <span className="flex flex-col">
            <span className="text-base font-semibold text-slate-900 dark:text-gray-100">
              GoodBank
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-gray-400">
              Operations Portal
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
                  Soon
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
        <div className="flex items-center gap-4">
          <a
            href="mailto:support@goodbank.com"
            className="hidden rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 transition hover:border-blue-200 hover:bg-blue-100 md:inline-flex dark:border-blue-500/40 dark:bg-blue-500/20 dark:text-blue-200 dark:hover:border-blue-400"
          >
            Support
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
                Admin
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
