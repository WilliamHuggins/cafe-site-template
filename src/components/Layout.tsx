import { Link, Outlet, useLocation } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X, Instagram, Moon, Sun } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const wasMobileMenuOpen = useRef(false);
  const location = useLocation();

  useEffect(() => {
    // Check for saved theme preference, default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen || !mobileMenuRef.current) {
      if (wasMobileMenuOpen.current) {
        mobileMenuButtonRef.current?.focus();
      }
      wasMobileMenuOpen.current = mobileMenuOpen;
      return;
    }

    wasMobileMenuOpen.current = mobileMenuOpen;

    const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Menu', path: '/#menu' },
    { name: 'The Kaizen Family', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Mobile Bar', path: '/mobile-bar' },
    { name: 'Gift Cards', path: '/gift-cards' },
  ];

  const isHome = location.pathname === '/';
  const transparentNav = isHome && !isScrolled;

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-dark-bg text-foreground dark:text-background font-sans selection:bg-selection-light dark:selection:bg-secondary-text transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white dark:focus:bg-white dark:focus:text-black"
        >
          Skip to main content
        </a>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-4 xl:gap-8">
          <Link to="/" className={`flex items-center gap-3 group shrink-0 ${transparentNav ? 'text-white' : 'text-black dark:text-white'}`}>
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${transparentNav ? 'bg-white text-black group-hover:bg-surface-light' : 'bg-black dark:bg-white text-white dark:text-black group-hover:bg-cta-hover-dark dark:group-hover:bg-surface-light'}`}>
              <Coffee size={20} />
            </div>
            <span className="text-lg xl:text-xl font-bold tracking-tight whitespace-nowrap">KAIZEN & COFFEE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8 ml-4 xl:ml-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHash = link.path.startsWith('/#');
              
              if (isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                      transparentNav 
                        ? 'text-white/80 hover:text-white'
                        : 'text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                    transparentNav 
                      ? (isActive ? 'text-white border-b border-white pb-1' : 'text-white/80 hover:text-white')
                      : (isActive ? 'text-black dark:text-white border-b border-black dark:border-white pb-1' : 'text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white')
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6 ml-auto">
            <a 
              href="https://www.instagram.com/kaizenandcoffee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-sm transition-colors ${
                transparentNav 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-sm transition-colors ${
                transparentNav 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link
              to="/subscribe"
              className={`px-6 py-2.5 text-sm font-medium rounded-sm transition-all whitespace-nowrap ${
                transparentNav 
                  ? 'bg-white text-black hover:bg-surface-light' 
                  : 'bg-black dark:bg-white text-white dark:text-black hover:bg-cta-hover-dark dark:hover:bg-surface-light'
              }`}
            >
              Connect with Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <a 
              href="https://www.instagram.com/kaizenandcoffee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-sm transition-colors ${
                transparentNav 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-sm transition-colors ${
                transparentNav 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              ref={mobileMenuButtonRef}
              className={`p-2 ${transparentNav ? 'text-white' : 'text-black dark:text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 bg-background dark:bg-dark-bg pt-24 px-6 flex flex-col gap-6 lg:hidden"
        >
          {navLinks.map((link) => {
            const isHash = link.path.startsWith('/#');
            if (isHash) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-black dark:text-white"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-black dark:text-white"
              >
                {link.name}
              </Link>
            );
          })}
          <a 
            href="https://www.instagram.com/kaizenandcoffee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-bold tracking-tight text-black dark:text-white flex items-center gap-3"
          >
            Instagram <Instagram size={24} />
          </a>
          <Link
            to="/subscribe"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-black dark:bg-white text-white dark:text-black px-6 py-4 text-center font-bold rounded-sm"
          >
            Connect with Us
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-section-bg dark:bg-dark-section-bg py-20 mt-auto transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-sm flex items-center justify-center text-white dark:text-black">
                <Coffee size={16} />
              </div>
              <span className="text-lg font-bold tracking-tight text-black dark:text-white">KAIZEN & COFFEE</span>
            </div>
            <p className="text-secondary-text dark:text-dark-secondary-text text-sm max-w-xs leading-relaxed">
              Curating the perfect cup through the relentless pursuit of improvement.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">Explore</span>
              <a href="/#menu" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">Menu</a>
              <Link to="/about" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">The Kaizen Family</Link>
              <Link to="/mobile-bar" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">Mobile Bar</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">Connect</span>
              <Link to="/careers" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">Careers</Link>
              <Link to="/subscribe" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">Connect with Us</Link>
              <a href="https://www.instagram.com/kaizenandcoffee/" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                Instagram <Instagram size={14} />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">Shop</span>
              <Link to="/gift-cards" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-black dark:hover:text-white transition-colors">Gift Cards</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-text dark:text-dark-muted-text">Visit</span>
              <p className="text-sm text-secondary-text dark:text-dark-secondary-text">2337 S El Camino Real<br/>San Mateo, CA 94403</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Kaizen+and+Coffee" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-text dark:text-dark-secondary-text hover:text-accent-green dark:hover:text-accent-green transition-colors">Get Directions</a>
              <p className="text-sm text-secondary-text dark:text-dark-secondary-text">Everyday 7am - 4pm</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-text dark:text-dark-muted-text tracking-wider uppercase">© {new Date().getFullYear()} Kaizen & Coffee. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-text dark:text-dark-muted-text hover:text-black dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-text dark:text-dark-muted-text hover:text-black dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
