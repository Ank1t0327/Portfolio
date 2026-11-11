import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border dark:border-muted-grey/20 bg-white dark:bg-[#1a1e1b] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 font-bold text-xl tracking-tight text-charcoal dark:text-ivory hover:text-forest-green dark:hover:text-lime-accent transition-colors mb-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-forest-green text-lime-accent text-sm font-mono font-bold">A</span>
              <span className="font-mono">nkit<span className="text-forest-green dark:text-lime-accent">.</span></span>
            </Link>
            <p className="text-sm text-muted-grey leading-relaxed max-w-xs">
              Cybersecurity professional focused on offensive security, security research, and building practical tools.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label mb-4">Pages</p>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Learning', path: '/learning' },
                { label: 'Achievements', path: '/achievements' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-grey hover:text-forest-green dark:hover:text-lime-accent transition-colors squiggle-hover w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="section-label mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: Github, label: 'github.com/Ank1t0327', href: 'https://github.com/Ank1t0327' },
                { icon: Linkedin, label: 'LinkedIn — add your URL', href: 'https://linkedin.com/in/YOUR_LINKEDIN' },
                { icon: Mail, label: 'your.email@example.com', href: 'mailto:your.email@example.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-grey hover:text-charcoal dark:hover:text-ivory transition-colors group w-fit"
                >
                  <Icon size={15} className="group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors flex-shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border dark:border-muted-grey/20 gap-3">
          <p className="text-xs text-muted-grey">
            © {year} Ankit — Designed & built with <span className="text-red-400">♥</span> by Ankit.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs text-muted-grey hover:text-forest-green dark:hover:text-lime-accent transition-colors group"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
