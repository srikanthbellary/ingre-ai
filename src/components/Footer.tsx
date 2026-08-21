import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-2xl text-ink">Ingre</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone">
              Reads the printed ingredient label. Not the barcode.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone"
          >
            <a href="/#how" className="hover:text-ink">
              How it works
            </a>
            <Link href="/privacy/" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms/" className="hover:text-ink">
              Terms
            </Link>
            <a
              href={`mailto:${site.supportEmail}`}
              className="hover:text-ink"
            >
              {site.supportEmail}
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-xs text-stone/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ingre. {site.domain}</p>
          <p>A product of Sunrise Gen AI</p>
        </div>
      </div>
    </footer>
  );
}
