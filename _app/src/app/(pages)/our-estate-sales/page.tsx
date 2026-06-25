import { Post as PostType } from '~/sanity.types';
import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import { allPostsQuery } from '@/sanity/lib/queries';
import { LinkButton } from '@/app/_components/link-button';
import { client } from '@/sanity/lib/client';
import PostCard from '@/app/(pages)/our-estate-sales/post-card';
import { Routes } from '@/app/constants';
export { metadata } from './metadata';

// TODO: Add "sold out" badge to posts where eventDates are in the past ??
// or filter them out entirely?
export default async function UpcomingEstateSales() {
  const posts = await client.fetch<PostType[]>(
    allPostsQuery,
    {},
    { cache: 'no-store' },
  );

  if (!posts || posts.length === 0) {
    return (
      <div className='md:mb-8'>
        <div className='mb-6 hidden md:block'>
          <Breadcrumbs
            items={[
              { label: 'Home', href: Routes.Home },
              {
                label: 'Michigan Estate Sales',
                href: Routes.OurEstateSales,
              },
            ]}
          />
        </div>
        <div className='mb-8 md:hidden'>
          <LinkButton href={Routes.Home} variant='text'>
            ← Back to Home
          </LinkButton>
        </div>

        <section className='px-4'>
          <div className='mb-4 md:mb-8'>
            <h1 className='text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl'>
              Michigan Estate Sales
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
      <div className='mb-6 hidden md:block'>
        <Breadcrumbs
          items={[
            { label: 'Home', href: Routes.Home },
            {
              label: 'Michigan Estate Sales',
              href: Routes.OurEstateSales,
            },
          ]}
        />
      </div>
      <div className='mb-8 md:hidden'>
        <LinkButton href={Routes.Home} variant='text'>
          ← Back to Home
        </LinkButton>
      </div>

      <section className='px-4'>
        <div className='mb-4 md:mb-8'>
          <h1 className='text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl'>
            Michigan Estate Sales
          </h1>
          <p className='mt-4 max-w-3xl text-lg text-gray-700'>
            Explore our upcoming estate liquidation events, featuring curated
            sales throughout Metro Detroit, Ann Arbor, Flint, Bloomfield, Bay
            City, and more. Every listing is managed by our Michigan estate sale
            and clean-out specialists to ensure homes are market-ready and
            cherished collections find new owners.
          </p>
        </div>

        <div className='grid h-full gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </section>
    </div>
  );
}
