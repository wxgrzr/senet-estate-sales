// pages/faq.tsx
import Head from 'next/head';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Container from '@/app/_components/container';

const faqQuery = groq`*[_type == "faq"] | order(order asc) {
  question,
  answer
}`;

async function getFAQs() {
  return client.fetch(faqQuery);
}

export default async function FAQ() {
  const faqs = await getFAQs();

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
              {faqs.map((faq: { question: string; answer: string }) => (
                <FAQItem key={faq.question} question={faq.question}>
                  {faq.answer}
                </FAQItem>
              ))}

              <div className='mt-10 text-center'>
                <p className='text-lg font-medium'>Still have questions?</p>
                <p>
                  Contact us at{' '}
                  <a
                    href='mailto:paul@senetestatesales.com'
                    className='text-blue-600 underline'
                  >
                    paul@senetestatesales.com
                  </a>{' '}
                  or call{' '}
                  <a href='tel:8105888175' className='text-blue-600 underline'>
                    (810) 588-8175
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
