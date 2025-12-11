import Head from 'next/head';
import Container from '@/app/_components/container';
import { faqQuery } from '@/sanity/lib/queries';
import { getContactInfo } from '@/app/_utils/getContactInfo';
import { client } from '@/sanity/lib/client';
import clsx from 'clsx';

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
            <h1 className='mb-6 text-left text-5xl font-bold tracking-tight'>
              FAQS
            </h1>

            <div className=' pt-6'>
              {faqsDoc?.items?.map(
                (faq: { question?: string; answer: string }, index: number) => (
                  <FAQItem key={faq.question} question={faq.question} className={clsx('group border-b border-gray-300 py-4', index === (faqsDoc?.items?.length || 0) - 1 && 'border-b-0 last:border-b-0')}>
                    {faq.answer}
                  </FAQItem>
                ),
              )}

              <div className='mt-12  border-gray-300 pt-8'>
                <p className='text-lg font-medium'>Still have questions?</p>
                <p className='mt-2'>
                  Contact us at{' '}
                  <a
                    href={`mailto:${emailAddress}`}
                    className='text-ship-cove-300 underline'
                  >
                    {emailAddress}
                  </a>{' '}
                  or call{' '}
                  <a
                    href={`tel:${phoneNumberSanitized}`}
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
  className,
}: {
  question?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <details className={className}>
      <summary className='flex cursor-pointer items-start justify-between text-left text-lg font-semibold text-gray-900 hover:text-gray-700 list-none [&::-webkit-details-marker]:hidden'>
        <span className='flex-1 pr-4'>{question}</span>
        <span className='text-2xl font-light text-gray-600 transition-transform duration-200 group-open:rotate-45 flex-shrink-0'>
          +
        </span>
      </summary>
      <div className='mt-4 leading-relaxed text-gray-700'>{children}</div>
    </details>
  );
}
