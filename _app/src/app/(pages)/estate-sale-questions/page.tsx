import Head from 'next/head';
import Container from '@/app/_components/container';
import { faqQuery } from '@/sanity/lib/queries';
import { getContactInfo } from '@/app/_utils/getContactInfo';
import { client } from '@/sanity/lib/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about estate sales, our process, and how Senet Estate Sales can help you in Southeast Michigan.',
  alternates: {
    canonical: 'https://senetestatesales.com/estate-sale-questions',
  },
  openGraph: {
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about estate sales, our process, and how Senet Estate Sales can help you in Southeast Michigan.',
    url: 'https://senetestatesales.com/estate-sale-questions',
    siteName: 'Senet Estate Sales',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Senet Estate Sales',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about estate sales, our process, and how Senet Estate Sales can help you in Southeast Michigan.',
    images: ['/og-image.jpg'],
  },
  other: {
    'fb:page_id': '424849244049685',
    'fb:profile_id': '61567003222290',
    'og:see_also':
      'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
  },
};

async function getFAQs() {
  return client.fetch(faqQuery);
}

export default async function FAQPage() {
  const faqsDoc = await getFAQs();
  const { phoneNumber, phoneNumberSanitized, emailAddress } =
    await getContactInfo();

  return (
    <>
      <Head>
        <title>FAQ – Senet Estate Sales</title>
      </Head>
      <Container>
        <section className='py-8 md:py-12 lg:py-16'>
          <div className='mx-auto max-w-4xl'>
            <h1 className='mb-8 text-center text-4xl font-bold'>
              Frequently Asked Questions
            </h1>

            <div className='space-y-6'>
              {faqsDoc?.items?.map(
                (faq: { question: string; answer: string }) => (
                  <FAQItem key={faq.question} question={faq.question}>
                    {faq.answer}
                  </FAQItem>
                ),
              )}

              <div className='mt-10 text-center'>
                <p className='text-lg font-medium'>Still have questions?</p>
                <p>
                  Contact us at{' '}
                  <a
                    href={`mailto:${emailAddress}`}
                    className='text-ship-cove-300 underline'
                  >
                    {emailAddress}
                  </a>{' '}
                  or call{' '}
                  <a
                    href={`tel${phoneNumberSanitized}`}
                    className='text-ship-cove-300 underline'
                  >
                    {phoneNumber}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className='rounded-md border border-gray-300 bg-white p-4 shadow-sm'>
      <summary className='cursor-pointer text-lg font-semibold text-gray-800'>
        {question}
      </summary>
      <div className='mt-2 leading-relaxed text-gray-700'>{children}</div>
    </details>
  );
}
