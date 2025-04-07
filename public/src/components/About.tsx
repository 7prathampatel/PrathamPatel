import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const About = () => {
  const summaryAnimation = useScrollAnimation();
  const educationAnimation = useScrollAnimation();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const education = [
    {
      period: '2021 - Present',
      degree: 'B.Tech (Computer Engineering)',
      institution: 'U. V. Patel College of Engineering, Ganpat University',
      location: 'Kherva',
      icon: FaGraduationCap
    },
    {
      period: '2019 - 2021',
      degree: 'HSC | Science stream(A group)',
      institution: 'Exotica Junior Science College',
      location: 'Mehsana',
      icon: FaGraduationCap
    },
    {
      period: '2018 - 2019',
      degree: 'SSC',
      institution: 'Urban Vidhyalaya',
      location: 'Mehsana',
      icon: FaGraduationCap
    }
  ];

  return (
    <section id="about" className="container py-20">
      <div className="terminal-header mb-12">
        <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
        <span className="text-[var(--terminal-text)]">:~$</span>
        <span className="ml-2 text-[var(--terminal-accent)]">cat resume.txt</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
        {/* About Me Section */}
        <motion.div
          ref={summaryAnimation.ref}
          variants={summaryAnimation.fadeInVariants}
          initial="hidden"
          animate={summaryAnimation.isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 p-8 rounded-xl hover:border-[var(--terminal-accent)]/40 shadow-lg backdrop-blur-sm relative overflow-hidden order-2 lg:order-1"
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--terminal-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h2 className="text-4xl font-bold mb-8 text-[var(--terminal-text)] font-mono relative inline-flex items-center">
            <span className="text-[var(--terminal-accent)] mr-4">&gt; </span>About Me
            <div className="h-1 w-12 bg-[var(--terminal-accent)]/30 ml-4 rounded-full"></div>
          </h2>
          <p className="text-[var(--terminal-secondary)] leading-relaxed text-lg relative font-light tracking-wide">
            I am a passionate frontend developer and UI/UX designer with a strong focus on creating intuitive and engaging web experiences. Currently pursuing my B.Tech in Computer Engineering, I combine my technical skills with creative design thinking to build modern web applications.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          ref={educationAnimation.ref}
          variants={educationAnimation.fadeInVariants}
          initial="hidden"
          animate={educationAnimation.isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="space-y-6 order-1 lg:order-2">
          <h2 className="text-4xl font-bold mb-8 text-[var(--terminal-text)] font-mono relative inline-flex items-center">
            <span className="text-[var(--terminal-accent)] mr-4">&gt; </span>Education
            <div className="h-1 w-12 bg-[var(--terminal-accent)]/30 ml-4 rounded-full"></div>
          </h2>
          <div className="grid gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              className={`bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 p-6 rounded-xl shadow-lg backdrop-blur-sm group transition-all duration-300 relative overflow-hidden transform hover:scale-[1.02] ${hoveredCard === item.degree ? 'border-[var(--terminal-accent)]' : 'hover:border-[var(--terminal-accent)]/40'}`}
              onHoverStart={() => setHoveredCard(item.degree)}
              onHoverEnd={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--terminal-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="font-semibold text-[var(--terminal-text)] text-lg group-hover:text-[var(--terminal-accent)] transition-colors mb-2">
                  {item.degree}
                </h3>
                <div className="space-y-2">
                  <p className="text-[var(--terminal-secondary)] group-hover:text-[var(--terminal-text)] transition-colors">
                    {item.institution}
                  </p>
                  <div className="flex items-center text-sm text-[var(--terminal-secondary)]">
                    <FaCalendarAlt className="mr-2 text-[var(--terminal-accent)]/70" />
                    {item.period}
                  </div>
                  <div className="flex items-center text-sm text-[var(--terminal-secondary)]">
                    <FaMapMarkerAlt className="mr-2 text-[var(--terminal-accent)]/70" />
                    {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;