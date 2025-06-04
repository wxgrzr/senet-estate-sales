'use client';
import { motion } from 'motion/react';

type Props = {
  x: number;
  opacity?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const viewport = { once: true, amount: 0.2 };
const transition = { duration: 0.6, ease: 'easeOut' };

const AnimateInXL: React.FC<Props> = ({ x, opacity, className, children }) => {
  return (
    <motion.div
      initial={{ opacity: opacity ? opacity : 0, x: -x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimateInXR: React.FC<Props> = ({ x, opacity, className, children }) => {
  return (
    <motion.div
      initial={{ opacity: opacity ? opacity : 0, x: x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { AnimateInXL, AnimateInXR };
