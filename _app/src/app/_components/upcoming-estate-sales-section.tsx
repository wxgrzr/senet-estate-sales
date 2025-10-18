import { Post } from '~/sanity.types';
import Container from './container';
import { PostPreview } from './post-preview';
import { urlForImage } from '@/sanity/lib/utils';
import { LinkButton } from './link-button';
import { ArrowRightIcon } from '@sanity/icons';
import { RowSection } from './row-section';

// Unused section, intended for landing page
export const UpcomingEstateSalesSection = ({ posts }: { posts: Post[] }) => {
  const postImageUrl = (post: Post) =>
    post?.coverImage
      ? urlForImage(post.coverImage)?.width(550).height(310).url() || ''
      : '';
  return (
    <div id='upcoming-estate-sales'>
      <RowSection>
        <div className='bg-platinum'>
          <Container>
            <section className='relative'>
              <div className='flex justify-between'>
                <h2 className='mb-8 text-4xl leading-[0.9] font-bold tracking-tighter md:text-6xl'>
                  Estate Sales
                </h2>
              </div>
              <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-6'>
                {posts.map((post: Post) => {
                  return (
                    <div key={post._id}>
                      <PostPreview
                        title={post.title || ''}
                        coverImage={postImageUrl(post) as string}
                        slug={post.slug}
                        dates={post?.eventDates || []}
                        fullAddress={post.location?.fullAddress || ''}
                      />
                    </div>
                  );
                })}
              </div>
              <div className='mt-8 flex justify-end'>
                <LinkButton
                  variant='text'
                  href='/upcoming-estate-sales'
                  className='group inline-flex'
                >
                  View all estate sales
                  <span className='arrow-animate ml-1 transition-transform duration-200 group-hover:translate-x-1'>
                    <ArrowRightIcon width={24} height={24} />
                  </span>
                </LinkButton>
              </div>
            </section>
          </Container>
        </div>
      </RowSection>
    </div>
  );
};
