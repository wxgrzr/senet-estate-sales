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
        'We organize, price, and stage estate sales throughout Southeastern Michigan tailored to suit your needs, and attract buyers from Holly, Fenton, Grand Blanc, Flint & beyond.',
    },
    {
      icon: <PackageIcon className='h-7 w-7' />,
      title: 'Downsizing Help',
      description:
        'We help guide our clients through difficult relocations and downsizing projects, sorting, selling, and rehoming belongings for condos, estates, and senior moves.',
    },
    {
      icon: <SparklesIcon className='h-7 w-7' />,
      title: 'Clean-Out Services',
      description:
        "We'll assist you in cleaning out your space to make it market ready by sorting, recycling, donating, or disposing of items to ensure your home sells faster.",
    },
  ];

  return (
    <>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
          Michigan Estate &amp; Clean-Out Services
        </h2>
        <p className='mx-auto max-w-2xl pb-8 text-gray-600'>
          We guide families through <b>estate liquidation</b>, home{' '}
          <b>clean-outs</b>, or assisting in <b>downsizing</b> throughout Holly, Fenton,
          Grand Blanc, Davisburg, Ortonville, Flint & surrounding cities.
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
