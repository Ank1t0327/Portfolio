import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ArticleCard from '../components/cards/ArticleCard';
import { articles, articleCategories } from '../data/articles';

export default function Learning() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const featured = articles.filter((a) => a.featured);

  return (
    <div className="bg-ivory dark:bg-charcoal">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <SectionHeading
          label="LEARNING JOURNAL"
          title="Learning never really stops."
          subtitle="Notes, experiments, write-ups, and things I've learned while exploring technology and security."
        />

        {/* Featured */}
        {featured.length > 0 && activeCategory === 'All' && !searchQuery && (
          <div className="mb-12">
            <p className="section-label mb-4">FEATURED</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Filters + Search */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Scroll-able category pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0
                  ${activeCategory === cat
                    ? 'bg-forest-green text-white dark:bg-lime-accent dark:text-charcoal'
                    : 'bg-white dark:bg-charcoal/60 border border-border dark:border-muted-grey/20 text-muted-grey hover:border-forest-green dark:hover:border-lime-accent hover:text-forest-green dark:hover:text-lime-accent'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-grey" />
            <input
              type="text"
              placeholder="Search by title or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 w-full rounded-xl border border-border dark:border-muted-grey/20 bg-white dark:bg-charcoal/60 text-sm text-charcoal dark:text-ivory placeholder:text-muted-grey focus:outline-none focus:border-forest-green dark:focus:border-lime-accent transition-colors"
            />
          </div>
        </div>

        {/* Articles grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <BookOpen size={40} className="mx-auto text-muted-grey mb-4 opacity-40" />
            <p className="text-lg font-medium text-charcoal dark:text-ivory mb-1">Nothing found</p>
            <p className="text-sm text-muted-grey">Try a different search or category.</p>
          </motion.div>
        )}

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-xs text-muted-grey text-center font-mono"
        >
          These are sample entries. Articles will be expanded over time. Hashnode integration available on request.
        </motion.p>
      </section>
    </div>
  );
}
