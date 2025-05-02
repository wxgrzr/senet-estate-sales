import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { PortableText, type SanityDocument } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';
import Link from 'next/link';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/live';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function UpcomingEstateSale({
  params,
}: {
  params: { slug: string };
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: params,
  });

  const { gallery } = post;

  const postImageUrl = post?.gallery
    ? urlFor(post.gallery[0])?.width(550).height(310).url()
    : null;

  const saleAddress = post?.address || 'TBD';
  const saleDates = post?.dates || 'TBD';

  return (
    <main className='container mx-auto flex min-h-screen max-w-6xl flex-col gap-8 p-4'>
      <Link href='/' className='text-sm hover:underline'>
        ← Back to posts
      </Link>

      {/* Header */}
      <div className='flex flex-col justify-between gap-6 md:flex-row'>
        <div className='flex-1'>
          <h1 className='text-4xl font-bold'>{post?.title}</h1>
          <p className='mt-2 text-lg text-gray-600'>{saleAddress}</p>
          <p className='text-md text-gray-500'>{saleDates}</p>
          <div className='mt-4'>
            <AddToCalendarButton
              name={post?.title || 'Estate Sale'}
              startDate='2025-05-01'
              endDate='2025-05-02'
              location={saleAddress}
              options={['Apple', 'Google', 'Outlook.com']}
              timeZone='America/Phoenix'
              trigger='click'
              size='small'
              inline
              label='Add to Calendar'
            />
          </div>
        </div>
        {postImageUrl && (
          <div className='w-full shrink-0 md:max-w-sm'>
            <Image
              src={postImageUrl}
              alt={post?.title}
              className='aspect-video rounded-xl object-cover'
              width={550}
              height={310}
              loading='lazy'
            />
          </div>
        )}
      </div>

      {/* Description */}
      <div className='prose max-h-[400px] overflow-y-auto rounded-lg bg-white p-4 shadow-md'>
        <p className='text-sm text-gray-400'>
          Updated: {new Date(post?._updatedAt).toLocaleDateString()}
        </p>
        {Array.isArray(post?.body) && <PortableText value={post.body} />}
      </div>

      {/* Gallery */}
      {gallery?.length > 0 && (
        <section>
          <h2 className='mb-4 text-2xl font-semibold'>Gallery</h2>
          <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
            {gallery.map(
              (img: { _id: string; asset: SanityImageSource }, i: number) => {
                const imgUrl = urlFor(img)?.width(400).height(300).url();
                return (
                  imgUrl && (
                    <Image
                      key={i}
                      src={imgUrl}
                      alt={`Gallery image ${i + 1}`}
                      className='rounded-lg object-cover'
                      width={400}
                      height={300}
                      loading='lazy'
                    />
                  )
                );
              },
            )}
          </div>
        </section>
      )}
    </main>
  );
}
