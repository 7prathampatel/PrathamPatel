import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for cursor movement
    document.addEventListener('mousemove', updateCursorPosition);

    // Add event listeners for hoverable elements
    const hoverableElements = document.querySelectorAll('a, button');
    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>
        {`
          @media (min-width: 1024px) {
            body {
              cursor: none !important;
            }
            a, button {
              cursor: none !important;
            }
          }
        `}
      </style>

      {/* Custom cursor - only visible on desktop */}
      <div className="hidden lg:block fixed pointer-events-none z-50">
        {/* Main dot */}
        <motion.div
          className="w-3 h-3 dark:bg-purple-500 bg-gray-600 rounded-full"
          animate={{
            x: position.x - 6,
            y: position.y - 6,
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
        />

        {/* Trailing circle */}
        <motion.div
          className="w-8 h-8 border-2 dark:border-purple-400 border-gray-500 rounded-full"
          animate={{
            x: position.x - 16,
            y: position.y - 16,
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
            mass: 0.8,
          }}
        />
      </div>
    </>
  );
};

export default Cursor;