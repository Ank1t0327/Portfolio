import { 
  Shield, 
  Swords, 
  Eye, 
  Binary, 
  Terminal, 
  Code, 
  Globe, 
  Server, 
  Network, 
  Bug,
  Database,
  Cloud
} from 'lucide-react';

const skills = [
  { name: 'Penetration Testing', icon: Shield, color: 'from-blue-500 to-cyan-500' },
  { name: 'Red Teaming', icon: Swords, color: 'from-red-500 to-orange-500' },
  { name: 'Blue Team Operations', icon: Eye, color: 'from-blue-400 to-blue-600' },
  { name: 'Reverse Engineering', icon: Binary, color: 'from-purple-500 to-pink-500' },
  { name: 'Bash Scripting', icon: Terminal, color: 'from-green-500 to-emerald-500' },
  { name: 'Python Automation', icon: Code, color: 'from-yellow-500 to-orange-500' },
  { name: 'JavaScript & Web Security', icon: Globe, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Linux / Kali Admin', icon: Server, color: 'from-gray-500 to-slate-500' },
  { name: 'Networking & OSINT', icon: Network, color: 'from-teal-500 to-cyan-500' },
  { name: 'Malware Analysis', icon: Bug, color: 'from-red-600 to-rose-500' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-foreground">Skills</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 neon-line mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Tools and technologies I use to secure systems and build solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur transition-all duration-300" 
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              <div className="relative cyber-card p-6 rounded-xl text-center h-full flex flex-col items-center justify-center gap-4">
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${skill.color}`} />
                
                {/* Icon */}
                <div className="relative">
                  <skill.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                    <skill.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                {/* Name */}
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
