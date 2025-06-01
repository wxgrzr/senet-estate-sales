import { HomeIcon, PackageIcon, SparklesIcon } from '@sanity/icons';

const ServicesIcon = ({ children }: { children: React.ReactNode }) => (
  <div className='text-richblack mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md'>
    {children}
  </div>
);

export function OurServices() {
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
      <div className='grid gap-10 px-10 lg:grid-cols-3'>
        <div className='text-center'>
          <ServicesIcon>
            <HomeIcon className='h-7 w-7' />
          </ServicesIcon>
          <h3 className='mb-2 text-xl font-semibold text-gray-900'>
            Estate Sales
          </h3>
          <p className='text-gray-600'>
            We organize, price, and stage in-home estate sales that honor your
            items and attract the right buyers. Our team ensures a smooth,
            respectful, and profitable process from start to finish.
          </p>
        </div>

        <div className='text-center'>
          <ServicesIcon>
            <PackageIcon className='h-7 w-7' />
          </ServicesIcon>
          <h3 className='mb-2 text-xl font-semibold text-gray-900'>
            Downsizing Help
          </h3>
          <p className='text-gray-600'>
            Whether you&#39;re moving or simplifying, we help sort, sell, and
            rehome your belongings with care and efficiency, reducing your
            stress during transitions.
          </p>
        </div>

        <div className='text-center'>
          <ServicesIcon>
            <SparklesIcon className='h-7 w-7' />
          </ServicesIcon>
          <h3 className='mb-2 text-xl font-semibold text-gray-900'>
            Clean-Out Services
          </h3>
          <p className='text-gray-600'>
            We leave homes broom-swept and ready for the next chapter. Items are
            responsibly sorted, recycled, donated, or disposed of with minimal
            burden on your family.
          </p>
        </div>
      </div>
    </>
  );
}
