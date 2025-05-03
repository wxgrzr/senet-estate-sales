import { Button } from '@/app/_components/button';

const ConsultationForm = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-md px-4'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight'>
          Schedule a Consultation
        </h2>
        <p className='mb-8 text-center font-light sm:text-xl lg:mb-16'>
          Downsizing or managing a loved one’s estate? We’re here to guide you
          with care and clarity. Schedule a consultation and let’s start the
          conversation.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='focus:outline-ship-cove-600 block w-full rounded-lg bg-white p-2.5 text-sm shadow-sm focus:outline-2'
              placeholder='name@email.com'
              required
            />
          </div>
          <div>
            <label htmlFor='subject' className='mb-2 block text-sm font-medium'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='focus:outline-ship-cove-600 block w-full rounded-lg bg-white p-2.5 text-sm shadow-sm focus:outline-2'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='mb-2 block text-sm font-medium'>
              Your message
            </label>
            <textarea
              id='message'
              rows={6}
              className='focus:outline-ship-cove-600 block w-full rounded-lg bg-white p-2.5 text-sm shadow-sm focus:outline-2'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <Button type='submit' colors='secondary' subvariant='solid'>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};
export default ConsultationForm;
