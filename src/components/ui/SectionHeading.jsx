import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, subtitle, centered = false, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`section-label mb-3 ${light ? 'text-soft-sage' : ''}`}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight
          ${light ? 'text-ivory' : 'text-charcoal dark:text-ivory'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={`mt-3 text-base leading-relaxed max-w-2xl
            ${centered ? 'mx-auto' : ''}
            ${light ? 'text-soft-sage/80' : 'text-muted-grey'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
