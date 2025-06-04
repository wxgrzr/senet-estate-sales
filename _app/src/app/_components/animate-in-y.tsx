'use client';
import { motion } from 'motion/react';

type Props = {
  y: number;
  opacity?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const viewport = { once: true, amount: 0.2 };
const transition = { duration: 0.6, ease: 'easeOut' };

const AnimateInY: React.FC<Props> = ({ y, opacity, className, children }) => {
  return (
    <motion.div
      initial={{ opacity: opacity ? opacity : 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { AnimateInY };
