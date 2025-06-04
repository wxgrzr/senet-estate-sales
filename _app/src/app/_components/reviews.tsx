import { client } from '@/sanity/lib/client';
import { testimonialQuery } from '@/sanity/lib/queries';
import ReviewCards from './review-cards';

async function getReviews() {
  return client.fetch(testimonialQuery);
}

export const Reviews = async () => {
  const data = await getReviews();

  return (
    <div>
      <div className='mx-auto max-w-4xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
          What People Are Saying
        </h2>
        <p className='mt-2 text-lg text-pretty text-gray-600'>
          Real stories from clients we&apos;ve had the honor to work with.
        </p>
      </div>

      <ReviewCards
        items={(data?.items ?? []).map((item) => ({
          ...item,
          name: item.name ?? '',
        }))}
      />
    </div>
  );
};
