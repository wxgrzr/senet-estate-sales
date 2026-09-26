import Carousel from '@/app/_components/carousel';
import ConsultationForm from '@/app/_components/consultation-form';
import Container from '@/app/_components/container';
import { LinkButton } from '@/app/_components/link-button';
import { OurServices } from '@/app/_components/our-services';
import { Reviews } from '@/app/_components/reviews';
import Image from 'next/image';
import { RowSection } from '@/app/_components/row-section';
import { MediaContainer } from '../_components/media-container';
import type { Metadata } from 'next';
import { AnimateInXL, AnimateInXR } from '../_components/animate-in-x';
import { AnimateInY } from '../_components/animate-in-y';
import { Routes } from '@/app/constants';

export const metadata: Metadata = {
  title: {
    absolute: 'Senet Estate Sales | Estate Sales & Clean-Outs in Holly, MI',
  },
  description:
    'Full-service estate sales, clean-outs, and downsizing help based in Holly, MI, serving Fenton, Grand Blanc, Flint, Davisburg, Ortonville & surrounding cities.',
};

export default function IndexPage() {
  return (
    <main id='content'>
      <div id='hero'>
        <Container>
          <RowSection id='hero-content'>
            <div className='grid grid-cols-2 items-center gap-4 max-sm:grid-cols-4 md:gap-8'>
              <AnimateInXL
                x={40}
                className='col-start-1 space-y-4 max-sm:col-span-4 sm:space-y-8'
              >
                <div className='sm:space-y-3'>
                  <h1 className='mb-2 text-5xl font-extrabold tracking-tighter text-pretty'>
                    Moving You Forward
                  </h1>
                  <p className='max-w-lg text-lg font-semibold tracking-tight text-pretty text-gray-800'>
                    Your trusted estate sale &amp; clean-out specialists.
                  </p>
                  <p className='max-w-lg text-base text-gray-600'>
                    Based in <b>Holly, MI</b> and proudly serving Fenton, Grand
                    Blanc, Flint, Davisburg, Ortonville, and more.
                  </p>
                </div>
                <LinkButton
                  href={Routes.OurEstateSales}
                  variant='secondary'
                  arrow
                >
                  Our Estate Sales
                </LinkButton>
              </AnimateInXL>
              <div className='flex size-full items-center justify-center max-sm:order-first max-sm:col-span-4 sm:col-start-2'>
                <MediaContainer className='relative size-full max-sm:mb-8'>
                  <Image
                    style={{ objectFit: 'cover' }}
                    src={'/heroimg/heroimg@3x.webp'}
                    fill
                    alt=''
                    className='rounded-2xl'
                    priority
                    fetchPriority='high'
                    quality={80}
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </MediaContainer>
              </div>
            </div>
          </RowSection>
        </Container>
      </div>

      <div id='who-we-are'>
        <Container>
          <RowSection>
            <div className='grid items-center gap-8 md:grid-cols-2'>
              <AnimateInXL x={40}>
                <MediaContainer className='max-sm:order-2'>
                  <Carousel
                    images={[
                      {
                        alt: 'Active estate sale checkout table',
                        url: '/large/estate36.jpeg',
                      },
                      {
                        alt: 'Two estate sale vendors pose for the camera',
                        url: '/large/estate33.jpeg',
                      },
                      {
                        alt: 'People carrying items to checkout at estate sale',
                        url: '/large/estatesale31.jpeg',
                      },
                      {
                        alt: 'People viewing items at estate sale',
                        url: '/large/estate34.jpeg',
                      },
                    ]}
                  />
                </MediaContainer>
              </AnimateInXL>
              <AnimateInXR x={40}>
                <h2 className='mb-6 text-4xl font-extrabold tracking-tight'>
                  Who We Are
                </h2>
                <BodyParagraph>
                  We’re an estate sale and clean-out team focused on
                  compassionate service. From pricing out your collections to
                  downsizing your next move, our staff makes every step simple
                  and transparent for families and buyers alike.
                </BodyParagraph>
                <LinkButton href='#our-services' variant='secondary'>
                  Our Services
                </LinkButton>
              </AnimateInXR>
            </div>
          </RowSection>
        </Container>
      </div>

      <div id='what-people-are-saying' className='bg-platinum'>
        <Container>
          <RowSection>
            <Reviews />
          </RowSection>
        </Container>
      </div>

      <div id='ready-to-sell-with-us'>
        <Container>
          <RowSection>
            <div className='grid items-center gap-8 md:grid-cols-2'>
              <AnimateInXR x={40} className='md:order-2'>
                <MediaContainer>
                  <Carousel
                    images={[
                      {
                        alt: 'Table with many pieces of fine china',
                        url: '/large/estate31.jpeg',
                      },
                      {
                        alt: 'Old film cameras on table',
                        url: 'https://images.unsplash.com/photo-1511737561643-649a082cd8a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      },
                      {
                        alt: 'Two men viewing items on table',
                        url: '/large/estatesale24.jpeg',
                      },
                      {
                        alt: 'Records in crate',
                        url: 'https://images.unsplash.com/photo-1526714777143-799b30a29fdb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      },
                      {
                        alt: 'Misc. jewelry items',
                        url: 'https://images.unsplash.com/photo-1642415314611-3439fb991d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      },
                      {
                        alt: 'Collection of pins',
                        url: 'https://images.unsplash.com/photo-1619984827929-a056b71e4a3b?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      },
                    ]}
                  />
                </MediaContainer>
              </AnimateInXR>
              <div className='space-y-4 md:order-1'>
                <AnimateInXL x={40}>
                  <h2 className='mb-6 text-4xl font-extrabold tracking-tight text-pretty'>
                    Start with a Free Consultation
                  </h2>
                  <BodyParagraph>
                    We’ll talk through your needs, learn your priorities, and
                    handle the rest — pricing antiques & valuables, staging your
                    sale, coordinating donations, or providing full clean-out
                    services. Schedule a free, no obligations consultation and
                    we’ll help guide you from first walkthrough to the final
                    broom-swept handoff.
                  </BodyParagraph>
                  <LinkButton
                    href={Routes.ScheduleConsultation}
                    variant='secondary'
                  >
                    Schedule a Consultation
                  </LinkButton>
                </AnimateInXL>
              </div>
            </div>
          </RowSection>
        </Container>
      </div>

      {/* This will remove keyboard tab focus and allow screen readers, etc. to have section focused upon scrolling via anchor link  */}
      <div tabIndex={-1} id='our-services' className='bg-platinum'>
        <Container>
          <RowSection>
            <OurServices />
          </RowSection>
        </Container>
      </div>

      <div id='schedule-consultation'>
        <Container>
          <RowSection>
            <AnimateInY y={40}>
              <div className='mx-auto max-w-3xl px-4'>
                <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-pretty'>
                  Schedule a Free Consultation
                </h2>
                <p className='mb-8 text-center font-light text-pretty sm:text-xl lg:mb-16'>
                  Downsizing, relocating, or managing a loved one’s estate?
                  We&apos;ll help guide you through the process from start to
                  finish. We know how difficult it can be to get started, so
                  we&apos;re here to help.
                </p>
                <ConsultationForm />
              </div>
            </AnimateInY>
          </RowSection>
        </Container>
      </div>
    </main>
  );
}

const BodyParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className='mb-6 text-lg text-gray-700'>{children}</p>;
};
