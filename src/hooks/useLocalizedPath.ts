import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { isSupportedLocale, supportedLocales } from '../i18n';

const EXTERNAL_SCHEMES = ['http://', 'https://', 'mailto:', 'tel:'];

export function useLocalizedPath() {
  const params = useParams();

  const locale = useMemo(() => {
    const candidate = params.locale;
    if (candidate && isSupportedLocale(candidate)) {
      return candidate;
    }

    return 'en';
  }, [params.locale]);

  return (path: string) => {
    if (!path || EXTERNAL_SCHEMES.some((scheme) => path.startsWith(scheme))) {
      return path;
    }

    if (path.startsWith('#')) {
      return `/${locale}${path}`;
    }

    if (path.startsWith('/#')) {
      return `/${locale}${path.slice(1)}`;
    }

    const localePrefixPattern = new RegExp(`^/(${supportedLocales.join('|')})(?=/|$)`);
    if (localePrefixPattern.test(path)) {
      return path.replace(localePrefixPattern, `/${locale}`);
    }

    if (path === '/') {
      return `/${locale}`;
    }

    if (path.startsWith('/')) {
      return `/${locale}${path}`;
    }

    return path;
  };
}
