import { Post as PostType } from '~/sanity.types';
import { PostPreview } from '@/app/_components/post-preview';
import { urlForImage } from '@/sanity/lib/utils';

export default function PostCard({ post }: { post: PostType }) {
  const { _id, title, coverImage, slug, eventDates, location } = post;

  const imageUrl =
    (coverImage && urlForImage(coverImage)?.width(550).height(310).url()) || '';

  return (
    <article key={_id}>
      <PostPreview
        title={title}
        coverImage={imageUrl}
        slug={slug}
        dates={eventDates || []}
        fullAddress={(location?.fullAddress as string) || ''}
      />
    </article>
  );
}
