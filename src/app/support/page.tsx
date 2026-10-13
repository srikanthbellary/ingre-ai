import type { Metadata } from "next";
import Link from "next/link";
import {
  appStoreSubscriptionsUrl,
  playSubscriptionsUrl,
  site,
  supportMailto,
} from "@/lib/site";

// The App Store support URL. Every in-app path below matches the app: the
// Profile tab, its Settings screen (gear icon), and their row labels.

// The subject the app's Contact Support row uses.
const SUPPORT_SUBJECT = "Ingre Support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact Ingre support. Manage or restore a subscription, delete your account, or turn off AI data sharing.",
  alternates: { canonical: `${site.url}/support/` },
};

export default function SupportPage() {
  return (
    <main id="main" className="doc mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Support</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
        Help with Ingre.
      </h1>

      <section
        aria-labelledby="contact"
        className="glass glass-strong mt-10 px-6 py-8 text-base leading-relaxed text-gr-300 sm:px-8"
      >
        <h2 id="contact" className="font-display text-2xl text-bone">
          Contact
        </h2>
        <p className="mt-3">
          Email{" "}
          <a className="ink-link" href={supportMailto(SUPPORT_SUBJECT)}>
            {site.supportEmail}
          </a>
          . Tell us your phone model and the app version. If you are signed in,
          the version is in Profile, Settings (the gear icon), About.
        </p>
        <a
          className="btn btn-primary mt-6"
          href={supportMailto(SUPPORT_SUBJECT)}
        >
          Email support
        </a>
      </section>

      <div className="glass glass-strong mt-6 px-6 py-8 sm:px-8">
        <div className="space-y-10 text-base leading-relaxed text-gr-300">
          <section aria-labelledby="subscriptions">
            <h2 id="subscriptions" className="font-display text-2xl text-bone">
              Subscriptions
            </h2>

            <h3 className="mt-6 font-display text-xl text-bone">
              How do I manage or cancel Premium?
            </h3>
            <p className="mt-3">
              Premium renews each month or year until you cancel. Manage or
              cancel it in the store you bought it from:
            </p>
            <ul>
              <li>
                <strong>App Store:</strong> on iPhone, Settings, your name,
                Subscriptions, or{" "}
                <a className="ink-link" href={appStoreSubscriptionsUrl}>
                  App Store subscriptions
                </a>
                .
              </li>
              <li>
                <strong>Google Play:</strong> in Google Play, your profile
                picture, Payments &amp; subscriptions, Subscriptions, or{" "}
                <a className="ink-link" href={playSubscriptionsUrl}>
                  Google Play subscriptions
                </a>
                .
              </li>
            </ul>
            <p className="mt-3">
              A cancellation takes effect at the end of the current billing
              period. Refunds are handled by Apple or Google under their own
              policies.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              How do I restore a purchase?
            </h3>
            <p className="mt-3">
              Sign in to Ingre with the account you bought Premium on, then
              tap Profile, <strong>Restore Purchases</strong>. The phone must
              use the same App Store or Google Play account that made the
              purchase.
            </p>
          </section>

          <section aria-labelledby="account">
            <h2 id="account" className="font-display text-2xl text-bone">
              Your account
            </h2>

            <h3 className="mt-6 font-display text-xl text-bone">
              How do I delete my account?
            </h3>
            <p className="mt-3">
              In the app: Profile, <strong>Delete account</strong>, at the
              bottom under Sign Out. Without the app, or to see what is deleted
              and what is kept:{" "}
              <Link className="ink-link" href="/delete-account/">
                Delete your Ingre account
              </Link>
              . Deleting your account does not cancel a subscription.
            </p>
          </section>

          <section aria-labelledby="ai-data">
            <h2 id="ai-data" className="font-display text-2xl text-bone">
              AI features and your data
            </h2>

            <h3 className="mt-6 font-display text-xl text-bone">
              How do I turn off AI data sharing?
            </h3>
            <p className="mt-3">
              In the app: Profile, Privacy and legal,{" "}
              <strong>AI data sharing</strong>. Turn the switch off. It takes
              effect at once, and nothing more is sent to Novita AI. With it
              off, Premium reads labels on your phone and the Analyzer stays
              closed. Turn it back on with the same switch.
            </p>
            <p className="mt-3">
              The{" "}
              <Link className="ink-link" href="/privacy/">
                Privacy Policy
              </Link>{" "}
              lists what the AI features send and who receives it.
            </p>
          </section>
        </div>
      </div>

      <p className="mt-10 text-sm leading-relaxed text-gr-400">
        General label information, not medical advice. Ingre is not a medical
        device. For health questions, ask a doctor or pharmacist.
      </p>
    </main>
  );
}
