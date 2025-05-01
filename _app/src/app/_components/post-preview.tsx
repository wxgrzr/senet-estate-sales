// import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import CoverImage from './cover-image';
import { DateRangeFormatter } from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  dates: string[];
  fullAddress: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  dates,
  fullAddress,
  slug,
}: Props) {
  return (
    <div className='flex flex-col overflow-hidden rounded-md bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
      {/* Cover Image */}
      <div className='relative h-auto'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      {/* Content */}
      <div className='flex flex-col p-4'>
        {/* Title */}
        <h3 className='text-indigodye mb-2 text-lg font-semibold leading-tight tracking-tight md:text-xl lg:text-2xl'>
          <Link
            href={`/${slug}`}
            className='hover:text-indigodye/60 transition-colors duration-200'
          >
            {title}
          </Link>
        </h3>

        {/* Address */}
        <p className='mb-3 text-sm leading-snug text-gray-600 md:text-base lg:text-lg'>
          {fullAddress}
        </p>

        {/* Dates */}
        <div className='mt-auto text-sm text-gray-700 md:text-base lg:text-lg'>
          <DateRangeFormatter dateStrings={dates} />
        </div>
      </div>
    </div>
  );
}
