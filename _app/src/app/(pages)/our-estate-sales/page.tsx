import type { Metadata } from 'next';
import { Post as PostType } from '~/sanity.types';
import { allPostsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import PostCard from '@/app/(pages)/our-estate-sales/post-card';

export const metadata: Metadata = {
  title: 'Our Estate Sales',
  description:
    'Explore our estate sales hosted across Holly, Fenton, Flint, Grand Blanc & nearby. New sales are posted on our Facebook page.',
};

// TODO: Add "sold out" badge to posts where eventDates are in the past ??
// or filter them out entirely?
export default async function OurEstateSales() {
  const posts = await client.fetch<PostType[]>(
    allPostsQuery,
    {},
    { next: { revalidate: 300 } },
  );

  if (!posts?.length) {
    return (
      <div className='md:mb-8'>
        <section className='px-4'>
          <div className='mb-4 md:mb-8'>
            <h1 className='text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl'>
              Estate Sales
            </h1>
          </div>
          <p>
            There are no published estate sales at this time. Please check back
            soon!
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className='md:mb-8'>
      <section className='px-4'>
        <div className='mb-4 md:mb-8'>
          <h1 className='text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl'>
            Our Estate Sales
          </h1>
          {/* TODO: add facebook link */}
          <p className='mt-4 max-w-3xl text-lg text-gray-700'>
            Explore our estate liquidation events, featuring curated sales
            throughout Southeastern MI.
          </p>
        </div>

        <div className='grid h-full gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {posts.map((post, index) => (
            <PostCard
              post={post}
              key={post._id}
              priority={index < 2 ? true : false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
