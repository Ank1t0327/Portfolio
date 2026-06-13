import { Children, cloneElement, isValidElement, useEffect, useMemo, useState, ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, BookOpen, Calendar, CheckCircle2, Clock, FileText, Lightbulb, Terminal } from 'lucide-react';
import { getKnowledgeNote, KnowledgeNote } from '../lib/knowledge';
import { PageTransition } from '../components/layout/PageTransition';

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

const headingPattern = /^(#{1,3})\s+(.+)$/gm;

function cleanHeadingText(value: string) {
  return value
    .replace(/[*_`~]/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .trim();
}

function slugify(value: string) {
  return cleanHeadingText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function extractText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (typeof node === 'object' && 'props' in node) return extractText((node as { props?: { children?: ReactNode } }).props?.children);
  return '';
}

function stripFromFirstText(node: ReactNode, pattern: RegExp): ReactNode {
  if (typeof node === 'string') return node.replace(pattern, '').trimStart();
  if (Array.isArray(node)) {
    const [first, ...rest] = node;
    return [stripFromFirstText(first, pattern), ...rest];
  }
  if (isValidElement(node)) {
    return cloneElement(node as any, undefined, stripFromFirstText((node as any).props.children, pattern));
  }
  return node;
}

function stripCalloutLabel(children: ReactNode, pattern: RegExp): ReactNode {
  const items = Children.toArray(children);
  if (items.length === 0) return children;

  const [first, ...rest] = items;
  return [stripFromFirstText(first, pattern), ...rest];
}

function getToc(content: string): TocItem[] {
  const seen = new Map<string, number>();
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;

  headingPattern.lastIndex = 0;
  while ((match = headingPattern.exec(content)) !== null) {
    const level = Math.min(match[1].length, 3);
    const text = cleanHeadingText(match[2]);
    if (!text || level === 1) continue;

    const baseId = slugify(text);
    const count = seen.get(baseId) || 0;
    seen.set(baseId, count + 1);
    items.push({
      id: count === 0 ? baseId : `${baseId}-${count + 1}`,
      text,
      level: level as 2 | 3,
    });
  }

  return items;
}

export default function KnowledgePost() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [note, setNote] = useState<KnowledgeNote | null>(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

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

  useEffect(() => {
    const updateProgress = () => {
      const article = document.getElementById('knowledge-article');
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const scrollable = article.offsetHeight - window.innerHeight;
      const distanceRead = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 1));
      setReadingProgress((distanceRead / Math.max(scrollable, 1)) * 100);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [note]);

  const toc = useMemo(() => (note ? getToc(note.content) : []), [note]);

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
    <PageTransition className="max-w-7xl mx-auto pb-24 px-4">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-theme-border/60">
        <div
          className="h-full bg-theme-blue shadow-[0_0_14px_rgba(74,127,165,0.65)] transition-[width] duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <Link 
        to="/knowledge"
        className="inline-flex items-center gap-2 text-sm font-mono text-theme-muted1 hover:text-theme-text transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        BACK TO VAULT
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
      <article id="knowledge-article" className="min-w-0">
        <header className="mb-14 space-y-7 border-b border-theme-border pb-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-bold tracking-widest text-theme-blue border border-theme-blue bg-theme-blue/10 uppercase">
              {note.category.split('-').join(' ')}
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-mono font-black leading-[1.05] text-theme-text md:text-7xl">
            {note.title}
          </h1>

          <p className="max-w-3xl font-sans text-lg leading-8 text-theme-muted1 md:text-xl">
            {note.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-theme-muted2">
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

        <div className="knowledge-prose max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1({ children }) {
                const text = extractText(children);
                const id = slugify(text);
                return (
                  <h2 id={id} className="knowledge-h2 scroll-mt-28">
                    {children}
                  </h2>
                );
              },
              h2({ children }) {
                const text = extractText(children);
                const id = slugify(text);
                return (
                  <h2 id={id} className="knowledge-h2 scroll-mt-28">
                    {children}
                  </h2>
                );
              },
              h3({ children }) {
                const text = extractText(children);
                const id = slugify(text);
                return (
                  <h3 id={id} className="knowledge-h3 scroll-mt-28">
                    {children}
                  </h3>
                );
              },
              p({ children }) {
                return <p className="font-sans text-[1.03rem] leading-8 text-theme-text/85">{children}</p>;
              },
              ul({ children }) {
                return <ul className="space-y-3 pl-6 font-sans text-theme-text/85">{children}</ul>;
              },
              ol({ children }) {
                return <ol className="space-y-3 pl-6 font-sans text-theme-text/85">{children}</ol>;
              },
              li({ children }) {
                return <li className="pl-2 leading-8 marker:text-theme-blue">{children}</li>;
              },
              strong({ children }) {
                return <strong className="font-bold text-theme-text">{children}</strong>;
              },
              a({ children, href }) {
                return (
                  <a href={href} className="text-theme-blue underline decoration-theme-blue/40 underline-offset-4 transition-colors hover:text-theme-text">
                    {children}
                  </a>
                );
              },
              blockquote({ children }) {
                const text = extractText(children).trim();
                const isExamTip = /^exam tip\b/i.test(text);
                const isTakeaway = /^key takeaways?\b/i.test(text);

                if (isExamTip) {
                  return (
                    <aside className="my-8 border border-theme-blue/30 bg-theme-blue/10 p-5 shadow-[inset_4px_0_0_rgba(74,127,165,0.85)]">
                      <div className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-theme-blue">
                        <Lightbulb className="h-4 w-4" />
                        Exam Tip
                      </div>
                      <div className="font-sans leading-8 text-theme-text/90">
                        {stripCalloutLabel(children, /^exam tip\s*/i)}
                      </div>
                    </aside>
                  );
                }

                if (isTakeaway) {
                  return (
                    <aside className="my-10 border border-theme-border bg-theme-card p-6 shadow-[4px_4px_0_rgba(46,45,42,0.9)]">
                      <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.22em] text-theme-text">
                        <CheckCircle2 className="h-4 w-4 text-theme-blue" />
                        Key Takeaways
                      </div>
                      <div className="font-sans leading-8 text-theme-text/90">
                        {stripCalloutLabel(children, /^key takeaways?\s*/i)}
                      </div>
                    </aside>
                  );
                }

                return (
                  <blockquote className="my-8 border-l-4 border-theme-blue/70 bg-theme-blue/10 px-6 py-4 font-sans text-theme-text/90">
                    {children}
                  </blockquote>
                );
              },
              table({ children }) {
                return (
                  <div className="my-10 overflow-x-auto border border-theme-border bg-theme-card/70">
                    <table className="min-w-full border-collapse text-left font-sans text-sm">
                      {children}
                    </table>
                  </div>
                );
              },
              thead({ children }) {
                return <thead className="border-b border-theme-blue/30 bg-theme-blue/10 font-mono text-xs uppercase tracking-widest text-theme-blue">{children}</thead>;
              },
              th({ children }) {
                return <th className="whitespace-nowrap px-4 py-4 font-bold">{children}</th>;
              },
              td({ children }) {
                return <td className="border-t border-theme-border/70 px-4 py-4 leading-7 text-theme-text/85">{children}</td>;
              },
              tr({ children }) {
                return <tr className="transition-colors hover:bg-theme-blue/5">{children}</tr>;
              },
              code({ node, inline, className, children, ...props }: { node?: any, inline?: boolean, className?: string, children?: ReactNode, [key: string]: any }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className="my-8 overflow-hidden border border-theme-border bg-[#151515]">
                    <div className="border-b border-theme-border bg-theme-bg px-4 py-2 font-mono text-xs uppercase tracking-widest text-theme-muted1">
                      {match[1]}
                    </div>
                    <SyntaxHighlighter
                      style={vscDarkPlus as any}
                      language={match[1]}
                      PreTag="div"
                      className="!m-0 !bg-transparent !p-5"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="border border-theme-border bg-theme-bg/80 px-1.5 py-0.5 text-theme-blue font-mono text-sm" {...props}>
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

      <aside className="hidden lg:block w-[280px]" aria-label="Article table of contents">
        <div
          className="fixed top-24 z-20 w-[280px] max-h-[calc(100vh-7rem)] overflow-y-auto border border-theme-border bg-theme-card/90 p-5"
          style={{ right: 'max(2rem, calc((100vw - 80rem) / 2 + 2rem))' }}
        >
          <div className="mb-5 flex items-center gap-2 border-b border-theme-border pb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-theme-text">
            <BookOpen className="h-4 w-4 text-theme-blue" />
            On This Page
          </div>
          {toc.length > 0 ? (
            <nav className="space-y-1">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block border-l border-theme-border py-2 pr-2 font-sans text-sm leading-5 text-theme-muted1 transition-colors hover:border-theme-blue hover:text-theme-text ${
                    item.level === 3 ? 'pl-6' : 'pl-3 font-semibold text-theme-text/80'
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          ) : (
            <div className="flex items-center gap-2 font-sans text-sm text-theme-muted1">
              <FileText className="h-4 w-4" />
              No sections detected.
            </div>
          )}
        </div>
      </aside>
      </div>
    </PageTransition>
  );
}
