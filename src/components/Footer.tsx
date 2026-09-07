import Link from "next/link";
import { site } from "@/lib/site";
import { ApertureMark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="flex items-center gap-3 text-graphite">
              <ApertureMark className="h-7 w-7" />
              <span className="font-display text-2xl">Ingre</span>
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate">
              Reads the printed ingredient label. Not the barcode.
            </p>
            <p className="mt-4 inline-block border-b-2 border-ink pb-1 font-display text-lg text-graphite">
              {site.domain}
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate"
          >
            <a href="/#how" className="hover:text-graphite">
              How it works
            </a>
            <Link href="/privacy/" className="hover:text-graphite">
              Privacy
            </Link>
            <Link href="/terms/" className="hover:text-graphite">
              Terms
            </Link>
            <a href={`mailto:${site.supportEmail}`} className="hover:text-graphite">
              {site.supportEmail}
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ingre. Android and iOS.
          </p>
          <p>A product of Sunrise Gen AI</p>
        </div>
      </div>
    </footer>
  );
}
