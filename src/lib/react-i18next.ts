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

  return {
    t: (key: string) => i18n.t(key),
    i18n,
  };
}
