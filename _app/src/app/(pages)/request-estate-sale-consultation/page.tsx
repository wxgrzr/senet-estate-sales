import ConsultationForm from '@/app/_components/consultation-form';
import Container from '@/app/_components/container';
import Image from 'next/image';
import { Metadata } from 'next';
import { AnimateInXL, AnimateInXR } from '@/app/_components/animate-in-x';

export const metadata: Metadata = {
  title: 'Schedule a Consultation',
  description:
    'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
  alternates: {
    canonical: 'https://senetestatesales.com/request-estate-sale-consultation',
  },
  openGraph: {
    title: 'Schedule a Consultation',
    description:
      'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
    url: 'https://senetestatesales.com/request-estate-sale-consultation',
    siteName: 'Senet Estate Sales',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Senet Estate Sales',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a Consultation',
    description:
      'Schedule a free estate sale consultation with Senet Estate Sales. Compassionate, professional estate sale services in Southeast Michigan.',
    images: ['/og-image.jpg'],
  },
  other: {
    'fb:page_id': '424849244049685',
    'fb:profile_id': '61567003222290',
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
};

export default function ScheduleConsultation() {
  return (
    <main id='content' className='relative'>
      <Container>
        <section className='py-8 md:py-12'>
          <div className='flex flex-col md:flex-row md:gap-x-8'>
            <AnimateInXL
              x={40}
              className='mx-auto flex h-full w-full flex-1/2 flex-col space-y-6 md:mt-20'
            >
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
              <div className='relative min-h-72 lg:mr-8 lg:w-3/4 lg:self-end'>
                <Image
                  style={{ objectFit: 'cover' }}
                  src={
                    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  fill
                  sizes='(min-width: 1024px) 75vw, 100vw'
                  alt='Traditional family home front view'
                  className='rounded-2xl'
                />
              </div>
            </AnimateInXL>
            <AnimateInXR
              x={40}
              className='m-auto flex w-full flex-1/2 flex-col justify-center py-8'
            >
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
            </AnimateInXR>
          </div>
        </section>
      </Container>
    </main>
  );
}
