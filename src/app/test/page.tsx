import type { Metadata } from "next";
import { site } from "@/lib/site";

const CLOSED_TESTING_URL =
  "https://play.google.com/apps/testing/com.labelsaber.app";

export const metadata: Metadata = {
  title: "Closed testing",
  description: "Join the Ingre closed test on Google Play.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${site.url}/test/` },
  openGraph: {
    title: "Closed testing · Ingre",
    description: "Join the Ingre closed test on Google Play.",
    url: `${site.url}/test/`,
  },
  twitter: {
    title: "Closed testing · Ingre",
    description: "Join the Ingre closed test on Google Play.",
  },
};

export default function ClosedTestingPage() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] max-w-xl items-center px-5 py-16 sm:px-8"
    >
      {/*
        Static export cannot send an HTTP 302, and GitHub Pages serves the
        generated file at /test/. The meta refresh covers browsers without
        JavaScript. location.replace covers the rest and does not leave this
        page in history.
      */}
      <meta httpEquiv="refresh" content={`0;url=${CLOSED_TESTING_URL}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(CLOSED_TESTING_URL)})`,
        }}
      />
      <section className="glass glass-strong w-full px-6 py-8 sm:px-8">
        <p className="eyebrow">Closed testing</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
          Taking you to Google Play.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gr-300">
          The closed test for Ingre lives on that page. If you are still here,
          continue with the button.
        </p>
        <a className="btn btn-primary mt-6" href={CLOSED_TESTING_URL}>
          Continue to Google Play
        </a>
      </section>
    </main>
  );
}
