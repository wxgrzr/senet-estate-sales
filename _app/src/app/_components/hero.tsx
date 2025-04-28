// TODO: replace these with configurable ones in studio for editor to use
import LinkButton from '@/app/_components/link-button';

const Hero = () => {
  return (
    <section
      id='hero'
      className='@container relative flex h-[50vh] w-full items-center justify-start md:h-[60vh]'
    >
      <div className='absolute bottom-0 left-[40%] right-0 top-0 bg-[url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center opacity-80 [clip-path:polygon(0_0,100%_0,100%_100%,30%_100%)]'></div>
      <div className='flex w-full'>
        <div className='max-w-7xl-plus relative z-10 mx-auto w-full px-5'>
          <div className='mx-4 flex h-80 flex-col items-start justify-end gap-2'>
            <div className='gap-0.25 flex flex-col items-start justify-start'>
              <h2 className='leading-tighter text-5xl font-extrabold tracking-tight'>
                SENET ESTATE SALES
              </h2>
              <p className='lg-text-lg mb-4 ml-1 text-sm text-gray-500 md:text-base'>
                Professional liquidation services in <b>Southeastern MI</b>
              </p>
            </div>
            <LinkButton href='#sales'>View Current Sales</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
