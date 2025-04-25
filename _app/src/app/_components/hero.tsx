// TODO: replace these with configurable ones in studio for editor to use
import Container from '@/app/_components/container';
import { HERO_BODY, HERO_H1 } from '@/lib/constants';

const Hero = () => {
  return (
    <section
      id='hero'
      className='@container relative flex justify-start items-center w-full h-[50vh]'
    >
      <Container>
        <div className='absolute top-0 right-0 bottom-0 left-[40%] bg-[url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center opacity-80 [clip-path:polygon(0_0,100%_0,100%_100%,30%_100%)]'></div>
        <div className='z-10 relative w-1/2'>
          <div className='flex flex-col justify-end items-start gap-2 mx-4 h-80'>
            <div className='flex flex-col justify-start items-start gap-0.5'>
              <h2 className='font-bold text-5xl'>SENET ESTATE SALES.</h2>
              <p>
                Professional liquidation services in <b>Southeastern MI</b>
              </p>
            </div>
            <a
              href='#sales'
              className='bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium text-white transition'
            >
              View Current Sales
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
