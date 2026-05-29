import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, BookOpen, Shield, Code, Server, Zap } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { RotatingText } from '../components/ui/RotatingText';
import { TerminalWidget } from '../components/ui/TerminalWidget';

export default function Home() {
  return (
    <PageTransition className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[160px]">
        
        {/* Main Intro Card */}
        <div className="bento-card col-span-1 md:col-span-4 lg:col-span-4 row-span-2 p-8 md:p-12 flex flex-col justify-center animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/10">
              <Zap className="h-4 w-4 text-brand-teal" />
              <span className="text-sm font-medium text-brand-teal">System Online</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Hey, I'm Patch 👋
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground font-light flex items-center gap-2 flex-wrap">
              <span>I enjoy</span>
              <span className="font-medium text-foreground">
                <RotatingText words={['breaking things', 'building things', 'securing things', 'understanding things']} />
              </span>
            </div>
            
            <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed font-light">
              Welcome to my digital laboratory. I'm a cybersecurity student focused on Linux systems, automation, and infrastructure defense.
            </p>
          </div>
        </div>

        {/* Terminal Widget Card */}
        <div className="col-span-1 md:col-span-4 lg:col-span-2 row-span-2 animate-fade-in-up delay-100 hidden lg:block">
          <TerminalWidget />
        </div>

        {/* System Status Card */}
        <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-6 flex flex-col justify-between animate-fade-in-up delay-200 bg-gradient-to-br from-brand-purple/10 to-transparent">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Server className="h-4 w-4" />
            <h3 className="font-medium">System Status</h3>
          </div>
          <div className="space-y-1">
            <p className="text-xl font-bold text-foreground">PatchOS v1.0</p>
            <p className="text-sm text-brand-teal font-mono">Uptime: Building Every Day</p>
          </div>
        </div>

        {/* Quick Links / Stats */}
        <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-6 flex flex-col justify-between animate-fade-in-up delay-300 hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => window.location.href='/projects'}>
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-brand-blue/20 transition-colors">
              <Code className="h-6 w-6 text-brand-blue" />
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">12+</h3>
            <p className="text-muted-foreground font-medium">Projects Built</p>
          </div>
        </div>

        {/* Currently Learning Card */}
        <div className="bento-card col-span-1 md:col-span-4 lg:col-span-2 row-span-2 p-6 flex flex-col animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Shield className="h-4 w-4" />
            <h3 className="font-medium">Currently Learning</h3>
          </div>
          <div className="space-y-4 flex-grow">
            {[
              { name: 'Bash Automation', progress: 85 },
              { name: 'SIEM Fundamentals', progress: 60 },
              { name: 'Cloud Security', progress: 40 },
              { name: 'Threat Detection', progress: 50 },
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{skill.name}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-purple to-brand-teal rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Favorite Command Card */}
        <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-6 flex flex-col justify-between animate-fade-in-up delay-500 bg-black/20">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Terminal className="h-4 w-4" />
            <h3 className="font-medium">Fav Command</h3>
          </div>
          <div className="p-3 bg-black/40 rounded border border-white/5 font-mono text-sm text-brand-neon break-all">
            $ chmod +x life.sh && ./life.sh
          </div>
        </div>

        {/* Read Articles Button Card */}
        <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <Link to="/blog" className="w-full h-full p-6 flex items-center justify-between group hover:bg-white/5 transition-colors">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <BookOpen className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-brand-purple transition-colors">Knowledge Vault</h3>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple/10 transition-all">
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-purple" />
            </div>
          </Link>
        </div>

      </div>
    </PageTransition>
  );
}
