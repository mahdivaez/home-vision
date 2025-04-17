import { Variants } from 'framer-motion';

/**
 * Creates a fade-in animation with directional movement
 * @param direction - The direction to fade from ('up', 'down', 'left', 'right')
 * @param delay - Delay before animation starts (in seconds)
 * @returns Framer Motion variants object
 */
export const fadeIn = (direction: string, delay: number): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
}; 