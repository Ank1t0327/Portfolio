import { PageTransition } from '../components/layout/PageTransition';
import { FlaskConical, Terminal, Network, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LABS = [
  {
    id: 1,
    title: 'Ubuntu Hardening Lab',
    description: 'A step-by-step walkthrough of securing a fresh Ubuntu 22.04 server, including setting up UFW, Fail2Ban, and disabling root SSH access.',
    icon: Terminal,
    color: 'text-theme-blue',
    status: 'Completed',
    date: 'May 2024'
  },
  {
    id: 2,
    title: 'Network Traffic Analysis',
    description: 'Analyzing a provided PCAP file to identify a simulated malware beacon using Wireshark and Zeek.',
    icon: Network,
    color: 'text-theme-blue',
    status: 'Completed',
    date: 'April 2024'
  },
  {
    id: 3,
    title: 'SIEM Alert Tuning',
    description: 'Configuring custom alert thresholds in Splunk to reduce false positives for Brute Force SSH attempts.',
    icon: Shield,
    color: 'text-theme-dimBlue',
    status: 'In Progress',
    date: 'Current'
  }
];

export default function Labs() {
  return (
    <PageTransition className="py-8 space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-bg border-[1.5px] border-theme-blue text-theme-blue mb-4">
          <FlaskConical className="h-4 w-4" />
          <span className="text-xs font-bold tracking-widest uppercase-label">SECURITY LAB</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-theme-text uppercase">Lab Notebook</h1>
        <p className="text-xl text-theme-muted1 font-sans max-w-2xl">
          Detailed writeups and documentation from my hands-on experiments, homelab deployments, and CTF challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LABS.map((lab, index) => (
          <div key={lab.id} className="bento-card p-8 flex flex-col group transition-transform duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 bg-theme-bg border border-theme-border ${lab.color} group-hover:border-theme-blue transition-colors`}>
                <lab.icon className="h-8 w-8" />
              </div>
              <span className={`text-[10px] font-mono px-3 py-1 border uppercase tracking-widest ${
                lab.status === 'Completed' ? 'bg-theme-bg border-theme-blue text-theme-blue' : 'bg-theme-bg border-theme-muted1 text-theme-muted1'
              }`}>
                {lab.status}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-theme-text mb-3 uppercase tracking-widest group-hover:text-theme-blue transition-colors">
              {lab.title}
            </h3>
            
            <p className="text-theme-muted1 font-sans leading-relaxed mb-8 flex-grow">
              {lab.description}
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t-[1.5px] border-theme-border mt-auto">
              <span className="text-xs font-mono text-theme-muted2">{lab.date}</span>
              <button className="flex items-center gap-2 text-theme-text font-bold text-xs uppercase tracking-widest group-hover:text-theme-blue transition-colors">
                READ NOTES <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}

        {/* Placeholder for future labs */}
        <div className="bento-card p-8 flex flex-col items-center justify-center text-center border-dashed border-2 border-theme-border bg-transparent">
          <FlaskConical className="h-12 w-12 text-theme-muted2 mb-4" />
          <h3 className="text-lg font-bold text-theme-text mb-2 uppercase tracking-widest">More Experiments Brewing</h3>
          <p className="text-theme-muted1 font-sans text-sm">Check back later for new writeups.</p>
        </div>
      </div>
    </PageTransition>
  );
}
