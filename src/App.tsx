import { useState } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Insights', href: '#insights' },
  { label: 'Pricing', href: '#pricing' },
]

const featureCards = [
  {
    title: 'Real-time point tracking',
    description:
      'Log positive and corrective behaviors from any device and keep every classroom aligned on expectations.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-brand-500">
        <path d="M4 11h16v2H4zm4-5h12v2H8zm-4 10h12v2H4z" />
      </svg>
    ),
  },
  {
    title: 'Smart coaching loops',
    description:
      'Surface trends with AI suggestions so deans, counselors, and teachers can coach the right students at the right time.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-brand-500">
        <path d="M12 2a7 7 0 0 0-7 7c0 3.45 2.48 6.33 5.75 6.9L12 22l1.25-6.1C16.52 15.33 19 12.45 19 9a7 7 0 0 0-7-7Z" />
      </svg>
    ),
  },
  {
    title: 'Family communication',
    description:
      'Send weekly highlights translated into 30+ languages and celebrate wins with automated praise messages.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-brand-500">
        <path d="M20 4H4a2 2 0 0 0-2 2v12l4-3h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
      </svg>
    ),
  },
  {
    title: 'Culture analytics',
    description:
      'Monitor equity, referrals, and culture goals in a single dashboard with exportable reports for leadership meetings.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-brand-500">
        <path d="M5 3h4v18H5zm5 6h4v12h-4zm5-4h4v16h-4z" />
      </svg>
    ),
  },
]

const workflow = [
  {
    title: 'Capture moments instantly',
    description:
      'Tap once to award points or flag behavior from phones, tablets, or Chromebooks—no more clipboards or sticky notes.',
  },
  {
    title: 'Coach with clarity',
    description:
      'Morning briefings share which students need support and which deserve a shout-out, so every adult starts prepared.',
  },
  {
    title: 'Celebrate growth',
    description:
      'Show progress to students and families with progress badges, certificates, and automated celebrations.',
  },
]

