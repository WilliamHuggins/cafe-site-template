import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function Careers() {
  const { t } = useTranslation();

  const values = [
    { name: t('careers.values.items.0.name'), description: t('careers.values.items.0.description') },
    { name: t('careers.values.items.1.name'), description: t('careers.values.items.1.description') },
    { name: t('careers.values.items.2.name'), description: t('careers.values.items.2.description') },
  ];

  const positions = [
    { title: t('careers.openings.positions.0.title'), type: t('careers.openings.positions.0.type') },
    { title: t('careers.openings.positions.1.title'), type: t('careers.openings.positions.1.type') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('careers.seoTitle')}</title>
        <meta name="description" content={t('careers.seoDescription')} />
      </Helmet>
    <div className="pt-32 pb-24 bg-background dark:bg-dark-bg min-h-screen transition-colors">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-accent-brown mb-6 block text-center">{t('careers.hero.label')}</span>
        <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl text-heading-dark dark:text-dark-foreground mb-8 leading-[1.1] text-center">
          {t('careers.hero.title')} <br className="hidden md:block" />
          <em className="italic text-accent-green">{t('careers.hero.emphasis')}</em>
        </h1>

        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg mb-16">
          <img
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1024&auto=format&fit=crop"
            srcSet="
              https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=640&auto=format&fit=crop 640w,
              https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1024&auto=format&fit=crop 1024w,
              https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1600&auto=format&fit=crop 1600w
            "
            sizes="100vw"
            alt="Barista team"
            loading="lazy"
            decoding="async"
            width={1600}
            height={686}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-16">
          <section>
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

          <section>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-heading-dark dark:text-dark-foreground mb-6">
              {t('careers.openings.title')} <em className="italic text-accent-green">{t('careers.openings.emphasis')}</em>
            </h2>
            <div className="border-t border-border-light dark:border-border-dark">
              {positions.map((position, i) => (
                <div key={i} className="py-6 border-b border-border-light dark:border-border-dark flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-black dark:text-white">{position.title}</h4>
                    <span className="text-sm text-muted-text dark:text-dark-muted-text">{position.type}</span>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd_nI7VHflwWiAN34_BOh-ryN0QpyHb6w7MqhT_9Qaz-eo0wQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-accent-brown hover:border-accent-brown dark:hover:text-accent-brown dark:hover:border-accent-brown transition-colors w-fit"
                  >
                    {t('careers.openings.applyNow')}
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-text dark:text-dark-muted-text italic">
              {t('careers.openings.fallback')}
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
