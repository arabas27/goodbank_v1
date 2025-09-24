import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-700">
          404
        </span>
        <h1 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="text-base text-muted">
          The page you're looking for doesn't exist. Return to the dashboard to keep building positive student culture.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
