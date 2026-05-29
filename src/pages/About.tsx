import { PageTransition } from '../components/layout/PageTransition';
import { Shield, Network, Server, Code, FileLock, Terminal } from 'lucide-react';

const INTERESTS = [
  { name: 'Infrastructure Architecture', icon: Server },
  { name: 'Automation & Tooling', icon: Code },
  { name: 'Network Defense', icon: Network },
  { name: 'Identity & Access', icon: Shield },
  { name: 'Cloud Security', icon: FileLock },
  { name: 'Systems Engineering', icon: Terminal },
];

const TIMELINE = [
  {
    year: '2024',
    title: 'Security Research Intern',
    company: 'TechDefend Corp',
    description: 'Conducted vulnerability assessments on web applications and assisted in automating SIEM alerts, streamlining the team\'s incident response workflow.'
  },
  {
    year: '2023',
    title: 'B.S. Cybersecurity',
    company: 'University of Technology',
    description: 'Started formal education focusing on secure systems design, cryptography, and network defense architectures.'
  },
  {
    year: '2022',
    title: 'The Beginning',
    company: 'Self-Taught',
    description: 'Built my first homelab, diving deep into Linux systems administration and discovering a passion for understanding how systems operate securely.'
  }
];

export default function About() {
  return (
    <PageTransition className="max-w-4xl mx-auto space-y-16">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl">
          Understanding systems to secure them.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
          <p>
            Hello. I'm Patch, a passionate cybersecurity student and builder who believes that security shouldn't be an afterthought—it should be woven seamlessly into the fabric of the systems we use every day.
          </p>
          <p>
            My journey began with a deep curiosity about how things work under the hood. Whether it's architecting a custom homelab, writing automation scripts, or analyzing network flows, I am driven by the desire to understand infrastructure from the ground up.
          </p>
          <p>
            Currently, I am focusing on cloud security and identity management. When I'm not studying or participating in CTFs, I enjoy documenting my learnings and designing elegant, secure solutions to complex technical problems.
          </p>
        </div>
        
        <div className="glass-panel p-8 rounded-2xl space-y-6 flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <Shield className="h-16 w-16 text-foreground/80 relative z-10" strokeWidth={1} />
          </div>
          <div>
            <h3 className="font-bold text-xl text-foreground mb-1">Patch</h3>
            <p className="text-brand-teal font-medium">Cybersecurity Student</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Areas of Focus</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {INTERESTS.map((interest, i) => (
            <div key={interest.name} className="glass-panel p-6 rounded-xl flex flex-col gap-4 animate-fade-in-up hover:bg-white/10 transition-colors" style={{ animationDelay: `${i * 100}ms` }}>
              <interest.icon className="h-6 w-6 text-brand-purple" strokeWidth={1.5} />
              <span className="font-medium text-foreground">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8 pt-8">
        <h2 className="text-2xl font-bold tracking-tight">Journey</h2>
        <div className="space-y-6">
          {TIMELINE.map((item, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="shrink-0 w-24">
                <span className="text-brand-blue font-bold text-lg">{item.year}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                <h4 className="text-muted-foreground font-medium">{item.company}</h4>
                <p className="text-muted-foreground/80 font-light leading-relaxed pt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
