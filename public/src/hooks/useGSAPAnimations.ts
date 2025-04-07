import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Page Load Animations
    const pageLoadTimeline = gsap.timeline();
    pageLoadTimeline
      .from('.nav-link', {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'all'
      })
      .from('.hero-text', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'all'
      }, '-=0.3')
      .from('.social-icon', {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        clearProps: 'all'
      }, '-=0.3');

    // Scroll Animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'all'
      });
    });

    // Project Card Animations - Simple fade in
    gsap.utils.toArray('.project-card').forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        },
        opacity: 0,
        duration: 0.8,
        ease: 'linear',
        clearProps: 'all'
      })
    });

    // Skills Bar Animation
    gsap.utils.toArray('.skill-bar').forEach((bar: any) => {
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: true
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.5,
        ease: 'power2.out',
        clearProps: 'all'
      });
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};