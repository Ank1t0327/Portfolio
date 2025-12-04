import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';
import CyberGrid from './CyberGrid';

const roles = [
  'Penetration Tester',
  'Red Team Specialist',
  'Blue Team Analyst',
  'Reverse Engineer',
  'Bash & Python Automator',
  'AI-powered Security Researcher',
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CyberGrid />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style header */}
          <div className="inline-block mb-6 animate-fade-in-up">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="font-mono text-sm text-muted-foreground ml-2">~/ankit/portfolio</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4 animate-fade-in-up delay-100">
            <span className="text-foreground">I'm </span>
            <span className="text-gradient glow-text">Ankit</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-mono text-primary mb-6 animate-fade-in-up delay-200">
            Cybersecurity Specialist
          </h2>

          {/* Typing animation */}
          <div className="text-lg md:text-xl font-mono text-muted-foreground mb-8 h-8 animate-fade-in-up delay-300">
            <TypeWriter texts={roles} speed={80} deleteSpeed={40} pauseDuration={1500} />
          </div>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up delay-400">
            Penetration Tester | Red Team & Blue Team Operator | Reverse Engineering | Scripting & Automation | Ethical Hacking
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg glow-border hover:bg-primary/90 transition-all hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-primary text-primary font-mono font-medium rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12 animate-fade-in-up delay-500">
            <a
              href="https://github.com/Ank1t0327"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all hover:scale-110 group"
            >
              <Github className="w-6 h-6 group-hover:drop-shadow-[0_0_10px_hsl(var(--neon-blue))]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit0327/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 group-hover:drop-shadow-[0_0_10px_hsl(var(--neon-blue))]" />
            </a>
            <a
              href="mailto:ankit032718@gmail.com"
              className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all hover:scale-110 group"
            >
              <Mail className="w-6 h-6 group-hover:drop-shadow-[0_0_10px_hsl(var(--neon-blue))]" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
