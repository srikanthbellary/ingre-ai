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

/** Ingre's live Google Play listing. The QR code in public/assets encodes this exact URL. */
export const playStoreUrl =
  "https://play.google.com/store/apps/details?id=ai.ingre.app";

/** Ingre's live iPhone App Store listing. */
export const appStoreUrl = "https://apps.apple.com/us/app/id6822124463";

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
