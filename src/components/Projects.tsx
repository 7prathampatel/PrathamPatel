import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/Project';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectModal from './ProjectModal';

export const projectsData: Project[] = [
  // Project data with extended fields for project detail page
  {
    id: 1,
    title: 'Pizza Hut Website Redesign',
    description: 'A modern redesign of the Pizza Hut website focusing on improved user experience and visual appeal.',
    image: './projects/design/pizza-hut.jpg',
    tags: ['UI/UX', 'Web Design', 'Figma'],
    link: 'https://behance.net/username/pizza-hut',
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'Photoshop'],
    features: ['Responsive Design', 'Interactive Menu', 'Online Ordering System'],
    tagline: 'Modern and intuitive pizza ordering experience',
    role: 'UI/UX Designer',
    projectType: 'Client Project',
    demoLink: 'https://pizza-hut-redesign.demo.com',
    githubLink: 'https://github.com/username/pizza-hut-redesign',
    longDescription: 'A complete redesign of the Pizza Hut website focusing on improving the user experience and modernizing the visual design. The project aimed to increase online orders and customer satisfaction.',
    process: [
      { title: 'Research', description: 'Conducted user research and competitor analysis' },
      { title: 'Design', description: 'Created wireframes and high-fidelity prototypes' },
      { title: 'Testing', description: 'Performed usability testing and iterations' }
    ],
    challenges: [
      { problem: 'Complex menu structure', solution: 'Implemented intuitive categorization and search' },
      { problem: 'Mobile responsiveness', solution: 'Developed mobile-first design approach' }
    ],
    impact: [
      { metric: 'Online Orders', value: '+35%' },
      { metric: 'User Satisfaction', value: '92%' }
    ]
  },
  {
    id: 2,
    title: 'Blodixer - Construction Website',
    description: 'Clean and professional website design for a construction company with focus on visual hierarchy and user flow.',
    image: './projects/design/blodixer.jpg',
    tags: ['UI/UX', 'Web Design', 'Figma'],
    link: 'https://behance.net/username/blodixer',
    category: 'design',
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    features: ['Modern Layout', 'Project Portfolio', 'Service Showcase', 'Contact Form'],
    tagline: 'Professional construction company web presence',
    role: 'UI/UX Designer',
    projectType: 'Freelance Project',
    demoLink: 'https://blodixer-demo.com',
    githubLink: 'https://github.com/username/blodixer',
    longDescription: 'A comprehensive website design for Blodixer Construction Company that focuses on showcasing their services, portfolio, and expertise. The design emphasizes visual hierarchy and intuitive user flow to help visitors easily find information.',
    process: [
      { title: 'Discovery', description: 'Gathered client requirements and industry research' },
      { title: 'Wireframing', description: 'Created low-fidelity wireframes for key pages' },
      { title: 'Visual Design', description: 'Developed high-fidelity mockups with brand elements' }
    ],
    challenges: [
      { problem: 'Balancing visual appeal with information density', solution: 'Used card-based layout with clear visual hierarchy' },
      { problem: 'Showcasing diverse project types', solution: 'Implemented filterable portfolio gallery' }
    ],
    impact: [
      { metric: 'Client Inquiries', value: '+45%' },
      { metric: 'Page Views', value: '+60%' }
    ],

  },
  {
    id: 3,
    title: 'Real Estate Website',
    description: 'Modern and intuitive real estate website design focusing on property showcase and user engagement.',
    image: './projects/design/real-estate.jpg',
    tags: ['UI/UX', 'Web Design', 'Figma'],
    link: 'https://behance.net/username/real-estate',
    category: 'design',
    technologies: ['Figma', 'Sketch', 'InVision'],
    features: ['Property Listings', 'Search Filters', 'Virtual Tours', 'Agent Profiles'],
    tagline: 'Elegant property browsing experience',
    role: 'Lead UI Designer',
    projectType: 'Agency Project',
    demoLink: 'https://realestate-demo.com',
    githubLink: 'https://github.com/username/real-estate',
    longDescription: 'A comprehensive real estate website design that focuses on showcasing properties with high-quality visuals and intuitive navigation. The design prioritizes user engagement through interactive elements and easy-to-use search functionality.',
    process: [
      { title: 'Market Research', description: 'Analyzed competitor websites and user preferences' },
      { title: 'UX Planning', description: 'Created user flows and information architecture' },
      { title: 'UI Design', description: 'Developed visual design system and interactive prototypes' }
    ],
    challenges: [
      { problem: 'Complex property filtering', solution: 'Designed intuitive multi-level filter system' },
      { problem: 'Showcasing property details effectively', solution: 'Created expandable gallery and feature highlights' }
    ],
    impact: [
      { metric: 'User Engagement', value: '+70%' },
      { metric: 'Property Views', value: '+55%' },
      { metric: 'Inquiry Rate', value: '+40%' }
    ],

  },
  {
    id: 4,
    title: 'Tracker - Project Management Tool',
    description: 'Full-stack project management application with modern design and comprehensive feature set.',
    image: './projects/development/tracker.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'UI/UX'],
    link: 'https://github.com/username/tracker',
    category: 'development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    features: ['Task Management', 'Team Collaboration', 'Real-time Updates', 'Project Analytics', 'File Sharing'],
    tagline: 'Streamlined project management for modern teams',
    role: 'Full Stack Developer',
    projectType: 'Personal Project',
    demoLink: 'https://tracker-demo.herokuapp.com',
    githubLink: 'https://github.com/username/tracker',
    longDescription: 'Tracker is a comprehensive project management tool designed to help teams collaborate effectively. It features real-time updates, task tracking, and team communication tools in a modern, intuitive interface.',
    process: [
      { title: 'Planning', description: 'Defined core features and user stories' },
      { title: 'Development', description: 'Built backend API and frontend components' },
      { title: 'Testing', description: 'Conducted user testing and performance optimization' }
    ],
    challenges: [
      { problem: 'Real-time synchronization', solution: 'Implemented Socket.io for live updates' },
      { problem: 'Complex state management', solution: 'Used Redux with middleware for predictable state' }
    ],
    impact: [
      { metric: 'Team Productivity', value: '+40%' },
      { metric: 'Task Completion', value: '+25%' },
      { metric: 'User Adoption', value: '85%' }
    ],

  },
  {
    id: 5,
    title: 'JobHunt - Job Portal Website',
    description: 'Full-stack job portal platform connecting employers and job seekers with advanced search and matching capabilities.',
    image: './projects/development/jobhunt.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/username/jobhunt',
    category: 'development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Express'],
    features: ['Job Listings', 'Advanced Search', 'Application Tracking', 'Resume Builder', 'Employer Dashboard'],
    tagline: 'Connecting talent with opportunity',
    role: 'Full Stack Developer',
    projectType: 'Personal Project',
    demoLink: 'https://jobhunt-demo.herokuapp.com',
    githubLink: 'https://github.com/username/jobhunt',
    longDescription: 'JobHunt is a comprehensive job portal that connects employers with job seekers. The platform features advanced search capabilities, application tracking, and personalized job recommendations based on user profiles and preferences.',
    process: [
      { title: 'Research', description: 'Analyzed existing job platforms and user needs' },
      { title: 'Development', description: 'Built scalable backend and responsive frontend' },
      { title: 'Deployment', description: 'Launched MVP and gathered initial user feedback' }
    ],
    challenges: [
      { problem: 'Complex matching algorithm', solution: 'Developed ML-based recommendation system' },
      { problem: 'User engagement', solution: 'Implemented notification system and email alerts' }
    ],
    impact: [
      { metric: 'Job Applications', value: '+120%' },
      { metric: 'Employer Signups', value: '+65%' },
      { metric: 'User Retention', value: '78%' }
    ],

  },
  {
    id: 6,
    title: 'E-commerce Dashboard',
    description: 'Comprehensive analytics and management dashboard for online stores.',
    image: './projects/design/dashboard.jpg',
    tags: ['UI/UX', 'Web Design', 'Figma'],
    link: 'https://behance.net/username/dashboard',
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator'],
    features: ['Real-time Analytics', 'Inventory Management', 'Order Processing', 'Customer Insights'],
    tagline: 'Powerful insights for e-commerce businesses',
    role: 'UI/UX Designer',
    projectType: 'Agency Project',
    demoLink: 'https://ecommerce-dashboard.demo.com',
    githubLink: 'https://github.com/username/ecommerce-dashboard',
    longDescription: 'A comprehensive analytics and management dashboard designed for e-commerce businesses. The dashboard provides real-time data visualization, inventory tracking, and customer insights to help store owners make informed decisions.',
    process: [
      { title: 'User Research', description: 'Interviewed store owners to understand pain points' },
      { title: 'Information Architecture', description: 'Organized complex data into intuitive layouts' },
      { title: 'Visual Design', description: 'Created data visualizations and interface components' }
    ],
    challenges: [
      { problem: 'Data complexity', solution: 'Designed intuitive charts and filtering options' },
      { problem: 'Information hierarchy', solution: 'Implemented card-based layout with clear visual priority' }
    ],
    impact: [
      { metric: 'Decision Time', value: '-40%' },
      { metric: 'User Satisfaction', value: '95%' },
      { metric: 'Data Comprehension', value: '+60%' }
    ],

  },
  {
    id: 7,
    title: 'Social Media Analytics Tool',
    description: 'Advanced analytics platform for social media performance tracking.',
    image: './projects/development/social-analytics.jpg',
    tags: ['React', 'Python', 'Data Analysis'],
    link: 'https://github.com/username/social-analytics',
    category: 'development',
    technologies: ['React', 'Python', 'Django', 'D3.js', 'PostgreSQL'],
    features: ['Performance Metrics', 'Automated Reports', 'Trend Analysis', 'Competitor Tracking'],
    tagline: 'Data-driven social media optimization',
    role: 'Full Stack Developer',
    projectType: 'Freelance Project',
    demoLink: 'https://social-analytics-demo.herokuapp.com',
    githubLink: 'https://github.com/username/social-analytics',
    longDescription: 'A comprehensive social media analytics platform that helps businesses track performance across multiple platforms. The tool provides detailed metrics, automated reporting, and competitive analysis to optimize social media strategies.',
    process: [
      { title: 'Data Architecture', description: 'Designed data models and API integrations' },
      { title: 'Backend Development', description: 'Built data processing pipeline and API endpoints' },
      { title: 'Frontend Implementation', description: 'Created interactive dashboards and visualizations' }
    ],
    challenges: [
      { problem: 'Data aggregation from multiple sources', solution: 'Implemented unified data model with adapters' },
      { problem: 'Real-time processing', solution: 'Used asynchronous workers and caching strategies' }
    ],
    impact: [
      { metric: 'Analysis Time', value: '-65%' },
      { metric: 'Engagement Rate', value: '+45%' },
      { metric: 'ROI Tracking', value: '100%' }
    ],

  },
  {
    id: 8,
    title: 'Weather App',
    description: 'Modern weather application with intuitive interface and detailed forecasts.',
    image: './projects/development/weather-app.jpg',
    tags: ['React', 'Node.js', 'API Integration'],
    link: 'https://github.com/username/weather-app',
    category: 'development',
    technologies: ['React', 'Node.js', 'OpenWeather API', 'Mapbox', 'PWA'],
    features: ['Weather Forecasts', 'Location-based Updates', 'Interactive Maps', 'Offline Mode'],
    tagline: 'Beautiful weather forecasts at your fingertips',
    role: 'Frontend Developer',
    projectType: 'Personal Project',
    demoLink: 'https://weather-app-demo.netlify.app',
    githubLink: 'https://github.com/username/weather-app',
    longDescription: 'A modern, responsive weather application that provides detailed forecasts, interactive maps, and location-based updates. The app features a clean, intuitive interface and works offline as a Progressive Web App.',
    process: [
      { title: 'Design', description: 'Created wireframes and visual design system' },
      { title: 'Development', description: 'Built React components and API integration' },
      { title: 'Optimization', description: 'Implemented PWA features and performance enhancements' }
    ],
    challenges: [
      { problem: 'API rate limiting', solution: 'Implemented caching and request batching' },
      { problem: 'Offline functionality', solution: 'Used service workers and local storage' }
    ],
    impact: [
      { metric: 'User Retention', value: '72%' },
      { metric: 'Load Time', value: '<1s' },
      { metric: 'Daily Active Users', value: '+500' }
    ],

  }
];

