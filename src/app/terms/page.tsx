import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "How to use Ingre, in plain language.",
};

export default function TermsPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
        Terms
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-ink">
        Use Ingre as a reader, not a doctor.
      </h1>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-stone">
        <section>
          <h2 className="font-display text-2xl text-ink">What the app is</h2>
          <p className="mt-3">
            Ingre is a mobile app that reads printed ingredient labels on food,
            beauty, and personal care products and flags names against published
            government and regulatory lists. It is an informational tool.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">What it is not</h2>
          <p className="mt-3">
            Ingre is not medical advice, a diagnosis, or a guarantee that a
            product is safe for you. Always read the package. If you have a
            health question, talk with a qualified professional.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">The store listing</h2>
          <p className="mt-3">
            Ingre is available on Android. iOS is coming and is not available
            yet. A few scans are free to start. Store terms from Google apply
            when you download the app.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-ink">Contact</h2>
          <p className="mt-3">
            Questions about these terms:{" "}
            <a
              className="text-ink underline decoration-line underline-offset-4"
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
