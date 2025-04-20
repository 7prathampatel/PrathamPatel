import { useEffect } from 'react';

// This hook previously contained GSAP animations that have been removed
export const useGSAPAnimations = () => {
  // Empty implementation - all GSAP animations have been removed
  useEffect(() => {
    // No animations to run
    
    return () => {
      // No cleanup needed
    };
  }, []);
};