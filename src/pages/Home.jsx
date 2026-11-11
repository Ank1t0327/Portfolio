import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Terminal, Shield, Code2, Wrench, Zap, Award } from 'lucide-react';
import { projects } from '../data/projects';
import { certifications } from '../data/certifications';

const rotatingPhrases = ['Security Researcher', 'Tool Builder', 'Linux Enthusiast', 'CTF Player'];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const phrase = rotatingPhrases[index];
    let charIdx = typing ? 0 : phrase.length;
    const interval = setInterval(() => {
      if (typing) {
        charIdx++;
        setDisplay(phrase.slice(0, charIdx));
        if (charIdx >= phrase.length) { clearInterval(interval); setTimeout(() => setTyping(false), 2000); }
      } else {
        charIdx--;
        setDisplay(phrase.slice(0, charIdx));
        if (charIdx <= 0) { clearInterval(interval); setIndex(i => (i + 1) % rotatingPhrases.length); setTyping(true); }
      }
    }, typing ? 60 : 40);
    return () => clearInterval(interval);
  }, [index, typing]);

  return (
    <span className="font-mono text-sm text-muted-grey">
      {display}<span className="animate-blink text-forest-green dark:text-lime-accent">█</span>
    </span>
  );
}

/* Subtle floating code symbol — same palette, low opacity */
function FloatingSymbol({ text, className, delay = 0 }) {
  return (
    <motion.span
      className={`absolute select-none font-mono font-bold pointer-events-none text-forest-green dark:text-lime-accent ${className}`}
      animate={{ y: [0, -10, 0], opacity: [0.07, 0.12, 0.07] }}
      transition={{ repeat: Infinity, duration: 5 + delay, ease: 'easeInOut', delay }}
    >
      {text}
    </motion.span>
  );
}

const currently = [
  { text: 'Building security tools', symbol: '>' },
  { text: 'Exploring offensive security', symbol: '#' },
  { text: 'Learning system design', symbol: '$' },
  { text: 'Cloud & DevOps exploration', symbol: '~' },
  { text: 'CTF practice', symbol: '?' },
  { text: 'Security+ prep', symbol: '!' },
];

