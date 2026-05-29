import { PageTransition } from '../components/layout/PageTransition';
import { Terminal, Code, Network, Cloud, Shield, Database, Layout, Server } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Systems & Infrastructure',
    icon: Server,
    color: 'text-brand-purple',
    skills: [
      { name: 'Linux (Debian/RHEL)', icon: Terminal, desc: 'Kernel tuning, systemd, bash scripting' },
      { name: 'Windows Server', icon: Layout, desc: 'Active Directory, Group Policy' },
      { name: 'Docker', icon: Cloud, desc: 'Containerization, docker-compose' },
    ]
  },
  {
    title: 'Network Defense',
    icon: Network,
    color: 'text-brand-teal',
    skills: [
      { name: 'TCP/IP & OSI', icon: Network, desc: 'Deep protocol understanding' },
      { name: 'Wireshark', icon: Shield, desc: 'Packet analysis & forensics' },
      { name: 'Firewalls', icon: Server, desc: 'iptables, pfSense, routing' },
    ]
  },
  {
    title: 'Programming & Scripting',
    icon: Code,
    color: 'text-brand-blue',
    skills: [
      { name: 'Bash', icon: Terminal, desc: 'Automation & tool creation' },
      { name: 'Python', icon: Code, desc: 'Data analysis, API interaction' },
      { name: 'JavaScript', icon: Layout, desc: 'Web apps, DOM manipulation' },
    ]
  },
  {
    title: 'Security Operations',
    icon: Shield,
    color: 'text-brand-neon',
    skills: [
      { name: 'Elastic SIEM', icon: Database, desc: 'Alert tuning & log analysis' },
      { name: 'Vulnerability Scanning', icon: Shield, desc: 'Nessus, OpenVAS' },
      { name: 'Burp Suite', icon: Layout, desc: 'Web app pentesting' },
    ]
  }
];

export default function Skills() {
  return (
    <PageTransition className="py-8 space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Technology Stack</h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl">
          The tools and technologies I use to build, break, and secure systems in my digital laboratory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <div key={category.title} className="bento-card p-8 space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-white/5 ${category.color} border border-white/5`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {category.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="tech-card group">
                  <skill.icon className={`h-8 w-8 mb-2 opacity-50 group-hover:opacity-100 transition-opacity ${category.color}`} strokeWidth={1.5} />
                  <span className="font-semibold text-foreground text-center text-sm">{skill.name}</span>
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-xl p-4 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 z-10">
                    <span className="text-xs text-muted-foreground font-medium">{skill.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
