import { PageTransition } from '../components/layout/PageTransition';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogCategories } from '../data/articles';
import { HashnodeBadge } from '../components/ui/HashnodeBadge';

export default function Blog() {
  return (
    <PageTransition className="max-w-6xl mx-auto space-y-16 pb-24">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-theme-text uppercase">
              KNOWLEDGE VAULT
            </h1>
            <p className="text-lg text-theme-muted1 font-sans max-w-2xl">
              Thoughts, project logs, experiments, tutorials, and lessons learned while exploring cybersecurity, Linux, automation, and infrastructure.
            </p>
          </div>
          <div className="shrink-0">
            <HashnodeBadge />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="space-y-16">
        {blogCategories.map((category) => (
          <section key={category.id} className="space-y-8">
            <div className="border-b border-theme-border pb-4">
              <h2 className="text-2xl font-mono font-bold text-theme-text mb-2">
                {category.title}
              </h2>
              <p className="text-theme-muted1 font-sans">
                {category.description}
              </p>
            </div>

            {category.articles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.articles.map((article) => (
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

                      <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-theme-border/50">
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
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="p-8 bento-card rounded-xl border-dashed border-theme-border bg-theme-bg/50">
                <p className="font-mono text-sm text-theme-muted2">
                  {'>'} Awaiting future entries...
                  <span className="animate-blink inline-block w-2 h-4 bg-theme-muted2 align-middle ml-1"></span>
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </PageTransition>
  );
}
