import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();
  const sections = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <Helmet>
        <title>{t('terms.seoTitle')}</title>
        <meta name="description" content={t('terms.seoDescription')} />
      </Helmet>

      <div className="bg-background dark:bg-dark-bg text-foreground dark:text-dark-foreground transition-colors pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-brown font-semibold mb-4">{t('terms.eyebrow')}</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">{t('terms.title')}</h1>
          <p className="text-sm text-muted-text dark:text-dark-muted-text mb-8">{t('terms.lastUpdated')}</p>
          <p className="text-base md:text-lg text-secondary-text dark:text-dark-secondary-text leading-relaxed max-w-4xl mb-12">
            {t('terms.intro')}
          </p>

          <div className="space-y-6">
            {sections.map((index) => (
              <section
                key={index}
                className="rounded-2xl border border-border-light dark:border-border-dark bg-section-bg dark:bg-dark-section-bg p-6 md:p-8"
              >
                <h2 className="font-serif text-2xl md:text-3xl mb-4">{t(`terms.sections.${index}.title`)}</h2>
                <div className="space-y-3 text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                  <p>{t(`terms.sections.${index}.body1`)}</p>
                  <p>{t(`terms.sections.${index}.body2`)}</p>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-border-light dark:border-border-dark p-6 md:p-8">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">{t('terms.contact.title')}</h2>
            <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed mb-4">{t('terms.contact.body')}</p>
            <a
              href={t('terms.contact.emailHref')}
              className="inline-flex items-center justify-center rounded-sm bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              {t('terms.contact.emailLabel')}
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
