import { FaGithub, FaLinkedin, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[var(--terminal-bg)] border-t border-[var(--terminal-accent)]/20 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-[var(--terminal-accent)] font-mono text-lg mb-4">~/navigation</h3>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left font-mono hover:text-[var(--terminal-accent)] transition-colors w-fit"
              >
                _home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left font-mono hover:text-[var(--terminal-accent)] transition-colors w-fit"
              >
                _projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left font-mono hover:text-[var(--terminal-accent)] transition-colors w-fit"
              >
                _skills
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-[var(--terminal-accent)] font-mono text-lg mb-4">~/contact</h3>
            <div className="flex flex-col space-y-2 font-mono">
              <a
                href="mailto:work.prathampatel@gmail.com"
                className="hover:text-[var(--terminal-accent)] transition-colors w-fit"
              >
                work.prathampatel@gmail.com
              </a>
              <p className="text-[var(--terminal-secondary)]">
                Location: Gujarat , India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-[var(--terminal-accent)] font-mono text-lg mb-4">~/social</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:work.prathampatel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terminal-text)] hover:text-[var(--terminal-accent)] transition-colors group"
              >
                <MdEmail className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://github.com/7prathampatel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terminal-text)] hover:text-[var(--terminal-accent)] transition-colors group"
              >
                <FaGithub className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://behance.net/pratham7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terminal-text)] hover:text-[var(--terminal-accent)] transition-colors group"
              >
                <FaBehance className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/7pratham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terminal-text)] hover:text-[var(--terminal-accent)] transition-colors group"
              >
                <FaLinkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://dribbble.com/7pratham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terminal-text)] hover:text-[var(--terminal-accent)] transition-colors group"
              >
                <FaDribbble className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://instagram.com/7prthm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--terminal-text)] hover:text-[var(--terminal-accent)] transition-colors group"
              >
                <FaInstagram className="w-6 h-6 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--terminal-accent)]/20 text-center font-mono text-[var(--terminal-secondary)]">
          <p>
            <span className="text-[var(--terminal-prompt)]">$</span>{' '}
            echo "© {new Date().getFullYear()} Pratham Patel. All rights reserved."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;