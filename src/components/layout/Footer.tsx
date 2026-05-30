import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t-[1.5px] border-theme-border py-12 relative z-10 bg-theme-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold tracking-tight text-theme-text uppercase">
            patch<span className="text-theme-blue">.</span>
          </span>
          <span className="text-theme-muted2 text-sm uppercase-label tracking-widest">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </a>
          <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110">
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
