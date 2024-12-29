"use client"

import { motion } from "framer-motion"

interface FadeInProps {
    children: React.ReactNode; // Ensure children is defined here
    delay?: number; // Optional delay prop
    className?: string;
}

interface SlideInProps {
    children: React.ReactNode; // Define the type for children
    direction?: "left" | "right" | "up" | "down"; // Optional direction prop
    delay?: number; // Optional delay prop
    className?: string; // Optional className prop
}

interface ScaleInProps {
    children: React.ReactNode; // Define the type for children
    delay?: number; // Optional delay prop
    className?: string; // Optional className prop
}

export const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children} {/* This will now work correctly */}
        </motion.div>
    );
};

export function FadeInStagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const SlideIn = ({ children, direction = "right", delay = 0, className = "" }: SlideInProps) => {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                x: direction === "right" ? 50 : direction === "left" ? -50 : 0,
                y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            }}
            animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0 
            }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ScaleIn = ({ children, delay = 0, className = "" }: ScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 