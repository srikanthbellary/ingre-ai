import Link from "next/link";
import { androidHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Ingre home" className="text-ink">
          <Logo />
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-4 text-sm text-stone sm:gap-6"
        >
          <a href="/#how" className="hidden hover:text-ink sm:inline">
            How it works
          </a>
          <Link href="/privacy/" className="hidden hover:text-ink sm:inline">
            Privacy
          </Link>
          <a
            href={androidHref}
            className="inline-flex min-h-10 items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink/90"
          >
            Get on Android
          </a>
        </nav>
      </div>
    </header>
  );
}
