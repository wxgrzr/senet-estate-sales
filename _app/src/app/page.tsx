import type { Post } from '../../../sanity.types';
import { PostPreview } from './_components/post-preview';
import { ArrowRightIcon } from '@sanity/icons';
import GridContainer from '@/app/_components/grid-container';
import { sanityFetch } from '@/sanity/live';
import Container from '@/app/_components/container';
import Hero from '@/app/_components/hero';

import { LinkButton } from '@/app/_components/link-button';
import Carousel from '@/app/_components/carousel';
import WhatWeDoBest from '@/app/_components/what-we-do-best';
import { urlFor } from '@/utils/urlFor';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current) && category == "upcoming"
]|order(_createdAt desc)[0...4]{_id, title, slug, coverImage, location, eventDates}`;

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
      <Hero />
      {/* Section 1 */}
      <Container>
        <section className='py-16 md:py-20 lg:py-24'>
          <div className='grid items-center gap-8 md:grid-cols-2'>
            <Carousel
              srcs={{
                0: 'https://b2670080.smushcdn.com/2670080/wp-content/uploads/2022/03/2018-kleinerteam.jpg?lossy=0&strip=1&webp=1',
                1: 'https://images.unsplash.com/photo-1739813914275-a0952d33477b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                2: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
            <div>
              <h2 className='mb-6 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl'>
                Who We Are
              </h2>
              <p className='mb-8 text-base text-gray-600 md:text-lg lg:text-xl'>
                We&apos;re a Michigan rooted team passionate about giving new
                life to old treasures. With years of experience, we connect
                stories and collectors.
              </p>
              <LinkButton
                href='/about-us'
                variant='button'
                colors='secondary'
                subvariant='solid'
              >
                Learn More
              </LinkButton>
            </div>
          </div>
        </section>
      </Container>

      {/* Upcoming Estate Sales */}
      <div className='bg-platinum'>
        <Container>
          <div className='pb-12 pt-16'>
            <section className='relative m-5'>
              <div className='flex justify-between'>
                <h2 className='mb-8 text-4xl font-bold leading-[0.9] tracking-tighter md:text-6xl'>
                  Upcoming Estate Sales
                </h2>
              </div>
              <div className='mb-12'>
                <GridContainer>
                  {posts.map((post: Post) => {
                    return (
                      <div key={post._id}>
                        <PostPreview
                          title={post.title || ''}
                          coverImage={postImageUrl(post) as string}
                          slug={post.slug?.current || ''}
                          dates={post?.eventDates || []}
                          fullAddress={post.location?.fullAddress || ''}
                        />
                      </div>
                    );
                  })}
                </GridContainer>
                <div className='mt-8 flex justify-end'>
                  <LinkButton
                    variant='text'
                    href='/upcoming-estate-sales'
                    className='inline-flex'
                  >
                    View all upcoming estate sales
                    <ArrowRightIcon width={24} height={24} />
                  </LinkButton>
                </div>
              </div>
            </section>
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
                  0: 'https://images.unsplash.com/photo-1511737561643-649a082cd8a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  1: 'https://images.unsplash.com/photo-1526714777143-799b30a29fdb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  2: 'https://images.unsplash.com/photo-1642415314611-3439fb991d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  3: 'https://images.unsplash.com/photo-1641443631464-e2a3928b3f9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  4: 'https://images.unsplash.com/photo-1619984827929-a056b71e4a3b?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <LinkButton
                href='/schedule-consultation'
                subvariant='solid'
                colors='secondary'
              >
                Schedule a Consultation
              </LinkButton>
            </div>
          </div>
        </section>
      </Container>

      <WhatWeDoBest />
    </main>
  );
}
