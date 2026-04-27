/** Canonical site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL when you use a custom domain. */
export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "").trim() ||
  "https://focusmagic-portfolio.vercel.app";
