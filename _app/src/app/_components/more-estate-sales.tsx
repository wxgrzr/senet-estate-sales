import { Post } from '@/app/page';
import { PostPreview } from './post-preview';
import Link from 'next/link';
import CoverImage from '@/app/_components/cover-image';
import DateFormatter from '@/app/_components/date-formatter';

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
      <ul className='grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-4 md:gap-x-10 md:gap-y-24 lg:gap-x-12'>
        {posts.map((post: Post) => (
          <li className='hover:underline' key={post._id}>
            <Link href={`/${post.slug.current}`}>
              {postImageUrl && (
                <div className='mb-5'>
                  <CoverImage
                    src={postImageUrl(post) as string}
                    title={post?.title}
                  />
                </div>
              )}
              <h3 className='mb-1 text-2xl font-semibold leading-snug'>
                {post.title}
              </h3>
              <div className='mb-4 text-lg'>
                <DateFormatter dateString={post._createdAt} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
