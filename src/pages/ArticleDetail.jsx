import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);
  const related = articles.filter((a) => a.id !== id && a.category === article?.category).slice(0, 2);

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-5xl mb-4">📄</p>
        <h1 className="text-2xl font-bold text-charcoal dark:text-ivory mb-3">Article not found</h1>
        <Link to="/learning" className="btn-primary inline-flex">← Back to learning</Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory dark:bg-charcoal min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        {/* Back */}
        <Link
          to="/learning"
          className="inline-flex items-center gap-2 text-sm text-muted-grey hover:text-forest-green dark:hover:text-lime-accent transition-colors mb-10"
        >
          <ArrowLeft size={15} /> Back to learning
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="tag mb-4 inline-block">{article.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-ivory leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-grey mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {article.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {article.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border dark:border-muted-grey/20">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 font-mono text-xs px-2.5 py-1 rounded bg-soft-sage/50 dark:bg-muted-grey/10 text-muted-grey">
                <Tag size={10} />#{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose-custom space-y-5"
        >
          <div className="bg-soft-sage/30 dark:bg-forest-green/10 border border-soft-sage dark:border-forest-green/20 rounded-xl p-4 text-sm text-muted-grey font-mono">
            📝 This is a sample entry. Full article content will be added here.
            Connect to Hashnode or expand with your own content.
          </div>

          <p className="text-muted-grey leading-relaxed text-base">{article.excerpt}</p>

          <div className="space-y-4 opacity-60">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 rounded bg-border dark:bg-muted-grey/20" style={{ width: `${80 + (i % 3) * 10}%` }} />
            ))}
            <div className="h-4 rounded bg-border dark:bg-muted-grey/20 w-3/5" />
          </div>
        </motion.div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border dark:border-muted-grey/20">
            <p className="section-label mb-5">RELATED ARTICLES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/learning/${rel.id}`}
                  className="p-4 rounded-xl border border-border dark:border-muted-grey/20 bg-white dark:bg-charcoal/80 hover:border-forest-green dark:hover:border-lime-accent transition-colors group"
                >
                  <span className="text-xs font-mono text-muted-grey">{rel.readTime}</span>
                  <p className="text-sm font-medium text-charcoal dark:text-ivory mt-1 group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors">
                    {rel.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
