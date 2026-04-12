import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function Careers() {
  const { t } = useTranslation();

  const values = [
    { name: t('careers.values.items.0.name'), description: t('careers.values.items.0.description') },
    { name: t('careers.values.items.1.name'), description: t('careers.values.items.1.description') },
    { name: t('careers.values.items.2.name'), description: t('careers.values.items.2.description') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('careers.seoTitle')}</title>
        <meta name="description" content={t('careers.seoDescription')} />
      </Helmet>
      <div className="pt-32 pb-24 bg-background dark:bg-dark-bg min-h-screen transition-colors">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-accent-brown mb-6 block text-center">
            {t('careers.hero.label')}
          </span>
          <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-heading-dark dark:text-dark-foreground mb-8 leading-[1.1] text-center">
            {t('careers.hero.title')} <br className="hidden md:block" />
            <em className="italic text-accent-green">{t('careers.hero.emphasis')}</em>
          </h1>

          <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <div className="rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg aspect-[4/5]">
              <img
                src="https://i.postimg.cc/HLcwg4kp/Chat-GPT-Image-Apr-12-2026-04-02-23-PM.png"
                alt="Palm & Light team preparing service"
                loading="lazy"
                decoding="async"
                width={1000}
                height={1250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg aspect-[4/5]">
              <img
                src="https://i.postimg.cc/CKBGgHxY/Chat-GPT-Image-Apr-12-2026-04-02-37-PM.png"
                alt="Palm & Light coffee service at the bar"
                loading="lazy"
                decoding="async"
                width={1000}
                height={1250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg aspect-[4/5]">
              <img
                src="https://i.postimg.cc/KYkP2r8x/Chat-GPT-Image-Apr-12-2026-04-04-07-PM.png"
                alt="Palm & Light hospitality atmosphere"
                loading="lazy"
                decoding="async"
                width={1000}
                height={1250}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <div className="space-y-16">
            <section className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif font-normal text-3xl md:text-4xl text-heading-dark dark:text-dark-foreground mb-6">
                {t('careers.lookingFor.title')} <em className="italic text-accent-green">{t('careers.lookingFor.emphasis')}</em>
              </h2>
              <p className="text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed mb-6">
                {t('careers.lookingFor.p1')}
              </p>
              <p className="text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed">
                {t('careers.lookingFor.p2')}
              </p>
            </section>

            <section className="bg-section-bg dark:bg-dark-section-bg p-10 rounded-2xl transition-colors">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">{t('careers.values.title')}</h3>
              <ul className="space-y-4">
                {values.map((value, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-bold text-accent-brown">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong className="block text-black dark:text-white mb-1">{value.name}</strong>
                      <span className="text-secondary-text dark:text-dark-secondary-text">{value.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="py-6 md:py-10">
              <div className="max-w-2xl mx-auto text-center bg-section-bg dark:bg-dark-section-bg p-10 md:p-12 rounded-2xl transition-colors">
                <h2 className="font-serif font-normal text-3xl md:text-4xl text-heading-dark dark:text-dark-foreground mb-6">
                  {t('careers.application.title')}
                </h2>
                <div className="space-y-5 text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed">
                  <p>{t('careers.application.body1')}</p>
                  <p>{t('careers.application.body2')}</p>
                  <p>{t('careers.application.body3')}</p>
                  <p>{t('careers.application.body4')}</p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={t('careers.application.downloadHref')}
                    className="inline-flex items-center justify-center rounded-full border border-black/70 dark:border-white/70 px-7 py-3 text-sm font-semibold tracking-wide text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                  >
                    {t('careers.application.downloadButton')}
                  </a>
                  <a
                    href={t('careers.application.emailHref')}
                    className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-7 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-300"
                  >
                    {t('careers.application.emailButton')}
                  </a>
                </div>

                <p className="mt-6 text-sm text-muted-text dark:text-dark-muted-text">{t('careers.application.email')}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
