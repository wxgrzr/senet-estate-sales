import Carousel from '@/app/_components/carousel';
import ConsultationForm from '@/app/_components/consultation-form';
import Container from '@/app/_components/container';

export default function ScheduleConsultation() {
  return (
    <main id='content' className='relative'>
      <Container>
        <section className='py-8 md:py-12'>
          <div className='flex flex-col md:flex-row md:gap-x-8'>
            <div className='mx-auto flex h-full w-full flex-1/2 flex-col space-y-6 md:mt-20'>
              <h1 className='text-5xl font-bold tracking-tighter md:text-7xl'>
                Schedule a Consultation
              </h1>
              <div className='flex gap-3 lg:gap-6'>
                <div className='bg-richblack w-24'></div>
                <p className='sm:text-baseline text-xs leading-tight text-pretty lg:w-80 lg:font-medium'>
                  We look forward to helping your estate transition be as
                  seamless as possible.
                </p>
              </div>
              <Carousel
                className='min-h-72 lg:mr-8 lg:w-3/4 lg:self-end'
                images={[
                  {
                    url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    alt: 'Traditional style home in neighborhood',
                  },
                ]}
              />
            </div>
            <div className='m-auto flex w-full flex-1/2 flex-col justify-center py-8'>
              <div
                className='grid grid-cols-12 gap-4'
                id='schedule-consultation-form-header'
              >
                <h2 className='col-span-10 col-start-1 text-4xl font-bold tracking-tighter'>
                  Form:
                </h2>
                <div className='col-span-8 col-start-1 row-span-1 row-start-2 mb-8 border border-black' />
              </div>
              <ConsultationForm />
            </div>
          </div>
        </section>
      </Container>
      <hr />
    </main>
  );
}
