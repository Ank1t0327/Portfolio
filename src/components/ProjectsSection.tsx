import { ExternalLink, Github, Layers, Fish, Eye, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Stickitize',
    description: 'Full-stack sticker e-commerce platform with order tracking, admin panel, and Cloudinary integration for custom designs.',
    tech: ['Node.js', 'MongoDB', 'Cloudinary', 'Vercel', 'Render'],
    icon: Layers,
    link: '#',
  },
  {
    title: 'Instagram Phishing Simulation',
    description: 'Educational phishing simulation tool with stealthy credential logging and redirection for security awareness training.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    icon: Fish,
    link: '#',
  },
  {
    title: 'LogGazer',
    description: 'Lightweight, intelligent log-analysis tool for detecting anomalies, suspicious patterns, and potential intrusion indicators with smart filtering and threat-pattern matching.',
    tech: ['Python', 'Log Analysis', 'Threat Detection', 'CLI'],
    icon: Eye,
    link: '#',
  },
  {
    title: 'APK Reverse Engineering',
    description: 'Android APK modification projects including UI changes, feature injections, and reverse engineering analysis.',
    tech: ['APKTool', 'JADX', 'Smali', 'Android'],
    icon: Smartphone,
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Projects</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 neon-line mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Featured projects showcasing security research and development work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
              <div className="relative cyber-card p-6 rounded-xl h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:border-primary/50 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-mono text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-secondary text-primary rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
