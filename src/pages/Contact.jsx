import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Ank1t0327',
    href: 'https://github.com/Ank1t0327',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Add your LinkedIn URL',
    href: 'https://linkedin.com/in/YOUR_LINKEDIN',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    // Mailto fallback — replace with real backend/EmailJS when ready
    setTimeout(() => {
      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      setStatus('success');
    }, 800);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-charcoal/60 text-charcoal dark:text-ivory placeholder:text-muted-grey focus:outline-none transition-colors duration-200
    ${errors[field]
      ? 'border-red-400 dark:border-red-500 focus:border-red-400'
      : 'border-border dark:border-muted-grey/20 focus:border-forest-green dark:focus:border-lime-accent'
    }`;

  return (
    <div className="bg-ivory dark:bg-charcoal">
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's connect."
          subtitle="Have an interesting project, security opportunity, collaboration, or just want to talk technology? Feel free to reach out."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact form */}
          <div className="md:col-span-3">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-soft-sage dark:bg-forest-green/20 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-forest-green dark:text-lime-accent" />
                </div>
                <h3 className="text-xl font-bold text-charcoal dark:text-ivory mb-2">Message sent!</h3>
                <p className="text-muted-grey text-sm max-w-xs">
                  Your email client should have opened. If not, email directly at your.email@example.com
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 btn-secondary"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-charcoal dark:text-ivory mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-charcoal dark:text-ivory mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-charcoal dark:text-ivory mb-1.5">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass('subject')}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11} />{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-charcoal dark:text-ivory mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or question..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-xs text-muted-grey font-mono">
                    Uses mailto fallback — configure a backend for direct submission
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={15} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send message</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-charcoal/80 border border-border dark:border-muted-grey/20 rounded-2xl p-6">
              <p className="section-label mb-5">CONNECT DIRECTLY</p>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-soft-sage/40 dark:hover:bg-muted-grey/10 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-soft-sage dark:bg-forest-green/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={17} className="text-forest-green dark:text-lime-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-grey">{link.label}</p>
                        <p className="text-sm font-medium text-charcoal dark:text-ivory group-hover:text-forest-green dark:group-hover:text-lime-accent transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Paper plane decoration */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="text-5xl text-center select-none"
            >
              ✈️
            </motion.div>

            <div className="bg-soft-sage/30 dark:bg-forest-green/10 border border-soft-sage dark:border-forest-green/20 rounded-xl p-4 text-sm text-muted-grey">
              <p className="font-medium text-charcoal dark:text-ivory mb-1">Response time</p>
              Generally within a few days. For urgent matters, reach out directly via email.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
