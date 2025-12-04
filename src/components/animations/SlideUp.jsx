import { motion } from "framer-motion";

export function SlideUp({ children, delay = 0, className }) {
  const variants = {
    offscreen: {
      y: 60,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
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

