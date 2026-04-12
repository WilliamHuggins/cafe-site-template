import { MapPin, Clock, Coffee, Truck, Gift } from 'lucide-react';
import { menuData } from '../data/menu';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Helmet } from '../components/Helmet';

export default function Home() {
  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Kaizen & Coffee | Specialty Coffee in San Mateo</title>
        <meta name="description" content="Visit Kaizen & Coffee in San Mateo for specialty coffee, seasonal drinks, pastries, and welcoming hospitality inspired by the philosophy of Kaizen." />
      </Helmet>
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/6884026681d9118bfae4cfd0_3e503737d933cf16a62f589362d9b1f41b578b4b.png" 
            alt="Barista pouring latte art" 
            decoding="async"
            width={1920}
            height={1280}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="font-serif font-normal text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              The relentless pursuit of <em className="italic text-accent-olive">the perfect cup.</em>
            </h1>
            <p className="text-surface-light text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              A specialty coffee laboratory in San Mateo, CA. We apply the philosophy of Kaizen to every roast, every pour, and every interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                href="#menu"
                onClick={scrollToMenu}
                className="group flex items-center gap-3"
                showArrow
              >
                VIEW MENU
              </Button>
              <Button to="/mobile-bar" className="flex items-center gap-3">
                BOOK MOBILE BAR
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>2337 S El Camino Real</span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Kaizen+and+Coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-sm border border-white/40 px-3 py-1 font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  DIRECTIONS
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Open Daily 7am - 4pm</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end items-center flex-1">
            <img 
              src="https://cdn.prod.website-files.com/67b51f7e456c7eebdc981649/68840587b4916f147e2cb7c8_logo_badge_2x.webp" 
              alt="Kaizen & Coffee Badge" 
              loading="lazy"
              decoding="async"
              width={320}
              height={320}
              sizes="320px"
              className="w-80 h-80 object-contain drop-shadow-2xl"
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
                label="Our Story"
                title={
                  <>
                    The pursuit of better,
                    <br />
                  </>
                }
                emphasis="every single day."
              />
              <div className="space-y-6 text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed">
                <p>
                  "Kaizen" is a Japanese philosophy that translates to "continuous improvement." It is the belief that small, ongoing positive changes can reap major improvements. 
                </p>
                <p>
                  At Kaizen & Coffee, this isn't just a name—it's the operational framework for our entire café. From the precision of our espresso extraction to the sourcing of our matcha from Kagoshima, we are obsessed with refining the details.
                </p>
                <p>
                  We built this space in San Mateo to be a laboratory of hospitality. A place where the coffee is treated with deep reverence, but the service is always warm, approachable, and rooted in the neighborhood.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-section-bg dark:bg-dark-section-bg">
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1024&auto=format&fit=crop"
                srcSet="
                  https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=640&auto=format&fit=crop 640w,
                  https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1024&auto=format&fit=crop 1024w,
                  https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop 1600w
                "
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Coffee shop interior" 
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
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">The Coffee</h3>
              <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                We partner with <a href="https://www.blackwhiteroasters.com/?srsltid=AfmBOootQQ34NEACakvUa6ZU90jFlw8CPjj59F2v1mUPhQu7FtL8UCeP" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white font-medium border-b border-black dark:border-white hover:text-accent-brown hover:border-accent-brown transition-colors">Black & White Roasters</a> for our core espresso and filter offerings, ensuring a consistent, chocolate-and-berry forward profile. Our single-origin rotation highlights the best seasonal harvests from around the world.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">The Ingredients</h3>
              <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                Our signature lattes are built on house-made syrups and sauces. We import black sesame paste and Okinawa brown sugar directly from Japan, and craft our miso caramel from scratch to achieve the perfect umami balance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">The Hospitality</h3>
              <p className="text-secondary-text dark:text-dark-secondary-text leading-relaxed">
                Precision in the cup means nothing without warmth in the interaction. We believe a great café is a cornerstone of its community. We are here to remember your name, your order, and make your day slightly better.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              label="The Philosophy"
              title="Kaizen:"
              emphasis="Continuous Improvement."
              align="center"
              description="Every cup is an iteration. Every roast is a refinement. We apply the Japanese philosophy of Kaizen to the art of coffee, ensuring your daily ritual is never static, but always evolving toward perfection."
              className="mb-8"
            />
            <Button to="/about" variant="text">
              The Kaizen Family
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
              <source src="https://i.imgur.com/Ganpjkj.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4">
                <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-white/90 mb-4 block drop-shadow-md">Signature Offerings</span>
                <h2 className="font-serif font-normal text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                  Crafted with <em className="italic text-accent-olive">intention.</em>
                </h2>
              </div>
            </div>
          </div>

          {/* Digital Card Menu */}
          <div>
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black dark:text-white mb-6">The Menu</h2>
              <p className="text-secondary-text dark:text-dark-secondary-text text-lg max-w-2xl mx-auto">
                A curated selection of specialty coffee, Japanese-inspired signature lattes, and elevated toast. Prepared with precision and care.
              </p>
            </div>
            
            <div className="space-y-8">
              {Object.entries(menuData).map(([category, data]) => (
                <div key={category} className="mb-24">
                  <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">{category}</h3>
                    {data.notes.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {data.notes.map((note, idx) => (
                          <span key={idx} className="text-xs font-bold uppercase tracking-wider text-muted-text dark:text-dark-muted-text bg-white dark:bg-dark-bg px-3 py-1.5 rounded-sm shadow-sm border border-border-light/50 dark:border-border-dark/50">
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.items.map((item, idx) => (
                      <div key={idx} className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light/50 dark:border-border-dark/50 flex flex-col group">
                        <div className="flex justify-between items-start mb-4 gap-4">
                          <h4 className="text-xl font-bold text-black dark:text-white group-hover:text-accent-brown transition-colors">{item.name}</h4>
                          <span className="text-sm font-bold bg-background dark:bg-dark-section-bg px-3 py-1 rounded-sm text-black dark:text-white whitespace-nowrap">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-secondary-text dark:text-dark-secondary-text leading-relaxed mt-auto pt-6 border-t border-border-light/30 dark:border-border-dark/30">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Interspersed Images */}
                  {category === 'Signature Lattes' && (
                    <div className="mt-16 w-full rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] md:aspect-[21/9] group">
                      <img 
                        src="https://i.postimg.cc/RF5K1mpm/Mission-Mocha.png" 
                        alt="Mission Mocha" 
                        loading="lazy"
                        decoding="async"
                        width={2100}
                        height={900}
                        sizes="100vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 md:p-12">
                        <div>
                          <span className="uppercase tracking-[0.2em] text-xs font-bold text-white/80 mb-3 block">Featured</span>
                          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Mission Mocha</h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {category === 'Espresso' && (
                    <div className="mt-16 w-full rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] md:aspect-[21/9] group">
                      <img 
                        src="https://i.postimg.cc/8ckFwzhb/espresso-pairing-w-Royce-chocolate-from-Japan-organic-berries.png" 
                        alt="Espresso Pairing" 
                        loading="lazy"
                        decoding="async"
                        width={2100}
                        height={900}
                        sizes="100vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
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
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Mobile Coffee Bar</h3>
                <p className="text-secondary-text dark:text-dark-secondary-text mb-8 leading-relaxed">Bring the Kaizen experience to your private events, weddings, and corporate gatherings.</p>
                <span className="inline-flex items-center gap-2 text-black dark:text-white font-bold text-sm tracking-wide">
                  Book Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
            
            <Link to="/subscribe" className="bg-black dark:bg-white text-white dark:text-black p-12 flex flex-col justify-between min-h-[400px] group rounded-2xl hover:bg-near-black dark:hover:bg-surface-light transition-colors">
              <Coffee size={32} className="mb-8" />
              <div>
                <h3 className="text-2xl font-bold mb-4">The Community</h3>
                <p className="text-dark-secondary-text dark:text-secondary-text mb-8 leading-relaxed">Exclusive access to seasonal drops, early invites to cupping workshops, and neighborhood events.</p>
                <span className="inline-flex items-center gap-2 text-white dark:text-black font-bold text-sm tracking-wide">
                  Join Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
            
            <Link to="/gift-cards" className="bg-section-bg dark:bg-dark-section-bg p-12 flex flex-col justify-between min-h-[400px] group rounded-2xl hover:bg-surface-light dark:hover:bg-panel-dark-hover transition-colors">
              <Gift size={32} className="text-black dark:text-white mb-8" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Gift Cards</h3>
                <p className="text-secondary-text dark:text-dark-secondary-text mb-8 leading-relaxed">Give the gift of perfection. Redeemable in-store for beans, brew gear, or beverages.</p>
                <span className="inline-flex items-center gap-2 text-black dark:text-white font-bold text-sm tracking-wide">
                  Purchase <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
