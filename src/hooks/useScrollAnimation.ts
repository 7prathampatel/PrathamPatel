import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  threshold?: number;
  once?: boolean;
  margin?: `${number}px ${number}px ${number}px ${number}px` | `${number}px`;
}

export const useScrollAnimation = ({
  threshold = 0.2,
  once = true,
  margin = "0px 0px -100px 0px"
}: ScrollAnimationProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    margin: margin
  });

  const fadeInVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  return { ref, isInView, fadeInVariants };
};