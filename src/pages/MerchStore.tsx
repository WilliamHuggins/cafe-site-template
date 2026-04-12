import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function MerchStore() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('merchStore.seoTitle')}</title>
        <meta name="description" content={t('merchStore.seoDescription')} />
      </Helmet>
      <main className="pt-20 min-h-screen bg-background dark:bg-dark-bg px-6 md:px-10 lg:px-12 py-12">
        <section className="max-w-5xl mx-auto rounded-2xl border border-border-tan dark:border-border-deep bg-card-light dark:bg-panel-dark p-8 md:p-12 text-center">
          <h1 className="font-serif text-5xl mb-6 text-black dark:text-white">{t('merchStore.title')}</h1>
          <p className="text-lg leading-[1.8] text-secondary-text dark:text-dark-secondary-text max-w-3xl mx-auto mb-8">{t('merchStore.description')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@palmandlight.com" className="rounded-md bg-[#C9703E] hover:bg-[#b86335] text-white px-5 py-3 text-sm transition-colors">
              {t('merchStore.contact')}
            </a>
            <a href="https://www.instagram.com/palmandlightcoffee/" target="_blank" rel="noreferrer" className="rounded-md border border-foreground/20 dark:border-dark-foreground/20 px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors">
              {t('merchStore.instagram')}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
