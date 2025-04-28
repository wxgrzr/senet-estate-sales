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
    <section>
      <h2 className='mb-8 font-bold dark:text-white text-5xl md:text-7xl leading-tight tracking-tighter'>
        Our Estate Sales
      </h2>
      <ul className='gap-y-16 sm:gap-x-6 md:gap-x-10 md:gap-y-24 lg:gap-x-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {posts.map((post: Post) => (
          <li className='dark:text-white hover:underline' key={post._id}>
            <Link href={`/${post.slug.current}`}>
              {postImageUrl && (
                <div className='mb-5'>
                  <CoverImage
                    src={postImageUrl(post) as string}
                    title={post?.title}
                  />
                </div>
              )}
              <h3 className='mb-1 font-semibold dark:text-white text-2xl leading-snug'>
                {post.title}
              </h3>
              <div className='mb-4 dark:text-white text-lg'>
                <DateFormatter dateString={post._createdAt} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
