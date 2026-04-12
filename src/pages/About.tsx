import useFadeInObserver from '../hooks/useFadeInObserver';
import Button from '../components/Button';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

const storyImages = {
  hero: {
    src: 'https://i.postimg.cc/7ZSKDhTW/Chat-GPT-Image-Apr-12-2026-12-19-27-PM.png',
    alt: 'Sunlit Palm & Light patio and garden seating',
  },
  imageBreak: {
    src: 'https://i.postimg.cc/mkVZqCQJ/Chat-GPT-Image-Apr-12-2026-01-13-09-PM.png',
    alt: 'Palm-filled interior with warm natural light',
  },
  people: {
    src: 'https://i.postimg.cc/bNzPZmbX/Chat-GPT-Image-Apr-12-2026-02-48-29-PM.png',
    alt: 'Palm & Light team members preparing drinks together',
  },
  lifestyle: {
    src: 'https://i.postimg.cc/VLYwJKMQ/Chat-GPT-Image-Apr-12-2026-02-49-21-PM.png',
    alt: 'Guests enjoying coffee in a bright garden-inspired setting',
  },
};

export default function About() {
  const { t } = useTranslation();
  useFadeInObserver();

  const pillars = [
    {
      title: t('about.pillars.items.0.title'),
      body: t('about.pillars.items.0.body'),
    },
    {
      title: t('about.pillars.items.1.title'),
      body: t('about.pillars.items.1.body'),
    },
    {
      title: t('about.pillars.items.2.title'),
      body: t('about.pillars.items.2.body'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.seoTitle')}</title>
        <meta name="description" content={t('about.seoDescription')} />
      </Helmet>

      <div className="bg-background dark:bg-dark-bg text-foreground dark:text-dark-foreground font-sans overflow-x-hidden transition-colors duration-300 pt-20">
        <section className="relative min-h-[92vh] flex items-end overflow-hidden">
          <img
            src={storyImages.hero.src}
            alt={storyImages.hero.alt}
            decoding="async"
            width={1920}
            height={1280}
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover scale-[1.04] md:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-accent-green mb-5 font-medium">{t('about.hero.eyebrow')}</p>
            <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl mb-6">
              {t('about.hero.headline')}
            </h1>
            <p className="max-w-xl text-base md:text-xl leading-relaxed text-white/90">
              {t('about.hero.body')}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.03]">
              {t('about.intro.headline')}
            </h2>
            <div className="text-foreground/75 dark:text-dark-foreground/75 text-base md:text-lg leading-relaxed space-y-5">
              <p>{t('about.intro.body1')}</p>
              <p>{t('about.intro.body2')}</p>
            </div>
          </div>
        </section>

        <section className="px-0 md:px-8 pb-20 md:pb-28 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <figure className="max-w-[1800px] mx-auto overflow-hidden md:rounded-3xl shadow-[0_25px_70px_rgba(27,28,28,0.14)] dark:shadow-none">
            <img
              src={storyImages.imageBreak.src}
              alt={storyImages.imageBreak.alt}
              loading="lazy"
              decoding="async"
              width={1800}
              height={1080}
              sizes="100vw"
              className="w-full h-[52vh] md:h-[74vh] object-cover"
            />
          </figure>
        </section>

        <section className="py-10 md:py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <figure className="overflow-hidden rounded-3xl min-h-[24rem] lg:min-h-[38rem]">
              <img
                src={storyImages.people.src}
                alt={storyImages.people.alt}
                loading="lazy"
                decoding="async"
                width={1200}
                height={1400}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col justify-center py-4 lg:py-10">
              <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-accent-green mb-5 font-medium">{t('about.people.eyebrow')}</p>
              <h3 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">{t('about.people.headline')}</h3>
              <div className="space-y-5 text-foreground/75 dark:text-dark-foreground/75 text-base md:text-lg leading-relaxed">
                <p>{t('about.people.body1')}</p>
                <p>{t('about.people.body2')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-accent-green mb-8 font-medium">{t('about.pillars.eyebrow')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-foreground/12 dark:border-dark-foreground/12 pt-10 md:pt-12">
              {pillars.map((pillar, idx) => (
                <article key={idx} className="pr-2">
                  <h4 className="font-serif text-3xl md:text-4xl mb-3">{pillar.title}</h4>
                  <p className="text-foreground/70 dark:text-dark-foreground/70 leading-relaxed">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-0 md:px-8 pb-20 md:pb-28">
          <div className="max-w-[1800px] mx-auto rounded-none md:rounded-3xl overflow-hidden relative min-h-[55vh] md:min-h-[78vh] fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <img
              src={storyImages.lifestyle.src}
              alt={storyImages.lifestyle.alt}
              loading="lazy"
              decoding="async"
              width={1800}
              height={1200}
              sizes="100vw"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/20" />
            <div className="relative z-10 h-full min-h-[55vh] md:min-h-[78vh] flex items-end">
              <div className="max-w-3xl p-8 md:p-14">
                <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-accent-green mb-5 font-medium">{t('about.feature.eyebrow')}</p>
                <h3 className="font-serif text-white text-4xl md:text-6xl leading-[0.96] mb-4">{t('about.feature.headline')}</h3>
                <div className="text-white/90 text-base md:text-xl leading-relaxed space-y-4">
                  <p>{t('about.feature.body1')}</p>
                  <p>{t('about.feature.body2')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h3 className="font-serif text-4xl md:text-6xl mb-8">{t('about.cta.headline')}</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/#menu" className="group inline-flex items-center gap-2">{t('about.cta.viewMenu')}</Button>
              <Button
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="px-8 py-4 rounded-sm text-sm uppercase tracking-[0.08em]"
              >
                {t('about.cta.visitUs')}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
