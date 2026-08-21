import Image from "next/image";
import { androidHref, site } from "@/lib/site";
import { PhoneVerdict } from "@/components/PhoneVerdict";

const steps = [
  {
    n: "01",
    title: "Photograph the ingredients",
    body: "Open the camera on the printed list — the words on the package, not the barcode.",
  },
  {
    n: "02",
    title: "See what was flagged",
    body: "Ingre checks those names against published government and regulatory lists.",
  },
  {
    n: "03",
    title: "Open the source",
    body: "Every flag points to the list it came from, so you can read it yourself.",
  },
];

const verdicts = [
  {
    label: "Clear",
    color: "text-clear",
    bar: "bg-clear",
    body: "Nothing on the published lists we check for this scan.",
  },
  {
    label: "Caution",
    color: "text-caution",
    bar: "bg-caution",
    body: "Something worth a closer look before it goes in the cart.",
  },
  {
    label: "Avoid",
    color: "text-flag-ink",
    bar: "bg-flag",
    body: "Flagged on a list you can open and read.",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-40 lg:pt-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
            Food · beauty · personal care
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl">
            It reads the label.
            <span className="block">Not the barcode.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">
            Ingre photographs the printed ingredient list. If the words are on
            the package, it can read them — including products no catalog has
            listed yet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={androidHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-base font-medium text-paper hover:bg-ink/90"
            >
              Get on Android
            </a>
            <p className="text-sm text-stone sm:pl-2">
              On Google Play. iOS is coming.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-md lg:max-w-none">
          <figure className="overflow-hidden rounded-[1.6rem] border border-line bg-card shadow-still">
            <Image
              src="/images/label-still.jpg"
              alt="A printed ingredient label on grocery paper"
              width={1280}
              height={853}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
            <figcaption className="border-t border-line px-5 py-3 text-sm text-stone">
              Point the camera at the ingredients — not the barcode.
            </figcaption>
          </figure>
          <div className="relative z-10 mx-auto -mt-20 w-fit lg:absolute lg:bottom-2 lg:right-4 lg:mx-0 lg:mt-0">
            <PhoneVerdict />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
              Why Ingre
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Catalogs miss the product in your hand.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-stone">
            <p>
              Most scanners look up a known barcode. If the item is new,
              imported, private-label, or simply missing, you get nothing.
            </p>
            <p>
              Ingre starts with the label. It reads the printed ingredients on
              food, beauty, and personal care — the same list you would read
              under the store lights.
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Three steps in the aisle.
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-line bg-card px-6 py-7"
            >
              <p className="font-display text-sm text-flag">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-card/70">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
            The verdict
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Clear, caution, or avoid.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
            A short read you can use before the item goes in the cart. Not a
            diagnosis — a flag against published lists, with the source attached.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {verdicts.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-line bg-paper px-6 py-7"
              >
                <span className={`block h-1 w-10 rounded-full ${item.bar}`} />
                <h3
                  className={`mt-5 font-display text-2xl tracking-tight ${item.color}`}
                >
                  {item.label}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone">
              What stays on the phone
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Your photos stay with you.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone">
              Label photos remain on the phone unless you choose an optional
              extra-help feature. A few free scans to start. Sources are there
              to check — we do not ask you to take our word for a flag.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              {
                title: "Food, beauty, personal care",
                body: "One reader for the packages that already print an ingredient list.",
              },
              {
                title: "Lists you can open",
                body: "Flags are matched to published government and regulatory sources.",
              },
              {
                title: "A few scans free",
                body: "Try it in the aisle before you decide if it belongs on your phone.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-card px-6 py-5"
              >
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="get"
        className="border-t border-line bg-ink text-paper"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="max-w-xl font-display text-3xl tracking-tight sm:text-5xl">
            Take the label with you.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75">
            Ingre is on Android. Get it on Google Play, try a few scans, and
            leave the barcode catalog for products that are already in one.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={androidHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-6 text-base font-medium text-ink hover:bg-paper/90"
            >
              Get on Android
            </a>
            <p className="text-sm text-paper/65">iOS is coming. Not available yet.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <p className="max-w-3xl text-sm leading-relaxed text-stone">
          Ingre is an informational tool. It is not medical advice, a diagnosis,
          or a substitute for reading the package yourself or talking with a
          qualified professional. Questions:{" "}
          <a className="underline decoration-line underline-offset-4 hover:text-ink" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
