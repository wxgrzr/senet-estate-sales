import { Breadcrumbs } from '@/app/_components/breadcrumbs';
import { DateFormatter } from '@/app/_components/date-formatter';
import Gallery from '@/app/_components/gallery-component';
import { LinkButton } from '@/app/_components/link-button';
import { OpenInMapsButton } from '@/app/_components/open-in-maps-button';
import { postQuery } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/utils';
import type { Metadata, ResolvingMetadata } from 'next';
import { createMetadata } from '@/app/_metadata';
import { Routes } from '@/app/constants';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug }, { cache: 'no-store' });
  const previousImages = (await parent).openGraph?.images || [];

  if (!post) {
    return createMetadata({
      title: 'Estate Sale Not Found',
      description: 'This estate sale could not be found.',
      path: `${Routes.OurEstateSales}/${slug}`,
    });
  }

  const title = post.title || 'Estate Sale';
  const description =
    'Estate sale event located at ' +
    post?.location?.fullAddress +
    ' by Senet Estate Sales.';
  const coverImage = post?.coverImage
    ? urlForImage(post.coverImage)?.width(1200).height(630).url()
    : undefined;

  const coverImageObj = coverImage
    ? {
        url: coverImage,
        width: 1200,
        height: 630,
        alt: title,
      }
    : undefined;

  // Build images array: cover image first, then previous images from parent
  const ogImages = coverImageObj
    ? [coverImageObj, ...previousImages]
    : previousImages.length > 0
      ? previousImages
      : undefined;

  return createMetadata({
    title,
    description,
    path: `${Routes.OurEstateSales}/${slug}`,
    openGraph: {
      title,
      description,
      type: 'article',
      ...(ogImages ? { images: ogImages } : coverImageObj ? { image: coverImageObj } : {}),
    },
    twitter: {
      title,
      description,
      image: coverImage ? [coverImage] : undefined,
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
  });
}

export default async function EstateSalePostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug }, { cache: 'no-store' });

  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.senetestatesales.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Michigan Estate Sales',
        item: 'https://www.senetestatesales.com/upcoming-estate-sales',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.senetestatesales.com/upcoming-estate-sales/${post.slug}`,
      },
    ],
  };

  const { gallery } = post;
  const images = Array.isArray(gallery)
    ? gallery.map((img, i) => ({
        src: urlForImage(img)
          ?.width(2400)
          .height(1800)
          .auto('format')
          .quality(100)
          .url(),
        thumbnail: urlForImage(img)
          ?.width(400)
          .height(300)
          .auto('format')
          .url(),
        width: 2400,
        height: 1800,
        alt: `Gallery image ${i + 1}`,
      }))
    : [];

  const coverImage = post?.coverImage
    ? urlForImage(post.coverImage)?.width(550).height(310).url()
    : null;

  const address = post?.location?.fullAddress;
  const eventDates = post?.eventDates || [];

  return (
    <div>
      <div className='mb-12 hidden md:block'>
        <Breadcrumbs
          items={[
            { label: 'Home', href: Routes.Home },
            {
              label: 'Michigan Estate Sales',
              href: Routes.OurEstateSales,
            },
            { label: post?.title || 'Estate Sale' },
          ]}
        />
      </div>
      <div className='mb-8 md:hidden'>
        <LinkButton href={Routes.OurEstateSales} variant='text'>
          ← Back to Michigan Estate Sales
        </LinkButton>
      </div>

      <article className='px-4 pb-16'>
        <div className='grid gap-x-4 gap-y-8 md:grid-cols-2 md:grid-rows-2'>
          <div id='event-details' className='flex flex-1 flex-col'>
            <h1
              id='event-title'
              className='mb-8 text-4xl font-bold tracking-tighter text-pretty md:text-5xl lg:text-6xl'
            >
              {post.title}
            </h1>
            <div id='event-dates' className='mb-8'>
              <h2 className='mb-2 text-2xl tracking-tighter'>
                <b>Event dates</b>
              </h2>
              <div className='text-lg text-gray-600'>
                {eventDates.length > 0 ? (
                  eventDates.map((date: string, index: number) => (
                    <p key={index}>
                      <DateFormatter dateString={date} time />
                    </p>
                  ))
                ) : (
                  <span className='tracking-tighter italic'>TBD</span>
                )}
              </div>
            </div>
            {address ? (
              address.length > 0 ? (
                <div id='event-location'>
                  <h2 className='mb-2 text-2xl tracking-tighter'>
                    <b>Get directions</b>
                  </h2>
                  <OpenInMapsButton
                    address={address}
                    className="text-lg before:content-['📍']"
                  />
                </div>
              ) : null
            ) : null}
          </div>
          <div className='relative flex min-h-72 w-full shrink-0 items-center justify-center'>
            {coverImage && (
              <Image
                src={coverImage}
                alt={post?.title}
                className='rounded-xl object-cover'
                fill
                priority
              />
            )}
          </div>
          <div>
            {post.body ? (
              <div className='prose max-h-96 min-h-full overflow-y-auto rounded-lg bg-gray-50 px-4 py-2 shadow-inner'>
                <p className='mb-2 text-sm text-gray-400'>
                  Updated: {new Date(post?._updatedAt).toLocaleDateString()}
                </p>
                {Array.isArray(post?.body) && (
                  <PortableText value={post.body} />
                )}
              </div>
            ) : null}
          </div>
          {/* Row 2 Column 2: Gallery */}
          <div className='max-h-96 min-h-full overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner'>
            {gallery
              ? gallery?.length > 0 && <Gallery images={images} />
              : null}
          </div>
        </div>
      </article>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
