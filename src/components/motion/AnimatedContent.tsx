import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedContentProps {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedPageContent: React.FC<AnimatedContentProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 1.05 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom bounce easing
        delay,
        scale: { duration: 0.4, ease: 'easeOut' }
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  delay?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.15, // Increased stagger time
        delayChildren: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.9,
          rotateX: -15
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94], // Bounce easing
            scale: { duration: 0.4, ease: 'easeOut' },
            rotateX: { duration: 0.3, ease: 'easeOut' }
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
}

export const ScaleIn: React.FC<ScaleInProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Elastic easing
        delay
      }}
    >
      {children}
    </motion.div>
  );
};
