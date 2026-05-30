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
    <PageTransition className="max-w-4xl mx-auto space-y-16 py-12">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text uppercase">About Me</h1>
        <p className="text-xl text-theme-muted1 font-sans max-w-2xl">
          Understanding systems to secure them.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6 text-theme-muted1 leading-relaxed text-lg font-sans">
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
        
        <div className="bento-card p-8 flex flex-col items-center text-center group">
          <div className="w-32 h-32 rounded-full border-[1.5px] border-theme-border bg-theme-bg flex items-center justify-center mb-6 group-hover:border-theme-blue transition-colors">
            <Shield className="h-12 w-12 text-theme-muted1 group-hover:text-theme-blue transition-colors" strokeWidth={1} />
          </div>
          <div>
            <h3 className="font-bold text-xl text-theme-text uppercase tracking-widest mb-2">Patch</h3>
            <p className="uppercase-label text-theme-blue text-xs">CYBERSECURITY STUDENT</p>
          </div>
        </div>
      </div>

      <div className="space-y-8 pt-8 border-t-[1.5px] border-theme-border">
        <h2 className="text-2xl font-bold tracking-tight text-theme-text uppercase">Areas of Focus</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {INTERESTS.map((interest, i) => (
            <div key={interest.name} className="bento-card p-6 flex flex-col gap-4 hover:bg-theme-blueHover hover:border-theme-blueBorder group transition-colors">
              <interest.icon className="h-6 w-6 text-theme-muted1 group-hover:text-theme-blue transition-colors" strokeWidth={1.5} />
              <span className="font-bold text-sm uppercase tracking-widest text-theme-text">{interest.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8 pt-8 border-t-[1.5px] border-theme-border">
        <h2 className="text-2xl font-bold tracking-tight text-theme-text uppercase">Journey</h2>
        <div className="space-y-6">
          {TIMELINE.map((item, index) => (
            <div key={index} className="bento-card p-8 flex flex-col md:flex-row gap-6 hover:border-theme-blueBorder transition-colors">
              <div className="shrink-0 w-24">
                <span className="text-theme-blue font-bold text-lg uppercase tracking-widest">{item.year}</span>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl text-theme-text uppercase tracking-widest">{item.title}</h3>
                <h4 className="uppercase-label text-theme-muted1 text-xs">{item.company}</h4>
                <p className="text-theme-muted1 font-sans leading-relaxed pt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
