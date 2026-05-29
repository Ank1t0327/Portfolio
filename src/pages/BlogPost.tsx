import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Calendar, Clock, User, ArrowLeft, Terminal } from 'lucide-react';
import { getPostBySlug, BlogPost as BlogPostType } from '../lib/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      try {
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Failed to load post:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <PageTransition className="max-w-4xl mx-auto flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-4 text-neon-cyan animate-pulse">
          <Terminal className="h-8 w-8" />
          <p className="font-mono">Loading data payload...</p>
        </div>
      </PageTransition>
    );
  }

  if (!post) {
    return (
      <PageTransition className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl font-bold font-mono text-destructive mb-4">404 - Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The requested transmission could not be located in the archives.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors font-mono">
          <ArrowLeft className="h-4 w-4" />
          Return to Blog
        </Link>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="max-w-4xl mx-auto space-y-12">
      <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Articles
      </Link>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-mono bg-cyber-navy text-neon-blue border border-neon-blue/30 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold font-mono text-foreground leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border/50 text-sm font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-neon-cyan" />
            <span className="text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-neon-cyan" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-neon-cyan" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none 
        prose-headings:font-mono prose-headings:text-neon-cyan 
        prose-a:text-neon-blue hover:prose-a:text-neon-cyan
        prose-code:text-neon-cyan prose-code:bg-cyber-navy prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-cyber-dark prose-pre:border prose-pre:border-border prose-pre:shadow-[0_0_15px_rgba(0,0,0,0.5)]
        prose-blockquote:border-l-neon-blue prose-blockquote:bg-cyber-navy/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r
        prose-strong:text-foreground prose-strong:font-bold
      ">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    background: 'transparent',
                    padding: '1.5rem',
                  }}
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      
      <div className="pt-12 border-t border-border mt-16 text-center">
        <p className="text-muted-foreground font-mono mb-6">End of transmission.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-neon-blue/10 text-neon-blue border border-neon-blue hover:bg-neon-blue/20 rounded-md font-mono font-semibold transition-all hover:glow-border"
        >
          <ArrowLeft className="h-4 w-4" />
          More Articles
        </Link>
      </div>
    </PageTransition>
  );
}
