'use client';

import { motion } from "framer-motion";

export function FadeIn({ children, delay = 0, className }) {
  const variants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
