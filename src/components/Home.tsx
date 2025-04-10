import { FaGithub, FaBehance, FaLinkedin, FaDribbble, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Background from './Background';

const Home = () => {
  const socialLinks = [
    { icon: MdEmail, href: 'mailto:work.prathampatel@gmail.com', label: 'Email' },
    { icon: FaGithub, href: 'https://github.com/7prathampatel', label: 'GitHub' },
    { icon: FaBehance, href: 'https://behance.net/pratham7', label: 'Behance' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/7pratham', label: 'LinkedIn' },
    { icon: FaDribbble, href: 'https://dribbble.com/7pratham', label: 'Dribbble' },
    { icon: FaInstagram, href: 'https://instagram.com/7prthm', label: 'Instagram' },
  ];

  return (
    <section id="home" className="container min-h-screen flex items-center justify-center py-20 md:py-32 relative">
      <Background />
      <div className="max-w-4xl terminal-content">
        <div className="terminal-header mb-8">
          <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
          <span className="text-[var(--terminal-text)]">:~$</span>
          <span className="ml-2 text-[var(--terminal-accent)]">cat about.txt</span>
        </div>

        <div className="space-y-6">
          <h1 className="hero-text text-4xl md:text-6xl font-mono mb-6 text-[var(--terminal-accent)] font-bold">
            Creative UI/UX Designer & Frontend Developer
          </h1>
          
          <p className="text-lg md:text-xl font-mono text-[var(--terminal-secondary)] mb-8 leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            Specializing in modern web development and intuitive interface design.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon flex items-center gap-2 text-[var(--terminal-secondary)] hover:text-[var(--terminal-accent)] transition-colors font-mono group"
              >
                <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span className="border-b border-transparent group-hover:border-[var(--terminal-accent)]">_{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="inline-block px-6 py-3 font-mono text-sm border border-[var(--terminal-accent)] text-[var(--terminal-accent)] hover:bg-[var(--terminal-accent)] hover:text-[var(--terminal-bg)] transition-colors"
            >
              &gt; View Projects
            </a>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 font-mono text-sm border border-[var(--terminal-secondary)] text-[var(--terminal-secondary)] hover:bg-[var(--terminal-secondary)] hover:text-[var(--terminal-bg)] transition-colors"
            >
              &gt; Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;