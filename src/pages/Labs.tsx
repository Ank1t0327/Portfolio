import { PageTransition } from '../components/layout/PageTransition';
import { Terminal, ArrowRight, FlaskConical, FolderArchive, Wrench } from 'lucide-react';
import { activeProjects, experiments, archivedOperations } from '../data/labs';

export default function Labs() {
  const lastUpdate = activeProjects.length > 0 
    ? [...activeProjects].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())[0].lastUpdated
    : new Date().toISOString().split('T')[0];

  return (
    <PageTransition className="max-w-6xl mx-auto space-y-16 pb-24">
      {/* Header Section */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-theme-text uppercase">
            CYBER LAB
          </h1>
          <p className="text-lg text-theme-muted1 font-sans max-w-2xl">
            A collection of experiments, tools, research projects, infrastructure builds, and ongoing investigations.
          </p>
        </div>

        {/* Statistics Panel */}
        <div className="font-mono text-sm bg-theme-bg/50 border border-theme-border p-6 rounded-xl w-fit space-y-2">
          <div className="flex items-center gap-2 text-theme-blue mb-4">
            <Terminal className="w-4 h-4" />
            <span className="font-bold">{'>'} lab status</span>
          </div>
          <div className="text-theme-muted1 grid grid-cols-2 gap-x-8 gap-y-1">
            <span>active_projects:</span>
            <span className="text-theme-text font-bold">{activeProjects.length}</span>
            <span>active_experiments:</span>
            <span className="text-theme-text font-bold">{experiments.filter(e => e.status !== 'COMPLETED').length}</span>
            <span>completed_operations:</span>
            <span className="text-theme-text font-bold">{archivedOperations.length + experiments.filter(e => e.status === 'COMPLETED').length}</span>
            <span>last_update:</span>
            <span className="text-theme-text font-bold">{lastUpdate}</span>
          </div>
        </div>
      </div>

      {/* 🛠 ACTIVE PROJECTS */}
      <section className="space-y-8">
        <div className="border-b border-theme-border pb-4 flex items-center gap-3">
          <Wrench className="w-6 h-6 text-theme-blue" />
          <h2 className="text-2xl font-mono font-bold text-theme-text tracking-widest uppercase">
            ACTIVE PROJECTS
          </h2>
        </div>

        {activeProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeProjects.map((project) => (
              <div key={project.id} className="bento-card p-6 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(74,127,165,0.15)] hover:border-theme-blue/50">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-mono font-bold text-theme-text group-hover:text-theme-blue transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-1 border border-theme-blue bg-theme-blue/10 text-theme-blue uppercase tracking-widest rounded-sm">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-theme-muted1 font-sans text-sm mb-4">
                  {project.description}
                </p>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-theme-muted2">Category:</span>
                    <span className="text-theme-text">{project.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase text-theme-muted1 bg-theme-bg border border-theme-border rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-theme-border/50 mt-auto">
                  <span className="text-xs font-mono text-theme-muted2">
                    Updated: {project.lastUpdated}
                  </span>
                  <a href={project.url} className="flex items-center gap-2 text-theme-text font-bold text-xs font-mono uppercase tracking-widest group-hover:text-theme-blue transition-colors">
                    VIEW PROJECT <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bento-card rounded-xl border-dashed border-theme-border bg-theme-bg/50">
            <p className="font-mono text-sm text-theme-muted2">{'>'} Awaiting deployment...</p>
          </div>
        )}
      </section>

      {/* 🧪 EXPERIMENTS & RESEARCH */}
      <section className="space-y-8">
        <div className="border-b border-theme-border pb-4 flex items-center gap-3">
          <FlaskConical className="w-6 h-6 text-theme-blue" />
          <h2 className="text-2xl font-mono font-bold text-theme-text tracking-widest uppercase">
            EXPERIMENTS & RESEARCH
          </h2>
        </div>

        {experiments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiments.map((exp) => (
              <div key={exp.id} className="bento-card p-6 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:border-theme-blue/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-mono font-bold text-theme-text group-hover:text-theme-blue transition-colors">
                    {exp.objective}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-1 border uppercase tracking-widest rounded-sm ${
                    exp.status === 'COMPLETED' ? 'border-green-500/50 bg-green-500/10 text-green-500' :
                    exp.status === 'TESTING' ? 'border-yellow-500/50 bg-yellow-500/10 text-yellow-500' :
                    'border-theme-blue/50 bg-theme-blue/10 text-theme-blue'
                  }`}>
                    {exp.status}
                  </span>
                </div>
                
                <p className="text-theme-muted1 font-sans text-sm mb-6 flex-grow">
                  <span className="font-mono text-xs text-theme-muted2 block mb-1">Findings:</span>
                  {exp.findings}
                </p>

                <div className="flex items-center justify-end pt-4 border-t border-theme-border/50">
                  <a href={exp.url} className="flex items-center gap-2 text-theme-text font-bold text-xs font-mono uppercase tracking-widest group-hover:text-theme-blue transition-colors">
                    VIEW NOTES <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bento-card rounded-xl border-dashed border-theme-border bg-theme-bg/50">
            <p className="font-mono text-sm text-theme-muted2">{'>'} No active experiments.</p>
          </div>
        )}
      </section>

      {/* 📂 ARCHIVED OPERATIONS */}
      <section className="space-y-8">
        <div className="border-b border-theme-border pb-4 flex items-center gap-3">
          <FolderArchive className="w-6 h-6 text-theme-blue" />
          <h2 className="text-2xl font-mono font-bold text-theme-text tracking-widest uppercase">
            ARCHIVED OPERATIONS
          </h2>
        </div>

        {archivedOperations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {archivedOperations.map((op) => (
              <div key={op.id} className="bento-card p-6 flex flex-col group transition-all duration-300 hover:bg-theme-bg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-mono font-bold text-theme-text group-hover:text-theme-blue transition-colors">
                    {op.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-1 border border-theme-muted2 text-theme-muted2 uppercase tracking-widest rounded-sm">
                    ARCHIVED
                  </span>
                </div>
                
                <p className="text-theme-muted1 font-sans text-sm mb-4">
                  {op.summary}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {op.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase text-theme-muted2 bg-theme-bg border border-theme-border rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-theme-border/50 mt-auto">
                  <span className="text-xs font-mono text-theme-muted2">
                    Completed: {op.completionDate}
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
