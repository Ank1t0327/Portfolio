import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useThemeContext } from '../../context/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Learning', path: '/learning' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur
          ${scrolled
            ? 'bg-ivory/90 dark:bg-charcoal/90 border-b border-border dark:border-muted-grey/20 shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1.5 font-bold text-xl tracking-tight text-charcoal dark:text-ivory hover:text-forest-green dark:hover:text-lime-accent transition-colors duration-200 flex-shrink-0"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-forest-green text-lime-accent text-sm font-mono font-bold">
              A
            </span>
            <span className="font-mono">nkit<span className="text-forest-green dark:text-lime-accent animate-blink">.</span></span>
          </Link>

          {/* Desktop nav — pill style */}
          <div className="hidden md:flex items-center gap-1 bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl px-2 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive(link.path)
                    ? 'bg-charcoal dark:bg-lime-accent text-white dark:text-charcoal'
                    : 'text-muted-grey hover:text-charcoal dark:hover:text-ivory hover:bg-soft-sage/60 dark:hover:bg-muted-grey/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/Ank1t0327" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-xl text-muted-grey hover:text-charcoal dark:hover:text-ivory hover:bg-soft-sage/60 dark:hover:bg-muted-grey/10 transition-all duration-200"
              aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-xl text-muted-grey hover:text-charcoal dark:hover:text-ivory hover:bg-soft-sage/60 dark:hover:bg-muted-grey/10 transition-all duration-200"
              aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-muted-grey hover:text-charcoal dark:hover:text-ivory hover:bg-soft-sage/50 dark:hover:bg-muted-grey/10 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal/20 dark:bg-black/40" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-16 left-4 right-4 bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <div className="p-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive(link.path)
                    ? 'bg-charcoal dark:bg-lime-accent text-white dark:text-charcoal'
                    : 'text-charcoal dark:text-ivory hover:bg-soft-sage/50 dark:hover:bg-muted-grey/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-4 pt-3 mt-1 border-t border-border dark:border-muted-grey/20">
              <a href="https://github.com/Ank1t0327" target="_blank" rel="noopener noreferrer"
                className="text-muted-grey hover:text-charcoal dark:hover:text-ivory transition-colors" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"
                className="text-muted-grey hover:text-charcoal dark:hover:text-ivory transition-colors" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
