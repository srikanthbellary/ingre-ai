import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-24 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-ink">
        That page is not on the shelf.
      </h1>
      <p className="mt-4 text-base text-stone">
        The link may be old, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-paper hover:bg-ink/90"
      >
        Back to Ingre
      </Link>
    </main>
  );
}
