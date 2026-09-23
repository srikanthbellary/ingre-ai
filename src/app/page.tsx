import Image from "next/image";
import { appHref, site } from "@/lib/site";
import { FigurePlate } from "@/components/FigurePlate";
import { LabelScanner } from "@/components/LabelScanner";
import { ApertureMark } from "@/components/Logo";
import { Rise } from "@/components/Rise";
import { ScanSchematic } from "@/components/ScanSchematic";

const steps = [
  {
    n: "01",
    title: "Photograph the ingredients",
    body: "Open the camera on the printed list. The words on the package, not the barcode.",
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
    chip: "chip-clear",
    body: "Nothing on the published lists we check for this scan.",
  },
  {
    label: "Caution",
    chip: "chip-caution",
    body: "Something worth a closer look before it goes in the cart.",
  },
  {
    label: "Avoid",
    chip: "chip-avoid",
    body: "Flagged on a list you can open and read.",
  },
];

const keeps = [
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
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-28 lg:pt-16">
        <div>
          <Rise>
            <p className="eyebrow">Food · beauty · personal care</p>
          </Rise>
          <Rise delay={70}>
            <h1 className="mt-4 max-w-xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-6xl">
              It reads the label.
              <span className="mt-1 block text-gr-300">Not the barcode.</span>
            </h1>
          </Rise>
          <Rise delay={140}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gr-300">
              Ingre photographs the printed ingredient list. If the words are on
              the package, it can read them, including products no catalog has
              listed yet.
            </p>
          </Rise>
          <Rise delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={appHref} className="btn btn-primary sm:self-start">
                Get Ingre
              </a>
              <p className="text-sm text-gr-400 sm:pl-2">
                Android and iOS. A few scans free.
              </p>
            </div>
          </Rise>
        </div>

        <Rise delay={80}>
          <FigurePlate
            kicker="Fig. 01 · Label scan"
            note="Illustrative scan · Android and iOS"
            tone="graphite"
          >
            <div className="p-4 sm:p-5">
              <LabelScanner />
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.11em] text-gr-400">
                Point the camera at the ingredients, not the barcode.
              </p>
            </div>
          </FigurePlate>
        </Rise>
      </section>

      <section className="section-rule">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <Rise>
            <p className="eyebrow">Why Ingre</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-bone sm:text-4xl">
              Catalogs miss the product in your hand.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-gr-300">
              <p>
                Most scanners look up a known barcode. If the item is new,
                imported, private-label, or simply missing, you get nothing.
              </p>
              <p>
                Ingre starts with the label. It reads the printed ingredients on
                food, beauty, and personal care, the same list you would read
                under the store lights.
              </p>
            </div>
          </Rise>
          <Rise delay={90}>
            <figure className="still-plate glass">
              <Image
                src="/images/label-still.jpg"
                alt="A printed ingredient label on grocery paper"
                width={1280}
                height={853}
                priority
              />
              <figcaption className="px-5 py-3 text-sm">
                The printed list. The product in your hand.
              </figcaption>
            </figure>
          </Rise>
        </div>
      </section>

      <section id="how" className="section-rule">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <Rise>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-bone sm:text-4xl">
              Three steps in the aisle.
            </h2>
          </Rise>

          <Rise delay={80} className="mt-12">
            <FigurePlate
              kicker="Fig. 02 · Scan, parse, flag, call"
              note="Food and beauty labels · Android and iOS"
            >
              <ScanSchematic />
            </FigurePlate>
          </Rise>

          <ol className="station-rail ambient-stage mt-10">
            {steps.map((step, i) => (
              <Rise key={step.n} as="li" delay={i * 70} className="glass">
                <p className="font-mono text-[11px] tracking-[0.1em] text-ink-soft">
                  {step.n}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gr-300">
                  {step.body}
                </p>
              </Rise>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <Rise>
            <p className="eyebrow">The verdict</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-bone sm:text-4xl">
              Clear, caution, or avoid.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gr-300">
              A short read you can use before the item goes in the cart. Not a
              diagnosis. A flag against published lists, with the source
              attached.
            </p>
          </Rise>
          <Rise delay={80} className="ambient-stage mt-12 p-3 sm:p-4">
            <div className="verdict-lanes glass">
              {verdicts.map((item) => (
                <article key={item.label} className="verdict-lane">
                  <span className={`chip ${item.chip}`}>{item.label}</span>
                  <p className="mt-5 text-base leading-relaxed text-gr-300">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </Rise>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <Rise>
              <p className="eyebrow">What stays on the phone</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-bone sm:text-4xl">
                Your photos stay with you.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gr-300">
                Label photos remain on the phone unless you choose an optional
                extra-help feature. A few free scans to start. Sources are there
                to check. We do not ask you to take our word for a flag.
              </p>
            </Rise>
            <ul className="ambient-stage grid gap-4 p-4">
              {keeps.map((item, i) => (
                <Rise key={item.title} as="li" delay={i * 70}>
                  <div className="glass px-6 py-5">
                    <h3 className="font-display text-xl text-bone">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gr-300">
                      {item.body}
                    </p>
                  </div>
                </Rise>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="get" className="section-rule">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Rise>
            <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight text-bone sm:text-5xl">
              Take the label with you.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gr-300">
              Point the camera at the printed ingredient list, read the verdict,
              and open the list a flag came from. Food, beauty, and personal
              care, on Android and iOS.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={appHref} className="btn btn-primary sm:self-start">
                Get Ingre
              </a>
              <p className="text-sm text-gr-400">
                Android and iOS. A few scans free.
              </p>
            </div>
          </Rise>
          <Rise delay={90} className="justify-self-center lg:justify-self-end">
            <div className="flex flex-col items-center gap-6 text-bone">
              <div className="glass-disc">
                <ApertureMark className="h-16 w-16 text-bone" />
              </div>
              <span className="border-b-2 border-ink-soft pb-2 font-display text-2xl">
                {site.domain}
              </span>
            </div>
          </Rise>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <p className="max-w-3xl text-sm leading-relaxed text-gr-400">
            Ingre is an informational tool. It is not medical advice, a diagnosis,
            or a substitute for reading the package yourself or talking with a
            qualified professional. Questions:{" "}
            <a className="ink-link" href={`mailto:${site.supportEmail}`}>
              {site.supportEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
