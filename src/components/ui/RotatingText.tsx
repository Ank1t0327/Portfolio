import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  interval?: number;
}

export function RotatingText({ words, interval = 3000 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className="relative inline-block overflow-hidden h-[1.2em] align-bottom text-brand-teal">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block absolute inset-0 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible">{words[0]}</span> {/* For width sizing */}
    </div>
  );
}
