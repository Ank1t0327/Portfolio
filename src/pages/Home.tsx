import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, BookOpen, Shield, Code, Server, Zap } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { RotatingText } from '../components/ui/RotatingText';
import { TerminalWidget } from '../components/ui/TerminalWidget';

export default function Home() {
  return (
    <PageTransition className="py-8 relative">
      {/* Cyber-themed background elements for extra touch */}
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-brand-teal/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="flex flex-col md:grid md:grid-cols-4 lg:grid-cols-6 gap-6 md:auto-rows-[160px]">
        
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
        <div className="bento-card md:!bg-transparent md:!border-none md:!backdrop-blur-none col-span-1 md:col-span-4 lg:col-span-2 row-span-2 animate-fade-in-up delay-100 block md:block">
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
        <Link to="/projects" className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-6 flex flex-col justify-between animate-fade-in-up delay-300 hover:bg-white/5 hover:border-brand-blue/50 transition-all group cursor-pointer overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex justify-between items-start relative z-10">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-brand-blue/20 transition-colors shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(var(--brand-blue-rgb),0.5)]">
              <Code className="h-6 w-6 text-brand-blue" />
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-blue transition-colors">12+</h3>
            <p className="text-muted-foreground font-medium group-hover:text-foreground/80 transition-colors">Projects Built</p>
          </div>
        </Link>

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
        <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-6 flex flex-col justify-between animate-fade-in-up delay-500 bg-black/20 group hover:border-brand-neon/50 transition-all">
          <div className="flex items-center justify-between text-muted-foreground mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 group-hover:text-brand-neon transition-colors" />
              <h3 className="font-medium group-hover:text-foreground transition-colors">Fav Command</h3>
            </div>
            <div className="h-2 w-2 rounded-full bg-brand-neon/50 animate-pulse"></div>
          </div>
          <div className="p-3 bg-black/40 rounded border border-white/5 font-mono text-sm text-brand-neon break-all group-hover:border-brand-neon/30 transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">$ chmod +x life.sh && ./life.sh</span>
          </div>
        </div>

        {/* Read Articles Button Card */}
        <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-0 animate-fade-in-up overflow-hidden group hover:border-brand-purple/50 transition-all" style={{ animationDelay: '600ms' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <Link to="/blog" className="w-full h-full p-6 flex items-center justify-between group hover:bg-white/5 transition-colors relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <BookOpen className="h-4 w-4 group-hover:text-brand-purple transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-brand-purple transition-colors drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(var(--brand-purple-rgb),0.5)]">Knowledge Vault</h3>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple/20 group-hover:shadow-[0_0_15px_rgba(var(--brand-purple-rgb),0.4)] transition-all">
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-purple" />
            </div>
          </Link>
        </div>

      </div>
    </PageTransition>
  );
}
