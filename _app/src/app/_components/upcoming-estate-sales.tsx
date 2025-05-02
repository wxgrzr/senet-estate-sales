import { Post } from '@/lib/types';
import { PostPreview } from './post-preview';
import LinkButton from '@/app/_components/link-button';
import { ArrowRightIcon } from '@sanity/icons';

type Props = {
  posts: Post[];
  postImageUrl: (post: Post) => string;
};

function UpcomingEstateSales({ posts, postImageUrl }: Props) {
  return (
    <section className='relative mx-5'>
      <h2 className='mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl'>
        Upcoming Estate Sales
      </h2>
      <div className='mb-8 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-24'>
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
      <div className='flex w-full justify-end'>
        <LinkButton
          variant='text'
          href='/estate-sales'
          className='inline-flex items-center'
        >
          View all current estate sales
          <ArrowRightIcon width={24} height={24} />
        </LinkButton>
      </div>
    </section>
  );
}

export default UpcomingEstateSales;
