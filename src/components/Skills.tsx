import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useRef } from 'react';

interface Skill {
  category: string;
  icon: typeof FaCode;
  items: {
    name: string;
    level: number;
  }[];
}

const Skills = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState<{ [key: string]: number }>({});
  const animationPlayedRef = useRef<{ [key: string]: boolean }>({});

  const skills: Skill[] = [
    {
      category: 'Frontend Development',
      icon: FaCode,
      items: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: FaPaintBrush,
      items: [
        { name: 'Figma', level: 90 },
        { name: 'Wireframing', level: 85 },
        { name: 'Prototyping', level: 85 },
        { name: 'Typography', level: 80 },
      ],
    },
  ];
  const skillsAnimation = useScrollAnimation();
  return (
    <section id="skills" className="container py-20">
      <div className="terminal-header mb-8">
        <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
        <span className="text-[var(--terminal-text)]">:~$</span>
        <span className="ml-2 text-[var(--terminal-accent)]">cat skills.txt</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            ref={skillsAnimation.ref}
            variants={skillsAnimation.fadeInVariants}
            initial="hidden"
            animate={skillsAnimation.isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 p-6 rounded-lg hover:border-[var(--terminal-accent)]/40"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <skillGroup.icon className="w-6 h-6 text-[var(--terminal-accent)] mr-3" />
              <h3 className="text-xl font-mono font-semibold text-[var(--terminal-text)]">
                {skillGroup.category}
              </h3>
            </div>
            <div className="space-y-4">
              {skillGroup.items.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
                  onViewportEnter={() => {
                    if (animationPlayedRef.current[skill.name]) return;
                    animationPlayedRef.current[skill.name] = true;
                    const duration = 1500;
                    const steps = duration / 20;
                    const increment = skill.level / steps;
                    let startValue = 0;
                    const timer = setInterval(() => {
                      if (startValue < skill.level) {
                        startValue += increment;
                        setAnimatedPercentages(prev => ({
                          ...prev,
                          [skill.name]: Math.min(Math.round(startValue), skill.level)
                        }));
                      } else {
                        clearInterval(timer);
                      }
                    }, 20);
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex justify-between mb-1 font-mono">
                    <span className="text-[var(--terminal-secondary)]">{skill.name}</span>
                    <span className="text-[var(--terminal-accent)]">{animatedPercentages[skill.name] || 0}%</span>
                  </div>
                  <div className="h-2 bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 rounded-lg overflow-hidden">
                    <div
                      className="skill-bar h-full bg-[var(--terminal-accent)]"
                      style={{
                        width: `${animatedPercentages[skill.name] || 0}%`,
                        transition: 'width 1.5s ease-out'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;