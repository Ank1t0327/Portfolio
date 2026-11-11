import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card group flex flex-col h-full"
    >
      {/* Category badge */}
      <div className="flex items-start justify-between mb-4">
        <span className="tag">{project.category}</span>
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0"
          style={{ backgroundColor: project.color + '22', border: `1px solid ${project.color}33` }}
        >
          <div
            className="w-full h-full rounded-lg"
            style={{ backgroundColor: project.color + '33' }}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-charcoal dark:text-ivory mb-2 group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-grey leading-relaxed flex-grow mb-4">
        {project.shortDesc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2 py-0.5 rounded bg-soft-sage/60 dark:bg-forest-green/15 text-forest-green dark:text-lime-accent"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-soft-sage/60 dark:bg-forest-green/15 text-muted-grey">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-3 border-t border-border dark:border-muted-grey/20">
        <Link
          to={`/projects/${project.id}`}
          className="flex items-center gap-1.5 text-sm font-medium text-forest-green dark:text-lime-accent hover:gap-2.5 transition-all duration-200"
        >
          View details <ArrowRight size={14} />
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-xs text-muted-grey hover:text-charcoal dark:hover:text-ivory transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
