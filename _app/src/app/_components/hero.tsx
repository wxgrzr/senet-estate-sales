import LinkButton from '@/app/_components/link-button';

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative flex h-[50vh] w-full items-center md:h-[60vh] lg:h-[70vh]'
    >
      {/* Background Image */}
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-left opacity-80 lg:left-[45%] lg:bg-left lg:[clip-path:polygon(0_0,100%_0,100%_100%,30%_100%)]'></div>

      {/* Content */}
      <div className='flex h-full w-full items-center lg:items-end'>
        <div className='max-w-7xl-plus mx-auto w-full px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 lg:px-12 lg:pb-12'>
          <div className='flex flex-col items-center justify-center gap-6 rounded-lg bg-white/50 bg-clip-padding p-6 text-center backdrop-blur-md backdrop-contrast-125 backdrop-filter sm:p-8 md:p-10 lg:items-start lg:bg-white/0 lg:p-0 lg:pb-24 lg:text-left lg:backdrop-blur-none lg:backdrop-contrast-100'>
            <div>
              <div className='flex flex-col items-center justify-center gap-1 lg:items-start lg:justify-start'>
                <h2 className='leading-tighter text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                  SENET ESTATE SALES
                </h2>
                <p className='leading-tighter mb-4 text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl'>
                  Professional liquidation services in <b>Southeastern MI</b>
                </p>
              </div>
              <div className='flex justify-center lg:justify-start'>
                <LinkButton href='#sales'>View Current Sales</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
