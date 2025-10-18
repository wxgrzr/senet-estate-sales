import Carousel from '@/app/_components/carousel';
import ConsultationForm from '@/app/_components/consultation-form';
import Container from '@/app/_components/container';
import { LinkButton } from '@/app/_components/link-button';
import { OurServices } from '@/app/_components/our-services';
import { Reviews } from '@/app/_components/reviews';
import Image from 'next/image';
import { RowSection } from '@/app/_components/row-section';
import { MediaContainer } from '../_components/media-container';
import { Metadata } from 'next';
import { AnimateInXL, AnimateInXR } from '../_components/animate-in-x';
import { AnimateInY } from '../_components/animate-in-y';

export const metadata: Metadata = {
  title: 'Senet Estate Sales',
  description:
    'Senet Estate Sales delivers full-service estate sales, home clean-outs, and downsizing support throughout Southeast Michigan, including Detroit, Ann Arbor, Flint, Bloomfield, and Bay City.',
  alternates: {
    canonical: 'https://senetestatesales.com/',
  },
  openGraph: {
    title: 'Senet Estate Sales',
    description:
      'Trusted Michigan estate liquidation, house clean-out, and downsizing services for families in Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and neighboring communities.',
    url: 'https://senetestatesales.com/',
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
    title: 'Senet Estate Sales',
    description:
      'Michigan estate sale and clean-out specialists serving Detroit, Ann Arbor, Flint, and Southeast Michigan with compassionate liquidation support.',
    images: ['/og-image.jpg'],
  },
  other: {
    'fb:page_id': '424849244049685',
    'fb:profile_id': '61567003222290',
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
  keywords: [
    'estate sales',
    'Michigan estate services',
    'Michigan cleanout services',
    'Detroit estate sale company',
    'Flint estate clean-out',
    'Ann Arbor estate sales',
    'Northville MI',
    'Bloomfield MI',
    'Bay City MI',
    'West Bloomfield Township MI',
    'Grand Blanc MI',
    'Rochester Hills MI',
    'Birmingham MI',
    'Huntington Woods MI',
    'Flint MI',
    'Fenton MI',
    'Southeast Michigan',
    'Senet Estate Sales',
  ],
};

export default async function IndexPage() {
  return (
    <main id='content'>
      <div id='hero'>
        <Container>
          <RowSection>
            <div className='grid grid-cols-2 items-center gap-4 max-sm:grid-cols-4 md:gap-8'>
              <AnimateInXL
                x={40}
                className='col-start-1 space-y-4 max-sm:col-span-4 sm:space-y-8'
              >
                <div className='sm:space-y-3'>
                  <h1 className='mb-2 text-5xl font-extrabold tracking-tighter text-pretty'>
                    SENET
                    <br />
                    ESTATE SALES
                  </h1>
                  <p className='text-lg font-semibold tracking-tight text-pretty text-gray-800'>
                    Michigan estate sale &amp; clean-out specialists serving
                    Metro Detroit, Ann Arbor, Flint, and the surrounding
                    communities.
                  </p>
                  <p className='max-w-xl text-base text-gray-600'>
                    From in-home estate auctions to complete house cleanouts, we
                    help Michigan families liquidate, organize, and donate with
                    care.
                  </p>
                </div>
                <LinkButton
                  href='/upcoming-estate-sales'
                  subvariant='solid'
                  colors='secondary'
                  arrow
                >
                  View Estate Sales
                </LinkButton>
              </AnimateInXL>

              <AnimateInXR
                x={40}
                className='col-start-2 flex size-full items-center justify-center max-sm:col-span-4'
              >
                <MediaContainer className='relative size-full max-sm:mt-24'>
                  <Image
                    style={{ objectFit: 'cover' }}
                    src={'/heroimg/heroimg@3x.webp'}
                    fill
                    alt=''
                    className='rounded-2xl'
                    priority
                    quality={100}
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </MediaContainer>
              </AnimateInXR>
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
                <SectionBodyCopy>
                  We’re a Michigan-based estate sale and clean-out team focused
                  on compassionate service. From valuing collections in Detroit
                  bungalows to coordinating Flint home cleanouts and Ann Arbor
                  downsizing projects, our staff makes every step transparent for
                  families and buyers alike.
                </SectionBodyCopy>
                <LinkButton
                  href='#our-services'
                  variant='button'
                  colors='secondary'
                  subvariant='solid'
                >
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
                  <SectionBodyCopy>
                    We’ll walk through your Michigan property, learn your
                    priorities, and handle the rest — pricing valuables, staging
                    estate sales, coordinating donations, and providing full
                    clean-out services. Schedule a free consultation and we’ll
                    guide you from the first walkthrough to the final broom-swept
                    handoff.
                  </SectionBodyCopy>
                  <LinkButton
                    href='/request-estate-sale-consultation'
                    subvariant='solid'
                    colors='secondary'
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
              <div className='mx-auto max-w-screen-md px-4'>
                <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-pretty'>
                  Schedule a Free Consultation
                </h2>
                <p className='mb-8 text-center font-light text-pretty sm:text-xl lg:mb-16'>
                  Downsizing, relocating, or managing a loved one’s Michigan
                  estate? From Detroit estate sales to Flint clean-outs and Ann
                  Arbor donation coordination, we offer local expertise with
                  compassion. Schedule a consultation and let’s plan the next
                  steps together.
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

const SectionBodyCopy = ({ children }: { children: React.ReactNode }) => {
  return <p className='mb-6 text-lg text-gray-700'>{children}</p>;
};
