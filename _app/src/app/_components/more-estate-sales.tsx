import { Post } from '@/lib/types';
import { PostPreview } from './post-preview';

type Props = {
  posts: Post[];
  postImageUrl: (post: Post) => string;
};

export function MoreEstateSales({ posts, postImageUrl }: Props) {
  return (
    <section className='mx-5'>
      <h2 className='mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl'>
        Our Estate Sales
      </h2>
      <div className='grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-4 md:gap-x-10 md:gap-y-24 lg:gap-x-12'>
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
    </section>
  );
}
