import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 py-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Patch<span className="text-brand-purple">.</span>
          </span>
          <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} All rights reserved.</span>
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
