import { motion, useAnimation, Variants } from 'framer-motion';
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useRef, useEffect } from 'react';

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
              {skillGroup.items.map((skill, skillIndex) => {
                const skillBarVariants: Variants = {
                  hidden: { width: 0 },
                  visible: { 
                    width: `${skill.level}%`,
                    transition: { 
                      duration: 1.5, 
                      ease: [0.34, 1.56, 0.64, 1],
                      delay: 0.2 + skillIndex * 0.1 
                    }
                  }
                };
                
                const numberCountVariants: Variants = {
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1,
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: 0.2 + skillIndex * 0.1,
                      ease: "backOut"
                    }
                  }
                };
                
                useEffect(() => {
                  if (skillsAnimation.isInView && !animationPlayedRef.current[skill.name]) {
                    animationPlayedRef.current[skill.name] = true;
                    let startValue = 0;
                    const duration = 1500;
                    const steps = 60;
                    const increment = skill.level / steps;
                    const interval = duration / steps;
                    
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
                    }, interval);
                    
                    return () => clearInterval(timer);
                  }
                }, [skill.name, skill.level, skillsAnimation.isInView]);
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + skillIndex * 0.1,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="skill-item"
                  >
                    <div className="flex justify-between mb-1 font-mono">
                      <motion.span 
                        className="text-[var(--terminal-secondary)] hover:text-[var(--terminal-accent)] transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-[var(--terminal-accent)]"
                        variants={numberCountVariants}
                        initial="hidden"
                        animate={skillsAnimation.isInView ? "visible" : "hidden"}
                      >
                        {animatedPercentages[skill.name] || 0}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 rounded-lg overflow-hidden">
                      <motion.div
                        className="skill-bar h-full bg-gradient-to-r from-purple-500/80 to-purple-700 relative shadow-[0_0_8px_rgba(147,51,234,0.5)] animate-pulse-subtle"
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={skillsAnimation.isInView ? "visible" : "hidden"}
                        whileHover={{ scale: [null, 1.03, 1], transition: { duration: 0.3 } }}
                      >
                        <motion.div 
                          className="absolute top-0 right-0 h-full w-1 bg-purple-300/30"
                          animate={{ 
                            opacity: [0, 0.7, 0],
                            x: [0, -30, -60],
                            scaleY: [1, 1.5, 1]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            ease: "easeInOut",
                            delay: 1 + skillIndex * 0.1,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;