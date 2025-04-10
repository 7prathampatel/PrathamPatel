import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaEnvelope, FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const contactAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: null });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'work.prathampatel@gmail.com',
      href: 'mailto:work.prathampatel@gmail.com'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: '@7prathampatel',
      href: 'https://github.com/7prathampatel'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Pratham Patel',
      href: 'https://linkedin.com/in/7pratham'
    },
    {
      icon: FaBehance,
      title: 'Behance',
      value: '@pratham7',
      href: 'https://behance.net/pratham7'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });
    setFormData({ name: '', email: '', message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ loading: false, success: true, error: null });
        const form = e.currentTarget;
        if (form instanceof HTMLFormElement) {
          form.reset();
          // Reset form fields to their initial state
          const formElements = Array.from(form.elements) as (HTMLInputElement | HTMLTextAreaElement)[];
          formElements.forEach(element => {
            if (element.type !== 'hidden' && element.type !== 'submit') {
              element.value = '';
            }
          });
        }
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: error.message || 'Failed to send message. Please check your network connection and try again.'
      });
    }
  };

  return (
    <section id="contact" className="container py-20">
      <div className="terminal-header mb-8">
        <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
        <span className="text-[var(--terminal-text)]">:~$</span>
        <span className="ml-2 text-[var(--terminal-accent)]">cat contact.txt</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          ref={contactAnimation.ref}
          variants={contactAnimation.fadeInVariants}
          initial="hidden"
          animate={contactAnimation.isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-[var(--terminal-secondary)] text-lg font-mono">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to get in touch with me using the form or through any of the
            channels below.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center p-4 bg-[var(--terminal-bg)] rounded-lg border border-[var(--terminal-accent)]/20 hover:border-[var(--terminal-accent)]/40 transition-all shadow-lg backdrop-blur-sm font-mono group"
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <info.icon className="w-5 h-5 text-[var(--terminal-accent)] mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-sm text-[var(--terminal-text)] mb-0.5">{info.title}</h3>
                  <p className="text-xs text-[var(--terminal-secondary)] group-hover:text-[var(--terminal-text)] transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={formAnimation.ref}
          variants={formAnimation.fadeInVariants}
          initial="hidden"
          animate={formAnimation.isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 font-mono"
        >
          <input type="hidden" name="access_key" value="3ebc5fed-2fc5-483f-bdbd-58dd5c858320" />
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-4 bg-[var(--terminal-bg)] rounded-xl border border-[var(--terminal-accent)]/20 focus:border-[var(--terminal-accent)]/60 outline-none transition-all shadow-lg backdrop-blur-sm text-[var(--terminal-text)] placeholder:text-[var(--terminal-secondary)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full p-4 bg-[var(--terminal-bg)] rounded-xl border border-[var(--terminal-accent)]/20 focus:border-[var(--terminal-accent)]/60 outline-none transition-all shadow-lg backdrop-blur-sm text-[var(--terminal-text)] placeholder:text-[var(--terminal-secondary)]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full p-4 bg-[var(--terminal-bg)] rounded-xl border border-[var(--terminal-accent)]/20 focus:border-[var(--terminal-accent)]/60 outline-none transition-all shadow-lg backdrop-blur-sm text-[var(--terminal-text)] placeholder:text-[var(--terminal-secondary)] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={formStatus.loading}
            className="w-full p-4 bg-[var(--terminal-accent)] text-[var(--terminal-bg)] rounded-xl hover:bg-[var(--terminal-accent)]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-mono shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            {formStatus.loading ? 'Sending...' : 'Send Message'}
          </button>

          {formStatus.success && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {formStatus.error && (
            <p className="text-red-500">{formStatus.error}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;