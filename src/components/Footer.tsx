import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-mono font-bold text-lg text-gradient">PATCH</span>
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center font-mono">
            © {new Date().getFullYear()} Ankit. All rights reserved.
          </p>
          
          {/* Designed by */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono">Designed by</span>
            <span className="text-primary font-mono">Patch</span>
          </div>
          
          {/* Decorative line */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
