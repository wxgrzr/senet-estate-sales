// import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import CoverImage from './cover-image';
import { DateRangeFormatter } from './date-formatter';
import { Slug } from '~/sanity.types';

type Props = {
  title: string;
  coverImage: string;
  dates: string[];
  fullAddress: string;
  slug: Slug;
};

export function PostPreview({
  title,
  coverImage,
  dates,
  fullAddress,
  slug,
}: Props) {
  return (
    <div className='flex h-full flex-col overflow-hidden rounded-md bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
      {/* Cover Image */}
      <div className='relative h-auto'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      {/* Content */}
      <div className='flex h-full flex-col justify-evenly p-4'>
        {/* Title */}
        <h3 className='mb-2 text-xl leading-tight font-semibold tracking-tight md:text-lg'>
          <Link
            href={`/upcoming-estate-sales/${slug}`}
            className='transition-colors duration-200 hover:opacity-50'
          >
            {title}
          </Link>
        </h3>

        {/* Address */}
        <p className='text-md text-richblack/55 mb-3 leading-tight font-normal md:text-base'>
          {fullAddress}
        </p>

        {/* Dates */}
        <div className='text-richblack/80 mt-auto text-base font-medium md:text-base'>
          <DateRangeFormatter dateStrings={dates} />
        </div>
      </div>
    </div>
  );
}
