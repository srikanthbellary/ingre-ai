import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Ingre treats label photos and the information you share.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
        Privacy
      </p>
      <h1 className="mt-3 font-display text-4xl font-normal tracking-tight text-graphite">
        Short and plain.
      </h1>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-slate">
        <section>
          <h2 className="font-display text-2xl text-graphite">Photos of labels</h2>
          <p className="mt-3">
            Ingre reads the printed ingredient list on your phone. Those photos
            stay on the device unless you choose an optional extra-help
            feature that needs to send an image.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-graphite">What we do not do</h2>
          <p className="mt-3">
            We do not sell your scans. We do not use label photos to advertise
            products to you. We do not ask for more than the app needs to show
            a verdict and the source behind a flag.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-graphite">If you write to us</h2>
          <p className="mt-3">
            Email sent to {site.supportEmail} is used to answer you. We keep it
            only as long as that conversation needs.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-graphite">Questions</h2>
          <p className="mt-3">
            Write to{" "}
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
