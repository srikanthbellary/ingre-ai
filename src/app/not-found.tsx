import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-24 sm:px-8">
      <div className="glass glass-strong px-6 py-10 sm:px-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
          That page is not on the shelf.
        </h1>
        <p className="mt-4 text-base text-gr-300">
          The link may be old, or the page may have moved.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to Ingre
        </Link>
      </div>
    </main>
  );
}
