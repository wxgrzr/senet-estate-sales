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
  title: 'Upcoming Estate Sales',
  description:
    'Browse all upcoming estate sales in Southeast Michigan hosted by Senet Estate Sales. Find dates, locations, and details for each event.',
  alternates: {
    canonical: 'https://senetestatesales.com/upcoming-estate-sales',
  },
  openGraph: {
    title: 'Upcoming Estate Sales',
    description:
      'Browse all upcoming estate sales in Southeast Michigan hosted by Senet Estate Sales. Find dates, locations, and details for each event.',
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
    title: 'Upcoming Estate Sales',
    description:
      'Browse all upcoming estate sales in Southeast Michigan hosted by Senet Estate Sales. Find dates, locations, and details for each event.',
    images: ['/og-image.jpg'],
  },
  other: {
    'fb:page_id': '424849244049685',
    'fb:profile_id': '61567003222290',
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
};

export default async function UpcomingEstateSales() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <div className='mb-16'>
      <div className='mb-6 hidden md:block'>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            {
              label: 'Upcoming Estate Sales',
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
        <div>
          <div className='mb-4 md:mb-8'>
            <h2 className='text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl'>
              Upcoming Estate Sales
            </h2>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='mb-4 flex h-[40lvh] items-center justify-center overflow-hidden rounded-xl md:h-full md:min-h-full'>
              <GoogleMap />
            </div>
            <div className='grid max-h-[70lvh] gap-8 overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner md:row-start-1 lg:grid-cols-2'>
              {posts.map((post: any) => {
                return <Post post={post} key={post._id} />;
              })}
            </div>
          </div>
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
