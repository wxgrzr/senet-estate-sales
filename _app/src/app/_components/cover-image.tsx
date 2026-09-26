import Link from 'next/link';
import Image from 'next/image';
import { Slug } from '~/sanity.types';
import { Routes } from '@/app/constants';

type Props = {
  title: string;
  src: string;
  slug?: Slug;
  priority?: boolean;
};

const CoverImage = ({ title, src, slug, priority = false }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      // Matches the 550x310 crop requested from Sanity in post-card.tsx.
      width={550}
      height={310}
      className='h-auto w-full'
      // Card width in the 1 / 2 / 3 column grid on our-estate-sales.
      sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
      priority={priority}
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`${Routes.OurEstateSales}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
