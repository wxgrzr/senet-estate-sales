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
import Section from '@/app/_components/section';
import LinkButton from '@/app/_components/link-button';
import ConsultationForm from '@/app/_components/consultation-form';
import ContainerColored from '@/app/_components/container-colored';

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: string;
  _createdAt: string;
  image: string;
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(_createdAt desc)[0...12]{_id, title, slug, coverImage, _createdAt}`;

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
      <Container>
        {/* Ready to Sell With Us? */}
        <Section>
          <div className='items-center gap-8 grid md:grid-cols-2 mx-auto px-4'>
            <div>
              <Image
                src='https://placehold.co/600x400/png'
                width='600'
                height='400'
                alt='Contact'
                className='shadow-lg rounded-xl'
              />
            </div>
            <div>
              <h2 className='mb-5 font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight'>
                Ready to Sell With Us?
              </h2>
              <p className='mb-8 text-gray-500 text-sm md:text-base lg:text-lg'>
                We make hosting your estate sale easy, organized, and
                profitable. Let us handle the hard part so you can focus on what
                matters most.
              </p>
              <LinkButton href='/contact'>Schedule a Consultation</LinkButton>
            </div>
          </div>
        </Section>
      </Container>

      {/* More estate sales */}
      <ContainerColored>
        <section className='py-14' id='sales'>
          <ul className='flex flex-col gap-y-2'>
            {posts.length > 0 && (
              <MoreEstateSales posts={posts} postImageUrl={postImageUrl} />
            )}
          </ul>
        </section>
      </ContainerColored>

      {/* Info Section 2 (Mirrored) */}
      <Container>
        <Section>
          <div className='items-center gap-8 grid md:grid-cols-2 mx-auto px-4'>
            <div className='md:order-2'>
              <Image
                src='https://placehold.co/600x400/png'
                width='600'
                height='400'
                alt='Contact'
                className='shadow-lg rounded-xl'
              />
            </div>
            <div className='md:order-1'>
              <h2 className='mb-5 font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight'>
                Who We Are
              </h2>
              <p className='mb-8 text-gray-500 text-sm md:text-base lg:text-lg'>
                We&apos;re a locally rooted team passionate about giving new
                life to old treasures. With years of experience, we connect
                stories and collectors.
              </p>
              <LinkButton href='/about'>Learn More</LinkButton>
            </div>
          </div>
        </Section>
      </Container>

      <ConsultationForm />
      {/* Footer */}
      <footer className='mt-auto py-8'>
        <div className='gap-6 grid md:grid-cols-3 mx-auto px-4 max-w-7xl'>
          <div>
            <h3 className='mb-2 font-semibold'>Senet Estate Sales</h3>
            <p className='text-sm'>
              Your trusted partner for estate sales and vintage finds in&nbsp;
              <b>Southeastern Michigan.</b>
            </p>
          </div>
          <div>
            <h4 className='mb-2 font-semibold'>Quick Links</h4>
            <ul className='space-y-1 text-sm'>
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
            <h4 className='mb-2 font-semibold'>Contact Info</h4>
            <p className='text-sm'>
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
      </footer>
    </main>
  );
}
