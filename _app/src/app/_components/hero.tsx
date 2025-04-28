// TODO: replace these with configurable ones in studio for editor to use
import Container from '@/app/_components/container';
import LinkButton from '@/app/_components/link-button';

const Hero = () => {
  return (
    <section
      id='hero'
      className='@container relative flex justify-start items-center w-full h-[50vh] md:h-[60vh]'
    >
      <Container>
        <div className='absolute top-0 right-0 bottom-0 left-[35%] bg-[url(https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center opacity-80 [clip-path:polygon(0_0,100%_0,100%_100%,30%_100%)]'></div>
        <div>
          <div
            // style={{ border: '1px solid red' }}
            className='z-10 relative w-[45%]'
          >
            <div className='flex flex-col justify-end items-start gap-2 mx-4 h-80'>
              <div className='flex flex-col justify-start items-start gap-0.5 mb-2'>
                <h2 className='font-extrabold text-5xl leading-tigher tracking-tight'>
                  SENET ESTATE SALES
                </h2>
                <p className='text-gray-500'>
                  Professional liquidation services in <b>Southeastern MI</b>
                </p>
              </div>
              <LinkButton href='#sales'>View Current Sales</LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
