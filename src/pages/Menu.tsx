import { useState } from 'react';
import { menuData } from '../data/menu';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0]);

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#fbf9f8] dark:bg-[#121212] min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-black dark:text-white mb-6">Our Offerings</h1>
          <p className="text-[#444748] dark:text-[#c8c6c5] text-lg leading-relaxed">
            A curated selection of specialty coffee, Japanese-inspired signature lattes, and elevated toast. Prepared with precision and care.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {Object.keys(menuData).map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className={`text-left whitespace-nowrap px-4 py-2 lg:px-0 lg:py-1 text-sm font-bold tracking-wide transition-colors ${
                    activeCategory === category 
                      ? 'text-black dark:text-white lg:border-l-2 lg:border-black dark:lg:border-white lg:pl-4' 
                      : 'text-[#858383] dark:text-[#747878] hover:text-black dark:hover:text-white lg:border-l-2 lg:border-transparent lg:pl-4'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Content */}
          <div className="lg:w-3/4 space-y-24">
            {Object.entries(menuData).map(([category, data]) => (
              <div key={category} id={`category-${category}`} className="scroll-mt-32">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white mb-4">{category}</h2>
                  {data.notes.length > 0 && (
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#858383] dark:text-[#747878]">
                      {data.notes.map((note, idx) => (
                        <span key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#d1d1d1] dark:bg-[#444748] rounded-full"></span>
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {data.items.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-lg font-bold text-black dark:text-white">{item.name}</h3>
                        <div className="flex-grow border-b border-dotted border-[#d1d1d1] dark:border-[#444748] mx-4 opacity-50"></div>
                        <span className="text-sm font-bold text-black dark:text-white">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-[#444748] dark:text-[#c8c6c5] leading-relaxed pr-8">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
