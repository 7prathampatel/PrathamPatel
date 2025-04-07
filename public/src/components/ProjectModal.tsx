import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/Project';
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen: boolean;
}

const ProjectModal = ({ project, onClose, isOpen }: ProjectModalProps) => {
  // Close modal when pressing escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling of background content
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Close when clicking outside the modal content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/30 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-[var(--terminal-accent)]/20 flex justify-between items-center sticky top-0 bg-[var(--terminal-bg)] z-10">
              <div className="terminal-header">
                <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
                <span className="text-[var(--terminal-text)]">:~$</span>
                <span className="ml-2 text-[var(--terminal-accent)]">cat project_{project.id}.md</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[var(--terminal-secondary)] hover:text-[var(--terminal-accent)] transition-colors rounded-full hover:bg-[var(--terminal-accent)]/10"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto flex-grow">
              {/* Project Image */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-6">
                {/* Title and Tagline */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--terminal-text)]">{project.title}</h2>
                  {project.tagline && (
                    <p className="text-[var(--terminal-accent)] mt-2 text-lg font-mono">{project.tagline}</p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-4 pb-6 border-b border-[var(--terminal-accent)]/10">
                  <h3 className="text-xl font-semibold text-[var(--terminal-text)] font-mono">&gt; Description</h3>
                  <p className="text-[var(--terminal-secondary)] leading-relaxed hover:text-[var(--terminal-text)]/90 transition-colors duration-300 p-2 hover:bg-[var(--terminal-accent)]/5 rounded-md">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="space-y-4 pb-6 border-b border-[var(--terminal-accent)]/10">
                    <h3 className="text-xl font-semibold text-[var(--terminal-text)] font-mono">&gt; Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono bg-[var(--terminal-bg)] text-[var(--terminal-text)] border border-[var(--terminal-accent)]/30 rounded-md hover:border-[var(--terminal-accent)]/70 hover:bg-[var(--terminal-accent)]/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-4 pb-6 border-b border-[var(--terminal-accent)]/10">
                    <h3 className="text-xl font-semibold text-[var(--terminal-text)] font-mono">&gt; Features</h3>
                    <ul className="space-y-2 text-[var(--terminal-secondary)]">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start group">
                          <span className="inline-block w-2 h-2 rounded-full bg-[var(--terminal-accent)] mt-2 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                          <span className="group-hover:text-[var(--terminal-text)] transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Process */}
                {project.process && project.process.length > 0 && (
                  <div className="space-y-4 pb-6 border-b border-[var(--terminal-accent)]/10">
                    <h3 className="text-xl font-semibold text-[var(--terminal-text)] font-mono">&gt; Process</h3>
                    <div className="space-y-4">
                      {project.process.map((step, index) => (
                        <div key={index} className="space-y-1 p-3 hover:bg-[var(--terminal-accent)]/5 rounded-md transition-colors duration-300 group">
                          <h4 className="font-semibold text-[var(--terminal-accent)] group-hover:text-[var(--terminal-text)] transition-colors duration-300">{step.title}</h4>
                          <p className="text-[var(--terminal-secondary)] group-hover:text-[var(--terminal-text)]/90 transition-colors duration-300">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="space-y-4 pb-6 border-b border-[var(--terminal-accent)]/10">
                    <h3 className="text-xl font-semibold text-[var(--terminal-text)] font-mono">&gt; Challenges</h3>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="space-y-1 border-l-2 border-[var(--terminal-accent)]/30 pl-4 py-2 hover:border-l-[var(--terminal-accent)] transition-all duration-300 group">
                          <h4 className="font-semibold text-[var(--terminal-text)] group-hover:text-[var(--terminal-accent)] transition-colors duration-300">{challenge.problem}</h4>
                          <p className="text-[var(--terminal-secondary)] group-hover:text-[var(--terminal-text)]/90 transition-colors duration-300">{challenge.solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact */}
                {project.impact && project.impact.length > 0 && (
                  <div className="space-y-4 pb-6 border-b border-[var(--terminal-accent)]/10">
                    <h3 className="text-xl font-semibold text-[var(--terminal-text)] font-mono">&gt; Impact</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.impact.map((item, index) => (
                        <div key={index} className="bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 p-4 rounded-lg text-center hover:border-[var(--terminal-accent)]/60 hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 group">
                          <div className="text-2xl font-bold text-[var(--terminal-accent)] group-hover:scale-110 transition-transform duration-300">{item.value}</div>
                          <div className="text-sm text-[var(--terminal-secondary)] group-hover:text-[var(--terminal-text)] transition-colors duration-300">{item.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}



                {/* Project Links */}
                <div className="flex justify-center gap-4 pt-4 pb-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm font-mono text-[var(--terminal-text)] border border-[var(--terminal-accent)]/20 hover:border-[var(--terminal-accent)] hover:text-[var(--terminal-accent)] hover:bg-[var(--terminal-accent)]/5 hover:scale-[1.02] hover:shadow-md transform transition-all duration-300 ease-out rounded-md"
                  >
                    {project.category === 'development' ? 'View Source Code' : 'View Design'}
                  </a>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {project.role && (
                    <div className="p-3 hover:bg-[var(--terminal-accent)]/5 rounded-md transition-all duration-300 group">
                      <h4 className="text-sm font-semibold text-[var(--terminal-accent)] mb-1 group-hover:text-[var(--terminal-text)] transition-colors duration-300">Role</h4>
                      <p className="text-[var(--terminal-secondary)] group-hover:text-[var(--terminal-text)]/90 transition-colors duration-300">{project.role}</p>
                    </div>
                  )}
                  {project.projectType && (
                    <div className="p-3 hover:bg-[var(--terminal-accent)]/5 rounded-md transition-all duration-300 group">
                      <h4 className="text-sm font-semibold text-[var(--terminal-accent)] mb-1 group-hover:text-[var(--terminal-text)] transition-colors duration-300">Project Type</h4>
                      <p className="text-[var(--terminal-secondary)] group-hover:text-[var(--terminal-text)]/90 transition-colors duration-300">{project.projectType}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[var(--terminal-accent)]/20 bg-[var(--terminal-bg)] z-10">
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;