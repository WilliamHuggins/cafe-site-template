import { Link } from 'react-router-dom';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function ComingSoon() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('comingSoon.seoTitle')}</title>
        <meta name="description" content={t('comingSoon.seoDescription')} />
      </Helmet>
    <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
        {t('comingSoon.title')}
      </h1>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-sm bg-black dark:bg-white text-white dark:text-black hover:bg-cta-hover-dark dark:hover:bg-surface-light transition-colors"
      >
        {t('comingSoon.backHome')}
      </Link>
    </section>
    </>
  );
}
