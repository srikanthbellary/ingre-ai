import type { Metadata } from "next";
import Link from "next/link";
import { site, supportMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the Ingre app: the service, subscriptions, fair use, AI features, and your account.",
  alternates: { canonical: `${site.url}/terms/` },
};

// Word for word from the Terms bundled in the app
// (assets/legal/terms_of_service.md in the Ingre app repo). Change the app's
// copy first, then this page, and keep the date in step.

const APPLE_EULA_URL =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export default function TermsPage() {
  return (
    <main id="main" className="doc mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Terms</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-gr-400">
        Last updated: <time dateTime="2026-10-12">October 12, 2026</time>
      </p>

      <aside className="glass mt-8 px-6 py-5 text-sm leading-relaxed text-gr-300 sm:px-8">
        This document is a working draft and should be reviewed by qualified
        legal counsel before public launch.
      </aside>

      <p className="mt-8 text-lg leading-relaxed text-gr-300">
        By downloading or using the Ingre mobile application (&quot;Ingre&quot;,
        &quot;the app&quot;), you agree to these Terms of Service. If you do not
        agree, do not use the app.
      </p>

      <div className="glass glass-strong mt-10 px-6 py-8 sm:px-8">
        <div className="space-y-10 text-base leading-relaxed text-gr-300">
          <section id="service">
            <h2 className="font-display text-2xl text-bone">1. The service</h2>
            <p className="mt-3">
              Ingre scans the printed ingredient label on food and cosmetic
              products and provides educational information about what
              regulators and health authorities have published about each
              ingredient (for example authorization status, restrictions and
              official classifications), drawing on publicly available
              regulatory sources and AI analysis. Ingre does not rate products.
            </p>
          </section>

          <section id="not-advice">
            <h2 className="font-display text-2xl text-bone">
              2. Educational purpose, not medical or professional advice
            </h2>
            <p className="mt-3">
              The information Ingre provides is for{" "}
              <strong>general educational purposes only</strong>. It is{" "}
              <strong>not</strong> medical, health, legal, or professional
              advice, Ingre is <strong>not</strong> a medical device, and it is{" "}
              <strong>not</strong> affiliated with or endorsed by any government
              or regulatory body. Ingre does not diagnose, treat, cure, or
              prevent any medical condition. Always consult a qualified
              professional before making health decisions. Ingredient
              identification and regulatory information may be incomplete or
              not fully current; verify critical details independently. Answers
              from the AI read and the Chief Ingredient Analyzer can be wrong;
              use Report in the app to tell us about a bad answer.
            </p>
          </section>

          <section id="eligibility">
            <h2 className="font-display text-2xl text-bone">
              3. Eligibility and accounts
            </h2>
            <p className="mt-3">
              You must be at least 13 years old (or the minimum age in your
              country) to use the app. You are responsible for activity under
              your account and for keeping your credentials secure.
            </p>
          </section>

          <section id="subscriptions">
            <h2 className="font-display text-2xl text-bone">
              4. Subscriptions and billing
            </h2>
            <ul>
              <li>
                Ingre offers free scans and one paid subscription, Premium
                (monthly or yearly).
              </li>
              <li>
                Paid subscriptions are billed through the Google Play Store /
                Apple App Store and <strong>auto-renew</strong> until cancelled.
                Manage or cancel anytime in your app store account; cancellation
                takes effect at the end of the current billing period.
              </li>
              <li>
                Pricing is shown in-app at purchase and may vary by region.
                Refunds are governed by the applicable app store&apos;s
                policies.
              </li>
            </ul>
          </section>

          <section id="fair-use">
            <h2 className="font-display text-2xl text-bone">5. Fair use</h2>
            <p className="mt-3">
              To keep the service fast, affordable, and available to everyone,
              all scanning, including on paid plans, is subject to a fair use
              policy. Reasonable usage limits (which may include daily limits)
              apply to prevent automated abuse and protect service quality.
              Accounts engaging in abusive or automated usage may be
              rate-limited or suspended. Free-scan limits are tracked per device
              and cannot be reset by reinstalling or creating new accounts.
            </p>
          </section>

          <section id="ai-features">
            <h2 className="font-display text-2xl text-bone">5a. AI features</h2>
            <p className="mt-3">
              The Premium AI read and the Chief Ingredient Analyzer use a
              third-party AI provider, Novita AI, and send it data only after
              you allow AI data sharing in the app. You can turn it off at any
              time in Profile. The{" "}
              <Link className="ink-link" href="/privacy/">
                Privacy Policy
              </Link>{" "}
              explains what is sent.
            </p>
          </section>

          <section id="acceptable-use">
            <h2 className="font-display text-2xl text-bone">
              6. Acceptable use
            </h2>
            <p className="mt-3">
              You agree not to: reverse engineer, decompile, or extract the app
              or its content; use bots or automation to access the service;
              resell or redistribute the service; or use the app for any
              unlawful purpose.
            </p>
          </section>

          <section id="intellectual-property">
            <h2 className="font-display text-2xl text-bone">
              7. Intellectual property
            </h2>
            <p className="mt-3">
              The app, its design, and its proprietary content are owned by
              Ingre and protected by law. These Terms grant you a limited,
              personal, non-transferable licence to use the app; no other rights
              are granted.
            </p>
          </section>

          <section id="liability">
            <h2 className="font-display text-2xl text-bone">
              8. Disclaimer of warranties and limitation of liability
            </h2>
            <p className="mt-3">
              The app is provided &quot;as is&quot; without warranties of any
              kind. To the maximum extent permitted by law, Ingre is not liable
              for any decisions, damages, or losses (financial, emotional, or
              physical) resulting from use of the app, including reliance on
              inaccurate or incomplete information.
            </p>
          </section>

          <section id="termination">
            <h2 className="font-display text-2xl text-bone">
              9. Termination and account deletion
            </h2>
            <p className="mt-3">
              We may suspend or terminate access for violation of these Terms.
              You may stop using the app at any time, and delete your account in
              the app (Profile, Delete account) or at{" "}
              <Link className="ink-link" href="/delete-account/">
                ingre.ai/delete-account
              </Link>
              . Deleting your account does not cancel an app store
              subscription; cancel it in the App Store or Google Play.
            </p>
          </section>

          <section id="app-store">
            <h2 className="font-display text-2xl text-bone">
              9a. App Store terms
            </h2>
            <p className="mt-3">
              If you downloaded Ingre from the Apple App Store, Apple&apos;s
              Licensed Application End User License Agreement (the standard
              EULA) also applies:{" "}
              <a className="ink-link break-all" href={APPLE_EULA_URL}>
                {APPLE_EULA_URL}
              </a>
              . If these Terms and that agreement conflict about your licence to
              use the app, the Apple agreement wins. If you downloaded Ingre
              from Google Play, the Google Play Terms of Service also apply.
            </p>
          </section>

          <section id="changes">
            <h2 className="font-display text-2xl text-bone">
              10. Changes and governing law
            </h2>
            <p className="mt-3">
              We may update these Terms; material changes are reflected by the
              &quot;Last updated&quot; date. Governing law will be specified
              prior to public launch.
            </p>
          </section>

          <section id="contact">
            <h2 className="font-display text-2xl text-bone">11. Contact</h2>
            <p className="mt-3">
              Questions about these Terms:{" "}
              <strong>
                <a className="ink-link" href={supportMailto()}>
                  {site.supportEmail}
                </a>
              </strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
