declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    [key: string]: any;
  }

  export type Variants = {
    [key: string]: any;
  };

  export type Motion = {
    [key: string]: React.ForwardRefExoticComponent<any>;
  };

  export const motion: Motion;
  export const AnimatePresence: React.FC<any>;
  export const useAnimation: () => any;
  export const useMotionValue: (initialValue: number) => any;
  export const useTransform: (value: any, from: any[], to: any[]) => any;
  export const useViewportScroll: () => any;
} 