import { PageTransition } from '../components/layout/PageTransition';
import { Terminal, ArrowRight, FlaskConical, FolderArchive } from 'lucide-react';
import { currentInvestigations, labArchives } from '../data/labs';

export default function Labs() {
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <PageTransition className="max-w-6xl mx-auto space-y-16 pb-24">
      {/* Header Section */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-theme-text uppercase">
            CYBER LAB
          </h1>
          <p className="text-lg text-theme-muted1 font-sans max-w-2xl">
            A collection of experiments, research notes, prototypes, and technical findings.
          </p>
        </div>

        {/* Statistics Panel */}
        <div className="font-mono text-sm bg-theme-bg/50 border border-theme-border p-6 rounded-xl w-fit space-y-2">
          <div className="flex items-center gap-2 text-theme-blue mb-4">
            <Terminal className="w-4 h-4" />
            <span className="font-bold">{'>'} facility_status</span>
          </div>
          <div className="text-theme-muted1 grid grid-cols-2 gap-x-8 gap-y-1">
            <span>active_investigations:</span>
            <span className="text-theme-text font-bold">{currentInvestigations.length}</span>
            <span>archived_records:</span>
            <span className="text-theme-text font-bold">{labArchives.length}</span>
            <span>last_sync:</span>
            <span className="text-theme-text font-bold">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* 🧪 CURRENT INVESTIGATIONS */}
      <section className="space-y-8">
        <div className="border-b border-theme-border pb-4 flex items-center gap-3">
          <FlaskConical className="w-6 h-6 text-theme-blue" />
          <h2 className="text-2xl font-mono font-bold text-theme-text tracking-widest uppercase">
            CURRENT INVESTIGATIONS
          </h2>
        </div>

        {currentInvestigations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentInvestigations.map((inv) => (
              <div key={inv.id} className="bento-card p-6 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-theme-blue/30 hover:shadow-[0_0_15px_rgba(74,127,165,0.15)]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-mono font-bold text-theme-text group-hover:text-theme-blue transition-colors">
                    {inv.name}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-1 border uppercase tracking-widest rounded-sm ${
                    inv.status === 'TESTING' ? 'border-yellow-500/50 bg-yellow-500/10 text-yellow-500' :
                    'border-theme-blue/50 bg-theme-blue/10 text-theme-blue'
                  }`}>
                    {inv.status}
                  </span>
                </div>
                
                <p className="text-theme-muted1 font-sans text-sm mb-6 flex-grow">
                  <span className="font-mono text-xs text-theme-muted2 block mb-1">TECHNICAL FINDINGS:</span>
                  {inv.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-theme-border/50 mt-auto">
                  <span className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase text-theme-muted2 bg-theme-bg border border-theme-border rounded-sm">
                    CURRENT INVESTIGATION
                  </span>
                  <a href={inv.url} className="flex items-center gap-2 text-theme-text font-bold text-xs font-mono uppercase tracking-widest group-hover:text-theme-blue transition-colors">
                    RESEARCH LOG <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bento-card rounded-xl border-dashed border-theme-border bg-theme-bg/50">
            <p className="font-mono text-sm text-theme-muted2">{'>'} No active investigations.</p>
          </div>
        )}
      </section>

      {/* 📂 LAB ARCHIVES */}
      <section className="space-y-8">
        <div className="border-b border-theme-border pb-4 flex items-center gap-3">
          <FolderArchive className="w-6 h-6 text-theme-blue" />
          <h2 className="text-2xl font-mono font-bold text-theme-text tracking-widest uppercase">
            LAB ARCHIVES
          </h2>
        </div>

        {labArchives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labArchives.map((op) => (
              <div key={op.id} className="bento-card p-6 flex flex-col group transition-all duration-300 hover:bg-theme-bg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-mono font-bold text-theme-text group-hover:text-theme-blue transition-colors">
                    {op.name}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-1 border uppercase tracking-widest rounded-sm ${
                    op.status === 'COMPLETED' ? 'border-green-500/50 bg-green-500/10 text-green-500' :
                    'border-theme-muted2 text-theme-muted2'
                  }`}>
                    {op.status}
                  </span>
                </div>
                
                <p className="text-theme-muted1 font-sans text-sm mb-6 flex-grow">
                  <span className="font-mono text-xs text-theme-muted2 block mb-1">TECHNICAL FINDINGS:</span>
                  {op.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-theme-border/50 mt-auto">
                  <span className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase text-theme-muted2 bg-theme-bg border border-theme-border rounded-sm">
                    {op.status === 'COMPLETED' ? 'LAB RECORD' : 'ARCHIVE'}
                  </span>
                  <a href={op.url} className="flex items-center gap-2 text-theme-muted1 font-bold text-xs font-mono uppercase tracking-widest group-hover:text-theme-text transition-colors">
                    OPEN RECORD <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bento-card rounded-xl border-dashed border-theme-border bg-theme-bg/50">
            <p className="font-mono text-sm text-theme-muted2">{'>'} No archived records.</p>
          </div>
        )}
      </section>

    </PageTransition>
  );
}
