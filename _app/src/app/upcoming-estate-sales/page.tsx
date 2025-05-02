import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PostPreview } from '@/app/_components/post-preview';
import { Post } from '@/lib/types';
import { client } from '@/sanity/client';
import { sanityFetch } from '@/sanity/live';
import Container from '@/app/_components/container';
import GridContainer from '@/app/_components/grid-container';

const POSTS_QUERY = `*[
  _type == "post"
]|order(_updatedAt desc)[0...12]`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function UpcomingEstateSales() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  const postImageUrl = (post: Post) =>
    post?.coverImage
      ? urlFor(post.coverImage)?.width(550).height(310).url() || ''
      : '';

  return (
    <Container>
      <section className='py-8 md:py-20 lg:py-24'>
        <div className='mb-8'>
          <h2 className='text-5xl font-bold leading-[0.9] tracking-tighter md:text-6xl'>
            Upcoming Estate Sales
          </h2>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='flex h-[30lvh] items-center justify-center border md:h-full'>
            <p>TODO: map area</p>
          </div>
          <div className='grid grid-cols-subgrid gap-8 py-2 md:row-start-1 md:py-0 lg:grid-cols-2 lg:gap-4'>
            {posts.map((post: Post) => {
              const eventDates = post.eventDates
                ? Object.values(post.eventDates)
                : [];
              return (
                <div key={post._id}>
                  <PostPreview
                    title={post.title}
                    coverImage={postImageUrl(post) as string}
                    slug={post.slug.current}
                    dates={eventDates}
                    fullAddress={post.location.fullAddress}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* </div> */}
      </section>
    </Container>
  );
}
