import Carousel from '@/app/_components/carousel';
import ConsultationForm from '@/app/_components/consultation-form';
import Container from '@/app/_components/container';
import { LinkButton } from '@/app/_components/link-button';
import { OurServices } from '@/app/_components/our-services';
import { Reviews } from '@/app/_components/reviews';
import Image from 'next/image';
import { RowSection } from '@/app/_components/row-section';

const SectionBodyCopy = ({ children }: { children: React.ReactNode }) => {
  return <p className='mb-6 text-lg text-gray-700'>{children}</p>;
};

export default async function IndexPage() {
  return (
    <main id='content'>
      <div id='hero'>
        <Container>
          <RowSection>
            <div className='grid grid-cols-2 items-center gap-4 max-sm:grid-cols-4 md:gap-8'>
              <div className='col-start-1 space-y-4 max-sm:col-span-4 sm:space-y-8'>
                <div className='sm:space-y-2'>
                  <h2 className='mb-2 text-5xl font-extrabold tracking-tighter'>
                    SENET
                    <br />
                    ESTATE SALES
                  </h2>
                  {/* <p className='text-base tracking-tighter text-pretty sm:text-base md:text-lg lg:text-xl'> */}
                  <p className='text-lg tracking-tight text-pretty'>
                    Professional liquidation services in <b>Southeastern MI</b>
                  </p>
                </div>
                <LinkButton
                  href='/upcoming-estate-sales'
                  subvariant='solid'
                  colors='secondary'
                  // className='max-sm:absolute max-sm:z-10'
                  arrow
                >
                  View Estate Sales
                </LinkButton>
              </div>
              <div className='col-start-2 flex size-full items-center justify-center max-sm:col-span-4'>
                <div className='relative flex size-full min-h-80 max-sm:top-2'>
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
                </div>
              </div>
            </div>
          </RowSection>
        </Container>
      </div>

      <div id='who-we-are'>
        <Container>
          <RowSection>
            <div className='grid items-center gap-8 md:grid-cols-2'>
              <Carousel
                className='min-h-80'
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
              <div>
                <h2 className='mb-6 text-4xl font-extrabold tracking-tight'>
                  Who We Are
                </h2>
                <SectionBodyCopy>
                  We’re a small, passionate team serving Southeastern Michigan
                  with carefully run estate sales. From setup to checkout, our
                  friendly staff makes the process easy and transparent for both
                  families and buyers.
                </SectionBodyCopy>
                <LinkButton
                  href='#our-services'
                  variant='button'
                  colors='secondary'
                  subvariant='solid'
                >
                  Our Services
                </LinkButton>
              </div>
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
              <div className='md:order-2'>
                <Carousel
                  className='min-h-80'
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
              </div>
              <div className='space-y-4 md:order-1'>
                <h2 className='mb-6 text-4xl font-extrabold tracking-tight text-pretty'>
                  Start with a Free Consultation
                </h2>
                <SectionBodyCopy>
                  We’ll walk through your space, learn your needs, and handle
                  the rest — from organizing and pricing to the final sale. We
                  make the estate sale process easy. Schedule a free
                  consultation, and we’ll guide you every step of the way — with
                  care and clarity.
                </SectionBodyCopy>
                <LinkButton
                  href='/request-estate-sale-consultation'
                  subvariant='solid'
                  colors='secondary'
                >
                  Schedule a Consultation
                </LinkButton>
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
            <div className='mx-auto max-w-screen-md px-4'>
              <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-pretty'>
                Schedule a Free Consultation
              </h2>
              <p className='mb-8 text-center font-light text-pretty sm:text-xl lg:mb-16'>
                Downsizing or managing a loved one’s estate? We’re here to guide
                you with compassion and experience. Schedule a consultation and
                let’s talk.
              </p>
              <ConsultationForm />
            </div>
          </RowSection>
        </Container>
      </div>
    </main>
  );
}
