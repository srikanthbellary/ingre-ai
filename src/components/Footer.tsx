import Link from "next/link";
import { site } from "@/lib/site";
import { ApertureMark } from "./Logo";

export function Footer() {
  return (
    <footer className="section-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="flex items-center gap-3 text-bone">
              <ApertureMark className="h-7 w-7" />
              <span className="font-display text-2xl">Ingre</span>
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gr-300">
              Reads the printed ingredient label. Not the barcode.
            </p>
            <p className="mt-4 inline-block border-b-2 border-ink-soft pb-1 font-display text-lg text-bone">
              {site.domain}
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gr-300"
          >
            <a href="/#how" className="hover:text-bone">
              How it works
            </a>
            <Link href="/privacy/" className="hover:text-bone">
              Privacy
            </Link>
            <Link href="/terms/" className="hover:text-bone">
              Terms
            </Link>
            <a href={`mailto:${site.supportEmail}`} className="ink-link">
              {site.supportEmail}
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gr-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ingre. Android and iOS.</p>
          <p>A product of Sunrise Gen AI</p>
        </div>
      </div>
    </footer>
  );
}
