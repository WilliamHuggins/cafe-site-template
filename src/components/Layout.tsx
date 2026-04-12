import { Link, Outlet, useLocation } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X, Instagram, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
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
    <div className="min-h-screen flex flex-col bg-[#fbf9f8] dark:bg-[#121212] text-[#1b1c1c] dark:text-[#fbf9f8] font-sans selection:bg-[#e5e2e1] dark:selection:bg-[#444748] transition-colors duration-300">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#fbf9f8]/90 dark:bg-[#121212]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-4 xl:gap-8">
          <Link to="/" className={`flex items-center gap-3 group shrink-0 ${transparentNav ? 'text-white' : 'text-black dark:text-white'}`}>
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${transparentNav ? 'bg-white text-black group-hover:bg-[#e4e2e2]' : 'bg-black dark:bg-white text-white dark:text-black group-hover:bg-[#28180a] dark:group-hover:bg-[#e4e2e2]'}`}>
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
                        : 'text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white'
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
                      : (isActive ? 'text-black dark:text-white border-b border-black dark:border-white pb-1' : 'text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white')
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
              className={`p-2 rounded-full transition-colors ${
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
              className={`p-2 rounded-full transition-colors ${
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
                  ? 'bg-white text-black hover:bg-[#e4e2e2]' 
                  : 'bg-black dark:bg-white text-white dark:text-black hover:bg-[#28180a] dark:hover:bg-[#e4e2e2]'
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
              className={`p-2 rounded-full transition-colors ${
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
              className={`p-2 rounded-full transition-colors ${
                transparentNav 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className={`p-2 ${transparentNav ? 'text-white' : 'text-black dark:text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbf9f8] dark:bg-[#121212] pt-24 px-6 flex flex-col gap-6 lg:hidden">
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
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#efeded] dark:bg-[#1a1a1a] py-20 mt-auto transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-sm flex items-center justify-center text-white dark:text-black">
                <Coffee size={16} />
              </div>
              <span className="text-lg font-bold tracking-tight text-black dark:text-white">KAIZEN & COFFEE</span>
            </div>
            <p className="text-[#444748] dark:text-[#c8c6c5] text-sm max-w-xs leading-relaxed">
              Curating the perfect cup through the relentless pursuit of improvement.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#858383] dark:text-[#747878]">Explore</span>
              <a href="/#menu" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white transition-colors">Menu</a>
              <Link to="/about" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white transition-colors">The Kaizen Family</Link>
              <Link to="/mobile-bar" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white transition-colors">Mobile Bar</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#858383] dark:text-[#747878]">Connect</span>
              <Link to="/careers" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white transition-colors">Careers</Link>
              <Link to="/subscribe" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white transition-colors">Connect with Us</Link>
              <a href="https://www.instagram.com/kaizenandcoffee/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                Instagram <Instagram size={14} />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#858383] dark:text-[#747878]">Shop</span>
              <Link to="/gift-cards" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-black dark:hover:text-white transition-colors">Gift Cards</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#858383] dark:text-[#747878]">Visit</span>
              <p className="text-sm text-[#444748] dark:text-[#c8c6c5]">2337 S El Camino Real<br/>San Mateo, CA 94403</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Kaizen+and+Coffee" target="_blank" rel="noopener noreferrer" className="text-sm text-[#444748] dark:text-[#c8c6c5] hover:text-[#7A8B5E] dark:hover:text-[#7A8B5E] transition-colors">Get Directions</a>
              <p className="text-sm text-[#444748] dark:text-[#c8c6c5]">Everyday 7am - 4pm</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[#dbdad9] dark:border-[#303031] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#858383] dark:text-[#747878] tracking-wider uppercase">© {new Date().getFullYear()} Kaizen & Coffee. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#858383] dark:text-[#747878] hover:text-black dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs text-[#858383] dark:text-[#747878] hover:text-black dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
