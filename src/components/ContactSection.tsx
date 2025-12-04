import { useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Contact</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 neon-line mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a security concern or want to collaborate? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="cyber-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-6 h-6 text-primary" />
                <h3 className="font-mono text-lg text-foreground">Get In Touch</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new security challenges, collaborative projects, or just connecting with fellow security enthusiasts.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:ankit032718@gmail.com"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    ankit032718@gmail.com
                  </span>
                </a>
                
                <a
                  href="https://github.com/Ank1t0327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    github.com/Ank1t0327
                  </span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/ankit0327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    linkedin.com/in/ankit0327
                  </span>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">
                    Lovely Professional University, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-6 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-sm text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-mono text-sm text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-mono text-sm text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg glow-border hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
