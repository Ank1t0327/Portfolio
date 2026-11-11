import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, AlertCircle } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-2xl font-bold text-charcoal dark:text-ivory mb-3">Project not found</h1>
        <Link to="/projects" className="btn-primary inline-flex">← Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory dark:bg-charcoal min-h-screen">
      {/* Back */}
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-grey hover:text-forest-green dark:hover:text-lime-accent transition-colors mb-8"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pb-10 border-b border-border dark:border-muted-grey/20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tag">{project.category}</span>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-green dark:text-lime-accent hover:underline"
              >
                <Github size={15} /> View on GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-grey font-mono">
                <AlertCircle size={13} /> Repository not yet public
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-ivory mb-4">{project.name}</h1>
          <p className="text-lg text-muted-grey leading-relaxed max-w-2xl">{project.shortDesc}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="font-mono text-sm px-3 py-1 rounded-lg bg-soft-sage/60 dark:bg-forest-green/15 text-forest-green dark:text-lime-accent border border-soft-sage dark:border-forest-green/30">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-10">
            {/* Overview */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="section-label mb-3">OVERVIEW</p>
              <p className="text-muted-grey leading-relaxed">{project.longDesc}</p>
            </motion.div>

            {/* Problem */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
              <p className="section-label mb-3">THE PROBLEM</p>
              <div className="border-l-2 border-forest-green dark:border-lime-accent pl-4">
                <p className="text-muted-grey leading-relaxed">{project.problem}</p>
              </div>
            </motion.div>

            {/* Implementation */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="section-label mb-3">IMPLEMENTATION</p>
              <p className="text-muted-grey leading-relaxed">{project.implementation}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white dark:bg-charcoal/80 border border-border dark:border-muted-grey/20 rounded-2xl p-5">
              <p className="section-label mb-3">DETAILS</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-grey mb-1">Category</p>
                  <p className="text-sm font-medium text-charcoal dark:text-ivory">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-grey mb-1">Technologies</p>
                  <p className="text-sm font-medium text-charcoal dark:text-ivory">{project.technologies.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-grey mb-1">Repository</p>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium text-forest-green dark:text-lime-accent hover:underline flex items-center gap-1">
                      <Github size={13} /> GitHub
                    </a>
                  ) : (
                    <p className="text-sm text-muted-grey italic">Not yet public</p>
                  )}
                </div>
              </div>
            </div>

            {/* Back link */}
            <Link to="/projects" className="btn-secondary w-full justify-center">
              ← All projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
