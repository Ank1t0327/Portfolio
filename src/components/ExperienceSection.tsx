import { Briefcase, Target, Search, Bot, Bug } from 'lucide-react';

const experiences = [
  {
    icon: Target,
    title: 'Penetration Testing & Red Team Operations',
    description: 'Conducting authorized security assessments to identify vulnerabilities in systems, networks, and applications. Simulating real-world attack scenarios.',
  },
  {
    icon: Search,
    title: 'Security Research with Kali Linux',
    description: 'Deep-diving into security tools and techniques using Kali Linux. Exploring new vulnerabilities and developing proof-of-concept exploits.',
  },
  {
    icon: Bot,
    title: 'AI-Assisted Automation Tools',
    description: 'Building intelligent automation tools that leverage AI for security tasks, reconnaissance, and data analysis.',
  },
  {
    icon: Bug,
    title: 'Bug Hunting & Exploit Development',
    description: 'Practicing vulnerability discovery and exploit development. Contributing to making systems more secure through responsible disclosure.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Experience</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 neon-line mx-auto" />
        </div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="cyber-card p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/30">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-2xl font-bold text-foreground">Cybersecurity Specialist</h3>
                <p className="text-primary font-mono">Independent Security Researcher</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Focusing on offensive security, I conduct penetration tests and red team operations to help organizations understand their security posture. My work involves reconnaissance, exploitation, post-exploitation, and comprehensive reporting to improve defensive measures.
            </p>
          </div>
        </div>

        {/* Experience Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group cyber-card p-6 rounded-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:border-primary/50 transition-colors shrink-0">
                  <exp.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
