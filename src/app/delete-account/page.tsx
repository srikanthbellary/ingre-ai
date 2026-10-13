import type { Metadata } from "next";
import Link from "next/link";
import {
  appStoreSubscriptionsUrl,
  playSubscriptionsUrl,
  site,
  supportMailto,
} from "@/lib/site";

// Google Play's account deletion page. The app links here from Profile and
// from the Delete account sheet, and the Data safety form lists this URL, so
// it must work for anyone, with or without the app and without signing in.
// What is deleted and kept follows the privacy policy, sections 6 and 7.

const REQUEST_SUBJECT = "Delete my Ingre account";

export const metadata: Metadata = {
  title: "Delete your account",
  description:
    "Delete your Ingre account in the app or by email, and see what is deleted, what is kept, and for how long.",
  alternates: { canonical: `${site.url}/delete-account/` },
};

export default function DeleteAccountPage() {
  return (
    <main id="main" className="doc mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Account deletion</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
        Delete your Ingre account.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-gr-300">
        Ingre is an app by Sunrise Gen AI LLC. You can delete your Ingre
        account and the data tied to it at any time, in the app or by email.
      </p>

      <div className="mt-10 grid gap-6 text-base leading-relaxed text-gr-300">
        <section
          aria-labelledby="in-the-app"
          className="glass glass-strong px-6 py-8 sm:px-8"
        >
          <p className="eyebrow">Fastest</p>
          <h2
            id="in-the-app"
            className="mt-2 font-display text-2xl text-bone"
          >
            In the app
          </h2>
          <ol>
            <li>Open Ingre, signed in to the account you want to delete.</li>
            <li>
              Go to the <strong>Profile</strong> tab.
            </li>
            <li>
              At the bottom, under <strong>Sign Out</strong>, tap{" "}
              <strong>Delete account</strong>.
            </li>
            <li>
              Read what is deleted, then tap <strong>Delete account</strong>{" "}
              again.
            </li>
            <li>
              If Ingre asks, confirm it is you: sign in with Apple or Google
              again, or enter your password or the code texted to your phone.
            </li>
          </ol>
          <p className="mt-4">
            Your account is deleted at once, and Ingre opens Home with
            &quot;Your Ingre account was deleted.&quot; Delete account only
            shows when you are signed in.
          </p>
        </section>

        <section
          aria-labelledby="without-the-app"
          className="glass glass-strong px-6 py-8 sm:px-8"
        >
          <p className="eyebrow">No app needed</p>
          <h2
            id="without-the-app"
            className="mt-2 font-display text-2xl text-bone"
          >
            Without the app
          </h2>
          <p className="mt-3">
            Email{" "}
            <a className="ink-link" href={supportMailto(REQUEST_SUBJECT)}>
              {site.supportEmail}
            </a>{" "}
            with the subject <strong>{REQUEST_SUBJECT}</strong>.
          </p>
          <a
            className="btn btn-primary mt-6"
            href={supportMailto(REQUEST_SUBJECT)}
          >
            Email a deletion request
          </a>
          <ul>
            <li>
              Write from the email address you sign in to Ingre with. With
              Sign in with Apple, write from your Apple ID address, or tell us
              the email shown on your Ingre Profile (it can be a private relay
              address).
            </li>
            <li>If you sign in with a phone number, include the number.</li>
            <li>
              We may ask you to confirm the account is yours. We email you when
              it is deleted.
            </li>
          </ul>
          <p className="mt-4">
            Your scans and photos are stored only on your phone, so an email
            request cannot reach them. Delete them in History, or remove the
            app.
          </p>
        </section>
      </div>

      <div className="glass glass-strong mt-6 px-6 py-8 sm:px-8">
        <div className="space-y-10 text-base leading-relaxed text-gr-300">
          <section aria-labelledby="deleted">
            <h2 id="deleted" className="font-display text-2xl text-bone">
              What is deleted
            </h2>
            <ul>
              <li>
                Your Ingre account and how you sign in (Firebase
                Authentication).
              </li>
              <li>
                On our servers: your plan copy, the scan counts tied to your
                account, rate limits, AI usage records and the AI answer
                reports you sent.
              </li>
              <li>Your subscriber record at RevenueCat, our subscription service.</li>
              <li>
                When you delete in the app, on that phone: your scan history and
                its photos, your saved profile and your AI data sharing choice.
              </li>
            </ul>
          </section>

          <section aria-labelledby="kept">
            <h2 id="kept" className="font-display text-2xl text-bone">
              What is kept, and for how long
            </h2>
            <ul>
              <li>
                <strong>Free scan counts for your device:</strong> kept after
                you delete your account, with no name, email address or phone
                number. These hashed device and install records count free
                scans per device, so deleting and re-creating an account does
                not reset free scans. Your user ID in them is replaced by a
                one-way marker.
              </li>
              <li>
                <strong>Marketing email opt-out:</strong> if you unsubscribed,
                the one-way hash of your email address is kept after you delete
                your account, so we do not email you again.
              </li>
              <li>
                <strong>Analytics:</strong> for the period set in our Google
                Analytics retention setting.
              </li>
              <li>
                <strong>Crash reports:</strong> about 90 days (Crashlytics&apos;
                standard retention).
              </li>
              <li>
                <strong>Server logs:</strong> Google Cloud Logging keeps our
                server logs for 30 days by default; some log lines include your
                user ID.
              </li>
              <li>
                <strong>Purchase records:</strong> Apple and Google keep their
                own.
              </li>
              <li>
                <strong>Support email:</strong> as long as needed to answer you.
              </li>
            </ul>
          </section>

          <section aria-labelledby="subscription">
            <h2 id="subscription" className="font-display text-2xl text-bone">
              Your subscription
            </h2>
            <p className="mt-3">
              Deleting your account does not cancel an App Store or Google Play
              subscription. If you have Premium, cancel it in the store, or it
              keeps renewing.
            </p>
            <ul>
              <li>
                <strong>iPhone:</strong> Settings, your name, Subscriptions, or{" "}
                <a className="ink-link" href={appStoreSubscriptionsUrl}>
                  App Store subscriptions
                </a>
                .
              </li>
              <li>
                <strong>Android:</strong> Google Play, your profile picture,
                Payments &amp; subscriptions, Subscriptions, or{" "}
                <a className="ink-link" href={playSubscriptionsUrl}>
                  Google Play subscriptions
                </a>
                .
              </li>
            </ul>
            <p className="mt-3">
              In the app, <strong>Manage subscription</strong> in the Delete
              account sheet opens your store&apos;s subscription page.
            </p>
          </section>

          <section aria-labelledby="questions">
            <h2 id="questions" className="font-display text-2xl text-bone">
              Questions
            </h2>
            <p className="mt-3">
              Write to{" "}
              <a className="ink-link" href={supportMailto()}>
                {site.supportEmail}
              </a>
              . The{" "}
              <Link className="ink-link" href="/privacy/">
                Privacy Policy
              </Link>{" "}
              has the details.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
