export const site = {
  name: "Ingre",
  domain: "ingre.ai",
  url: "https://ingre.ai",
  supportEmail: "support@ingre.ai",
  companyName: "Sunrise Gen AI LLC",
  companyEmail: "support@sunrisegenai.com",
  phone: "+1 857-382-3733",
  phoneHref: "tel:+18573823733",
  mailingAddress: ["PO Box 211056", "Royal Palm Beach, FL 33421"],
  description:
    "Ingre reads the printed ingredient label on food, beauty, and personal care products, including ones no catalog has listed yet.",
  storeUrl: null as string | null,
};

export const appHref = site.storeUrl ?? "/#get";

/** A mailto link to the support address, with an optional subject line. */
export function supportMailto(subject?: string) {
  const to = `mailto:${site.supportEmail}`;
  return subject ? `${to}?subject=${encodeURIComponent(subject)}` : to;
}

/**
 * The store pages that list a person's subscriptions. The app opens the same
 * two when RevenueCat has no management link.
 */
export const appStoreSubscriptionsUrl =
  "https://apps.apple.com/account/subscriptions";
export const playSubscriptionsUrl =
  "https://play.google.com/store/account/subscriptions";