export default function Home() {
  const featured = projects.filter(p => p.featured);
  const certCount = certifications.length;

  return (
    <div className="bg-ivory dark:bg-charcoal">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">

          {/* Left column */}
          <div className="relative">
            {/* Subtle floating code symbols — forest green, very low opacity */}
            <FloatingSymbol text="</>" className="text-2xl -top-3 right-6 md:right-28" delay={0} />
            <FloatingSymbol text="{ }" className="text-xl top-24 -right-1 md:right-14" delay={1.5} />
            <FloatingSymbol text="0x" className="text-lg top-10 right-20 md:right-40" delay={0.8} />

            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border dark:border-muted-grey/30 bg-white dark:bg-charcoal/60 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span className="font-mono text-xs text-muted-grey tracking-wide">CYBERSECURITY · DEVELOPMENT · RESEARCH</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-6xl sm:text-7xl md:text-8xl font-bold text-charcoal dark:text-ivory leading-[0.95] tracking-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-forest-green dark:text-lime-accent">Ankit</span>
                <svg className="absolute -bottom-2 left-0 w-full overflow-visible" viewBox="0 0 200 12" fill="none">
                  <motion.path
                    d="M2 8 Q 50 2 100 8 Q 150 14 198 8"
                    stroke="#A8D98B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                  />
                </svg>
              </span>
              <span className="text-forest-green dark:text-lime-accent">.</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-6 h-6"
            >
              <TypingEffect />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-charcoal/70 dark:text-soft-sage/80 leading-relaxed max-w-lg mb-3"
            >
              I work on <span className="font-semibold text-charcoal dark:text-ivory">offensive security</span>, security tooling, and building practical solutions to real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-muted-grey leading-relaxed max-w-md mb-10"
            >
              Exploring systems, understanding vulnerabilities, building tools, and continuously learning along the way.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.38 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/projects" className="btn-primary group">
                Explore My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#"
                onClick={e => { e.preventDefault(); alert('Add your resume PDF link here.'); }}
                className="btn-secondary group"
              >
                View Resume
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right column — bento stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-3 w-72 flex-shrink-0"
          >
            {/* Terminal block */}
            <div className="col-span-2 bento-green relative overflow-hidden rounded-2xl">
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/5" />
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-lime-accent/70" />
                  <span className="font-mono text-xs text-soft-sage/50">ankit@kali:~$</span>
                </div>
                <span className="font-mono text-xs text-lime-accent/40">↑ secure</span>
              </div>
              <div className="font-mono text-xs space-y-1.5">
                <div><span className="text-lime-accent">❯</span><span className="text-soft-sage ml-1.5">nmap -sV target</span></div>
                <div className="text-soft-sage/40 pl-4">Starting Nmap 7.94...</div>
                <div className="text-lime-accent pl-4">22/tcp  open  ssh</div>
                <div className="text-lime-accent pl-4">80/tcp  open  http</div>
                <div className="text-soft-sage/40 pl-4">Done. ✓</div>
              </div>
            </div>

            {/* CTF */}
            <motion.div whileHover={{ scale: 1.03 }} className="bento-lime flex flex-col justify-between min-h-[90px] cursor-default">
              <span className="font-mono text-xs text-charcoal/50">CTFs</span>
              <div>
                <p className="text-3xl font-bold text-charcoal">150+</p>
                <p className="text-xs text-charcoal/60">practiced</p>
              </div>
            </motion.div>

            {/* LeetCode */}
            <motion.div whileHover={{ scale: 1.03 }} className="bento-card dark:bg-[#1f2421] flex flex-col justify-between min-h-[90px] cursor-default">
              <span className="font-mono text-xs text-muted-grey">LeetCode</span>
              <div>
                <p className="text-3xl font-bold text-charcoal dark:text-ivory">150+</p>
                <p className="text-xs text-muted-grey">problems</p>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div whileHover={{ scale: 1.03 }} className="bento-sage dark:bg-forest-green/20 flex flex-col justify-between min-h-[90px] cursor-default">
              <span className="font-mono text-xs text-charcoal/60 dark:text-soft-sage/60">Projects</span>
              <div>
                <p className="text-3xl font-bold text-forest-green dark:text-lime-accent">6+</p>
                <p className="text-xs text-charcoal/60 dark:text-soft-sage/60">built</p>
              </div>
            </motion.div>

            {/* Status */}
            <motion.div whileHover={{ scale: 1.03 }} className="bento-card dark:bg-[#1f2421] flex flex-col gap-2 cursor-default">
              <span className="font-mono text-xs text-muted-grey">Status</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
                <span className="text-xs font-semibold text-charcoal dark:text-ivory">Open to work</span>
              </div>
              <p className="text-xs text-muted-grey">Security roles ✦</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ──────────────────────────── */}
      <div className="border-y border-border dark:border-muted-grey/20 bg-white dark:bg-[#1f2421] overflow-hidden py-3 my-4">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex gap-0 flex-shrink-0">
              {['Offensive Security', 'Linux', 'CTF Practice', 'Security Tooling', 'Recon Automation', 'Log Analysis', 'Network Enumeration', 'Bash Scripting', 'Vulnerability Assessment', 'Digital Forensics'].map(item => (
                <span key={item} className="inline-flex items-center gap-3 px-6 font-mono text-xs text-muted-grey">
                  <span className="text-lime-accent">✦</span> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED PROJECTS ───────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">SELECTED WORK</p>
            <h2 className="text-4xl font-bold text-charcoal dark:text-ivory">
              Things I've built<span className="text-forest-green dark:text-lime-accent">.</span>
            </h2>
          </div>
          <Link to="/projects" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-forest-green dark:text-lime-accent group">
            All projects <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project, i) => {
            const Icons = [Shield, Zap, Terminal];
            const ProjectIcon = Icons[i] || Wrench;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block h-full bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl p-6 hover:border-forest-green dark:hover:border-lime-accent hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="tag">{project.category}</span>
                    <motion.div whileHover={{ rotate: 10 }} className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: project.color + '20' }}>
                      <ProjectIcon size={18} style={{ color: project.color }} />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal dark:text-ivory mb-2 group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-grey leading-relaxed mb-5">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 3).map(t => (
                      <span key={t} className="font-mono text-xs px-2 py-0.5 rounded-full bg-soft-sage/60 dark:bg-forest-green/15 text-forest-green dark:text-lime-accent">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-forest-green dark:text-lime-accent pt-4 border-t border-border dark:border-muted-grey/20 group-hover:gap-3 transition-all duration-200">
                    View details <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── ABOUT + CURRENTLY ───────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-forest-green rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/[0.04]" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/[0.04]" />
            {/* Subtle code decoration */}
            <span className="absolute top-6 right-7 font-mono text-5xl font-bold text-white/5 select-none pointer-events-none">&gt;_</span>
            <p className="font-mono text-xs text-lime-accent/70 uppercase tracking-widest mb-4">ABOUT</p>
            <p className="text-xl font-semibold text-ivory mb-4 leading-relaxed relative z-10">
              Cybersecurity-focused developer who learns by building, experimenting, and breaking things in controlled environments.
            </p>
            <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-lime-accent hover:gap-3 transition-all duration-200 group">
              More about me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl p-6"
          >
            <p className="section-label mb-4">CURRENTLY EXPLORING ✦</p>
            <div className="space-y-2.5">
              {currently.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-center gap-2.5 group"
                >
                  <span className="font-mono text-xs text-muted-grey/40 w-3 flex-shrink-0">{item.symbol}</span>
                  <span className="text-sm text-charcoal dark:text-soft-sage group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS BENTO ────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="section-label mb-5">HIGHLIGHTS ✦</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="bg-white dark:bg-[#1f2421] border border-border dark:border-amber-900/20 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
          >
            <Code2 size={20} className="text-amber-500 dark:text-amber-400" />
            <div>
              <p className="text-2xl font-bold text-charcoal dark:text-ivory">150+</p>
              <p className="text-xs text-muted-grey mt-0.5">LeetCode Problems</p>
            </div>
          </motion.div>

          {/* CTFs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="bg-soft-sage/50 dark:bg-forest-green/10 border border-soft-sage dark:border-forest-green/20 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
          >
            <Shield size={20} className="text-forest-green dark:text-lime-accent" />
            <div>
              <p className="text-2xl font-bold text-forest-green dark:text-lime-accent">150+</p>
              <p className="text-xs text-muted-grey mt-0.5">CTF Challenges</p>
            </div>
          </motion.div>

          {/* Certifications — links to achievements#certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="cursor-pointer"
          >
            <Link
              to="/achievements#certifications"
              className="block h-full bg-charcoal dark:bg-[#1f2421] border border-charcoal/80 dark:border-muted-grey/20 rounded-2xl p-5 flex flex-col gap-3 hover:border-forest-green dark:hover:border-lime-accent transition-all duration-300 group"
            >
              <Award size={20} className="text-lime-accent group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-2xl font-bold text-ivory">{certCount}+</p>
                <p className="text-xs text-soft-sage/60 mt-0.5">Credentials</p>
              </div>
              <p className="text-xs text-lime-accent/70 font-mono mt-auto">View Certifications →</p>
            </Link>
          </motion.div>

          {/* Sec+ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
          >
            <Wrench size={20} className="text-muted-grey" />
            <div>
              <p className="text-2xl font-bold text-charcoal dark:text-ivory">Sec+</p>
              <p className="text-xs text-muted-grey mt-0.5">In Preparation</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
