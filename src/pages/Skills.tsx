import { PageTransition } from '../components/layout/PageTransition';
import { Terminal, Code, Network, Cloud, Shield, Database, Layout, Server } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Systems & Infrastructure',
    icon: Server,
    color: 'text-theme-blue',
    skills: [
      { name: 'Linux (Debian/RHEL)', icon: Terminal, desc: 'Kernel tuning, systemd, bash scripting' },
      { name: 'Windows Server', icon: Layout, desc: 'Active Directory, Group Policy' },
      { name: 'Docker', icon: Cloud, desc: 'Containerization, docker-compose' },
    ]
  },
  {
    title: 'Network Defense',
    icon: Network,
    color: 'text-theme-blue',
    skills: [
      { name: 'TCP/IP & OSI', icon: Network, desc: 'Deep protocol understanding' },
      { name: 'Wireshark', icon: Shield, desc: 'Packet analysis & forensics' },
      { name: 'Firewalls', icon: Server, desc: 'iptables, pfSense, routing' },
    ]
  },
  {
    title: 'Programming & Scripting',
    icon: Code,
    color: 'text-theme-dimBlue',
    skills: [
      { name: 'Bash', icon: Terminal, desc: 'Automation & tool creation' },
      { name: 'Python', icon: Code, desc: 'Data analysis, API interaction' },
      { name: 'JavaScript', icon: Layout, desc: 'Web apps, DOM manipulation' },
    ]
  },
  {
    title: 'Security Operations',
    icon: Shield,
    color: 'text-theme-dimBlue',
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text uppercase">Technology Stack</h1>
        <p className="text-xl text-theme-muted1 font-sans max-w-2xl">
          The tools and technologies I use to build, break, and secure systems in my digital laboratory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <div key={category.title} className="bento-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 bg-theme-bg ${category.color} border border-theme-border`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-theme-text uppercase tracking-widest">
                {category.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="tech-card group">
                  <skill.icon className={`h-8 w-8 mb-2 text-theme-muted1 group-hover:text-theme-blue transition-colors`} strokeWidth={1.5} />
                  <span className="font-bold text-theme-text text-center text-xs uppercase tracking-widest">{skill.name}</span>
                  <div className="absolute inset-0 bg-theme-bg p-4 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-theme-blue z-10">
                    <span className="text-[10px] text-theme-text font-mono uppercase tracking-widest">{skill.desc}</span>
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
