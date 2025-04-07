import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';
import Preloader from './components/Preloader';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  useGSAPAnimations();
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    const isHome = location.pathname === '/';
    const scrollThreshold = 5;
    
    if (isHome && Math.abs(scrollDelta) > scrollThreshold) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY, location]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [darkMode]);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  }, []);


  
  return (
    <>
      <Cursor />
      {showPreloader ? (
        <Preloader />
      ) : (
        <>
          <nav className={`fixed top-0 left-0 right-0 z-[100] bg-[var(--terminal-bg)] border-b border-[var(--terminal-accent)]/20 backdrop-blur-sm transition-all duration-300 transform ${!isNavbarVisible ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="container py-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="nav-link text-2xl font-mono text-[var(--terminal-accent)]">
                  <span className="text-[var(--terminal-prompt)]">/</span>
                  pratham_patel
                </Link>
                
                <div className="md:hidden flex items-center gap-4">
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 hover:text-[var(--terminal-accent)] transition-colors"
                  >
                    {darkMode ? (
                      <SunIcon className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <MoonIcon className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  
                  <button
                    onClick={toggleMenu}
                    className="p-2 text-[var(--terminal-accent)]"
                  >
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all transform origin-right ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-6 h-0.5 bg-current transition-all transform origin-right ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                  </button>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                  <button onClick={() => scrollToSection('home')} className="nav-link font-mono hover:text-[var(--terminal-accent)] transition-colors">_home</button>
                  <button onClick={() => scrollToSection('projects')} className="nav-link font-mono hover:text-[var(--terminal-accent)] transition-colors">_projects</button>
                  <button onClick={() => scrollToSection('skills')} className="nav-link font-mono hover:text-[var(--terminal-accent)] transition-colors">_skills</button>
                  <button onClick={() => scrollToSection('services')} className="nav-link font-mono hover:text-[var(--terminal-accent)] transition-colors">_services</button>
                  <button onClick={() => scrollToSection('testimonials')} className="nav-link font-mono hover:text-[var(--terminal-accent)] transition-colors">_testimonials</button>
                  <button onClick={() => scrollToSection('about')} className="nav-link font-mono hover:text-[var(--terminal-accent)] transition-colors">_about</button>
                  <button onClick={() => scrollToSection('contact')} className="nav-link font-mono hover:text-[var(--terminal-accent)] transition-colors">_contact</button>
                  
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 hover:text-[var(--terminal-accent)] transition-colors"
                  >
                    {darkMode ? (
                      <SunIcon className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <MoonIcon className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Mobile menu */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="py-4 space-y-4">
                  <button onClick={() => scrollToSection('home')} className="nav-link block w-full text-left font-mono hover:text-[var(--terminal-accent)] transition-colors">_home</button>
                  <button onClick={() => scrollToSection('projects')} className="nav-link block w-full text-left font-mono hover:text-[var(--terminal-accent)] transition-colors">_projects</button>
                  <button onClick={() => scrollToSection('skills')} className="nav-link block w-full text-left font-mono hover:text-[var(--terminal-accent)] transition-colors">_skills</button>
                  <button onClick={() => scrollToSection('services')} className="nav-link block w-full text-left font-mono hover:text-[var(--terminal-accent)] transition-colors">_services</button>
                  <button onClick={() => scrollToSection('testimonials')} className="nav-link block w-full text-left font-mono hover:text-[var(--terminal-accent)] transition-colors">_testimonials</button>
                  <button onClick={() => scrollToSection('about')} className="nav-link block w-full text-left font-mono hover:text-[var(--terminal-accent)] transition-colors">_about</button>
                  <button onClick={() => scrollToSection('contact')} className="nav-link block w-full text-left font-mono hover:text-[var(--terminal-accent)] transition-colors">_contact</button>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={
              <div className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)]">
                <Home />
                <Projects />
                <Skills />
                <Services />
                <Testimonials />
                <About />
                <Contact />
                <Footer />
              </div>
            } />
          </Routes>
        </>
      )}
      </>
    );
}

export default App;
