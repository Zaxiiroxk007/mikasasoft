"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/constants/animations";
import type { HTMLMotionProps } from "framer-motion";

export interface StaggerChildrenProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
}

/**
 * Stagger animation wrapper for children
 */
export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  ...props
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        ...staggerContainer,
        animate: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
