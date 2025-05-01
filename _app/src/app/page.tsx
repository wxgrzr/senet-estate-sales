import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/client';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityFetch } from '@/sanity/live';
import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import Hero from '@/app/_components/hero';
import { MoreEstateSales } from '@/app/_components/more-estate-sales';
import LinkButton from '@/app/_components/link-button';
import ConsultationForm from '@/app/_components/consultation-form';
import { Post } from '@/lib/types';
import Carousel from '@/app/_components/carousel';
import WhatWeDoBest from '@/app/_components/what-we-do-best';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(_createdAt desc)[0...12]{_id, title, slug, coverImage, location, eventDates}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function IndexPage() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  const postImageUrl = (post: Post) =>
    post?.coverImage
      ? urlFor(post.coverImage)?.width(550).height(310).url() || ''
      : '';

  return (
    <main>
      <Header />
      <Hero />

      {/* Section 1 */}
      <Container>
        <section className='py-16 md:py-20 lg:py-24'>
          <div className='grid items-center gap-8 md:grid-cols-2'>
            <Carousel
              srcs={{
                0: 'https://placehold.co/600x400/png?text=Slide+1',
                1: 'https://placehold.co/600x400/png?text=Slide+2',
                2: 'https://placehold.co/600x400/png?text=Slide+3',
              }}
            />
            <div>
              <h2 className='mb-6 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl'>
                Who We Are
              </h2>
              <p className='mb-8 text-base text-gray-600 md:text-lg lg:text-xl'>
                We&apos;re a locally rooted team passionate about giving new
                life to old treasures. With years of experience, we connect
                stories and collectors.
              </p>
              <LinkButton href='/about'>Learn More</LinkButton>
            </div>
          </div>
        </section>
      </Container>

      {/* More Estate Sales */}
      <div className='bg-platinum'>
        <Container>
          <div className='pb-12 pt-16'>
            <MoreEstateSales posts={posts} postImageUrl={postImageUrl} />
          </div>
        </Container>
      </div>

      {/* Section 2 */}
      <Container>
        <section className='py-16 md:py-20 lg:py-24'>
          <div className='grid items-center gap-8 md:grid-cols-2'>
            <div className='md:order-2'>
              <Carousel
                srcs={{
                  0: 'https://placehold.co/600x400/png?text=Slide+1',
                  1: 'https://placehold.co/600x400/png?text=Slide+2',
                  2: 'https://placehold.co/600x400/png?text=Slide+3',
                }}
              />
            </div>
            <div className='md:order-1'>
              <h2 className='mb-6 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl'>
                Ready to Sell With Us?
              </h2>
              <p className='mb-8 text-base text-gray-600 md:text-lg lg:text-xl'>
                We make hosting your estate sale easy, organized, and
                profitable. Let us handle the hard part so you can focus on what
                matters most.
              </p>
              <LinkButton href='/contact'>Schedule a Consultation</LinkButton>
            </div>
          </div>
        </section>
      </Container>

      <WhatWeDoBest />

      {/* Consultation Form */}
      <div className='bg-platinum'>
        <Container>
          <section className='py-16 md:py-20 lg:py-24'>
            <ConsultationForm />
          </section>
        </Container>
      </div>

      {/* Footer */}
      <footer className='mt-auto py-12'>
        <Container>
          <div className='grid gap-8 md:grid-cols-3'>
            <div>
              <h3 className='mb-4 text-lg font-semibold'>Senet Estate Sales</h3>
              <p className='text-sm text-gray-600'>
                Your trusted partner for estate sales and vintage finds in&nbsp;
                <b>Southeastern Michigan.</b>
              </p>
            </div>
            <div>
              <h4 className='mb-4 text-lg font-semibold'>Quick Links</h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>
                  <Link href='#hero' className='hover:underline'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='#sales' className='hover:underline'>
                    Current Sales
                  </Link>
                </li>
                <li>
                  <Link
                    href='/schedule-a-consultation'
                    className='hover:underline'
                  >
                    Schedule a Consultation
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='hover:underline'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href='/faq' className='hover:underline'>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-4 text-lg font-semibold'>Contact Info</h4>
              <p className='text-sm text-gray-600'>
                123 Main Street
                <br />
                Phoenix, AZ 85001
                <br />
                <br />
                <a href='tel' className='text-gray-800 hover:underline'>
                  (555) 123-4567
                </a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
