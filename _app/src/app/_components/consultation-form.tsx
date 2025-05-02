const ConsultationForm = () => {
  return (
    <section className=''>
      <div className='mx-auto max-w-screen-md px-4'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900'>
          Schedule a Consultation
        </h2>
        <p className='mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16'>
          Downsizing or managing a loved one’s estate? We’re here to guide you
          with care and clarity. Schedule a consultation and let’s start the
          conversation.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-gray-900'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:outline-2 focus:outline-blue-600'
              placeholder='name@email.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='mb-2 block text-sm font-medium text-gray-900'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:outline-2 focus:outline-blue-600'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='mb-2 block text-sm font-medium text-gray-900'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows={6}
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:outline-2 focus:outline-blue-600'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <button type='submit' className='btn transition'>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ConsultationForm;
