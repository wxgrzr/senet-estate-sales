'use client';
import { motion, AnimatePresence } from 'motion/react';
import ReviewCard from './review-card';

interface ReviewCardsProps {
  items: Array<{
    name: string;
    review: string;
    rating: number;
  }>;
}

const ReviewCards: React.FC<ReviewCardsProps> = ({ items }) => {
  return (
    <motion.div
      className='mt-12 mb-8 grid gap-8 md:grid-cols-3'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
        hidden: {},
      }}
    >
      <AnimatePresence>
        {items &&
          items.map(({ name, review, rating }, i) => (
            <ReviewCard
              key={i}
              name={name ?? ''}
              review={review}
              rating={rating}
              index={i}
            />
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ReviewCards;
