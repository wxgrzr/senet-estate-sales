import { PostPreview } from '@/app/_components/post-preview';
import { Post as PostType } from '~/sanity.types';
import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import { sanityFetch } from '@/sanity/lib/live';
import { urlForImage } from '@/sanity/lib/utils';
import { allPostsQuery } from '@/sanity/lib/queries';
import { LinkButton } from '@/app/_components/link-button';

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

export default async function UpcomingEstateSales() {
  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  });

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

      {/* <section className='px-4 pb-16 lg:pb-24'> */}
      <section className='px-4'>
        <div>
          <div className='mb-8'>
            <h2 className='text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl'>
              Upcoming Estate Sales
            </h2>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='flex h-[30lvh] items-center justify-center border md:h-full'>
              <p>TODO: map area</p>
            </div>
            <div className='grid max-h-[70lvh] gap-8 overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner md:row-start-1 lg:grid-cols-2'>
              {posts &&
                posts.map((post: any) => {
                  return <Post post={post} key={post._id} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
