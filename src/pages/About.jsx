import { motion } from 'framer-motion';
import { GraduationCap, Monitor, Code2, Shield, Wrench, MapPin } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { skillCategories, interests } from '../data/skills';

const iconMap = { Monitor, Code2, Shield, Wrench };

const interestIcons = {
  'Offensive Security': '🔴',
  'Vulnerability Assessment': '🔍',
  'Linux': '🐧',
  'Security Automation': '⚡',
  'Network Security': '🌐',
  'Web Security': '🕸️',
  'Digital Forensics': '🧬',
  'Security Tool Development': '🛠️',
};

export default function About() {
  return (
    <div className="bg-ivory dark:bg-charcoal">

      {/* ── INTRO ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="section-label mb-5"
        >
          ABOUT ME
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07 }}
              className="text-5xl md:text-6xl font-bold text-charcoal dark:text-ivory leading-tight mb-8"
            >
              A little about<br />
              <span className="text-forest-green dark:text-lime-accent">me.</span>
            </motion.h1>

            <div className="space-y-5 max-w-xl">
              {[
                "I'm Ankit, a cybersecurity-focused developer interested in understanding how systems work, identifying security weaknesses, and building tools that solve practical problems.",
                "I enjoy working with Linux, exploring security concepts, automating tasks, and experimenting with different technologies.",
                "My approach is simple: learn by building, experiment, break things in controlled environments, and understand how to make them better.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className={`leading-relaxed ${i === 0 ? 'text-lg text-charcoal dark:text-ivory font-medium' : 'text-base text-muted-grey'}`}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Background card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl p-6 space-y-4"
          >
            <p className="section-label">BACKGROUND</p>
            {[
              { icon: GraduationCap, text: 'BTech at Lovely Professional University', sub: 'Computer Science', color: '#164B35' },
              { icon: Shield, text: 'Cybersecurity-focused development', sub: 'Security Research & Tooling', color: '#164B35' },
              { icon: Code2, text: 'Hands-on project development', sub: 'LogGazer · Vulnrank · Mirrorix', color: '#52796f' },
              { icon: Monitor, text: 'CTF practice & security labs', sub: 'picoCTF & other platforms', color: '#6b9080' },
              { icon: MapPin, text: 'Linux & system administration', sub: 'Kali · Ubuntu · RHEL', color: '#777E78' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: item.color + '18' }}>
                  <item.icon size={15} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal dark:text-ivory">{item.text}</p>
                  <p className="text-xs text-muted-grey">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INTERESTS GRID ─────────────────────── */}
      <section className="border-t border-border dark:border-muted-grey/20 bg-white dark:bg-[#1a1e1b]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <SectionHeading label="FOCUS AREAS" title="What I work on." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {interests.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-ivory dark:bg-charcoal border border-border dark:border-muted-grey/20 hover:border-forest-green dark:hover:border-lime-accent hover:bg-soft-sage/30 dark:hover:bg-forest-green/10 transition-all duration-200 group cursor-default"
              >
                <span className="text-xl">{interestIcons[item.label] || '⚙️'}</span>
                <span className="text-sm font-medium text-charcoal dark:text-ivory group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors leading-tight">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading
          label="TOOLS & TECHNOLOGIES"
          title="Skills."
          subtitle="Organized by category — no fabricated percentages, just what I actually use."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Shield;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-soft-sage dark:bg-forest-green/20 flex items-center justify-center">
                    <Icon size={16} className="text-forest-green dark:text-lime-accent" />
                  </div>
                  <h3 className="font-semibold text-charcoal dark:text-ivory">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors
                        ${skill.level === 'primary'
                          ? 'bg-soft-sage/60 dark:bg-forest-green/20 border-soft-sage dark:border-forest-green/30 text-forest-green dark:text-lime-accent font-medium'
                          : 'bg-ivory dark:bg-charcoal border-border dark:border-muted-grey/20 text-muted-grey'
                        }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border dark:border-muted-grey/20">
                  <span className="flex items-center gap-1.5 text-xs text-muted-grey">
                    <span className="w-2 h-2 rounded-full bg-forest-green/40 dark:bg-lime-accent/40" /> frequently used
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-grey">
                    <span className="w-2 h-2 rounded-full bg-border dark:bg-muted-grey/30" /> familiar
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────── */}
      <section className="border-t border-border dark:border-muted-grey/20 bg-white dark:bg-[#1a1e1b]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <SectionHeading label="EDUCATION & TRAINING" title="Learning path." />
          <div className="space-y-4 max-w-2xl">
            {[
              {
                title: 'Lovely Professional University',
                sub: 'Bachelor of Technology — Computer Science',
                detail: 'Ongoing',
                icon: GraduationCap,
                color: '#164B35',
                bg: '#DCE9DE',
              },
              {
                title: 'Red Hat Enterprise Linux Training',
                sub: 'RHEL — Completed',
                detail: 'Hands-on training covering system administration, networking, and service management.',
                icon: Monitor,
                color: '#CC0000',
                bg: '#FFE9E9',
              },
              {
                title: 'CompTIA Security+',
                sub: 'Currently preparing',
                detail: 'Covering security fundamentals, threat analysis, cryptography, and risk management.',
                icon: Shield,
                color: '#E8355A',
                bg: '#FFE9EE',
                badge: '⏳ In Progress',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="flex gap-4 p-5 rounded-2xl border border-border dark:border-muted-grey/20 bg-ivory dark:bg-charcoal hover:border-forest-green/40 dark:hover:border-forest-green/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: item.bg }}>
                    <Icon size={19} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-charcoal dark:text-ivory">{item.title}</h3>
                      {item.badge && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium mt-0.5" style={{ color: item.color }}>{item.sub}</p>
                    <p className="text-sm text-muted-grey mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
