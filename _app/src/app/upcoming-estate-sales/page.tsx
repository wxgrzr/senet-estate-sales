import { PostPreview } from '@/app/_components/post-preview';
import { Post as PostType } from '~/sanity.types';
import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import { sanityFetch } from '@/sanity/lib/live';
import { urlForImage } from '@/sanity/lib/utils';
import Container from '@/app/_components/container';
import { allPostsQuery } from '@/sanity/lib/queries';

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
    <main id='content'>
      <Container>
        <section className='py-8 md:py-12 lg:py-16'>
          <div className='hidden md:block'>
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
          <div>
            <div className='mb-8'>
              <h2 className='text-5xl leading-tight font-bold tracking-tighter md:text-6xl lg:text-7xl'>
                Upcoming Estate Sales
              </h2>
            </div>
            <div className='grid gap-4 md:grid-cols-2'>
              {/* Map */}
              <div className='flex h-[30lvh] items-center justify-center border md:h-full'>
                <p>TODO: map area</p>
              </div>
              {/* Posts */}
              <div className='grid max-h-[50vh] grid-cols-subgrid gap-8 overflow-y-auto py-2 pr-2 md:row-start-1 md:py-0 lg:grid-cols-2 lg:gap-4'>
                {posts &&
                  posts.map((post: any) => {
                    return <Post post={post} key={post._id} />;
                  })}
              </div>
            </div>
          </div>
        </section>
      </Container>
      <hr />
    </main>
  );
}
