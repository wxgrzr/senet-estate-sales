import LinkButton from '@/app/_components/link-button';
import Section from '@/app/_components/section';

const ConsultationForm = () => {
  return (
    <section className='bg-white dark:bg-blue-800'>
      <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Schedule a Consultation
        </h2>
        <p className='mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400'>
          Downsizing or managing a loved one’s estate? We’re here to guide you
          with care and clarity. Schedule a consultation and let’s start the
          conversation.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='dark:shadow-sm-light focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='name@email.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='dark:shadow-sm-light focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows={6}
              className='focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <button type='submit' className='btn'>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ConsultationForm;
