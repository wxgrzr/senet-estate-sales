'use client';
import { HomeIcon, PackageIcon, SparklesIcon } from '@sanity/icons';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const ServicesIcon = ({ children }: { children: React.ReactNode }) => (
  <div className='text-richblack mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md'>
    {children}
  </div>
);

export function OurServices() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Service data for mapping
  const services = [
    {
      icon: <HomeIcon className='h-7 w-7' />,
      title: 'Estate Sales',
      description:
        'We organize, price, and stage in-home estate sales that honor your items and attract the right buyers. Our team ensures a smooth, respectful, and profitable process from start to finish.',
    },
    {
      icon: <PackageIcon className='h-7 w-7' />,
      title: 'Downsizing Help',
      description:
        "Whether you're moving or simplifying, we help sort, sell, and rehome your belongings with care and efficiency, reducing your stress during transitions.",
    },
    {
      icon: <SparklesIcon className='h-7 w-7' />,
      title: 'Clean-Out Services',
      description:
        'We leave homes broom-swept and ready for the next chapter. Items are responsibly sorted, recycled, donated, or disposed of with minimal burden on your family.',
    },
  ];

  return (
    <>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
          Our Services
        </h2>
        <p className='mx-auto max-w-2xl pb-8 text-gray-600'>
          With compassion and care, we help you navigate life&#39;s transitions
          through comprehensive estate solutions tailored to your needs.
        </p>
      </div>
      {isMobile ? (
        <div className='grid gap-10 px-10 lg:grid-cols-3'>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='text-center'
            >
              <ServicesIcon>{service.icon}</ServicesIcon>
              <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                {service.title}
              </h3>
              <p className='text-gray-600'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          className='grid gap-10 px-10 lg:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.18, staggerDirection: -1 },
            },
            hidden: {},
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
              className='text-center'
            >
              <ServicesIcon>{service.icon}</ServicesIcon>
              <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                {service.title}
              </h3>
              <p className='text-gray-600'>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
