import { PostPreview } from '@/app/_components/post-preview';
import { Post } from '../../../../studio/sanity.types';
import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import { sanityFetch } from '@/sanity/lib/live';
import { urlForImage } from '@/sanity/lib/utils';
import Container from '@/app/_components/container';

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current) && category == "upcoming"
]|order(_createdAt desc)[0...12]{_id, title, slug, coverImage, location, eventDates}`;

export default async function UpcomingEstateSales() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  const postImageUrl = (post: Post) =>
    post?.coverImage
      ? urlForImage(post.coverImage)?.width(550).height(310).url() || ''
      : '';

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
              <div className='flex h-[30lvh] items-center justify-center border md:h-full'>
                <p>TODO: map area</p>
              </div>
              <div className='grid grid-cols-subgrid gap-8 py-2 md:row-start-1 md:py-0 lg:grid-cols-2 lg:gap-4'>
                {posts.map((post: Post) => {
                  return (
                    <div key={post._id}>
                      <PostPreview
                        title={post.title || ''}
                        coverImage={postImageUrl(post) as string}
                        slug={post?.slug?.current || ''}
                        dates={post.eventDates || []}
                        fullAddress={post?.location?.fullAddress as string}
                      />
                    </div>
                  );
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
