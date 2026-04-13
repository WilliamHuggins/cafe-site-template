import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

type PrivacySection = {
  title: string;
  body1: string;
  body2: string;
  items?: string[];
};

export default function Privacy() {
  const { t } = useTranslation();
  const sections = t('privacy.sections', { returnObjects: true }) as PrivacySection[];

  return (
    <>
      <Helmet>
        <title>{t('privacy.seoTitle')}</title>
        <meta name="description" content={t('privacy.seoDescription')} />
      </Helmet>

      <div className="bg-background dark:bg-dark-bg text-foreground dark:text-dark-foreground transition-colors pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-accent-brown font-semibold mb-4">{t('privacy.eyebrow')}</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">{t('privacy.title')}</h1>
          <p className="text-sm text-muted-text dark:text-dark-muted-text mb-8">{t('privacy.lastUpdated')}</p>
          <p className="text-base md:text-lg text-secondary-text dark:text-dark-secondary-text leading-relaxed max-w-4xl mb-12">
            {t('privacy.intro')}
          </p>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <section
                key={index}
                className="rounded-2xl border border-border-light dark:border-border-dark bg-section-bg dark:bg-dark-section-bg p-6 md:p-8"
              >
                <h2 className="font-serif text-2xl md:text-3xl mb-4">{section.title}</h2>
                <div className="space-y-3 text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                  <p>{section.body1}</p>
                  {section.items && section.items.length > 0 && (
                    <ul className="list-disc pl-6 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <p>{section.body2}</p>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-border-light dark:border-border-dark bg-section-bg dark:bg-dark-section-bg p-6 md:p-8">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">{t('privacy.license.title')}</h2>
            <div className="space-y-3 text-secondary-text dark:text-dark-secondary-text leading-relaxed">
              <p>{t('privacy.license.body1')}</p>
              <p>
                <a
                  href={t('privacy.license.linkHref')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-brown hover:text-black dark:hover:text-white transition-colors underline"
                >
                  {t('privacy.license.linkLabel')}
                </a>
              </p>
              <p>{t('privacy.license.body2')}</p>
              <p className="text-sm text-muted-text dark:text-dark-muted-text italic">{t('privacy.license.attribution')}</p>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-border-light dark:border-border-dark p-6 md:p-8">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">{t('privacy.contact.title')}</h2>
            <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed mb-4">{t('privacy.contact.body')}</p>
            <a
              href={t('privacy.contact.emailHref')}
              className="inline-flex items-center justify-center rounded-sm bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              {t('privacy.contact.emailLabel')}
            </a>
            <p className="text-sm text-muted-text dark:text-dark-muted-text mt-4">{t('privacy.contact.location')}</p>
          </section>
        </div>
      </div>
    </>
  );
}
