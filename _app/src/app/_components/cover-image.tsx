import Link from 'next/link';
import Image from 'next/image';
import { Slug } from '~/sanity.types';

type Props = {
  title: string;
  src: string;
  slug?: Slug;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1300}
      height={630}
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/upcoming-estate-sales/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
