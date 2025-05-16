import Container from '@/app/_components/container';
import { LinkButton } from '@/app/_components/link-button';
import { PAGES } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import logoLight from '../../../public/se-logo-richblack.png';
import { sanityFetch } from '@/sanity/lib/live';
import { contactInfoQuery } from '@/sanity/lib/queries';

const Footer = async () => {
  const { data: contactInfo } = await sanityFetch({
    query: contactInfoQuery,
  });

  const phoneNumber = contactInfo?.phoneNumber || '';
  const addressLine1 = contactInfo?.address.addressLine1 || '';
  const addressLine2 = contactInfo?.address.addressLine2 || '';
  const emailAddress = contactInfo?.emailAddress || '';

  return (
    <footer className='mt-auto py-12'>
      <Container>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <div className='mb-4'>
              <Link href='/' aria-label='Brand'>
                <Image src={logoLight} alt='Logo' width={100} />
              </Link>
            </div>
            <p className='text-sm text-gray-600'>
              Your trusted partner for estate sales and vintage finds in&nbsp;
              <b>Southeastern Michigan.</b>
            </p>
          </div>
          <div>
            <h4 className='mb-4 text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              {PAGES.map(({ label, href }) => (
                <li key={label}>
                  <LinkButton variant='text' key={label} href={href}>
                    {label}
                  </LinkButton>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='mb-4 text-lg font-semibold'>Contact Info</h4>
            <p className='text-sm text-gray-600'>
              {addressLine1}
              <br />
              {addressLine2}
              <br />
              <br />
              <a
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className='text-gray-800 hover:underline'
              >
                {phoneNumber}
              </a>
              <br />
              <br />
              <a
                href={`mailto:${emailAddress}`}
                className='text-gray-800 hover:underline'
              >
                {emailAddress}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
