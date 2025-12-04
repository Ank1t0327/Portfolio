import { Terminal, Shield, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">About</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 neon-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image/Avatar Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />
            <div className="relative aspect-square bg-card rounded-2xl border border-border overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary/30" />
              </div>
              {/* Terminal overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <div className="font-mono text-sm text-primary">
                  <span className="text-muted-foreground">$</span> whoami
                  <br />
                  <span className="text-foreground">ankit@patch</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="cyber-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-6 h-6 text-primary" />
                <h3 className="font-mono text-lg text-foreground">Who Am I?</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="text-primary">Ankit</span>, also known as <span className="text-accent">Patch</span> – a passionate cybersecurity specialist with expertise in penetration testing, red team & blue team operations, and security research. Currently studying at <span className="text-primary">Lovely Professional University</span>, I spend my time breaking systems to make them stronger.
              </p>
            </div>

            <div className="cyber-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h3 className="font-mono text-lg text-foreground">What I Do</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Skilled in <span className="text-primary">Kali Linux</span>, reconnaissance, exploitation, and post-exploitation techniques. I build automation tools using <span className="text-accent">Bash, Python, and JavaScript</span>. I'm also into reverse engineering, malware analysis basics, and developing <span className="text-primary">AI-driven cybersecurity tools</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
