export const Reviews = () => {
  const testimonials = [
    {
      name: 'Amanda T.',
      quote:
        'The team treated my mother’s belongings with so much care. It wasn’t just a sale—it felt like a celebration of her life.',
      stars: 5,
    },
    {
      name: 'Jordan M.',
      quote:
        'I was overwhelmed at first, but Senet made it feel easy. Everything was handled with grace.',
      stars: 5,
    },
    {
      name: 'Chris L.',
      quote:
        "Professional, respectful, and kind. I couldn't have asked for a better partner during a hard time.",
      stars: 5,
    },
  ];
  return (
    <div>
      <div className='mx-auto max-w-4xl text-center'>
        <h2 className='text-3xl font-semibold tracking-tight text-gray-900'>
          What People Are Saying
        </h2>
        <p className='mt-2 text-lg text-gray-600'>
          Real stories from clients we&apos;ve had the honor to work with.
        </p>
      </div>

      <div className='mt-12 grid gap-8 md:grid-cols-3'>
        {testimonials.map(({ name, quote, stars }, i) => (
          <div
            key={i}
            className='rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm'
          >
            <div className='mb-4 flex items-center'>
              {Array.from({ length: stars }).map((_, i) => (
                <svg
                  key={i}
                  className='h-5 w-5 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.966a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.288 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.147 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.951-.69l1.288-3.966z' />
                </svg>
              ))}
            </div>
            <p className='text-gray-800 italic'>&quot;{quote}&quot;</p>
            <p className='mt-4 font-medium text-gray-700'>— {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// export default function ClientFeedback() {

//   return (
//     <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
//     </section>
//   );
// }
