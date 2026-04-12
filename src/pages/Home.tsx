import { useEffect, type MouseEvent } from 'react';
import { MapPin, Clock, Coffee, Truck, Gift, ArrowRight } from 'lucide-react';
import { menuStructure } from '../data/menu';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

const menuSectionImages: Record<string, { src: string; alt: string }> = {
  coffee: {
    src: 'https://i.postimg.cc/gkYpxghf/Chat-GPT-Image-Apr-12-2026-02-44-37-PM.png',
    alt: 'Close-up of espresso being pulled',
  },
  specialty: {
    src: 'https://i.postimg.cc/bNzPZmbX/Chat-GPT-Image-Apr-12-2026-02-48-29-PM.png',
    alt: 'Matcha being prepared in soft light',
  },
  signature: {
    src: 'https://i.postimg.cc/VLYwJKMQ/Chat-GPT-Image-Apr-12-2026-02-49-21-PM.png',
    alt: 'Latte with oranges and greenery',
  },
  kitchen: {
    src: 'https://i.postimg.cc/8P1G7Zv2/Chat-GPT-Image-Apr-12-2026-02-50-34-PM.png',
    alt: 'House-made cinnamon buns on small plates',
  },
  savory: {
    src: 'https://i.postimg.cc/xT0QX6H2/Chat-GPT-Image-Apr-12-2026-02-51-34-PM.png',
    alt: 'Cheese plate and vegetables',
  },
};

