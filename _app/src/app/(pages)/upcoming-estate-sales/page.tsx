import { PostPreview } from '@/app/_components/post-preview';
import { Post as PostType } from '~/sanity.types';
import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import { urlForImage } from '@/sanity/lib/utils';
import { allPostsQuery } from '@/sanity/lib/queries';
import { LinkButton } from '@/app/_components/link-button';
import GoogleMap from '@/app/_components/google-map';
import { client } from '@/sanity/lib/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Michigan Estate Sales',
  description:
    'Browse Michigan estate sales hosted by Senet Estate Sales, featuring upcoming events across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and Southeast Michigan.',
  alternates: {
    canonical: 'https://senetestatesales.com/upcoming-estate-sales',
  },
  openGraph: {
    title: 'Michigan Estate Sales',
    description:
      'Browse Michigan estate sales hosted by Senet Estate Sales, featuring upcoming events across Detroit, Ann Arbor, Flint, Bloomfield, Bay City, and Southeast Michigan.',
    url: 'https://senetestatesales.com/upcoming-estate-sales',
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
    title: 'Michigan Estate Sales',
    description:
      'Upcoming Michigan estate sales and liquidation events handled by Senet Estate Sales across Detroit, Ann Arbor, Flint, and Southeast Michigan.',
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
    'Michigan estate sales',
    'Michigan cleanout services',
    'Detroit estate auctions',
    'Flint estate liquidators',
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

export default async function UpcomingEstateSales() {
  const posts = await client.fetch(allPostsQuery, {}, { cache: 'no-store' });

  return (
    <div className='md:mb-8'>
      <div className='mb-6 hidden md:block'>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              {
                label: 'Michigan Estate Sales',
                href: '/upcoming-estate-sales',
              },
            ]}
          />
      </div>
      <div className='mb-8 md:hidden'>
        <LinkButton href='/' variant='text'>
          ← Back to Home
        </LinkButton>
      </div>

      <section className='px-4'>
        <div className='mb-4 md:mb-8'>
          <h2 className='text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl'>
            Michigan Estate Sales
          </h2>
          <p className='mt-4 max-w-3xl text-lg text-gray-700'>
            Explore our upcoming estate liquidation events, featuring curated
            sales throughout Metro Detroit, Ann Arbor, Flint, Bloomfield, Bay
            City, and more. Every listing is managed by our Michigan estate sale
            and clean-out specialists to ensure homes are market-ready and
            cherished collections find new owners.
          </p>
        </div>

        <div className='grid h-full gap-4 md:grid-cols-2'>
          {posts.length > 0 ? (
            <>
              <div className='my-4 min-h-[40vh] overflow-hidden rounded-lg md:my-0'>
                <GoogleMap />
              </div>
              <div className='grid max-h-[75vh] min-h-[40vh] gap-6 overflow-y-auto rounded-lg bg-gray-50 p-6 shadow-inner md:row-start-1 md:min-h-[68vh] lg:grid-cols-2'>
                {posts.map((post: any) => {
                  return <Post post={post} key={post._id} />;
                })}
              </div>
            </>
          ) : (
            <p>
              There are no published estate sales at this time. Please check
              back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

const Post = ({ post }: { post: PostType }) => {
  const { _id, title, coverImage, slug, eventDates, location } = post;
  return (
    <article key={_id}>
      <PostPreview
        title={title}
        coverImage={
          (coverImage &&
            urlForImage(coverImage)?.width(550).height(310).url()) ||
          ''
        }
        slug={slug}
        dates={eventDates || []}
        fullAddress={location.fullAddress as string}
      />
    </article>
  );
};
