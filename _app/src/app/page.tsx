// import type { Post } from "../../../studio/sanity.types";
// import { PostPreview } from "./_components/post-preview";
// import { ArrowRightIcon } from "@sanity/icons";
import Container from '@/app/_components/container';

import { LinkButton } from '@/app/_components/link-button';
import Carousel from '@/app/_components/carousel';
import { OurServices } from '@/app/_components/our-services';
// import { urlForImage } from "@/sanity/lib/utils";
// import { sanityFetch } from "@/sanity/lib/live";
import ConsultationForm from '@/app/_components/consultation-form';
import { Reviews } from '@/app/_components/reviews';
import Image from 'next/image';

// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current) && category == "upcoming"
// ]|order(_createdAt desc)[0...4]{_id, title, slug, coverImage, location, eventDates}`;

export default async function IndexPage() {
  // const { data: posts } = await sanityFetch({
  //   query: POSTS_QUERY,
  // });

  // const postImageUrl = (post: Post) =>
  //   post?.coverImage
  //     ? urlForImage(post.coverImage)?.width(550).height(310).url() || ""
  //     : "";

  return (
    <main id='content'>
      <Container>
        <section id='hero' className='py-6 sm:py-12 lg:py-16'>
          {/* Content */}
          <div className='grid grid-cols-2 items-center gap-4 md:gap-8'>
            <div className='space-y-4 sm:space-y-8'>
              <div className='sm:space-y-2'>
                <h2 className='max-xs:text-xl max-xs:leading-5 mb-2 text-2xl leading-6 font-extrabold tracking-tighter sm:text-4xl sm:leading-8 md:text-5xl md:leading-12 lg:text-6xl lg:leading-14'>
                  SENET
                  <br />
                  ESTATE SALES
                </h2>
                <p className='max-xs:text-[.8rem] text-xs tracking-tighter text-pretty sm:text-base md:text-lg lg:text-xl'>
                  Professional liquidation services in <b>Southeastern MI</b>
                </p>
              </div>
              <LinkButton
                href='/upcoming-estate-sales'
                subvariant='solid'
                colors='secondary'
                className='max-xs:text-[0.65rem] text-[.8rem] sm:text-base'
              >
                View Estate Sales
              </LinkButton>
            </div>
            <div className='flex items-center justify-center'>
              <div className='relative flex h-[21rem] w-[14rem] md:h-[28rem] md:w-[40rem]'>
                <Image
                  style={{ objectFit: 'cover' }}
                  src={'/heroimg/heroimg@3x.png'}
                  fill
                  alt=''
                  className='rounded-2xl'
                  priority
                  quality={100}
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px'
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div id='who-we-are'>
        <Container>
          <section className='py-16 md:py-20 lg:py-24'>
            <div className='grid items-center gap-8 md:grid-cols-2'>
              <Carousel
                className='min-h-96'
                altPrefix='who-we-are-section'
                srcs={{
                  0: 'https://b2670080.smushcdn.com/2670080/wp-content/uploads/2022/03/2018-kleinerteam.jpg?lossy=0&strip=1&webp=1',
                  1: 'https://images.unsplash.com/photo-1739813914275-a0952d33477b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  2: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <div>
                <h2 className='mb-6 text-4xl font-extrabold tracking-tight'>
                  What We Carry
                </h2>
                <p className='mb-6 text-lg text-gray-700'>
                  Senet Estate Sales helps people move through life&#39;s
                  transitions with care, attention, and quiet respect. Every
                  home holds a story—told through furniture worn smooth by years
                  of touch, shelves lined with books that shaped a mind, or
                  dishes that served a hundred quiet meals.
                </p>
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
          </section>
        </Container>
      </div>

      <div className='bg-platinum'>
        <Container>
          <section className='py-16 md:py-20 lg:py-24'>
            <Reviews />
          </section>
        </Container>
      </div>

      {/* <div className="bg-platinum py-12" id="upcoming-estate-sales">
        <Container>
          <section className="relative">
            <div className="flex justify-between">
              <h2 className="mb-8 text-4xl leading-[0.9] font-bold tracking-tighter md:text-6xl">
                Upcoming Estate Sales
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-6">
              {posts.map((post: Post) => {
                return (
                  <div key={post._id}>
                    <PostPreview
                      title={post.title || ""}
                      coverImage={postImageUrl(post) as string}
                      slug={post.slug?.current || ""}
                      dates={post?.eventDates || []}
                      fullAddress={post.location?.fullAddress || ""}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex justify-end">
              <LinkButton
                variant="text"
                href="/upcoming-estate-sales"
                className="group inline-flex"
              >
                View all upcoming estate sales
                <span className="arrow-animate ml-1 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRightIcon width={24} height={24} />
                </span>
              </LinkButton>
            </div>
          </section>
        </Container>
      </div> */}

      <div id='ready-to-sell-with-us'>
        <Container>
          <section className='py-16 md:py-20 lg:py-24'>
            <div className='grid items-center gap-8 md:grid-cols-2'>
              <div className='md:order-2'>
                <Carousel
                  className='min-h-96'
                  altPrefix='ready-to-sell-with-us-section'
                  srcs={{
                    0: 'https://images.unsplash.com/photo-1511737561643-649a082cd8a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    1: 'https://images.unsplash.com/photo-1526714777143-799b30a29fdb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    2: 'https://images.unsplash.com/photo-1642415314611-3439fb991d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    3: 'https://images.unsplash.com/photo-1641443631464-e2a3928b3f9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    4: 'https://images.unsplash.com/photo-1619984827929-a056b71e4a3b?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }}
                />
              </div>
              <div className='space-y-4 md:order-1'>
                <h2 className='mb-6 text-4xl font-extrabold tracking-tight text-pretty'>
                  Letting Go Starts Here
                </h2>
                <p className='mb-6 text-lg text-gray-700'>
                  We understand the emotions wrapped up in every object and
                  room. Our role isn&#39;t to move fast—it&#39;s to move
                  thoughtfully. Let us walk the space with you, understand what
                  matters most, and carry the process with grace.
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
      </div>

      <div id='our-services' tabIndex={-1} className='bg-platinum'>
        <OurServices />
      </div>

      {/* Consultation Form */}
      <Container>
        <section className='py-16 md:py-20 lg:py-24'>
          <div className='mx-auto max-w-screen-md px-4'>
            <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-pretty'>
              Schedule a Consultation
            </h2>
            <p className='mb-8 text-center font-light sm:text-xl lg:mb-16'>
              Downsizing or managing a loved one’s estate? We’re here to guide
              you with care and clarity. Schedule a consultation and let’s start
              the conversation.
            </p>
            <ConsultationForm />
          </div>
        </section>
      </Container>
    </main>
  );
}
