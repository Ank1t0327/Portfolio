import { PageTransition } from '../components/layout/PageTransition';
import { FlaskConical, Terminal, Network, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LABS = [
  {
    id: 1,
    title: 'Ubuntu Hardening Lab',
    description: 'A step-by-step walkthrough of securing a fresh Ubuntu 22.04 server, including setting up UFW, Fail2Ban, and disabling root SSH access.',
    icon: Terminal,
    color: 'text-brand-purple',
    status: 'Completed',
    date: 'May 2024'
  },
  {
    id: 2,
    title: 'Network Traffic Analysis',
    description: 'Analyzing a provided PCAP file to identify a simulated malware beacon using Wireshark and Zeek.',
    icon: Network,
    color: 'text-brand-teal',
    status: 'Completed',
    date: 'April 2024'
  },
  {
    id: 3,
    title: 'SIEM Alert Tuning',
    description: 'Configuring custom alert thresholds in Splunk to reduce false positives for Brute Force SSH attempts.',
    icon: Shield,
    color: 'text-brand-blue',
    status: 'In Progress',
    date: 'Current'
  }
];

export default function Labs() {
  return (
    <PageTransition className="py-8 space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple mb-4">
          <FlaskConical className="h-4 w-4" />
          <span className="text-sm font-bold tracking-wide uppercase">Security Lab</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Lab Notebook</h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl">
          Detailed writeups and documentation from my hands-on experiments, homelab deployments, and CTF challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LABS.map((lab, index) => (
          <div key={lab.id} className="bento-card p-8 flex flex-col group animate-fade-in-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${lab.color}`}>
                <lab.icon className="h-8 w-8" />
              </div>
              <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                lab.status === 'Completed' ? 'bg-brand-teal/10 border-brand-teal/30 text-brand-teal' : 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue'
              }`}>
                {lab.status}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-purple transition-colors">
              {lab.title}
            </h3>
            
            <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
              {lab.description}
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
              <span className="text-sm font-mono text-muted-foreground">{lab.date}</span>
              <button className="flex items-center gap-2 text-foreground font-medium group-hover:text-brand-purple transition-colors">
                Read Notes <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        {/* Placeholder for future labs */}
        <div className="bento-card p-8 flex flex-col items-center justify-center text-center border-dashed border-2 border-white/10 bg-transparent animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <FlaskConical className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">More Experiments Brewing</h3>
          <p className="text-muted-foreground font-light">Check back later for new writeups.</p>
        </div>
      </div>
    </PageTransition>
  );
}
