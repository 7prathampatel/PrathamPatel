import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  feedback: string;
  country: string;
}

const Testimonials = () => {
  const testimonialAnimation = useScrollAnimation();

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      feedback: 'Working with Pratham was an absolute pleasure. His attention to detail and creative approach resulted in an exceptional user experience.',
      country: 'United States'
    },
    {
      name: 'Michael Chen',
      role: 'Tech Lead',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      feedback: 'Pratham\'s expertise in React and UI/UX design significantly improved our application\'s interface. His code is clean and highly maintainable.',
      country: 'Singapore'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      feedback: 'The website Pratham designed for our startup exceeded our expectations. Perfect balance of aesthetics and functionality.',
      country: 'Spain'
    },
    {
      name: 'David Kim',
      role: 'UX Designer',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      feedback: 'Collaborating with Pratham was fantastic. His ability to translate design concepts into pixel-perfect implementations was impressive.',
      country: 'South Korea'
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      feedback: 'Pratham helped us revamp our digital presence. The new website significantly improved our conversion rates.',
      country: 'Canada'
    },
    {
      name: 'James Wilson',
      role: 'Software Architect',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      feedback: 'The architecture Pratham designed showed his deep understanding of scalable systems. The solution was elegant and maintainable.',
      country: 'United Kingdom'
    },
    {
      name: 'Anna Martinez',
      role: 'E-commerce Manager',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      feedback: 'Our online store\'s performance improved dramatically after Pratham\'s optimization work. The checkout flow is now seamless.',
      country: 'Mexico'
    }
  ];

  return (
    <section id="testimonials" className="container py-20">
      <div className="terminal-header mb-8">
        <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
        <span className="text-[var(--terminal-text)]">:~$</span>
        <span className="ml-2 text-[var(--terminal-accent)]">cat testimonials.txt</span>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 w-full space-y-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            ref={testimonialAnimation.ref}
            variants={testimonialAnimation.fadeInVariants}
            initial="hidden"
            animate={testimonialAnimation.isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 p-4 rounded-lg hover:border-[var(--terminal-accent)]/50 flex flex-col transform hover:scale-[1.01] transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden break-inside-avoid mb-4 w-full ${index % 3 === 0 ? 'col-span-2' : ''} ${testimonial.feedback.length > 150 ? 'py-6' : ''}`}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--terminal-accent)]/20 to-[var(--terminal-accent)]/40" />
            <div className="flex items-center mb-3">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                className="w-12 h-12 rounded-full border border-[var(--terminal-accent)]/30 shadow-sm"
              />
              <div className="ml-3">
                <h3 className="text-base font-semibold text-[var(--terminal-text)]">{testimonial.name}</h3>
                <p className="text-sm text-[var(--terminal-secondary)]">{testimonial.role}</p>
                <p className="text-xs text-[var(--terminal-accent)]">{testimonial.country}</p>
              </div>
            </div>
            <p className="text-sm text-[var(--terminal-secondary)] italic flex-grow leading-relaxed">"{testimonial.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;