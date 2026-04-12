import { Link } from 'react-router-dom';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('notFound.seoTitle')}</title>
        <meta name="description" content={t('notFound.seoDescription')} />
      </Helmet>
    <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-brown mb-4">{t('notFound.label')}</p>
      <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-none text-black dark:text-white mb-6">{t('notFound.code')}</h1>
      <p className="text-secondary-text dark:text-dark-secondary-text text-lg mb-10">{t('notFound.message')}</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wide rounded-sm bg-accent-green text-white hover:bg-accent-green-hover transition-colors"
      >
        {t('notFound.backHome')}
      </Link>
    </section>
    </>
  );
}
