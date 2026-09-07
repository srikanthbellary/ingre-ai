import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "How to use Ingre, in plain language.",
};

export default function TermsPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
        Terms
      </p>
      <h1 className="mt-3 font-display text-4xl font-normal tracking-tight text-graphite">
        Use Ingre as a reader, not a doctor.
      </h1>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-slate">
        <section>
          <h2 className="font-display text-2xl text-graphite">What the app is</h2>
          <p className="mt-3">
            Ingre is a mobile app that reads printed ingredient labels on food,
            beauty, and personal care products and flags names against published
            government and regulatory lists. It is an informational tool.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-graphite">What it is not</h2>
          <p className="mt-3">
            Ingre is not medical advice, a diagnosis, or a guarantee that a
            product is safe for you. Always read the package. If you have a
            health question, talk with a qualified professional.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-graphite">The store listing</h2>
          <p className="mt-3">
            Ingre is distributed for Android and iOS. A few scans are free to
            start. The terms of the app store you download from also apply.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-graphite">Contact</h2>
          <p className="mt-3">
            Questions about these terms:{" "}
            <a
              className="text-graphite underline decoration-ink decoration-2 underline-offset-4"
              href={`mailto:${site.supportEmail}`}
            >
              {site.supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
