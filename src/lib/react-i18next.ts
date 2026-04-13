import { useEffect, useState } from 'react';
import i18n from 'i18next';

export const initReactI18next = {
  type: '3rdParty' as const,
  init() {
    // no-op in this lightweight compatibility layer
  },
};

export function useTranslation() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const listener = () => forceUpdate((value) => value + 1);
    i18n.on('languageChanged', listener);

    return () => {
      i18n.off('languageChanged', listener);
    };
  }, []);

  type TranslationValue = ReturnType<typeof i18n.t>;

  const t: {
    (key: string): string;
    (key: string, defaultValue: string): string;
    (key: string, options: { returnObjects: true; [k: string]: unknown }): TranslationValue;
  } = (key: string, optionsOrDefault?: string | { returnObjects?: boolean; [k: string]: unknown }) =>
    i18n.t(key, optionsOrDefault as string);

  return { t, i18n };
}
