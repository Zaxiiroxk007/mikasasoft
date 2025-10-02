'use client';

import { motion } from 'framer-motion';

export const GradientMesh = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(45, 95, 76, 0.6) 0%, rgba(45, 95, 76, 0) 70%)',
        }}
        animate={{
          x: ['-25%', '75%', '-25%'],
          y: ['0%', '50%', '0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(184, 148, 95, 0.5) 0%, rgba(184, 148, 95, 0) 70%)',
          right: 0,
        }}
        animate={{
          x: ['25%', '-75%', '25%'],
          y: ['50%', '0%', '50%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 38, 53, 0.4) 0%, rgba(139, 38, 53, 0) 70%)',
          bottom: 0,
        }}
        animate={{
          x: ['50%', '-50%', '50%'],
          y: ['-25%', '25%', '-25%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
