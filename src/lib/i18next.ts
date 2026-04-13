type TranslationValue = string | TranslationTree | TranslationValue[];

type TranslationTree = {
  [key: string]: TranslationValue;
};

type I18nOptions = {
  resources: Record<string, { translation: TranslationTree }>;
  lng: string;
  fallbackLng: string;
  interpolation?: {
    escapeValue?: boolean;
  };
};

type LanguageChangedListener = (language: string) => void;

class I18n {
  public language = 'en';
  public isInitialized = false;

  private resources: I18nOptions['resources'] = {};
  private fallbackLng = 'en';
  private languageChangedListeners = new Set<LanguageChangedListener>();

  use(plugin: { init?: (i18n: I18n) => void }) {
    plugin.init?.(this);
    return this;
  }

  init(options: I18nOptions) {
    this.resources = options.resources;
    this.language = options.lng;
    this.fallbackLng = options.fallbackLng;
    this.isInitialized = true;
    return Promise.resolve(this);
  }

  t(key: string): string;
  t(key: string, defaultValue: string): string;
  t(key: string, options: { returnObjects: true; [k: string]: unknown }): TranslationValue;
  t(key: string, optionsOrDefault?: string | { returnObjects?: boolean; [k: string]: unknown }): string | TranslationValue {
    const returnObjects = typeof optionsOrDefault === 'object' && optionsOrDefault?.returnObjects === true;
    const defaultValue = typeof optionsOrDefault === 'string' ? optionsOrDefault : undefined;

    const primary = this.getNestedValue(this.resources[this.language]?.translation, key, returnObjects);
    if (primary !== undefined) {
      return primary;
    }

    const fallback = this.getNestedValue(this.resources[this.fallbackLng]?.translation, key, returnObjects);
    if (fallback !== undefined) {
      return fallback;
    }

    if (defaultValue !== undefined) {
      return defaultValue;
    }

    return key;
  }

  changeLanguage(language: string) {
    this.language = language;
    this.languageChangedListeners.forEach((listener) => listener(language));
    return Promise.resolve(language);
  }

  on(event: 'languageChanged', listener: LanguageChangedListener) {
    if (event === 'languageChanged') {
      this.languageChangedListeners.add(listener);
    }
  }

  off(event: 'languageChanged', listener: LanguageChangedListener) {
    if (event === 'languageChanged') {
      this.languageChangedListeners.delete(listener);
    }
  }

  private getNestedValue(tree: TranslationTree | undefined, key: string, returnObjects = false): TranslationValue | undefined {
    if (!tree) {
      return undefined;
    }

    const resolved = key.split('.').reduce<TranslationValue | undefined>((acc, segment) => {
      if (acc === undefined || typeof acc === 'string') {
        return undefined;
      }

      if (Array.isArray(acc)) {
        const index = Number(segment);
        if (!Number.isInteger(index)) {
          return undefined;
        }

        return acc[index];
      }

      return acc[segment];
    }, tree);

    if (resolved === undefined) {
      return undefined;
    }

    if (returnObjects) {
      return resolved;
    }

    return typeof resolved === 'string' ? resolved : undefined;
  }
}

const i18n = new I18n();

export default i18n;
