import { useEffect, useMemo, useState } from 'react';
import { menuStructure } from '../data/menu';
import { Helmet } from '../components/Helmet';
import { useTranslation } from 'react-i18next';

const translateOrFallback = (t: (key: string) => string, key: string, fallback: string) => {
  const translated = t(key);
  return translated === key ? fallback : translated;
};

export default function Menu() {
  const { t } = useTranslation();
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
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-black dark:text-white mb-6">{t('menuPage.heading')}</h1>
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
                  className={`text-left whitespace-nowrap px-4 py-2 lg:px-0 lg:py-1 text-sm font-bold tracking-wide transition-colors ${
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

          <div className="lg:w-3/4 space-y-24">
            {menuStructure.map((category) => (
              <div
                key={category.id}
                id={`category-${category.id}`}
                data-category={category.id}
                className="scroll-mt-32"
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white mb-4">
                    {translateOrFallback(t, `menuData.menu.categories.${category.id}.name`, category.id)}
                  </h2>
                  {category.noteCount > 0 && (
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-text dark:text-dark-muted-text">
                      {Array.from({ length: category.noteCount }).map((_, noteIdx) => {
                        const noteKey = `menuData.menu.categories.${category.id}.notes.${noteIdx}`;
                        const note = t(noteKey);
                        if (note === noteKey || !note.trim()) {
                          return null;
                        }

                        return (
                          <span key={noteIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-line-muted dark:bg-secondary-text rounded-full"></span>
                            {note}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {category.items.map((item) => {
                    const itemName = translateOrFallback(t, `menuData.menu.items.${item.id}.name`, item.id);
                    const itemDescriptionKey = `menuData.menu.items.${item.id}.description`;
                    const itemDescription = t(itemDescriptionKey);

                    return (
                      <div key={item.id} className="group">
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="text-lg font-bold text-black dark:text-white">{itemName}</h3>
                          <div className="flex-grow border-b border-dotted border-line-muted dark:border-secondary-text mx-4 opacity-50"></div>
                          <span className="text-sm font-bold text-black dark:text-white">{item.price}</span>
                        </div>
                        {itemDescription !== itemDescriptionKey && itemDescription && (
                          <p className="text-sm text-secondary-text dark:text-dark-secondary-text leading-relaxed pr-8">
                            {itemDescription}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
