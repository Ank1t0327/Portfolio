import { useEffect, useState, ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Clock, Calendar, Terminal } from 'lucide-react';
import { getKnowledgeNote, KnowledgeNote } from '../lib/knowledge';
import { PageTransition } from '../components/layout/PageTransition';

export default function KnowledgePost() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [note, setNote] = useState<KnowledgeNote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category && slug) {
      getKnowledgeNote(category, slug).then((data) => {
        setNote(data);
        setLoading(false);
      }).catch(err => {
        console.error(err);
        setLoading(false);
      });
    }
  }, [category, slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-blue"></div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center space-y-4">
        <Terminal className="w-12 h-12 text-theme-muted2 mx-auto" />
        <h1 className="text-2xl font-mono text-theme-text">MODULE NOT FOUND</h1>
        <p className="text-theme-muted1 font-sans">The requested learning record could not be located in the vault.</p>
        <Link to="/knowledge" className="inline-block mt-4 text-theme-blue hover:underline font-mono">
          Return to Knowledge Vault
        </Link>
      </div>
    );
  }

  return (
    <PageTransition className="max-w-4xl mx-auto pb-24 px-4">
      <Link 
        to="/knowledge"
        className="inline-flex items-center gap-2 text-sm font-mono text-theme-muted1 hover:text-theme-text transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        BACK TO VAULT
      </Link>

      <article>
        <header className="mb-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-bold tracking-widest text-theme-blue border border-theme-blue bg-theme-blue/10 uppercase">
              {note.category.split('-').join(' ')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-mono font-bold text-theme-text leading-tight">
            {note.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-theme-muted2 pt-4 border-t border-theme-border/50">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(note.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {note.readTime}
            </span>
          </div>
        </header>

        <div className="prose prose-invert prose-theme max-w-none prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-theme-border/50">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }: { node?: any, inline?: boolean, className?: string, children?: ReactNode, [key: string]: any }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus as any}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md !bg-transparent !my-0 !p-4"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-theme-bg/80 px-1.5 py-0.5 rounded text-theme-blue font-mono text-sm" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {note.content}
          </ReactMarkdown>
        </div>
      </article>
    </PageTransition>
  );
}