const Projects = (props: { internal?: boolean } = {}) => {
  // Animation reference for project cards
  const animation = useScrollAnimation();
  if (props.internal) {
    return null;
  }
  
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'design' | 'development'>('all');
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredProjects = projects.filter(project =>
    selectedCategory === 'all' ? true : project.category === selectedCategory
  );

  const categories = [
    { id: 'all' as const, label: 'All Projects' },
    { id: 'design' as const, label: 'Design' },
    { id: 'development' as const, label: 'Development' }
  ] as const;

  return (
    <section id="projects" className="container py-20">
      <div className="terminal-header mb-8">
        <span className="text-[var(--terminal-prompt)] mr-2">guest@portfolio</span>
        <span className="text-[var(--terminal-text)]">:~$</span>
        <span className="ml-2 text-[var(--terminal-accent)]">ls projects/</span>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 font-mono text-sm ${selectedCategory === category.id ? 'bg-[var(--terminal-accent)] text-[var(--terminal-bg)]' : 'bg-[var(--terminal-bg)] text-[var(--terminal-text)]'} border border-[var(--terminal-accent)]/20 hover:border-[var(--terminal-accent)]/40 hover:bg-[var(--terminal-accent)]/5 transition-all duration-300`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={false}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={animation.ref}
              variants={animation.fadeInVariants}
              initial="hidden"
              animate={animation.isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                y: -50,
                transition: {
                  duration: 0.3
                }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative overflow-hidden bg-[var(--terminal-bg)] border border-[var(--terminal-accent)]/20 rounded-lg group hover:border-[var(--terminal-accent)]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg group-hover:opacity-90 transition-opacity duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[var(--terminal-text)] line-clamp-1 group-hover:text-[var(--terminal-accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--terminal-secondary)] text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-[var(--terminal-bg)] text-[var(--terminal-text)] border border-[var(--terminal-accent)]/20 group-hover:border-[var(--terminal-accent)]/40 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-4 border-t border-[var(--terminal-accent)]/10 flex flex-col gap-3">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="block w-full text-center py-3 text-sm font-mono text-[var(--terminal-text)] border border-[var(--terminal-accent)]/20 hover:border-[var(--terminal-accent)] hover:text-[var(--terminal-accent)] hover:bg-[var(--terminal-accent)]/5 hover:scale-[1.02] hover:shadow-md transform transition-all duration-300 ease-out rounded-md"
                >
                  View Details
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 text-sm font-mono text-[var(--terminal-text)] border border-[var(--terminal-accent)]/20 hover:border-[var(--terminal-accent)] hover:text-[var(--terminal-accent)] hover:bg-[var(--terminal-accent)]/5 hover:scale-[1.02] hover:shadow-md transform transition-all duration-300 ease-out rounded-md"
                >
                  {project.category === 'development' ? 'View Source Code' : 'View Design'}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>



      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Projects;