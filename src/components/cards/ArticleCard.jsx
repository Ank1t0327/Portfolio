import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article, index = 0 }) {
  const categoryColors = {
    'Red Team Notes': 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400',
    'Blue Team Notes': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
    'CTF Write-ups': 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400',
    'Linux & Bash': 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400',
    'Cybersecurity Learning Journal': 'bg-soft-sage/60 dark:bg-forest-green/20 text-forest-green dark:text-lime-accent',
    'Project Builds': 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400',
    'Infrastructure & DevOps': 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
    'Lab Experiments': 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400',
  };

  const catColor = categoryColors[article.category] || 'bg-soft-sage/60 text-forest-green';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="card group flex flex-col h-full"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${catColor}`}>
          {article.category}
        </span>
        <span className="text-xs text-muted-grey font-mono flex-shrink-0">{article.date}</span>
      </div>

      <h3 className="text-base font-semibold text-charcoal dark:text-ivory mb-2 group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors leading-snug">
        {article.title}
      </h3>

      <p className="text-sm text-muted-grey leading-relaxed flex-grow mb-4">
        {article.excerpt}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {article.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5 rounded bg-soft-sage/40 dark:bg-muted-grey/10 text-muted-grey"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border dark:border-muted-grey/20">
        <span className="flex items-center gap-1.5 text-xs text-muted-grey">
          <Clock size={12} />
          {article.readTime}
        </span>
        <Link
          to={`/learning/${article.id}`}
          className="flex items-center gap-1 text-sm font-medium text-forest-green dark:text-lime-accent hover:gap-2 transition-all duration-200"
        >
          Read <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}
