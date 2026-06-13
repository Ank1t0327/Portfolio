import { useEffect, useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Clock, Calendar, ArrowRight, Database } from 'lucide-react';
import { getAllKnowledgeNotes, KnowledgeNote } from '../lib/knowledge';

export default function Knowledge() {
  const [notes, setNotes] = useState<KnowledgeNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllKnowledgeNotes().then((data) => {
      setNotes(data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const categories = Array.from(new Set(notes.map(note => note.category)));
  
  // Format category to readable text
  const formatCategory = (cat: string) => {
    return cat.split('-').map(word => word.toUpperCase()).join(' ');
  };

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
              A public technical notebook maintained by a cybersecurity student documenting their learning journey. Learning notes, study guides, and concepts.
            </p>
          </div>
          <div className="shrink-0 bg-theme-bg/50 border border-theme-border p-4 rounded-lg flex items-center gap-3">
            <Database className="w-5 h-5 text-theme-blue" />
            <div className="font-mono text-sm">
              <span className="text-theme-muted2 block text-xs uppercase tracking-widest">Total Modules</span>
              <span className="text-theme-text font-bold">{notes.length}</span>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-blue"></div>
        </div>
      ) : (
        <div className="space-y-16">
          {categories.map((category) => {
            const categoryNotes = notes.filter(n => n.category === category);
            return (
              <section key={category} className="space-y-8">
                <div className="border-b border-theme-border pb-4">
                  <h2 className="text-2xl font-mono font-bold text-theme-text uppercase tracking-widest">
                    {formatCategory(category)}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryNotes.map((note) => (
                    <a
                      key={note.slug}
                      href={`/knowledge/${note.category}/${note.slug}`}
                      className="bento-card p-6 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-theme-blue/30 hover:shadow-[0_0_15px_rgba(74,127,165,0.15)]"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase text-theme-blue bg-theme-blue/10 border border-theme-blue/30 rounded-sm">
                          MODULE
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-mono font-bold text-theme-text group-hover:text-theme-blue transition-colors mb-2 line-clamp-2">
                        {note.title}
                      </h3>
                      
                      <p className="text-sm text-theme-muted1 font-sans mb-6 flex-grow line-clamp-3">
                        {note.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-theme-border/50 mt-auto text-xs font-mono text-theme-muted2 uppercase tracking-wider">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(note.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {note.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 text-theme-text font-bold text-xs font-mono uppercase tracking-widest group-hover:text-theme-blue transition-colors">
                        OPEN NOTE <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
          {categories.length === 0 && (
             <div className="p-8 bento-card rounded-xl border-dashed border-theme-border bg-theme-bg/50">
               <p className="font-mono text-sm text-theme-muted2">{'>'} No learning modules found.</p>
             </div>
          )}
        </div>
      )}
    </PageTransition>
  );
}
