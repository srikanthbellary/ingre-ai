import Link from "next/link";
import { appHref } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="glass glass-chrome glass-strong mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
        <Link href="/" aria-label="Ingre home" className="text-bone">
          <Logo />
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-4 text-sm text-gr-300 sm:gap-6"
        >
          <a href="/#how" className="hidden hover:text-bone sm:inline">
            How it works
          </a>
          <Link href="/privacy/" className="hidden hover:text-bone sm:inline">
            Privacy
          </Link>
          <a href={appHref} className="btn btn-primary btn-sm">
            Get Ingre
          </a>
        </nav>
      </div>
    </header>
  );
}
