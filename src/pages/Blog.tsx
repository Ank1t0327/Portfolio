import { PageTransition } from '../components/layout/PageTransition';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import { ArticleCounter } from '../components/ui/ArticleCounter';
import { HashnodeBadge } from '../components/ui/HashnodeBadge';

export default function Blog() {
  return (
    <PageTransition className="max-w-6xl mx-auto space-y-12 pb-24">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-theme-text uppercase">
              Writing
            </h1>
            <p className="text-lg text-theme-muted1 font-sans max-w-2xl">
              Thoughts, tutorials, project logs, and deep dives into Linux, cybersecurity, automation, and infrastructure.
            </p>
          </div>
          <div className="shrink-0">
            <HashnodeBadge />
          </div>
        </div>
        
        <ArticleCounter count={articles.length} />
      </div>

      {/* Grid Section */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bento-card rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(74,127,165,0.2)] hover:border-theme-blue/50"
              aria-label={`Read ${article.title}`}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-theme-bg border-b border-theme-border">
                <img
                  src={article.image}
                  alt={`Thumbnail for ${article.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-theme-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 font-mono font-bold text-sm tracking-widest text-theme-blue uppercase">
                    Read on Hashnode <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-mono font-bold leading-tight text-theme-text group-hover:text-theme-blue transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-theme-muted1 font-sans line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-auto pt-4 flex flex-col gap-4">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs font-mono text-theme-muted2 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-mono tracking-widest uppercase text-theme-muted1 bg-theme-bg border border-theme-border rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bento-card rounded-2xl">
          <h3 className="text-xl font-mono font-bold text-theme-text mb-2 uppercase tracking-widest">No articles found</h3>
          <p className="text-theme-muted1 font-sans">Content is still being indexed...</p>
        </div>
      )}
    </PageTransition>
  );
}
