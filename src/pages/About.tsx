import { useEffect } from 'react';
import useFadeInObserver from '../hooks/useFadeInObserver';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  useFadeInObserver();

  useEffect(() => {
    const fontHref = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap';
    const existingLink = document.querySelector<HTMLLinkElement>(`link[href="${fontHref}"]`);

    if (existingLink) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontHref;
    link.dataset.dynamicFont = 'noto-sans-jp';
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  const timelineItems = [
    { year: t('about.timeline.items.0.year'), title: t('about.timeline.items.0.title'), desc: t('about.timeline.items.0.description') },
    { year: t('about.timeline.items.1.year'), title: t('about.timeline.items.1.title'), desc: t('about.timeline.items.1.description') },
    { year: t('about.timeline.items.2.year'), title: t('about.timeline.items.2.title'), desc: t('about.timeline.items.2.description') },
    { year: t('about.timeline.items.3.year'), title: t('about.timeline.items.3.title'), desc: t('about.timeline.items.3.description') },
  ];

  const valuesItems = [
    { icon: t('about.values.items.0.icon'), title: t('about.values.items.0.title'), desc: t('about.values.items.0.description') },
    { icon: t('about.values.items.1.icon'), title: t('about.values.items.1.title'), desc: t('about.values.items.1.description') },
    { icon: t('about.values.items.2.icon'), title: t('about.values.items.2.title'), desc: t('about.values.items.2.description') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.seoTitle')}</title>
        <meta name="description" content={t('about.seoDescription')} />
      </Helmet>
    <div className="bg-background dark:bg-dark-bg text-foreground dark:text-dark-foreground font-sans overflow-x-hidden transition-colors duration-300 pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-8 py-20 relative">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(163, 177, 138, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(196, 149, 106, 0.1) 0%, transparent 50%)'
        }}></div>
        <div className="font-jp font-light text-6xl md:text-8xl text-foreground/15 dark:text-dark-foreground/15 tracking-[0.5em] mb-4 animate-[fadeDown_1.2s_ease-out_both]">
          {t('about.hero.kanji')}
        </div>
        <h1 className="font-serif font-normal text-4xl md:text-6xl lg:text-7xl leading-[1.15] max-w-3xl text-foreground dark:text-dark-foreground animate-[fadeDown_1.2s_ease-out_0.15s_both]">
          {t('about.hero.title')} <em className="italic text-accent-green">{t('about.hero.emphasis')}</em>
        </h1>
        <p className="text-base tracking-[0.12em] uppercase text-accent-green mt-8 font-medium animate-[fadeDown_1.2s_ease-out_0.3s_both]">
          {t('about.hero.location')}
        </p>
        <div className="mt-12 md:mt-0 md:absolute md:bottom-10 flex flex-col items-center gap-2 animate-[fadeDown_1.2s_ease-out_0.6s_both]">
          <span className="text-xs tracking-[0.15em] uppercase opacity-40">{t('about.hero.scrollLabel')}</span>
          <div className="w-px h-10 bg-foreground dark:bg-dark-foreground opacity-25 animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-28 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div>
            <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-foreground dark:text-dark-foreground">
              {t('about.origin.title')} <em className="italic text-accent-green">{t('about.origin.emphasis')}</em>
            </h2>
            <div className="space-y-5 text-[0.95rem] leading-[1.85] text-foreground/75 dark:text-dark-foreground/75">
              <p>{t('about.origin.p1')}</p>
              <p>{t('about.origin.p2')}</p>
              <p>{t('about.origin.p3')}</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-panel-light dark:bg-dark-section-bg rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute -top-4 -right-2 font-jp font-light text-[8rem] text-foreground/15 dark:text-dark-foreground/15 leading-none">
                {t('about.hero.kanji')}
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-accent-green mb-3 font-medium relative z-10">
                {t('about.origin.definitionLabel')}
              </div>
              <div className="font-serif text-4xl font-medium mb-1 relative z-10 text-foreground dark:text-dark-foreground">
                {t('about.origin.definitionName')}
              </div>
              <div className="font-jp text-lg text-foreground/50 dark:text-dark-foreground/50 mb-6 font-light relative z-10">
                {t('about.origin.definitionKana')}
              </div>
              <div className="text-[0.95rem] leading-[1.7] text-foreground/70 dark:text-dark-foreground/70 border-t border-foreground/10 dark:border-dark-foreground/10 pt-5 italic relative z-10">
                {t('about.origin.definitionText')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Photo */}
      <div className="max-w-5xl mx-auto px-8 pb-8 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
        <figure className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(27,28,28,0.12)] dark:shadow-none">
          <img
            src="https://i.postimg.cc/kGgq66mS/Shane_Balasbas_Jason_Naraja_Son.webp"
            alt="Shane Balasbas, Jason Naraja, and their son Palm in front of Palm and Light Coffee"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            sizes="(min-width: 768px) 80vw, 100vw"
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover object-[center_20%]"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 p-12 pt-24 bg-gradient-to-t from-foreground/80 to-transparent text-dark-foreground text-sm tracking-wide italic">
            {t('about.familyCaption')}
          </figcaption>
        </figure>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-6 py-8 max-w-md mx-auto">
        <div className="flex-1 h-px bg-foreground/10 dark:bg-dark-foreground/10"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green/70"></div>
        <div className="flex-1 h-px bg-foreground/10 dark:bg-dark-foreground/10"></div>
      </div>

      {/* Journey Timeline */}
      <section className="bg-gradient-to-br from-foreground to-gradient-dark-end dark:from-foreground dark:to-foreground text-dark-foreground py-28 px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 10% 90%, rgba(122, 139, 94, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(196, 149, 106, 0.1) 0%, transparent 40%)'
        }}></div>
        <div className="max-w-6xl mx-auto relative z-10 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-dark-foreground">
            {t('about.timeline.title')} <em className="italic text-accent-green">{t('about.timeline.emphasis')}</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineItems.map((item, i) => (
              <div key={i} className="relative pt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-dark-foreground/15"></div>
                <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-accent-green/70"></div>
                <div className="font-serif text-3xl font-medium text-accent-gold mb-3">{item.year}</div>
                <div className="text-[0.95rem] font-medium mb-2 text-dark-foreground">{item.title}</div>
                <div className="text-[0.85rem] leading-[1.7] text-dark-foreground/60">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-8 max-w-6xl mx-auto">
        <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <SectionHeader
            label={t('about.values.label')}
            title={t('about.values.title')}
            emphasis={t('about.values.emphasis')}
            className="mb-12"
            labelClassName="text-accent-green font-medium tracking-[0.15em] mb-3"
            titleClassName="text-3xl md:text-4xl lg:text-5xl leading-tight mb-0 text-foreground dark:text-dark-foreground"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuesItems.map((value, i) => (
              <div key={i} className="p-10 border border-foreground/10 dark:border-dark-foreground/10 rounded-2xl transition-all duration-400 hover:bg-panel-light dark:hover:bg-dark-section-bg hover:border-transparent hover:-translate-y-1">
                <span className="text-2xl mb-5 block text-foreground dark:text-dark-foreground">{value.icon}</span>
                <h3 className="font-serif text-2xl font-medium mb-3 text-foreground dark:text-dark-foreground">{value.title}</h3>
                <p className="text-[0.88rem] leading-[1.75] text-foreground/65 dark:text-dark-foreground/65">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-panel-light dark:bg-dark-section-bg py-20 px-8 text-center transition-colors">
        <div className="max-w-4xl mx-auto fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <SectionHeader
            label={t('about.partners.label')}
            title={t('about.partners.title')}
            emphasis={t('about.partners.emphasis')}
            align="center"
            className="mb-10"
            labelClassName="text-accent-green font-medium tracking-[0.15em] mb-3"
            titleClassName="text-3xl md:text-4xl mb-0 text-foreground dark:text-dark-foreground"
          />
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: 'Black & White Roasters', loc: 'North Carolina', link: 'https://www.blackwhiteroasters.com/products/r-los-patios-gigante-peach' },
              { name: 'Onyx Coffee Lab', loc: 'Arkansas', link: 'https://onyxcoffeelab.com/' },
              { name: 'Friedhats', loc: 'Amsterdam', link: 'https://friedhats.com/' },
              { name: 'Neighbor Bakehouse', loc: 'San Francisco, California', link: 'https://www.instagram.com/neighborbakehouse/?hl=en' },
              { name: 'Sunday Bakeshop', loc: 'Oakland, California', link: 'https://www.instagram.com/thesunday.bakeshop/' }
            ].map((partner, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="font-serif text-lg font-medium">
                  <a href={partner.link} target="_blank" rel="noopener noreferrer" className="text-foreground dark:text-dark-foreground border-b border-foreground/15 dark:border-dark-foreground/15 pb-0.5 hover:text-accent-green hover:border-accent-green dark:hover:text-accent-green dark:hover:border-accent-green transition-colors duration-200 ease-in-out">
                    {partner.name}
                  </a>
                </div>
                <div className="text-[0.78rem] text-foreground/50 dark:text-dark-foreground/50 tracking-[0.06em]">
                  {partner.loc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="text-center py-28 px-8 relative">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(163, 177, 138, 0.08) 0%, transparent 60%)'
        }}></div>
        <div className="relative z-10 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <SectionHeader
            label={t('about.visit.label')}
            title={t('about.visit.title')}
            emphasis={t('about.visit.emphasis')}
            align="center"
            className="mb-6"
            labelClassName="text-accent-green font-medium tracking-[0.15em] mb-3"
            titleClassName="text-3xl md:text-4xl lg:text-5xl mb-0 text-foreground dark:text-dark-foreground"
          />
          <p className="text-[0.95rem] leading-[1.7] text-foreground/65 dark:text-dark-foreground/65 mb-2">
            73455 Twentynine Palms Highway, Twentynine Palms, CA 92277
          </p>
          <Button
            href="https://instagram.com/palmandlightcoffee"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="mt-8 rounded-sm border-2 px-7 py-3 text-[0.85rem] uppercase tracking-[0.08em] font-medium"
          >
            @palmandlightcoffee
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}
