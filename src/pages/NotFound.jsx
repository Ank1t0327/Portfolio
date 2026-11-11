import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory dark:bg-charcoal">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-widest text-muted-grey uppercase mb-6">404 — Page Not Found</p>

          <motion.div
            animate={{ rotate: [0, -3, 3, -2, 2, 0] }}
            transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
            className="text-8xl mb-6 select-none"
          >
            🔍
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-ivory mb-4">
            Lost in the system<span className="text-forest-green dark:text-lime-accent">.</span>
          </h1>

          <p className="text-muted-grey max-w-sm mx-auto mb-8 leading-relaxed">
            This page doesn't exist — or it moved somewhere else. Let's get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              <Home size={15} /> Go home
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft size={15} /> Go back
            </button>
          </div>

          <div className="mt-10 font-mono text-xs text-muted-grey bg-white dark:bg-charcoal/80 border border-border dark:border-muted-grey/20 rounded-xl px-5 py-4 inline-block text-left">
            <span className="text-forest-green dark:text-lime-accent">$</span> curl -I {window.location.href}
            <br />
            <span className="text-muted-grey">HTTP/1.1 </span>
            <span className="text-red-400">404 Not Found</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
