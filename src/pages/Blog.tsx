import { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Calendar, ArrowRight, Search, Hash } from 'lucide-react';
import { publishedArticles, blogCategories } from '../data/articles';
import { HashnodeBadge } from '../components/ui/HashnodeBadge';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = publishedArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? article.tags.includes(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = publishedArticles.find(a => a.featured);

  return (
    <PageTransition className="max-w-6xl mx-auto space-y-16 pb-24 px-4">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-theme-text uppercase">
              PUBLICATION ARCHIVE
            </h1>
            <p className="text-lg text-theme-muted1 font-sans max-w-2xl">
              Technical articles, tutorials, and deep dives published on Hashnode.
            </p>
          </div>
          <div className="shrink-0">
            <HashnodeBadge />
          </div>
        </div>
      </div>

      {/* Featured Post (if search and category are clear) */}
      {!searchTerm && !selectedCategory && featuredPost && (
        <section className="space-y-6">
          <div className="border-b border-theme-border pb-2 flex items-center gap-2 text-theme-blue">
            <span className="text-xl font-mono font-bold uppercase tracking-widest">Featured Post</span>
          </div>
          <a
            href={featuredPost.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row bento-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,127,165,0.2)] hover:border-theme-blue/50"
          >
            <div className="md:w-1/2 relative aspect-video md:aspect-auto overflow-hidden bg-theme-bg">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-theme-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="flex items-center gap-2 font-mono font-bold text-sm tracking-widest text-theme-blue uppercase">
                  Read on Hashnode <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-4 bg-theme-card">
              <div className="flex flex-wrap gap-2 mb-2">
                {featuredPost.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono tracking-widest uppercase text-theme-blue bg-theme-blue/10 px-2 py-0.5 border border-theme-blue/30">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-mono font-bold leading-tight text-theme-text group-hover:text-theme-blue transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-theme-muted1 font-sans line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-theme-muted2 uppercase tracking-wider border-t border-theme-border/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </a>
        </section>
      )}

      {/* Search and Filters */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-theme-card p-4 rounded-xl border-[1.5px] border-theme-border">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-theme-muted1" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-2 bg-theme-bg border-[1.5px] border-theme-border rounded-[4px] leading-5 text-theme-text placeholder-theme-muted2 focus:outline-none focus:border-theme-blue transition-colors font-mono text-sm"
              placeholder="Search published articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-auto flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 text-xs font-mono tracking-widest uppercase rounded-sm border transition-colors ${!selectedCategory ? 'bg-theme-text text-theme-bg border-theme-text' : 'bg-theme-bg text-theme-muted1 border-theme-border hover:border-theme-blue'}`}
            >
              All
            </button>
            {blogCategories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-widest uppercase rounded-sm border transition-colors flex items-center gap-1 ${selectedCategory === cat ? 'bg-theme-blue/10 text-theme-blue border-theme-blue' : 'bg-theme-bg text-theme-muted1 border-theme-border hover:border-theme-blue hover:text-theme-blue'}`}
              >
                <Hash className="w-3 h-3" />
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Articles Grid */}
        <div>
          <h2 className="text-xl font-mono font-bold text-theme-text uppercase tracking-widest mb-6 border-b border-theme-border pb-2">
            {searchTerm || selectedCategory ? 'Search Results' : 'Recent Articles'}
          </h2>
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
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
                    <div className="absolute inset-0 bg-theme-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 font-mono font-bold text-sm tracking-widest text-theme-blue uppercase">
                        Read on Hashnode <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0,2).map(tag => (
                        <span key={tag} className="text-[9px] font-mono tracking-widest uppercase text-theme-muted1 border border-theme-border px-1.5 py-0.5 rounded-sm bg-theme-bg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-mono font-bold leading-tight text-theme-text group-hover:text-theme-blue transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-theme-muted1 font-sans line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-theme-border/50">
                      <div className="flex items-center gap-4 text-xs font-mono text-theme-muted2 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(article.date).toLocaleDateString()}
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
                {'>'} No articles match your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
