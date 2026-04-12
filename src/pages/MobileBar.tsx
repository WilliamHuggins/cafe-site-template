import useFadeInObserver from '../hooks/useFadeInObserver';
import { ArrowRight } from 'lucide-react';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function MobileBar() {
  const { t } = useTranslation();
  useFadeInObserver();

  const scrollToForm = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { title: t('mobileBar.experience.features.0.title'), description: t('mobileBar.experience.features.0.description') },
    { title: t('mobileBar.experience.features.1.title'), description: t('mobileBar.experience.features.1.description') },
    { title: t('mobileBar.experience.features.2.title'), description: t('mobileBar.experience.features.2.description') },
  ];

  const eventTypes = [
    { title: t('mobileBar.events.types.0.title'), description: t('mobileBar.events.types.0.description') },
    { title: t('mobileBar.events.types.1.title'), description: t('mobileBar.events.types.1.description') },
    { title: t('mobileBar.events.types.2.title'), description: t('mobileBar.events.types.2.description') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('mobileBar.seoTitle')}</title>
        <meta name="description" content={t('mobileBar.seoDescription')} />
      </Helmet>
    <div className="bg-background dark:bg-dark-bg text-foreground dark:text-dark-foreground font-sans overflow-x-hidden transition-colors duration-300 pt-20">

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col lg:flex-row items-center px-8 py-20 max-w-7xl mx-auto gap-16">
        <div className="flex-1 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h1 className="font-serif font-normal text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 text-foreground dark:text-dark-foreground tracking-tight">
            {t('mobileBar.hero.titleLine1')} <br/>
            <em className="italic text-accent-green">{t('mobileBar.hero.emphasis')}</em>
          </h1>
          <p className="text-lg md:text-xl leading-[1.7] text-foreground/75 dark:text-dark-foreground/75 mb-12 max-w-lg">
            {t('mobileBar.hero.description')}
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-medium border border-foreground/20 dark:border-dark-foreground/20 px-8 py-4 rounded-sm hover:bg-foreground hover:text-dark-foreground dark:hover:bg-dark-foreground dark:hover:text-foreground hover:border-foreground dark:hover:border-dark-foreground transition-all group"
          >
            {t('mobileBar.hero.cta')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex-1 w-full relative fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/695e36ad4f4b2e9a7f54c156_Screenshot%202026-01-07%20at%202.04.44%E2%80%AFAM.png"
              alt="Kaizen Mobile Bar Setup"
              loading="lazy"
              decoding="async"
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Let's Talk Coffee */}
      <section className="py-28 px-8 bg-panel-light dark:bg-dark-section-bg transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/68d4da0c015d33e56143dc21_Screenshot%202025-09-24%20at%2010.55.46%E2%80%AFPM.png"
                alt="Barista steaming milk"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground dark:text-dark-foreground">
                {t('mobileBar.talkCoffee.title')}
              </h2>
              <p className="text-lg md:text-xl leading-[1.8] text-foreground/80 dark:text-dark-foreground/80">
                {t('mobileBar.talkCoffee.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Column */}
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-6 text-foreground dark:text-dark-foreground">
              {t('mobileBar.experience.title')} <em className="italic text-accent-green">{t('mobileBar.experience.emphasis')}</em>
            </h2>
            <p className="text-lg leading-[1.7] text-foreground/70 dark:text-dark-foreground/70 mb-10">
              {t('mobileBar.experience.description')}
            </p>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i}>
                  <h3 className="font-serif text-2xl font-medium mb-2 text-foreground dark:text-dark-foreground">{feature.title}</h3>
                  <p className="text-[0.95rem] leading-[1.7] text-foreground/70 dark:text-dark-foreground/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/695e36ad90072b0f6df8523f_Screenshot%202026-01-07%20at%202.03.55%E2%80%AFAM.png"
                alt="Kaizen team member loading van"
                loading="lazy"
                decoding="async"
                width={1000}
                height={1250}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out lg:mt-32">
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-6 text-foreground dark:text-dark-foreground">
              {t('mobileBar.events.title')} <em className="italic text-accent-green">{t('mobileBar.events.emphasis')}</em>
            </h2>
            <p className="text-lg leading-[1.7] text-foreground/70 dark:text-dark-foreground/70 mb-10">
              {t('mobileBar.events.description')}
            </p>

            <div className="space-y-8">
              {eventTypes.map((eventType, i) => (
                <div key={i} className="p-8 border border-foreground/10 dark:border-dark-foreground/10 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl font-medium mb-3 text-foreground dark:text-dark-foreground">{eventType.title}</h3>
                  <p className="text-[0.95rem] leading-[1.7] text-foreground/70 dark:text-dark-foreground/70">
                    {eventType.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Form Section */}
      <section id="inquiry-form" className="py-28 px-8 bg-gradient-to-b from-transparent to-panel-light/50 dark:to-dark-section-bg/50">
        <div className="max-w-4xl mx-auto fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="text-center mb-12">
            <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground dark:text-dark-foreground">
              {t('mobileBar.form.title')}
            </h2>
            <p className="text-[0.95rem] leading-[1.7] text-foreground/65 dark:text-dark-foreground/65">
              {t('mobileBar.form.description')}
            </p>
          </div>

          <div className="bg-background dark:bg-dark-section-bg rounded-2xl shadow-2xl overflow-hidden border border-foreground/10 dark:border-dark-foreground/10 relative min-h-[800px] p-2 md:p-3">
            {/* Loading placeholder */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-8 h-8 border-2 border-accent-green border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-foreground/10 dark:border-dark-foreground/15 bg-white p-2 md:p-3 h-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe6usRUgLA7u_5AD2aBwdXH7P0qSfpJoGjG2Q8ZbRSUnyWeKw/viewform?embedded=true"
                width="100%"
                height="100%"
                className="w-full min-h-[800px] border-0 bg-transparent relative z-10 rounded-xl"
                title="Kaizen Mobile Bar Inquiry Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
