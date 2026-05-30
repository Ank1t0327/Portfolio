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
        icon: <Terminal className="h-4 w-4 text-theme-blue" />,
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <PageTransition className="max-w-5xl mx-auto space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold font-mono text-theme-text uppercase tracking-widest inline-block">Establish Connection</h1>
        <div className="h-[1.5px] bg-theme-border w-48 mx-auto"></div>
        <p className="text-theme-muted1 max-w-2xl mx-auto font-sans">
          Whether you have a question, an opportunity, or just want to say hi, my inbox is open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start pt-8">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-theme-text uppercase tracking-widest">Contact Info</h2>
            <div className="space-y-4">
              <a href="mailto:patch@example.com" className="flex items-center gap-4 text-theme-muted1 hover:text-theme-blue transition-colors group">
                <div className="w-12 h-12 bg-theme-bg border-[1.5px] border-theme-border group-hover:border-theme-blue flex items-center justify-center transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-theme-text text-sm uppercase tracking-widest">Email</p>
                  <p className="text-sm font-sans">patch@example.com</p>
                </div>
              </a>
              
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-theme-muted1 hover:text-theme-blue transition-colors group">
                <div className="w-12 h-12 bg-theme-bg border-[1.5px] border-theme-border group-hover:border-theme-blue flex items-center justify-center transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-theme-text text-sm uppercase tracking-widest">GitHub</p>
                  <p className="text-sm font-sans">github.com/patch-cyber</p>
                </div>
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-theme-muted1 hover:text-theme-blue transition-colors group">
                <div className="w-12 h-12 bg-theme-bg border-[1.5px] border-theme-border group-hover:border-theme-blue flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-theme-text text-sm uppercase tracking-widest">LinkedIn</p>
                  <p className="text-sm font-sans">linkedin.com/in/patch-cyber</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="p-6 bg-theme-bg border border-theme-border border-dashed font-mono text-sm text-theme-muted2">
            <p className="text-theme-blue mb-2 uppercase tracking-widest text-xs">GPG Public Key (Snippet)</p>
            <p className="break-all">
              -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
              mQINBGB23bYBEAC9w9O8b6q...<br/>
              ...Contact me for the full key.
            </p>
          </div>
        </div>

        <div className="bento-card p-8 group">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold text-theme-text uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-4 py-3 bg-theme-bg border-[1.5px] border-theme-border rounded-[4px] focus:outline-none focus:border-theme-blue transition-colors text-theme-text font-sans"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold text-theme-text uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-4 py-3 bg-theme-bg border-[1.5px] border-theme-border rounded-[4px] focus:outline-none focus:border-theme-blue transition-colors text-theme-text font-sans"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold text-theme-text uppercase tracking-widest">Message payload</label>
              <textarea 
                id="message" 
                rows={5}
                required
                className="w-full px-4 py-3 bg-theme-bg border-[1.5px] border-theme-border rounded-[4px] focus:outline-none focus:border-theme-blue transition-colors text-theme-text resize-none font-sans"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-theme-card hover:bg-theme-blueHover text-theme-text hover:text-theme-blue border-[1.5px] border-theme-border hover:border-theme-blueBorder rounded-[4px] font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
