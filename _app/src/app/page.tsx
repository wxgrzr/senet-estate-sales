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
        {/* Info Section 1 */}
        <section className='py-16'>
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
              <h2 className='mb-4 font-semibold text-3xl'>
                Ready to Sell With Us?
              </h2>
              <p className='mb-6 text-gray-400'>
                We make hosting your estate sale easy, organized, and
                profitable. Let us handle the hard part so you can focus on what
                matters most.
              </p>
              <Link
                href='/contact'
                className='bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium text-white transition'
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* More estate sales */}
        <section className='py-16'>
          <ul className='flex flex-col gap-y-2'>
            {posts.length > 0 && (
              <MoreEstateSales posts={posts} postImageUrl={postImageUrl} />
            )}
          </ul>
        </section>

        {/* Info Section 2 (Mirrored) */}
        <section className='py-16'>
          <div className='items-center gap-8 grid md:grid-cols-2 mx-auto px-4 max-w-7xl'>
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
              <h2 className='mb-4 font-semibold text-3xl'>Who We Are</h2>
              <p className='mb-6'>
                EstateFinds is a locally rooted team passionate about giving new
                life to old treasures. With years of experience, we connect
                stories and collectors.
              </p>
              <Link
                href='/about'
                className='bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium text-white transition'
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </Container>

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
                <a href='#hero' className='hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href='#sales' className='hover:underline'>
                  Current Sales
                </a>
              </li>
              <li>
                <a href='/contact' className='hover:underline'>
                  Schedule a Consultation
                </a>
              </li>
              <li>
                <a href='/about' className='hover:underline'>
                  About Us
                </a>
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
              (555) 123-4567
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
