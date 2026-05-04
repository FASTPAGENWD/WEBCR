/** Canonieke site-URL voor metadata, sitemap en structured data. Override met NEXT_PUBLIC_SITE_URL. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rc-webcreation.nl"
).replace(/\/$/, "");
