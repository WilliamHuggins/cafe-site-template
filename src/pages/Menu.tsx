import { useEffect, useMemo, useState } from 'react';
import { menuStructure } from '../data/menu';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';
import useFadeInObserver from '../hooks/useFadeInObserver';

const sectionImages: Record<string, { src: string; alt: string }> = {
  coffee: {
    src: 'https://i.postimg.cc/gkYpxghf/Chat-GPT-Image-Apr-12-2026-02-44-37-PM.png',
    alt: 'Close-up of espresso being pulled in warm cinematic light',
  },
  specialty: {
    src: 'https://i.postimg.cc/bNzPZmbX/Chat-GPT-Image-Apr-12-2026-02-48-29-PM.png',
    alt: 'Matcha drink preparation in soft natural light',
  },
  signature: {
    src: 'https://i.postimg.cc/VLYwJKMQ/Chat-GPT-Image-Apr-12-2026-02-49-21-PM.png',
    alt: 'Signature latte with oranges and greenery on marble',
  },
  kitchen: {
    src: 'https://i.postimg.cc/8P1G7Zv2/Chat-GPT-Image-Apr-12-2026-02-50-34-PM.png',
    alt: 'House-made cinnamon buns styled on small plates',
  },
  savory: {
    src: 'https://i.postimg.cc/xT0QX6H2/Chat-GPT-Image-Apr-12-2026-02-51-34-PM.png',
    alt: 'Savory plate with clean plating and natural tones',
  },
};

const translateOrFallback = (t: (key: string) => string, key: string, fallback: string) => {
  const translated = t(key);
  return translated === key ? fallback : translated;
};

export default function Menu() {
  const { t } = useTranslation();
  useFadeInObserver(0.15);

  const categories = useMemo(() => menuStructure.map((category) => category.id), []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    const sections = categories
      .map((category) => ({ category, element: document.getElementById(`category-${category}`) }))
      .filter((section): section is { category: string; element: HTMLElement } => section.element !== null);

    if (!sections.length) return;

    const visibleSections = new Map<string, number>();

    const updateActiveSection = () => {
      if (!visibleSections.size) return;

      const [nextActive] = [...visibleSections.entries()].sort((a, b) => a[1] - b[1])[0];
      setActiveCategory(nextActive);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const category = entry.target.getAttribute('data-category');
          if (!category) return;

          if (entry.isIntersecting) {
            visibleSections.set(category, entry.boundingClientRect.top);
          } else {
            visibleSections.delete(category);
          }
        });

        updateActiveSection();
      },
      {
        root: null,
        rootMargin: '-128px 0px -45% 0px',
        threshold: [0, 0.2, 0.5],
      },
    );

    sections.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, [categories]);

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`category-${category}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('menuPage.seoTitle')}</title>
        <meta name="description" content={t('menuPage.seoDescription')} />
      </Helmet>
      <div className="pt-32 pb-24 bg-background dark:bg-dark-bg min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black dark:text-white mb-6">{t('menuPage.heading')}</h1>
            <p className="text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed">
              {t('menuPage.description')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/4">
              <div className="sticky top-32 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {categories.map((categoryId) => (
                  <button
                    key={categoryId}
                    onClick={() => scrollToCategory(categoryId)}
                    className={`text-left whitespace-nowrap px-4 py-2 lg:px-0 lg:py-1 text-xs uppercase tracking-[0.16em] transition-colors ${
                      activeCategory === categoryId
                        ? 'text-black dark:text-white lg:border-l-2 lg:border-black dark:lg:border-white lg:pl-4'
                        : 'text-muted-text dark:text-dark-muted-text hover:text-black dark:hover:text-white lg:border-l-2 lg:border-transparent lg:pl-4'
                    }`}
                  >
                    {translateOrFallback(t, `menuData.menu.categories.${categoryId}.name`, categoryId)}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-3/4 space-y-20">
              {menuStructure.map((category, index) => (
                <section
                  key={category.id}
                  id={`category-${category.id}`}
                  data-category={category.id}
                  className={`scroll-mt-32 fade-in-section opacity-0 translate-y-8 transition-all duration-700 ease-out ${index > 0 ? 'pt-16 border-t border-line-muted/60 dark:border-secondary-text/30' : ''}`}
                >
                  <div className="mb-10">
                    <h2 className="text-sm uppercase tracking-[0.18em] text-[#7B8A7B] dark:text-[#a3b8a3] mb-8">
                      {translateOrFallback(t, `menuData.menu.categories.${category.id}.name`, category.id)}
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {category.items.map((item) => {
                      const itemName = translateOrFallback(t, `menuData.menu.items.${item.id}.name`, item.id);
                      const itemDescriptionKey = `menuData.menu.items.${item.id}.description`;
                      const itemDescription = t(itemDescriptionKey);

                      return (
                        <div key={item.id} className="pb-1">
                          <div className="flex justify-between items-baseline gap-6">
                            <h3 className={`text-lg text-black dark:text-white ${category.id === 'signature' ? 'italic text-[#496052] dark:text-[#c7d5c7]' : ''}`}>
                              {itemName}
                            </h3>
                            <span className="text-base text-black dark:text-white">{item.price}</span>
                          </div>
                          {itemDescription !== itemDescriptionKey && itemDescription && (
                            <p className="text-sm mt-2 text-muted-text dark:text-dark-muted-text leading-relaxed">
                              {itemDescription}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-12 rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg group">
                    <img
                      src={sectionImages[category.id].src}
                      alt={sectionImages[category.id].alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 md:h-80 object-cover saturate-95 contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
