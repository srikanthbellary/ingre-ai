import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "How to use Ingre, in plain language.",
};

export default function TermsPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Terms</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
        Use Ingre as a reader, not a doctor.
      </h1>
      <div className="glass glass-strong mt-10 px-6 py-8 sm:px-8">
        <div className="space-y-8 text-base leading-relaxed text-gr-300">
          <section>
            <h2 className="font-display text-2xl text-bone">What the app is</h2>
            <p className="mt-3">
              Ingre is a mobile app that reads printed ingredient labels on food,
              beauty, and personal care products and flags names against published
              government and regulatory lists. It is an informational tool.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-bone">What it is not</h2>
            <p className="mt-3">
              Ingre is not medical advice, a diagnosis, or a guarantee that a
              product is safe for you. Always read the package. If you have a
              health question, talk with a qualified professional.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-bone">The store listing</h2>
            <p className="mt-3">
              Ingre is distributed for Android and iOS. A few scans are free to
              start. The terms of the app store you download from also apply.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-bone">Contact</h2>
            <p className="mt-3">
              Questions about these terms:{" "}
              <a className="ink-link" href={`mailto:${site.supportEmail}`}>
                {site.supportEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
