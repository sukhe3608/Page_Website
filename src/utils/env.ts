export const isBot =
  typeof navigator !== "undefined" &&
  /HeadlessChrome|Googlebot|bingbot|bot\b|crawl|spider|preview/i.test(navigator.userAgent);

export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
