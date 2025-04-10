import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
  icon: typeof FaCode;
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const servicesAnimation = useScrollAnimation();
  const services: Service[] = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Crafting modern, high-performance web applications with cutting-edge technologies and best practices.',
      features: [
        'React & Next.js Expertise',
        'TypeScript Development',
        'Progressive Web Apps (PWA)',
        'Performance Optimization',
        'Responsive Design',
        'Modern State Management'
      ]
    },
    {
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning digital experiences that delight users and drive engagement.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Interactive Prototypes',
        'Design Systems',
        'Micro-interactions',
        'Accessibility (WCAG)'
      ]
    },

  ];

  return (
    <section id="services" className="container py-20">
      <div className="terminal-header mb-8">
        <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
        <span className="text-[var(--terminal-text)]">:~$</span>
        <span className="ml-2 text-[var(--terminal-accent)]">cat services.txt</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            ref={servicesAnimation.ref}
            variants={servicesAnimation.fadeInVariants}
            initial="hidden"
            animate={servicesAnimation.isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[var(--terminal-bg)]/60 p-6 rounded-xl border border-[var(--terminal-accent)]/20 hover:border-[var(--terminal-accent)]/50 hover:bg-[var(--terminal-bg)]/75 backdrop-blur-sm transition-all duration-300"
            whileHover={{ y: -5, scale: 1.01 }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[var(--terminal-accent)]/5 mb-6">
              <service.icon className="w-8 h-8 text-[var(--terminal-accent)]" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[var(--terminal-text)]">{service.title}</h3>
            <p className="text-[var(--terminal-secondary)] mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-[var(--terminal-secondary)] hover:text-[var(--terminal-text)] transition-colors">
                  <span className="w-2 h-2 bg-[var(--terminal-accent)]/50 rounded-full mr-3" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;