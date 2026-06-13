import { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Search, Github, ExternalLink, BookOpen } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'StateWatch',
    description: 'Real-time Linux system monitoring dashboard built entirely in Bash.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Bash', 'Linux', 'Coreutils'],
    status: 'Active',
    github: 'https://github.com/patchsec/statewatch',
    caseStudy: 'https://patchsec.hashnode.dev/building-statewatch-my-first-linux-system-monitoring-tool-in-bash',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Patch Portfolio',
    description: 'Cyber-inspired developer portfolio built with React and TypeScript.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    status: 'Active',
    github: 'https://github.com/patchsec/patch-s-cyber-lair',
    caseStudy: null,
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Mirrorix',
    description: 'Cross-distribution package mirror management and device mirroring utility.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    tags: ['Linux', 'Bash'],
    status: 'In Development',
    github: 'https://github.com/patchsec/mirrorix',
    caseStudy: null,
    demo: null,
    featured: false,
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = PROJECTS.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <PageTransition className="py-8 space-y-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text uppercase font-mono">PROJECTS GALLERY</h1>
          <p className="text-lg text-theme-muted1 font-light max-w-2xl font-sans">
            Production-ready tools, platforms, and systems I've designed and built.
          </p>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-theme-muted1" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3 bg-theme-card border-[1.5px] border-theme-border rounded-[4px] leading-5 text-theme-text placeholder-theme-muted2 focus:outline-none focus:border-theme-blue transition-colors font-mono"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="bento-card overflow-hidden flex flex-col group p-0 hover:shadow-[0_0_20px_rgba(74,127,165,0.15)] transition-all duration-300">
            <div className="relative h-72 overflow-hidden w-full border-b-[1.5px] border-theme-border">
              <div className="absolute inset-0 bg-theme-bg/30 z-10 group-hover:bg-theme-bg/10 transition-colors"></div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
              
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                {project.featured && (
                  <span className="px-3 py-1 text-[10px] font-bold bg-theme-bg text-theme-blue border border-theme-blue uppercase tracking-widest font-mono shadow-sm">
                    Featured
                  </span>
                )}
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-mono shadow-sm border ${
                  project.status === 'Active' ? 'bg-theme-bg text-green-500 border-green-500/50' : 
                  project.status === 'In Development' ? 'bg-theme-bg text-yellow-500 border-yellow-500/50' : 
                  'bg-theme-bg text-theme-muted1 border-theme-border'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Hover Overlay with Tech Stack */}
              <div className="absolute inset-0 bg-theme-bg/90 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center items-center text-center">
                <p className="text-sm text-theme-text mb-6 font-sans leading-relaxed max-w-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-widest text-theme-text border border-theme-border font-mono bg-theme-card">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-theme-text border border-theme-border hover:bg-theme-blueHover hover:border-theme-blue hover:text-theme-blue transition-colors px-4 py-2 uppercase tracking-widest font-mono">
                      <Github className="h-4 w-4" />
                      SOURCE
                    </a>
                  )}
                  {project.caseStudy && (
                    <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-theme-text border border-theme-border hover:bg-theme-blueHover hover:border-theme-blue hover:text-theme-blue transition-colors px-4 py-2 uppercase tracking-widest font-mono">
                      <BookOpen className="h-4 w-4" />
                      CASE STUDY
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-theme-card relative z-20 flex justify-between items-center group-hover:bg-theme-blueHover transition-colors">
              <h3 className="text-xl font-bold text-theme-text uppercase tracking-widest font-mono group-hover:text-theme-blue transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="h-5 w-5 text-theme-muted1 group-hover:text-theme-blue transition-colors" />
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-32 bento-card">
          <h3 className="text-xl font-bold text-theme-text font-mono mb-2">NO PROJECTS FOUND</h3>
          <p className="text-theme-muted1 font-sans">Try adjusting your search criteria.</p>
        </div>
      )}
    </PageTransition>
  );
}
