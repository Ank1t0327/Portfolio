import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'WORK', path: '/projects' },
  { name: 'LAB', path: '/labs' },
  { name: 'BLOG', path: '/blog' },
  { name: 'HEY', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full z-50 bg-theme-bg border-b-[1.5px] border-theme-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold tracking-tight text-theme-text transition-opacity">
              patch<span className="text-theme-blue">.</span>
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-150 relative ${
                      isActive 
                        ? 'text-theme-text border-b-2 border-theme-blue' 
                        : 'text-theme-muted1 hover:text-theme-text'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-theme-muted1 hover:text-theme-text focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-theme-bg border-b-[1.5px] border-theme-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-bold uppercase tracking-widest transition-all ${
                      isActive 
                        ? 'text-theme-text bg-theme-blue/10 border-l-4 border-theme-blue' 
                        : 'text-theme-muted1 hover:text-theme-text hover:bg-theme-card'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
