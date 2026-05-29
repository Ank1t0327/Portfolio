import { useState } from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { Search, Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'SIEM Alert Automation',
    description: 'A robust automation pipeline integrating with Elastic Security to enrich and triage incoming alerts using Threat Intelligence feeds.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Elasticsearch', 'Automation'],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Network Traffic Analyzer',
    description: 'A lightweight packet inspection tool written in C. It dissects common protocols and flags suspicious payload patterns in real-time.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['C', 'Networking', 'PCAP'],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Secure File Transfer',
    description: 'A command-line utility for securely transferring files between systems using AES-256-GCM encryption and mutual TLS authentication.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    tags: ['Go', 'Cryptography', 'CLI'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Vulnerable AD Lab Deployment',
    description: 'Automated Infrastructure as Code (IaC) scripts to rapidly deploy a vulnerable Active Directory environment for secure configuration testing.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    tags: ['Terraform', 'Ansible', 'Windows Server'],
    github: 'https://github.com',
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
    <PageTransition className="py-8 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Projects Gallery</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl">
            Tools, scripts, and architectures I've built in the lab.
          </p>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-full leading-5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent transition-all backdrop-blur-sm"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="bento-card overflow-hidden flex flex-col group animate-fade-in-up p-0" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="relative h-72 overflow-hidden w-full">
              <div className="absolute inset-0 bg-background/30 z-10 group-hover:bg-background/10 transition-colors duration-500"></div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" />
              
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 text-xs font-bold bg-brand-purple/90 text-white rounded-full backdrop-blur-md shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              {/* Hover Overlay with Tech Stack */}
              <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center items-center text-center">
                <p className="text-lg text-foreground mb-6 font-light leading-relaxed max-w-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm bg-white/10 text-white border border-white/20 rounded-full font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-purple transition-colors bg-white/10 px-4 py-2 rounded-full hover:bg-white/20">
                      <Github className="h-4 w-4" />
                      View Source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-background hover:text-white transition-colors bg-brand-teal px-4 py-2 rounded-full hover:bg-brand-teal/80">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card border-t border-white/5 relative z-20 flex justify-between items-center group-hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-teal transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-32 bento-card">
          <h3 className="text-xl font-bold text-foreground mb-2">No projects found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria.</p>
        </div>
      )}
    </PageTransition>
  );
}
