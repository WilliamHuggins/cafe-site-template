type TranslationTree = {
  [key: string]: string | TranslationTree;
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

  t(key: string): string {
    const primary = this.getNestedValue(this.resources[this.language]?.translation, key);
    if (primary !== undefined) {
      return primary;
    }

    const fallback = this.getNestedValue(this.resources[this.fallbackLng]?.translation, key);
    if (fallback !== undefined) {
      return fallback;
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

  private getNestedValue(tree: TranslationTree | undefined, key: string): string | undefined {
    if (!tree) {
      return undefined;
    }

    const resolved = key.split('.').reduce<string | TranslationTree | undefined>((acc, segment) => {
      if (!acc || typeof acc === 'string') {
        return undefined;
      }

      return acc[segment];
    }, tree);

    return typeof resolved === 'string' ? resolved : undefined;
  }
}

const i18n = new I18n();

export default i18n;