export default function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    const structuredDataScriptId = 'localbusiness-structured-data';
    const existingScript = document.getElementById(structuredDataScriptId);

    if (existingScript) {
      return;
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'CafeOrCoffeeShop',
      name: 'Palm & Light Coffee',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '73455 Twentynine Palms Highway',
        addressLocality: 'Twentynine Palms',
        addressRegion: 'CA',
        postalCode: '92277',
        addressCountry: 'US',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '06:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '06:00',
          closes: '23:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '06:00',
          closes: '18:00',
        },
      ],
      sameAs: ['https://www.instagram.com/palmandlightcoffee/'],
    };

    const script = document.createElement('script');
    script.id = structuredDataScriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const scrollToMenu = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('home.seoTitle')}</title>
        <meta name="description" content={t('home.seoDescription')} />
      </Helmet>
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/7ZSKDhTW/Chat-GPT-Image-Apr-12-2026-12-19-27-PM.png"
            alt="Palm & Light Coffee hero image"
            decoding="async"
            width={1920}
            height={1280}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="font-serif font-normal text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
              {t('home.hero.headingPrefix')} <em className="italic text-accent-green">{t('home.hero.headingEmphasis')}</em>
            </h1>
            <p className="text-surface-light text-lg md:text-xl mb-10 max-w-lg leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              {t('home.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                href="#menu"
                onClick={scrollToMenu}
                className="group flex items-center gap-3"
                showArrow
              >
                {t('home.hero.viewMenu')}
              </Button>
              <Button to="/mobile-bar" className="flex items-center gap-3">
                {t('home.hero.bookMobileBar')}
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>73455 Twentynine Palms Highway, Twentynine Palms CA 92277</span>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-sm border border-white/40 px-3 py-1 font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {t('home.hero.directions')}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{t('home.hero.hours')}</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end items-center flex-1">
            <img
              src="https://i.postimg.cc/pR6YGfnK/Chat-GPT-Image-Apr-12-2026-12-08-52-PM.png"
              alt="Palm & Light Coffee Badge"
              loading="lazy"
              decoding="async"
              width={420}
              height={420}
              sizes="420px"
              className="w-[26rem] h-[26rem] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story & Philosophy Section */}
      <section className="py-32 bg-background dark:bg-dark-bg transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <SectionHeader
                label={t('home.story.label')}
                title={
                  <>
                    {t('home.story.title')}
                    <br />
                  </>
                }
                emphasis={t('home.story.emphasis')}
              />
              <div className="space-y-6 text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed">
                <p>{t('home.story.p1')}</p>
                <p>{t('home.story.p2')}</p>
                <p>{t('home.story.p3')}</p>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg">
              <img
                src="https://i.postimg.cc/mkVZqCQJ/Chat-GPT-Image-Apr-12-2026-01-13-09-PM.png"
                alt="Palm & Light Coffee interior"
                loading="lazy"
                decoding="async"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-light dark:border-border-dark pt-24 mb-32">
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{t('home.pillars.coffee.title')}</h3>
              <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                {t('home.pillars.coffee.description')}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{t('home.pillars.ingredients.title')}</h3>
              <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                {t('home.pillars.ingredients.description')}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{t('home.pillars.hospitality.title')}</h3>
              <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                {t('home.pillars.hospitality.description')}
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              label={t('home.philosophy.label')}
              title={t('home.philosophy.title')}
              emphasis={t('home.philosophy.emphasis')}
              align="center"
              description={t('home.philosophy.description')}
              descriptionClassName="whitespace-pre-line"
              className="mb-8"
            />
            <Button to="/about" variant="text">
              {t('home.philosophy.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Crafted with Intention & Menu */}
      <section id="menu" className="py-32 bg-section-bg dark:bg-dark-section-bg transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Native Video Panel */}
          <div className="w-full h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden relative shadow-2xl mb-32 group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            >
              <source src="https://i.imgur.com/2vgUE0R.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4">
                <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-white/90 mb-4 block drop-shadow-md">{t('home.menu.signatureLabel')}</span>
                <h2 className="font-serif font-normal text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                  {t('home.menu.signatureTitle')} <em className="italic text-accent-green">{t('home.menu.signatureEmphasis')}</em>
                </h2>
              </div>
            </div>
          </div>

          {/* Digital Card Menu */}
          <div>
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black dark:text-white mb-6">{t('home.menu.title')}</h2>
              <p className="text-secondary-text dark:text-dark-secondary-text text-lg max-w-2xl mx-auto">
                {t('home.menu.description')}
              </p>
            </div>

            <div className="space-y-8">
              {menuStructure.map((category) => (
                <div key={category.id} className="mb-24">
                  <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
                      {t(`menuData.menu.categories.${category.id}.name`)}
                    </h3>
                    {category.noteCount > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: category.noteCount }).map((_, idx) => {
                          const noteKey = `menuData.menu.categories.${category.id}.notes.${idx}`;
                          const note = t(noteKey);
                          if (note === noteKey) {
                            return null;
                          }

                          return (
                            <span key={idx} className="text-xs font-bold uppercase tracking-wider text-muted-text dark:text-dark-muted-text bg-white dark:bg-dark-bg px-3 py-1.5 rounded-sm shadow-sm border border-border-light/50 dark:border-border-dark/50">
                              {note}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item) => {
                      const itemName = t(`menuData.menu.items.${item.id}.name`);
                      const itemDescriptionKey = `menuData.menu.items.${item.id}.description`;
                      const itemDescription = t(itemDescriptionKey);

                      return (
                        <div key={item.id} className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light/50 dark:border-border-dark/50 flex flex-col group">
                          <div className="flex justify-between items-start mb-4 gap-4">
                            <h4 className="text-xl font-bold text-black dark:text-white group-hover:text-accent-brown transition-colors">{itemName}</h4>
                            <span className="text-sm font-bold bg-background dark:bg-dark-section-bg px-3 py-1 rounded-sm text-black dark:text-white whitespace-nowrap">{item.price}</span>
                          </div>
                          {itemDescription !== itemDescriptionKey && (
                            <p className="text-sm text-secondary-text dark:text-dark-secondary-text leading-relaxed mt-auto pt-6 border-t border-border-light/30 dark:border-border-dark/30">
                              {itemDescription}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {menuSectionImages[category.id] && (
                    <div className="mt-16 w-full rounded-3xl overflow-hidden shadow-2xl relative group bg-background dark:bg-dark-bg border border-border-light/50 dark:border-border-dark/50">
                      <img
                        src={menuSectionImages[category.id].src}
                        alt={menuSectionImages[category.id].alt}
                        loading="lazy"
                        decoding="async"
                        width={2100}
                        height={900}
                        sizes="100vw"
                        referrerPolicy="no-referrer"
                        className="w-full h-auto max-h-[70vh] object-contain group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Services Bento */}
      <section className="py-32 bg-background dark:bg-dark-bg transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/mobile-bar" className="bg-section-bg dark:bg-dark-section-bg p-12 flex flex-col justify-between min-h-[400px] group rounded-2xl hover:bg-surface-light dark:hover:bg-panel-dark-hover transition-colors">
              <Truck size={32} className="text-black dark:text-white mb-8" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('home.services.mobileBar.title')}</h3>
                <p className="text-secondary-text dark:text-dark-secondary-text mb-8 leading-relaxed">{t('home.services.mobileBar.description')}</p>
                <span className="inline-flex items-center gap-2 text-black dark:text-white font-bold text-sm tracking-wide">
                  {t('home.services.mobileBar.cta')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            <Link to="/subscribe" className="bg-black dark:bg-white text-white dark:text-black p-12 flex flex-col justify-between min-h-[400px] group rounded-2xl hover:bg-near-black dark:hover:bg-surface-light transition-colors">
              <Coffee size={32} className="mb-8" />
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('home.services.community.title')}</h3>
                <p className="text-dark-secondary-text dark:text-secondary-text mb-8 leading-relaxed">{t('home.services.community.description')}</p>
                <span className="inline-flex items-center gap-2 text-white dark:text-black font-bold text-sm tracking-wide">
                  {t('home.services.community.cta')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            <Link to="/gift-cards" className="bg-section-bg dark:bg-dark-section-bg p-12 flex flex-col justify-between min-h-[400px] group rounded-2xl hover:bg-surface-light dark:hover:bg-panel-dark-hover transition-colors">
              <Gift size={32} className="text-black dark:text-white mb-8" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{t('home.services.giftCards.title')}</h3>
                <p className="text-secondary-text dark:text-dark-secondary-text mb-8 leading-relaxed">{t('home.services.giftCards.description')}</p>
                <span className="inline-flex items-center gap-2 text-black dark:text-white font-bold text-sm tracking-wide">
                  {t('home.services.giftCards.cta')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