const stats = [
  { label: 'Decrease in referrals', value: '28%', caption: 'Across BehaviorHub partner schools' },
  { label: 'Faster family outreach', value: '3×', caption: 'Less time spent preparing weekly updates' },
  { label: 'Teacher adoption', value: '92%', caption: 'Average active usage within first month' },
]

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="relative z-20 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-lg font-semibold text-white shadow-lg shadow-brand-500/30">
              BH
            </span>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold text-slate-900">BehaviorHub</span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500">School culture OS</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-brand-600">
                {item.label}
              </a>
            ))}
            <Link
              to="/sign-in"
              className="rounded-full border border-brand-200 px-5 py-2 text-sm font-semibold text-brand-600 transition hover:border-brand-300 hover:bg-brand-50"
            >
              Sign in
            </Link>
            <a
              href="#demo"
              className="inline-flex rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700"
            >
              Request demo
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 md:hidden">
            <nav className="space-y-4 text-sm text-muted">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl bg-slate-50 px-4 py-3 font-semibold text-slate-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/sign-in"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl border border-brand-200 px-4 py-3 text-center font-semibold text-brand-600"
              >
                Sign in
              </Link>
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-brand-600 px-4 py-3 text-center font-semibold text-white shadow-lg shadow-brand-500/30"
              >
                Request demo
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-white">
          <div className="hero-gradient pointer-events-none absolute inset-0 opacity-90" />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-24 sm:pt-32 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z"
                    fill="currentColor"
                  />
                </svg>
                Trusted in 120+ classrooms
              </span>
              <h1 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
                Capture, coach, and celebrate student behavior—in one beautiful dashboard.
              </h1>
              <p className="text-lg text-muted">
                BehaviorHub helps K-12 teams record behavior moments in seconds, uncover patterns instantly, and reward growth
                that fuels thriving school culture.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-700"
                >
                  Book a live demo
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-600"
                >
                  Explore the platform
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {['AL', 'SR', 'TK', 'JM'].map((initials) => (
                    <span
                      key={initials}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-500 text-sm font-semibold text-white shadow-lg"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    32% increase in positive recognition
                  </p>
                  <p className="text-sm text-muted">Based on 2024 middle school pilot cohort</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-white/90 p-6 shadow-floating ring-1 ring-brand-100/80">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-muted">Classroom pulse</p>
                    <p className="font-display text-2xl font-semibold text-slate-900">Week of March 3</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Live sync
                  </span>
                </div>
                <div className="mt-8 space-y-5">
                  {[
                    { name: 'Jordan Mills', trend: '+8 pts', focus: 'Peer collaboration', color: 'bg-brand-50 text-brand-700' },
                    { name: 'Amira Lopez', trend: '+5 pts', focus: 'Active listening', color: 'bg-emerald-50 text-emerald-700' },
                    { name: 'Devon Carter', trend: '-2 pts', focus: 'Reset circle scheduled', color: 'bg-amber-50 text-amber-700' },
                  ].map((student) => (
                    <div key={student.name} className="flex items-center justify-between rounded-2xl bg-slate-50/80 p-4">
                      <div>
                        <p className="font-semibold text-slate-900">{student.name}</p>
                        <p className="text-sm text-muted">{student.focus}</p>
                      </div>
                      <span className={`rounded-full px-4 py-1 text-sm font-semibold ${student.color}`}>{student.trend}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl bg-slate-900 px-6 py-6 text-white">
                  <p className="text-sm uppercase tracking-wide text-brand-200/80">Focus skill</p>
                  <p className="mt-2 font-display text-2xl font-semibold">Empathy in group work</p>
                  <p className="mt-3 text-sm text-slate-200">
                    76% of students met their weekly target. Coach the remaining 6 students with ready-to-use conversation starters.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-wider text-brand-200">Celebrations</p>
                      <p className="text-lg font-semibold">124 shout-outs</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-wider text-brand-200">Restorative circles</p>
                      <p className="text-lg font-semibold">9 scheduled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Purpose-built for the rhythm of school life</h2>
              <p className="mt-4 text-lg text-muted">
                Everything your staff needs to log behaviors, identify trends, and celebrate growth is right where you expect it.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {featureCards.map((feature) => (
                <div key={feature.title} className="group rounded-3xl border border-slate-200/60 bg-slate-50/70 p-8 transition hover:border-brand-200 hover:bg-white">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-base text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="bg-slate-900 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-brand-200">
                  Data that drives action
                </span>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Lead culture conversations with confident, transparent data.
                </h2>
                <p className="text-lg text-slate-200">
                  No more spreadsheets. BehaviorHub instantly visualizes trends by student, classroom, grade level, or identity group so leadership teams can respond with precision.
                </p>
                <ul className="space-y-4 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                      1
                    </span>
                    Weekly culture briefs delivered to your inbox before Monday meetings.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                      2
                    </span>
                    Export ready-to-share PDF dashboards for board updates and family engagement nights.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                      3
                    </span>
                    Built-in equity lenses reveal disproportionate trends before they become discipline issues.
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white/5 p-8 backdrop-blur">
                <div className="grid gap-8 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/10 p-6 text-center shadow-inner shadow-brand-900/40">
                      <p className="font-display text-4xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-100">{stat.label}</p>
                      <p className="mt-2 text-xs text-slate-200">{stat.caption}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-2xl bg-white/10 p-6">
                  <p className="text-sm uppercase tracking-widest text-brand-100">What leaders say</p>
                  <blockquote className="mt-4 text-lg text-slate-100">
                    “BehaviorHub has replaced three disconnected tools and given us the visibility to celebrate our students every single day.”
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-white">Sonia Patel</p>
                  <p className="text-xs uppercase tracking-wide text-brand-100">Principal, Riverside Academy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Designed for busy educators</h2>
                <p className="text-lg text-muted">
                  BehaviorHub moves at the speed of the school day. One tap to log moments, automatic coaching nudges, and instant celebrations keep students motivated without adding paperwork.
                </p>
                <div className="space-y-5">
                  {workflow.map((step, index) => (
                    <div key={step.title} className="rounded-3xl border border-slate-200/70 p-6 shadow-sm">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-600">
                        0{index + 1}
                      </span>
                      <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8">
                <div className="rounded-2xl bg-white p-6 shadow-floating">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">Daily briefing</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">Friday, March 7</p>
                  <ul className="mt-6 space-y-4 text-sm text-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-500" />
                      7:45am — Share top three shout-outs with morning announcements.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      10:15am — Restorative conference scheduled with Devon and guardian.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                      2:30pm — Advisory challenge unlocked: 500 points for grade-wide celebration.
                    </li>
                  </ul>
                  <div className="mt-8 rounded-2xl border border-dashed border-brand-200 p-6 text-center">
                    <p className="font-display text-xl font-semibold text-slate-900">Need extra support?</p>
                    <p className="mt-2 text-sm text-muted">Your culture coach will call today at 3:15pm with ready-to-use talking points.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-slate-900 py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Built for schools of every size</h2>
            <p className="mt-4 text-lg text-slate-200">
              Choose a plan that matches your community. Every subscription includes onboarding, training, and live chat support.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Starter</p>
                <p className="mt-4 font-display text-4xl font-semibold text-white">
                  $3
                  <span className="text-base font-medium text-slate-200">/student monthly</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  <li>Unlimited point tracking</li>
                  <li>Positive behavior celebrations</li>
                  <li>Quarterly culture coaching calls</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-brand-300 bg-brand-600/20 p-8 text-left ring-2 ring-brand-400/60">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-100">Whole School</p>
                <p className="mt-4 font-display text-4xl font-semibold text-white">
                  Custom
                  <span className="text-base font-medium text-brand-100">/student</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-100">
                  <li>Equity & restorative justice dashboards</li>
                  <li>Family messaging with auto-translate</li>
                  <li>Dedicated implementation partner</li>
                </ul>
              </div>
            </div>
            <div id="demo" className="mt-12 inline-flex flex-col items-center gap-3">
              <a
                href="mailto:hello@behaviorhub.io"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-brand-900/30 transition hover:bg-slate-100"
              >
                Talk with our team
              </a>
              <p className="text-sm text-slate-300">We respond within one business day.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-sm font-semibold text-white">
              BH
            </span>
            <span className="font-display text-lg font-semibold text-slate-900">BehaviorHub</span>
          </Link>
          <p className="text-sm text-muted">© {new Date().getFullYear()} BehaviorHub. Building joyful, restorative school communities.</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <a href="#features" className="transition hover:text-brand-600">
              Features
            </a>
            <a href="#workflow" className="transition hover:text-brand-600">
              Workflow
            </a>
            <a href="#pricing" className="transition hover:text-brand-600">
              Pricing
            </a>
            <a href="mailto:hello@behaviorhub.io" className="transition hover:text-brand-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
