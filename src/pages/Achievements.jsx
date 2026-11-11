import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Flag, ShieldCheck, Terminal, Star, AlertCircle, Award } from 'lucide-react';
import CertCard from '../components/cards/CertCard';
import { achievements } from '../data/achievements';
import { certifications, certCategories } from '../data/certifications';

const iconMap = { Code2, Flag, ShieldCheck, Terminal, Star, Award };

export default function Achievements() {
  const [activeCertCat, setActiveCertCat] = useState('All');

  const filteredCerts = activeCertCat === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeCertCat);

  return (
    <div className="bg-ivory dark:bg-charcoal">

      {/* ── PAGE HEADER ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label mb-4"
        >
          MILESTONES
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.07 }}
          className="text-5xl md:text-6xl font-bold text-charcoal dark:text-ivory leading-tight mb-3"
        >
          Milestones along<br />
          <span className="text-forest-green dark:text-lime-accent">the way.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.14 }}
          className="text-muted-grey max-w-lg"
        >
          An honest record of certifications, learning milestones, and work in progress.
        </motion.p>
      </section>

      {/* ── CERTIFICATIONS ────────────────────────────── */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-2"
          >
            <div className="w-8 h-8 rounded-lg bg-soft-sage dark:bg-forest-green/20 flex items-center justify-center">
              <Award size={16} className="text-forest-green dark:text-lime-accent" />
            </div>
            <h2 className="text-2xl font-bold text-charcoal dark:text-ivory">
              Certifications & Credentials
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-sm text-muted-grey ml-11"
          >
            Certifications, professional training, and practical learning experiences.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {certCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCertCat(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeCertCat === cat
                  ? 'bg-charcoal dark:bg-lime-accent text-white dark:text-charcoal shadow-sm'
                  : 'bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 text-muted-grey hover:border-forest-green dark:hover:border-lime-accent hover:text-forest-green dark:hover:text-lime-accent'
                }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-muted-grey self-center">
            {filteredCerts.length} credential{filteredCerts.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-16">
            <Award size={36} className="mx-auto text-muted-grey mb-3 opacity-30" />
            <p className="text-muted-grey text-sm">No certifications in this category yet.</p>
          </div>
        )}

        {/* Add more note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 p-4 rounded-2xl border border-dashed border-border dark:border-muted-grey/30 text-center"
        >
          <p className="text-xs text-muted-grey font-mono">
            ✦ Add new certifications in <code className="text-forest-green dark:text-lime-accent">src/data/certifications.js</code>
          </p>
        </motion.div>
      </section>

      {/* ── OTHER ACHIEVEMENTS ─────────────────────────── */}
      <section className="border-t border-border dark:border-muted-grey/20 bg-white dark:bg-[#1a1e1b]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-charcoal dark:text-ivory mb-1"
            >
              Other Milestones
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-muted-grey"
            >
              Practice, preparation, and hands-on training.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, i) => {
              const Icon = iconMap[item.icon] || Star;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="bg-ivory dark:bg-charcoal border border-border dark:border-muted-grey/20 rounded-2xl p-6 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.color + '15' }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-charcoal dark:text-ivory">{item.title}</h3>
                      {item.status === 'in-progress' && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800/30">
                          ⏳ In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold mb-2" style={{ color: item.color }}>{item.subtitle}</p>
                    <p className="text-sm text-muted-grey leading-relaxed">{item.description}</p>

                    {item.focusAreas && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.focusAreas.map(area => (
                          <span key={area} className="font-mono text-xs px-2 py-0.5 rounded-full bg-soft-sage/50 dark:bg-muted-grey/10 text-muted-grey">
                            {area}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.platforms && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.platforms.map(p => (
                          <span key={p} className="font-mono text-xs px-2 py-0.5 rounded-full bg-soft-sage/50 dark:bg-muted-grey/10 text-muted-grey">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.note && (
                      <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-grey font-mono">
                        <AlertCircle size={12} /> {item.note}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 p-4 rounded-2xl border border-dashed border-border dark:border-muted-grey/30 text-center"
          >
            <p className="text-xs text-muted-grey font-mono">
              ✦ More milestones will be added as they are completed.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
