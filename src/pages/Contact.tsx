import { PageTransition } from '../components/layout/PageTransition';
import { Mail, Github, Linkedin, Terminal, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message transmitted securely.', {
        description: 'I will get back to you as soon as possible.',
        icon: <Terminal className="h-4 w-4 text-neon-cyan" />,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <PageTransition className="max-w-5xl mx-auto space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold font-mono text-gradient inline-block">Establish Connection</h1>
        <div className="neon-line w-48 mx-auto"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you have a question, an opportunity, or just want to say hi, my inbox is open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start pt-8">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-mono text-foreground">Contact Info</h2>
            <div className="space-y-4">
              <a href="mailto:patch@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-neon-cyan transition-colors group">
                <div className="w-12 h-12 rounded bg-cyber-navy border border-border group-hover:border-neon-cyan/50 flex items-center justify-center transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm">patch@example.com</p>
                </div>
              </a>
              
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-neon-blue transition-colors group">
                <div className="w-12 h-12 rounded bg-cyber-navy border border-border group-hover:border-neon-blue/50 flex items-center justify-center transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-sm">github.com/patch-cyber</p>
                </div>
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-neon-cyan transition-colors group">
                <div className="w-12 h-12 rounded bg-cyber-navy border border-border group-hover:border-neon-cyan/50 flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm">linkedin.com/in/patch-cyber</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-cyber-navy border border-border border-dashed font-mono text-sm text-muted-foreground">
            <p className="text-neon-cyan mb-2">GPG Public Key (Snippet)</p>
            <p className="break-all opacity-70">
              -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
              mQINBGB23bYBEAC9w9O8b6q...<br/>
              ...Contact me for the full key.
            </p>
          </div>
        </div>

        <div className="cyber-card p-8 rounded-lg animate-fade-in-up delay-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground font-mono">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors text-foreground"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground font-mono">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors text-foreground"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground font-mono">Message payload</label>
              <textarea 
                id="message" 
                rows={5}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors text-foreground resize-none"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue rounded font-mono font-bold transition-all flex items-center justify-center gap-2 hover:glow-border disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Transmit
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
