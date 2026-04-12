import { useEffect, useRef } from 'react';

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      elements.forEach(el => observerRef.current?.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-background dark:bg-dark-bg text-foreground dark:text-dark-foreground font-sans overflow-x-hidden transition-colors duration-300 pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-8 py-20 relative">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(163, 177, 138, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(196, 149, 106, 0.1) 0%, transparent 50%)'
        }}></div>
        <div className="font-jp font-light text-6xl md:text-8xl text-foreground/15 dark:text-dark-foreground/15 tracking-[0.5em] mb-4 animate-[fadeDown_1.2s_ease-out_both]">
          改善
        </div>
        <h1 className="font-serif font-normal text-4xl md:text-6xl lg:text-7xl leading-[1.15] max-w-3xl text-foreground dark:text-dark-foreground animate-[fadeDown_1.2s_ease-out_0.15s_both]">
          A Family, a Name, a&nbsp;Pursuit of <em className="italic text-accent-green">Better Coffee.</em>
        </h1>
        <p className="text-base tracking-[0.12em] uppercase text-accent-green mt-8 font-medium animate-[fadeDown_1.2s_ease-out_0.3s_both]">
          San Mateo, California
        </p>
        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-[fadeDown_1.2s_ease-out_0.6s_both]">
          <span className="text-xs tracking-[0.15em] uppercase opacity-40">Our story</span>
          <div className="w-px h-10 bg-foreground dark:bg-dark-foreground opacity-25 animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-28 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div>
            <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-foreground dark:text-dark-foreground">
              It started with <em className="italic text-accent-green">sleepless nights</em>
            </h2>
            <div className="space-y-5 text-[0.95rem] leading-[1.85] text-foreground/75 dark:text-dark-foreground/75">
              <p>Five years ago, we weren't coffee people. Then our son Kaizen was born — and everything changed. Partly driven by the beautiful exhaustion of new parenthood, we dove headfirst into the world of specialty coffee.</p>
              <p>We trained at the Texas Coffee School and Barista Hustle, sought out tastings with regional coffee leaders, and when the pandemic arrived, we joined a growing community of serious home baristas studying the science and craft behind every cup.</p>
              <p>On March 31, 2023, nearly four years into that journey, we opened the doors of Kaizen & Coffee right here in San Mateo — a family-run shop named for both our son and the Japanese philosophy that guides everything we do.</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-panel-light dark:bg-dark-section-bg rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute -top-4 -right-2 font-jp font-light text-[8rem] text-foreground/15 dark:text-dark-foreground/15 leading-none">
                改善
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-accent-green mb-3 font-medium relative z-10">
                Japanese · noun
              </div>
              <div className="font-serif text-4xl font-medium mb-1 relative z-10 text-foreground dark:text-dark-foreground">
                Kaizen
              </div>
              <div className="font-jp text-lg text-foreground/50 dark:text-dark-foreground/50 mb-6 font-light relative z-10">
                改善 · かいぜん
              </div>
              <div className="text-[0.95rem] leading-[1.7] text-foreground/70 dark:text-dark-foreground/70 border-t border-foreground/10 dark:border-dark-foreground/10 pt-5 italic relative z-10">
                The practice of continuous improvement — a commitment to making each day, each cup, each interaction a little better than the last.
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
            alt="Shane Balasbas, Jason Naraja, and their son Kaizen in front of Kaizen and Coffee"
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover object-[center_20%]"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 p-12 pt-24 bg-gradient-to-t from-foreground/80 to-transparent text-dark-foreground text-sm tracking-wide italic">
            Shane, Jason & Kaizen — the family behind the café
          </figcaption>
        </figure>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-6 py-8 max-w-md mx-auto">
        <div className="flex-1 h-px bg-foreground/10 dark:bg-dark-foreground/10"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-accent-olive"></div>
        <div className="flex-1 h-px bg-foreground/10 dark:bg-dark-foreground/10"></div>
      </div>

      {/* Journey Timeline */}
      <section className="bg-gradient-to-br from-foreground to-gradient-dark-end dark:from-foreground dark:to-foreground text-dark-foreground py-28 px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 10% 90%, rgba(122, 139, 94, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(196, 149, 106, 0.1) 0%, transparent 40%)'
        }}></div>
        <div className="max-w-6xl mx-auto relative z-10 fade-in-section opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl text-center mb-16 text-dark-foreground">
            The Road to <em className="italic text-accent-olive">Opening Day.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2018', title: 'Kaizen is born', desc: 'Our son arrives — and with him, the sleep-deprived discovery that great coffee matters.' },
              { year: '2019', title: 'The deep dive', desc: 'Formal training, tastings with roasters, and a growing obsession with the craft behind the cup.' },
              { year: '2020', title: 'Home barista era', desc: 'The pandemic turns our kitchen into a lab. Coffee science becomes a daily practice.' },
              { year: '2023', title: 'Doors open', desc: 'After converting a former music studio into a café — and weathering a series of delays — Kaizen & Coffee opens on El Camino Real.' }
            ].map((item, i) => (
              <div key={i} className="relative pt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-dark-foreground/15"></div>
                <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-accent-olive"></div>
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
          <div className="text-xs tracking-[0.15em] uppercase text-accent-green font-medium mb-3">What We Believe</div>
          <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground dark:text-dark-foreground mb-12">
            Built on <em className="italic text-accent-green">three principles.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '◯', title: 'Be the Bridge', desc: 'Specialty coffee can feel intimidating. We want to be the welcoming first step for anyone curious about what great coffee tastes like — no gatekeeping, no pretension, just good cups and good conversation.' },
              { icon: '△', title: 'Continuous Improvement', desc: 'Kaizen isn\'t just a name — it\'s how we run the shop. Every day we refine our process, our drinks, our hospitality. Getting better never stops.' },
              { icon: '□', title: 'Family First', desc: 'This café exists because of our family, and we run it like one. From the housemade syrups to the pastry case, everything here is chosen with the care you\'d bring to your own kitchen.' }
            ].map((value, i) => (
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
          <div className="text-xs tracking-[0.15em] uppercase text-accent-green font-medium mb-3">Our Partners</div>
          <h2 className="font-serif font-normal text-3xl md:text-4xl mb-10 text-foreground dark:text-dark-foreground">
            Sourced with <em className="italic text-accent-green">intention.</em>
          </h2>
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
                  <a href={partner.link} target="_blank" rel="noopener noreferrer" className="text-foreground dark:text-dark-foreground border-b border-foreground/15 dark:border-dark-foreground/15 pb-0.5 hover:text-accent-green hover:border-accent-green dark:hover:text-accent-green dark:hover:border-accent-green transition-all">
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
          <div className="text-xs tracking-[0.15em] uppercase text-accent-green font-medium mb-3">Come Say Hello</div>
          <h2 className="font-serif font-normal text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground dark:text-dark-foreground">
            We saved you <em className="italic text-accent-green">a seat.</em>
          </h2>
          <p className="text-[0.95rem] leading-[1.7] text-foreground/65 dark:text-dark-foreground/65 mb-2">
            2337 S El Camino Real, San Mateo, CA
          </p>
          <a 
            href="https://instagram.com/kaizenandcoffee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-foreground dark:text-dark-foreground text-[0.85rem] tracking-[0.08em] uppercase font-medium border-2 border-foreground/20 dark:border-dark-foreground/20 px-7 py-3 rounded-sm hover:bg-foreground hover:text-dark-foreground dark:hover:bg-dark-foreground dark:hover:text-foreground hover:border-foreground dark:hover:border-dark-foreground transition-all"
          >
            @kaizenandcoffee
          </a>
        </div>
      </section>

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
