export const site = {
  name: "Ingre",
  domain: "ingre.ai",
  url: "https://ingre.ai",
  supportEmail: "support@ingre.ai",
  description:
    "Ingre reads the printed ingredient label on food, beauty, and personal care products — including ones no catalog has listed yet.",
  storeUrl: null as string | null,
};

export const appHref = site.storeUrl ?? "/#get";
