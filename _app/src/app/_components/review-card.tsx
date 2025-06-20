'use client';
import { motion } from 'motion/react';

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  index?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  rating,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index ? index * 0.15 : 0,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.2 }}
      className='rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm'
    >
      <div className='mb-4 flex items-center'>
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className='h-5 w-5 text-yellow-500'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.966a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.288 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.147 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.951-.69l1.288-3.966z' />
          </svg>
        ))}
      </div>
      <p className='text-gray-800 italic'>&quot;{review}&quot;</p>
      <p className='mt-4 font-medium text-gray-700'>— {name}</p>
    </motion.div>
  );
};

export default ReviewCard;
