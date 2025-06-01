'use client';
import { Button } from '@/app/_components/button';
import PhoneInput from 'react-phone-number-input/input';
import { ChangeEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

interface ConsultationFormState {
  name: string;
  email: string;
  message: string;
}

const userInputInitialState: ConsultationFormState = {
  name: '',
  email: '',
  message: '',
};

const ConsultationForm = () => {
  const [checked, setChecked] = useState(false);
  const [userInput, setUserInput] = useState<ConsultationFormState>(
    userInputInitialState,
  );
  const [userPhoneInput, setUserPhoneInput] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handlePhoneChange = (value?: string) => {
    setUserPhoneInput(value || '');
  };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    try {
      const emailParams = {
        name: userInput.name,
        phone: userPhoneInput,
        email: userInput.email,
        message: userInput.message,
      };
      const res = await emailjs.send(serviceId, templateId, emailParams, {
        publicKey: userId,
      });
      if (res.status === 200) {
        toast.success(
          'Message sent successfully! We will reach out to you shortly.',
        );
        setUserInput({
          name: '',
          email: '',
          message: '',
        });
        setUserPhoneInput('');
      }
    } catch (err) {
      toast.error('Failed to send message. Please try again later.');
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label
          htmlFor='name'
          className="mb-1 block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          Full Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='focus:outline-ship-cove-600 block w-full rounded-lg border border-stone-300 bg-white p-2.5 text-sm shadow-sm focus:outline-2'
          placeholder='Jane Doe'
          required
          value={userInput.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor='phone'
          className="mb-1 block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          Phone
        </label>
        <PhoneInput
          international={false}
          country='US'
          value={userPhoneInput}
          className='focus:outline-ship-cove-600 block w-full rounded-lg border border-stone-300 bg-white p-2.5 text-sm shadow-sm focus:outline-2'
          onChange={handlePhoneChange}
          name='phone'
          id='phone'
          placeholder='Phone'
        />
      </div>
      <div>
        <label
          htmlFor='email'
          className="mb-1 block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='focus:outline-ship-cove-600 block w-full rounded-lg border border-stone-300 bg-white p-2.5 text-sm shadow-sm focus:outline-2'
          placeholder='name@email.com'
          value={userInput.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label
          htmlFor='message'
          className="mb-1 block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']"
        >
          How can we help you
        </label>
        <textarea
          name='message'
          id='message'
          rows={4}
          className='focus:outline-ship-cove-600 block w-full rounded-lg border border-neutral-300 bg-white p-2.5 text-sm shadow-sm focus:outline-2'
          placeholder="Hi, I'd like to schedule a free consultation..."
          value={userInput.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className='relative flex items-start'>
        <label
          htmlFor='privacy-policy'
          className='flex items-start gap-2 pr-4 text-[0.7rem] leading-[.8rem] tracking-tight'
        >
          <input
            type='checkbox'
            checked={checked}
            onChange={() => setChecked(!checked)}
            required
            id='privacy-policy'
            name='privacy-policy'
            className='checked:bg-ship-cove-600 mt-[0.15em]'
          />
          <div className='inline-flex pr-10 max-sm:pr-0'>
            <div className='text-pretty'>
              I consent to the collection of personal data I have written in
              this form and I consent to the collection and use of this
              information as described in the{' '}
              <a
                href='/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className='text-ship-cove-600 underline'
              >
                Privacy Policy
              </a>
              .{' '}
            </div>
          </div>
        </label>
      </div>
      <Button
        type='submit'
        colors='primary'
        subvariant='solid'
        className='max-sm:w-full'
      >
        Send Message
      </Button>

      <ToastContainer position='bottom-right' />
    </form>
  );
};
export default ConsultationForm;
