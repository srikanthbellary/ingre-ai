import Link from "next/link";
import { appHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bone/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Ingre home" className="text-graphite">
          <Logo />
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-4 text-sm text-slate sm:gap-6"
        >
          <a href="/#how" className="hidden hover:text-graphite sm:inline">
            How it works
          </a>
          <Link href="/privacy/" className="hidden hover:text-graphite sm:inline">
            Privacy
          </Link>
          <a
            href={appHref}
            className="inline-flex min-h-10 items-center rounded-full bg-graphite px-4 py-2 text-sm font-medium text-bone hover:bg-graphite-raised"
          >
            Get Ingre
          </a>
        </nav>
      </div>
    </header>
  );
}
