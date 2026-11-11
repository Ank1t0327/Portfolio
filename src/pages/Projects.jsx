import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/cards/ProjectCard';
import { projects, categories } from '../data/projects';

const categoryEmojis = {
  'All': '✦',
  'Security Tools': '🛡️',
  'Automation': '⚡',
  'Linux': '🐧',
  'Development': '💻',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = projects.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-ivory dark:bg-charcoal">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label mb-4"
        >
          WORK
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.07 }}
          className="text-5xl md:text-6xl font-bold text-charcoal dark:text-ivory mb-3"
        >
          Things I've<br />
          <span className="text-forest-green dark:text-lime-accent">built.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.14 }}
          className="text-muted-grey mb-12 max-w-lg"
        >
          Tools, experiments, and projects built while exploring security, automation, and development.
        </motion.p>

        {/* Filters + Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-charcoal dark:bg-lime-accent text-white dark:text-charcoal shadow-sm'
                    : 'bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 text-muted-grey hover:border-forest-green dark:hover:border-lime-accent hover:text-forest-green dark:hover:text-lime-accent'
                  }`}
              >
                <span>{categoryEmojis[cat] || '•'}</span> {cat}
              </motion.button>
            ))}
          </div>

          {/* Search */}
          <div className="relative sm:ml-auto">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-grey" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 w-full sm:w-56 rounded-full border border-border dark:border-muted-grey/20 bg-white dark:bg-[#1f2421] text-sm text-charcoal dark:text-ivory placeholder:text-muted-grey focus:outline-none focus:border-forest-green dark:focus:border-lime-accent transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-semibold text-charcoal dark:text-ivory mb-1">No projects found</p>
            <p className="text-sm text-muted-grey">Try a different search term or category.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
