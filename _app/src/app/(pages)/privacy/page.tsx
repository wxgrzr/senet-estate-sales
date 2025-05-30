import { getContactInfo } from '@/app/_utils/getContactInfo';

export default async function PrivacyPolicy() {
  const { emailAddress } = await getContactInfo();

  return (
    <div className='mx-auto max-w-3xl px-4 py-12 text-gray-800'>
      <h1 className='mb-6 text-3xl font-bold'>Privacy Policy</h1>

      <p className='mb-4'>
        <strong>Effective Date:</strong> May 18, 2025
      </p>

      <p className='mb-4'>
        At <strong>Senet Estate Sales</strong>, we value your privacy and are
        committed to protecting the personal information you share with us. This
        Privacy Policy outlines how we collect, use, and safeguard information
        submitted through our website.
      </p>

      <h2 className='mt-8 mb-4 text-2xl font-semibold'>
        Information We Collect
      </h2>
      <p className='mb-4'>
        When you fill out our consultation request form, we may collect the
        following information:
      </p>
      <ul className='mb-4 list-inside list-disc'>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
      </ul>

      <p className='mb-4'>
        We do not collect additional personal data, and we do not use cookies or
        tracking technologies on this site.
      </p>

      <h2 className='mt-8 mb-4 text-2xl font-semibold'>
        How We Use Your Information
      </h2>
      <p className='mb-4'>
        The information you provide is used solely for the purpose of:
      </p>
      <ul className='mb-4 list-inside list-disc'>
        <li>Responding to your consultation request</li>
        <li>Communicating with you about your inquiry</li>
        <li>Providing estate sale services as requested</li>
      </ul>

      <p className='mb-4'>
        We do not sell, rent, or share your personal information with third
        parties for marketing purposes.
      </p>

      <h2 className='mt-8 mb-4 text-2xl font-semibold'>Data Retention</h2>
      <p className='mb-4'>
        Your information is retained only as long as necessary to fulfill your
        request or comply with legal obligations. You may request removal of
        your information at any time.
      </p>

      <h2 className='mt-8 mb-4 text-2xl font-semibold'>Security</h2>
      <p className='mb-4'>
        We take reasonable measures to protect your information, but no method
        of transmission over the internet is completely secure.
      </p>

      <h2 className='mt-8 mb-4 text-2xl font-semibold'>Your Rights</h2>
      <p className='mb-4'>You have the right to:</p>
      <ul className='mb-4 list-inside list-disc'>
        <li>Access the personal data we have about you</li>
        <li>Request corrections or deletion of your data</li>
        <li>Withdraw consent for use of your information</li>
      </ul>
      <p className='mb-4'>
        To make a request, please contact us at: <strong>{emailAddress}</strong>
      </p>

      <h2 className='mt-8 mb-4 text-2xl font-semibold'>
        Changes to This Policy
      </h2>
      <p className='mb-4'>
        We may update this Privacy Policy from time to time. Any updates will be
        posted on this page with an updated effective date.
      </p>

      <h2 className='mt-8 mb-4 text-2xl font-semibold'>Contact</h2>
      <p className='mb-4'>
        If you have questions about this policy, please reach out to us at:{' '}
        <strong>{emailAddress}</strong>
      </p>
    </div>
  );
}
