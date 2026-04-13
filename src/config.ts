const siteVariant = (import.meta.env.VITE_SITE_VARIANT ?? 'production').toLowerCase();

export const isPrototypeVariant = siteVariant === 'prototype';

export const showPrototypeBanner =
  import.meta.env.VITE_SHOW_PROTOTYPE_BANNER === 'true' ||
  (import.meta.env.VITE_SHOW_PROTOTYPE_BANNER == null && isPrototypeVariant);

export const enablePrototypePage =
  import.meta.env.VITE_ENABLE_PROTOTYPE_PAGE === 'true' ||
  (import.meta.env.VITE_ENABLE_PROTOTYPE_PAGE == null && isPrototypeVariant);
