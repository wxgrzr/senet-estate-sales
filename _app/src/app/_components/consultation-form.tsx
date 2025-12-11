'use client';
import { Button } from '@/app/_components/button';
import PhoneInput from 'react-phone-number-input/input';
import { ChangeEvent, useState, useEffect } from 'react';
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

function assertEmailJsConfig(): {
  serviceId: string;
  templateId: string;
  userId: string;
} {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !userId) {
    throw new Error(
      'EmailJS configuration is missing. Please contact support if this error persists.',
    );
  }

  return { serviceId, templateId, userId };
}

const ConsultationForm = () => {
  const [checked, setChecked] = useState(false);
  const [userInput, setUserInput] = useState<ConsultationFormState>(
    userInputInitialState,
  );
  const [userPhoneInput, setUserPhoneInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    // Validate configuration on mount
    try {
      assertEmailJsConfig();
    } catch (error) {
      setConfigError(
        error instanceof Error ? error.message : 'Configuration error',
      );
    }
  }, []);

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

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { serviceId, templateId, userId } = assertEmailJsConfig();

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
        setUserInput(userInputInitialState);
        setUserPhoneInput('');
        setChecked(false);
      } else {
        throw new Error(`Unexpected response status: ${res.status}`);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred';
      toast.error('Failed to send message. Please try again later.');
      // Log error for debugging (in development only)
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', errorMessage, err);
      }
    } finally {
      setIsSubmitting(false);
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
      {configError && (
        <div className='rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800'>
          {configError}
        </div>
      )}

      <Button
        type='submit'
        colors='primary'
        subvariant='solid'
        className='max-sm:w-full'
        disabled={isSubmitting || !!configError}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <ToastContainer position='bottom-right' />
    </form>
  );
};
export default ConsultationForm;
