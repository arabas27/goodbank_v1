import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-6 py-16">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
          Coming soon
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-slate-900">BehaviorHub sign-in</h1>
        <p className="mt-4 text-base text-muted">
          We’re putting the finishing touches on the educator portal. In the meantime, reach out to our team and we’ll get your
          school onboarded.
        </p>
        <a
          href="mailto:hello@behaviorhub.io"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700"
        >
          Contact support
        </a>
        <Link
          to="/"
          className="mt-6 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          ← Back to marketing site
        </Link>
      </div>
    </main>
  )
}
