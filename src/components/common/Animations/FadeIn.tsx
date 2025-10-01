"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/constants/animations";
import type { HTMLMotionProps } from "framer-motion";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
}

/**
 * Fade in animation wrapper
 */
export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  ...props
}: FadeInProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return fadeInUp;
      case "none":
        return fadeIn;
      default:
        return fadeInUp;
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
