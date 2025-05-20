import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { PortableText } from 'next-sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { urlFor } from '@/utils/urlFor';
import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import { LinkButton } from '@/app/_components/link-button';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import Container from '@/app/_components/container';
import Gallery from '@/app/_components/gallery-component';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  const { gallery } = post;
  const images = Array.isArray(gallery)
    ? gallery.map(
        (img: { _id: string; asset: SanityImageSource }, i: number) => ({
          src: urlFor(img)
            ?.width(2400)
            .height(1800)
            .auto('format')
            .quality(100)
            .url(), // much higher-res for lightbox
          thumbnail: urlFor(img)?.width(400).height(300).auto('format').url(), // low-res for grid
          width: 2400,
          height: 1800,
          alt: `Gallery image ${i + 1}`,
        }),
      )
    : [];

  const coverImage = post?.coverImage
    ? urlFor(post.coverImage)?.width(550).height(310).url()
    : null;

  console.log('post', post);
  const saleAddress = post?.location?.fullAddress || 'TBD';
  const saleDates = post?.dates || 'TBD';

  return (
    <Container>
      <div className='flex min-h-screen flex-col py-12'>
        <div className='mb-12 hidden md:block'>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              {
                label: 'Upcoming Estate Sales',
                href: '/upcoming-estate-sales',
              },
              { label: post?.title || 'Estate Sale' },
            ]}
          />
        </div>

        <div className='mb-4 md:hidden'>
          <LinkButton href='/upcoming-estate-sales' variant='text'>
            ← Back to Upcoming Estate Sales
          </LinkButton>
        </div>

        <div className='px-4'>
          <div className='grid gap-x-4 gap-y-8 md:grid-cols-2 md:grid-rows-2'>
            {/* Row 1 Column 1: Details */}
            <div className='flex flex-1 flex-col'>
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
            {/* Row 1 Column 2: Cover Image */}
            {coverImage && (
              <div className='relative flex min-h-72 w-full shrink-0 items-center justify-center'>
                <Image
                  src={coverImage}
                  alt={post?.title}
                  className='aspect-video rounded-xl object-cover'
                  fill
                  priority
                  // width={550}
                  // height={310}
                />
              </div>
            )}
            {/* Row 2 Column 1: Description (PortableText) */}
            <div
              className='prose max-h-80 overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner'
              style={{ minHeight: '16rem' }}
            >
              <p className='mb-2 text-sm text-gray-400'>
                Updated: {new Date(post?._updatedAt).toLocaleDateString()}
              </p>
              {Array.isArray(post?.body) && <PortableText value={post.body} />}
            </div>
            {/* Row 2 Column 2: Gallery */}
            <div
              className='max-h-80 overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner'
              style={{ minHeight: '16rem' }}
            >
              {gallery?.length > 0 && <Gallery images={images} />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
