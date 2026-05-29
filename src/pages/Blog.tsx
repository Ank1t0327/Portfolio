import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllPosts, BlogPost } from '../lib/blog';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <PageTransition className="max-w-4xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Writing</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl">
            Thoughts, tutorials, and deep-dives into security and infrastructure.
          </p>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-full leading-5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent focus:bg-white/10 transition-all shadow-inner backdrop-blur-sm"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-8">
        {loading ? (
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl animate-pulse">
                <div className="h-8 bg-white/5 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-white/5 rounded w-full mb-2"></div>
                <div className="h-4 bg-white/5 rounded w-2/3 mb-8"></div>
                <div className="flex gap-4">
                  <div className="h-4 bg-white/5 rounded w-24"></div>
                  <div className="h-4 bg-white/5 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <article 
              key={post.slug} 
              className="glass-panel p-8 rounded-2xl group animate-fade-in-up hover:bg-white/5 transition-all relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-brand-teal transition-colors">
                    <Link to={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">
                    {post.description}
                  </p>
                </div>
                
                <div className="flex flex-row md:flex-col gap-6 md:gap-3 shrink-0 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 opacity-70" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 opacity-70" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 pt-6 mt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs bg-white/5 text-muted-foreground border border-white/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-foreground font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read Article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-32 glass-panel rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
