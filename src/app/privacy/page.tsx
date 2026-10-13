import type { Metadata } from "next";
import Link from "next/link";
import { site, supportMailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What the Ingre app and its servers collect, why, who else handles it, how long it is kept, and the choices you have.",
  alternates: { canonical: `${site.url}/privacy/` },
};

// Word for word from the policy bundled in the app
// (assets/legal/privacy_policy.md in the Ingre app repo). Change the app's
// copy first, then this page, and keep the date in step.

function SupportEmail() {
  return (
    <a className="ink-link" href={supportMailto()}>
      {site.supportEmail}
    </a>
  );
}

function DeleteAccountUrl() {
  return (
    <Link className="ink-link" href="/delete-account/">
      https://ingre.ai/delete-account
    </Link>
  );
}

export default function PrivacyPage() {
  return (
    <main id="main" className="doc mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-bone">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-gr-400">
        Last updated: <time dateTime="2026-10-11">October 11, 2026</time>
      </p>
      <p className="mt-6 text-lg leading-relaxed text-gr-300">
        Ingre is an app made by Sunrise Gen AI LLC (&quot;Sunrise&quot;,
        &quot;we&quot;, &quot;us&quot;). This policy explains what the Ingre
        app and its servers collect, why, who else handles it, how long it is
        kept, and the choices you have.
      </p>

      <section
        aria-labelledby="in-short"
        className="glass mt-10 px-6 py-6 text-base leading-relaxed text-gr-300 sm:px-8"
      >
        <h2 id="in-short" className="eyebrow">
          In short
        </h2>
        <ul>
          <li>
            Labels are read on your phone. The photos you take and your scan
            history stay on your phone.
          </li>
          <li>
            Premium&apos;s AI read and the Chief Ingredient Analyzer send data
            to Novita AI, a third-party AI provider, only after you allow it in
            the app.
          </li>
          <li>
            We do not sell your data, show ads, or track you across other
            companies&apos; apps or websites.
          </li>
          <li>
            You can delete your account in the app (Profile, Delete account) or
            at <DeleteAccountUrl />.
          </li>
        </ul>
      </section>

      <div className="glass glass-strong mt-6 px-6 py-8 sm:px-8">
        <div className="space-y-10 text-base leading-relaxed text-gr-300">
          <section id="who-we-are">
            <h2 className="font-display text-2xl text-bone">1. Who we are</h2>
            <p className="mt-3">
              The controller of your personal data is Sunrise Gen AI LLC.
              Contact: <SupportEmail />.
            </p>
          </section>

          <section id="on-your-phone">
            <h2 className="font-display text-2xl text-bone">
              2. What stays on your phone
            </h2>
            <ul>
              <li>
                <strong>Scans:</strong> the photos you take or add for a scan,
                the text read from them, the results, and your scan history.
                They are stored in the app&apos;s storage on your phone and are
                not uploaded to our servers. The one exception is the Premium
                AI read, after you allow it (section 4).
              </li>
              <li>
                <strong>Your profile on the phone:</strong> the email address
                or phone number you signed in with, your plan and your scan
                counts.
              </li>
              <li>
                <strong>Settings:</strong> for example your AI data sharing
                choice, the result of the age screen (only whether you passed,
                never your birth month or year) and whether you finished the
                introduction.
              </li>
              <li>
                <strong>The Analyzer chat:</strong> kept in the phone&apos;s
                memory only. It clears when you close the app, sign out or
                delete your account. We do not keep chat transcripts.
              </li>
              <li>
                Your phone&apos;s own backup (iCloud or Google) may include the
                app&apos;s data, under your account and your backup settings.
              </li>
            </ul>
          </section>

          <section id="what-we-collect">
            <h2 className="font-display text-2xl text-bone">
              3. What we collect, and why
            </h2>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.1 Your account
            </h3>
            <p className="mt-3">
              If you create an account, Firebase Authentication (Google) keeps
              your sign-in details: your email address (with email and
              password, Google or Apple; with Apple this can be Apple&apos;s
              private relay address), or your phone number (phone sign-in), and
              a user ID. With Google sign-in, Firebase also stores the name and
              profile photo link that Google provides; Ingre does not use them.
              We use this to sign you in and to keep your plan with your
              account. Ingre never asks for your name.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.2 Fair use of free scans
            </h3>
            <p className="mt-3">
              To keep free scans fair and stop abuse, the app sends our server
              a device identifier (the Android ID on Android; on iOS a random
              identifier kept in the iOS Keychain), a random key created when
              the app is installed, your user ID if you have an account, and
              scan counts with times and request IDs. Our server stores the
              device identifier and the install key only as one-way hashes.
              Scans are counted per device and per account.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.3 Subscriptions
            </h3>
            <p className="mt-3">
              Purchases are made with Apple or Google; we never see your card
              details. RevenueCat manages subscriptions for us and receives
              your Ingre user ID and your store purchase records. Our server
              keeps a copy of your plan and when it ends.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.4 Usage analytics
            </h3>
            <p className="mt-3">
              Firebase Analytics (Google) receives events such as a scan
              started or completed (with counts and the type of read, never
              the text), the Premium offer shown, a purchase completed, a
              sign-up and a sign-in, together with your user ID and your plan.
              Firebase also collects device and app details: device model,
              operating system, app version, language, an app instance ID, and
              an approximate location (country or city) that Google derives
              from your IP address. We use this to see how the app is used and
              to improve it, never for ads.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.5 Crash reports
            </h3>
            <p className="mt-3">
              Firebase Crashlytics (Google) receives crash reports: device and
              operating system details, app version, the technical trace of the
              crash, and your user ID (or &quot;guest&quot;).
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.6 App integrity and settings
            </h3>
            <p className="mt-3">
              Firebase App Check (Play Integrity on Android, DeviceCheck on
              iOS) confirms that requests come from the real Ingre app.
              Firebase Remote Config delivers app settings.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.7 AI usage records
            </h3>
            <p className="mt-3">
              When you use the Premium AI read or the Analyzer, our server
              records your user ID, the AI model used and the number of tokens,
              to apply usage limits and to track costs. It does not store the
              photo, the text or your questions and answers.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.8 Reports you send
            </h3>
            <p className="mt-3">
              If you report an AI answer, we receive the reason you pick, the
              answer text if you choose to include it, the app version and the
              platform, stored under a one-way hash of your user ID. We use
              reports to find and fix bad answers. If the report cannot be sent
              from the app, you can email it instead; then we also receive your
              email address.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">3.9 Support</h3>
            <p className="mt-3">
              If you write to <SupportEmail />, we use your message and email
              address to answer you.
            </p>

            <h3 className="mt-6 font-display text-xl text-bone">
              3.10 Marketing email
            </h3>
            <p className="mt-3">
              Marketing email from Ingre always includes an unsubscribe link.
              If you unsubscribe, we keep a one-way hash of your email address
              so we do not email you again.
            </p>
          </section>

          <section id="ai-features">
            <h2 className="font-display text-2xl text-bone">
              4. AI features and Novita AI
            </h2>
            <ul>
              <li>
                <strong>Free scans use no AI.</strong> The label is read on
                your phone; only scan counts go to our server.
              </li>
              <li>
                <strong>Premium AI read.</strong> After you allow AI data
                sharing, the app sends one photo of the label (the clearest one
                you took) and the text your phone read from your photos to our
                server, which passes them to Novita AI to read the ingredient
                list.
              </li>
              <li>
                <strong>Chief Ingredient Analyzer.</strong> After you allow AI
                data sharing, the app sends your question and up to the last six
                questions and answers of the chat, with our instructions to the
                model, through our server to Novita AI.
              </li>
              <li>
                <strong>Not sent to Novita AI:</strong> your name, email
                address, phone number, user ID or scan history.
              </li>
              <li>
                <strong>Our server</strong> passes the data on and does not
                store the photo, the text, or your questions and answers. It
                keeps the usage records in section 3.7.
              </li>
              <li>
                <strong>Novita AI</strong> processes the data to return the
                answer, under its own terms.
              </li>
              <li>
                <strong>Your choice.</strong> The app asks before the first AI
                read or Analyzer question: Allow or Not now. You can change it
                at any time in Profile, Privacy and legal, AI data sharing.
                Without it, Premium reads labels on your phone and the Analyzer
                stays closed.
              </li>
              <li>
                AI answers can be wrong. Ingre gives general label information,
                not medical advice, and is not a medical device.
              </li>
            </ul>
          </section>

          <section id="sharing">
            <h2 className="font-display text-2xl text-bone">
              5. Who we share data with
            </h2>
            <p className="mt-3">
              We share personal data only with service providers that run parts
              of Ingre for us, and only for that purpose:
            </p>
            <ul>
              <li>
                <strong>Google (Firebase):</strong> Authentication, Cloud
                Firestore (our server&apos;s records), Cloud Functions (our
                server code), Analytics, Crashlytics, App Check and Remote
                Config. Google ML Kit text recognition runs on your phone; under
                Google&apos;s ML Kit terms it may send Google anonymous usage
                and performance data, not your photos or text.
              </li>
              <li>
                <strong>RevenueCat:</strong> subscription management.
              </li>
              <li>
                <strong>Novita AI:</strong> the Premium AI read and the
                Analyzer, only after you allow it (section 4).
              </li>
              <li>
                <strong>Apple and Google:</strong> the App Store and Google
                Play, payments, Sign in with Apple and Google Sign-In.
              </li>
              <li>
                <strong>Resend:</strong> delivery of marketing email (section
                3.10).
              </li>
            </ul>
            <p className="mt-3">
              We do not sell personal data or share it for cross-context
              behavioral advertising. We do not show ads, we do not use
              advertising identifiers, and we do not track you across other
              companies&apos; apps or websites. We may disclose data when the
              law requires it, to protect the rights and safety of people, or
              as part of a merger or sale of the business, under this policy.
            </p>
          </section>

          <section id="retention">
            <h2 className="font-display text-2xl text-bone">
              6. How long we keep data
            </h2>
            <ul>
              <li>
                <strong>On your phone:</strong> until you delete it (for example
                scan history), delete your account, or remove the app.
              </li>
              <li>
                <strong>Your account,</strong> its plan copy, the scan counts
                tied to it, rate limits, AI usage records and your reports:
                until you delete your account.
              </li>
              <li>
                <strong>
                  Kept after you delete your account, with no name, email
                  address or phone number:
                </strong>{" "}
                the hashed device and install records that count free scans per
                device (otherwise deleting and re-creating an account would
                reset free scans; your user ID in them is replaced by a one-way
                marker), and, if you unsubscribed from marketing email, the
                one-way hash of your email address.
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
                <strong>RevenueCat:</strong> until you delete your account.
                Apple and Google keep their own purchase records.
              </li>
              <li>
                <strong>Support email:</strong> as long as needed to answer you.
              </li>
            </ul>
          </section>

          <section id="choices">
            <h2 className="font-display text-2xl text-bone">7. Your choices</h2>
            <ul>
              <li>
                <strong>Delete your account:</strong> in the app, Profile,
                Delete account. Without the app: <DeleteAccountUrl />.
              </li>
              <li>
                <strong>AI data sharing:</strong> on or off in Profile, Privacy
                and legal.
              </li>
              <li>
                <strong>Access, correction or a copy of your data:</strong>{" "}
                email <SupportEmail /> from the email address on your account.
              </li>
              <li>
                <strong>Subscriptions:</strong> manage or cancel in the App
                Store or Google Play. Deleting your account does not cancel a
                subscription.
              </li>
              <li>
                <strong>Marketing email:</strong> use the unsubscribe link in
                any marketing email.
              </li>
            </ul>
          </section>

          <section id="rights">
            <h2 className="font-display text-2xl text-bone">
              8. Your rights where you live
            </h2>
            <p className="mt-3">
              Depending on where you live (for example the EEA, the UK or
              California), you may have the right to access, correct, delete
              or receive a copy of your personal data, and to object to or
              restrict some processing. Where the GDPR applies, we rely on: the
              contract with you to provide Ingre and your plan; your consent
              for AI data sharing and marketing email (you can withdraw it at
              any time); and our legitimate interests in fair use limits,
              security, crash reporting and understanding how the app is used.
              To use your rights, email <SupportEmail />. You may also complain
              to your local data protection authority. We will not treat you
              differently for using your rights.
            </p>
          </section>

          <section id="children">
            <h2 className="font-display text-2xl text-bone">9. Children</h2>
            <p className="mt-3">
              Ingre is not for children under 13. The app asks for a birth
              month and year before an account can be created and does not let
              anyone under 13 continue; it keeps only the result, never the
              date. If we learn that an account belongs to a child under 13, we
              delete it.
            </p>
          </section>

          <section id="security">
            <h2 className="font-display text-2xl text-bone">10. Security</h2>
            <p className="mt-3">
              Data travels encrypted (HTTPS). Our server&apos;s records in
              Cloud Firestore refuse direct access from apps; only our server
              functions read and write them. AI provider keys stay on our
              server. Device identifiers and install keys are stored as one-way
              hashes. Firebase App Check helps make sure requests come from the
              real app. No system is perfectly secure.
            </p>
          </section>

          <section id="processing">
            <h2 className="font-display text-2xl text-bone">
              11. Where data is processed
            </h2>
            <p className="mt-3">
              Our server functions and records run on Google Cloud in the
              United States (us-central1). RevenueCat and Novita AI process
              data on their own infrastructure. If you use Ingre outside the
              United States, your data is processed in the United States.
            </p>
          </section>

          <section id="changes">
            <h2 className="font-display text-2xl text-bone">
              12. Changes to this policy
            </h2>
            <p className="mt-3">
              We will update the date above when this policy changes, and tell
              you in the app before material changes take effect.
            </p>
          </section>

          <section id="contact">
            <h2 className="font-display text-2xl text-bone">13. Contact</h2>
            <address className="mt-3 not-italic">
              <SupportEmail />
              <br />
              Sunrise Gen AI LLC
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
