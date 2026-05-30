import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { TerminalWidget } from '../components/ui/TerminalWidget';

export default function Home() {
  return (
    <PageTransition className="py-12">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">

        {/* Hero Card */}
        <div className="bento-card lg:col-span-2 bg-theme-hero diagonal-texture p-8 md:p-12 flex flex-col justify-between group hover:shadow-[4px_4px_0_#4a7fa5] transition-all min-h-[400px]">
          <div className="absolute top-6 right-6 rotate-12 border border-theme-border text-theme-blue uppercase-label px-3 py-1 text-[10px] tracking-widest bg-theme-card group-hover:border-theme-blue transition-colors">
            AVAILABLE
          </div>

          <div className="border border-theme-blue/30 text-theme-blue uppercase-label px-3 py-1 text-[10px] tracking-widest w-fit mb-8 bg-theme-blue/5">
            SYS: ONLINE // V1.0
          </div>

          <div className="mt-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-theme-text mb-4 leading-tight">
              Hey, <br /> I'm Patch
            </h1>

            <p className="uppercase-label text-theme-muted1 text-xs md:text-sm tracking-widest mb-8">
              CYBERSECURITY . LINUX . AUTOMATION . DEFENSE
            </p>

            <p className="max-w-xl text-theme-muted1 font-sans text-lg">
              I break things carefully, fix things curiously, and document everything obsessively.
            </p>
          </div>
        </div>

        {/* Terminal Widget Card */}
        <div className="bento-card lg:col-span-1">
          <TerminalWidget />
        </div>

        {/* Stat Card: Projects */}
        <div className="bento-card lg:col-span-1 p-8 flex flex-col justify-center relative group min-h-[200px]">
          <div className="absolute top-6 right-6 rotate-[-5deg] border border-theme-blue/30 text-theme-blue uppercase-label px-3 py-1 text-[10px] tracking-widest bg-theme-card group-hover:border-theme-blue transition-colors">
            SHIPPED
          </div>

          <p className="uppercase-label text-theme-muted1 text-xs tracking-widest mb-4">PROJECTS BUILT</p>

          <div className="text-7xl font-bold text-theme-text animate-wobble inline-block origin-bottom">
            12<span className="text-theme-blue">+</span>
          </div>

          <p className="text-theme-muted2 text-sm mt-6 font-sans">and counting...</p>
        </div>

        {/* Fav Command Card */}
        <div className="bento-card lg:col-span-1 p-8 flex flex-col justify-between min-h-[200px]">
          <p className="uppercase-label text-theme-muted1 text-xs tracking-widest mb-4">FAV COMMAND</p>

          <div className="bg-theme-bg p-4 border border-theme-border text-theme-text font-mono text-sm my-auto">
            $ chmod +x life.sh && ./life.sh
          </div>

          <p className="text-theme-muted2 text-sm mt-4 font-sans">runs every morning</p>
        </div>

        {/* Learning Bars Card */}
        <div className="bento-card lg:col-span-1 p-8 flex flex-col justify-between min-h-[200px]">
          <p className="uppercase-label text-theme-muted1 text-xs tracking-widest mb-6">CURRENTLY LEARNING</p>

          <div className="space-y-5 flex-grow flex flex-col justify-center">
            {[
              { name: 'Bash automation', progress: 85, color: 'bg-theme-blue' },
              { name: 'SIEM fundamentals', progress: 60, color: 'bg-theme-blue' },
              { name: 'Cloud security', progress: 40, color: 'bg-theme-dimBlue' },
              { name: 'Threat detection', progress: 75, color: 'bg-theme-dimBlue' },
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="text-xs text-theme-muted1 font-sans">{skill.name}</div>
                <div className="h-[3px] w-full bg-theme-border overflow-hidden">
                  <div
                    className={`h-full ${skill.color}`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Strip */}
        <div className="bento-card lg:col-span-2 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="uppercase-label text-theme-muted1 text-xs tracking-[0.2em]">KNOWLEDGE VAULT — 42 WRITEUPS & NOTES</span>
          <Link to="/blog" className="border border-theme-border px-6 py-3 uppercase-label text-theme-text hover:bg-theme-blueHover hover:border-theme-blueBorder transition-colors text-xs tracking-widest flex items-center gap-2">
            EXPLORE <span className="font-sans">→</span>
          </Link>
        </div>

      </div>
    </PageTransition>
  );
}
