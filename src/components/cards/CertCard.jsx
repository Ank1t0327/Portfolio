import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Calendar, Hash, X, ZoomIn } from 'lucide-react';

function Lightbox({ imageUrl, name, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-3xl w-full"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
          <img src={imageUrl} alt={name} className="w-full rounded-2xl shadow-2xl" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CertCard({ cert, index = 0 }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.07 }}
        whileHover={{ y: -3 }}
        className="bg-white dark:bg-[#1f2421] border border-border dark:border-muted-grey/20 rounded-2xl overflow-hidden hover:shadow-lg hover:border-soft-sage dark:hover:border-forest-green/50 transition-all duration-300 flex flex-col"
      >
        {/* Certificate image / placeholder */}
        <div
          className="relative h-28 flex items-center justify-center overflow-hidden cursor-default"
          style={{ background: cert.issuerColor + '0D' }}
        >
          {cert.imageUrl ? (
            <>
              <img
                src={cert.imageUrl}
                alt={cert.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors group"
              >
                <ZoomIn size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2 opacity-40">
              <Award size={32} style={{ color: cert.issuerColor }} />
              <span className="font-mono text-xs text-muted-grey">Certificate preview</span>
            </div>
          )}

          {/* Category badge top-right */}
          <span
            className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 rounded-full bg-white/90 dark:bg-charcoal/80 border border-border dark:border-muted-grey/20"
            style={{ color: cert.issuerColor }}
          >
            {cert.category}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-grow gap-4">
          {/* Issuer row */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-mono font-bold text-xs text-white"
              style={{ backgroundColor: cert.issuerColor }}
            >
              {cert.issuerInitials}
            </div>
            <div>
              <p className="text-xs text-muted-grey">{cert.issuer}</p>
              <div className="flex items-center gap-1.5 text-xs text-muted-grey">
                <Calendar size={11} />
                {cert.issued}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-charcoal dark:text-ivory leading-snug text-sm">
            {cert.name}
          </h3>

          {/* Skills */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map(skill => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2 py-0.5 rounded-full bg-soft-sage/50 dark:bg-forest-green/15 text-forest-green dark:text-lime-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Credential ID */}
          {cert.credentialId && (
            <div className="flex items-center gap-1.5 text-xs text-muted-grey font-mono bg-soft-sage/30 dark:bg-muted-grey/10 rounded-lg px-3 py-1.5">
              <Hash size={11} className="flex-shrink-0" />
              <span className="truncate">{cert.credentialId}</span>
            </div>
          )}

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Footer */}
          <div className="pt-3 border-t border-border dark:border-muted-grey/20">
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-forest-green dark:text-lime-accent hover:underline"
              >
                <ExternalLink size={12} /> View Credential
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-grey font-mono cursor-not-allowed select-none">
                <ExternalLink size={12} /> Credential link — coming soon
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {lightboxOpen && cert.imageUrl && (
        <Lightbox
          imageUrl={cert.imageUrl}
          name={cert.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
