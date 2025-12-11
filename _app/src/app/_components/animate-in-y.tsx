'use client';
import { motion } from 'motion/react';

type Props = {
  y: number;
  opacity?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const viewport = { once: true, amount: 0.2 };

const AnimateInY: React.FC<Props> = ({ y, opacity, className, children }) => {
  return (
    <motion.div
      initial={{ opacity: opacity ? opacity : 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { AnimateInY };
