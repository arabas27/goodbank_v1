const notices = [
  {
    title: "Scheduled maintenance window",
    detail:
      "Online banking will be unavailable Sunday from 1:00–3:00 AM ET while we deploy infrastructure upgrades. Mobile debit card transactions will remain online.",
    date: "Mar 24, 2025",
    category: "Systems",
    accent: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200",
    action: { label: "Maintenance checklist", href: "#" },
  },
  {
    title: "New security alert preferences",
    detail:
      "You can now choose push notifications in addition to email for high-value transfers. Please enable the option for customers in your branch by Friday.",
    date: "Mar 21, 2025",
    category: "Security",
    accent:
      "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  },
  {
    title: "Community outreach recap",
    detail:
      "Thanks to everyone who participated in the spring financial literacy workshops. Download the talking points to share with your teams this week.",
    date: "Mar 19, 2025",
    category: "Engagement",
    accent:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
    action: { label: "View recap deck", href: "#" },
  },
];

const quickActions = [
  {
    title: "Customer impact tracker",
    description:
      "Review which regions are affected by the upcoming system maintenance.",
    href: "#",
  },
  {
    title: "Risk & compliance portal",
    description:
      "Submit policy acknowledgements and review audit-ready documentation.",
    href: "#",
  },
  {
    title: "Incident response desk",
    description:
      "Log production incidents or request direct support from operations.",
    href: "#",
  },
];

const supportContacts = [
  { team: "Core Banking Ops", contact: "ops@goodbank.com", hours: "24/7" },
  {
    team: "Security Response",
    contact: "security@goodbank.com",
    hours: "6 AM – 10 PM ET",
  },
  {
    team: "People Team",
    contact: "people@goodbank.com",
    hours: "9 AM – 6 PM ET",
  },
];

export function Welcome() {
  return (
    <main className="min-h-screen bg-slate-50 pb-16 pt-20 text-slate-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:flex-row">
        <section className="w-full space-y-8 lg:w-[55%]">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
            Daily admin brief
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Stay in sync with the GoodBank information board
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-gray-300">
              The operations team curates these updates to keep every branch
              informed. Check the board each morning for the latest
              announcements, action items, and support resources for your
              customers.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-gray-400 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden
              />
              Systems operational
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-amber-500"
                aria-hidden
              />
              Review alerts before Friday 5 PM ET
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/60 px-6 py-5 dark:border-gray-800">
              <div>
                <h2 className="text-xl font-semibold">Information board</h2>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  Latest updates from the GoodBank admin team
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-gray-800 dark:text-gray-300">
                Updated daily
              </span>
            </div>
            <ul className="divide-y divide-slate-200/70 dark:divide-gray-800">
              {notices.map((notice) => (
                <li key={notice.title} className="flex gap-4 px-6 py-5">
                  <div
                    className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${notice.accent}`}
                  >
                    {notice.category}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100">
                        {notice.title}
                      </h3>
                      <time className="text-sm text-slate-500 dark:text-gray-400">
                        {notice.date}
                      </time>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-gray-300">
                      {notice.detail}
                    </p>
                    {notice.action ? (
                      <a
                        href={notice.action.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                      >
                        {notice.action.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14" strokeLinecap="round" />
                          <path
                            d="m13 6 6 6-6 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <aside className="w-full space-y-8 lg:w-[45%]">
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <h2 className="text-lg font-semibold">Quick actions</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
              Jump straight into the portals you need to keep customers
              supported.
            </p>
            <ul className="mt-5 space-y-4">
              {quickActions.map((action) => (
                <li
                  key={action.title}
                  className="group rounded-2xl border border-transparent p-4 transition hover:border-blue-200 hover:bg-blue-50/60 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10"
                >
                  <a href={action.href} className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-blue-700 group-hover:underline dark:text-blue-300">
                      {action.title}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-gray-300">
                      {action.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-slate-100 shadow-xl">
            <h2 className="text-lg font-semibold">Need help?</h2>
            <p className="mt-1 text-sm text-slate-300">
              Contact the teams standing by to assist branches and frontline
              staff.
            </p>
            <ul className="mt-6 space-y-4">
              {supportContacts.map((support) => (
                <li
                  key={support.team}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold">{support.team}</p>
                    <p className="text-xs text-slate-300">{support.hours}</p>
                  </div>
                  <a
                    href={`mailto:${support.contact}`}
                    className="text-xs font-medium text-blue-200 hover:text-white"
                  >
                    {support.contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
