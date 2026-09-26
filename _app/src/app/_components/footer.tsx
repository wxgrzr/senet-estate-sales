import Container from '@/app/_components/container';
import { LinkButton } from '@/app/_components/link-button';
import { Routes } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import logoLight from '~/public/senet-logo@1x.png';
import { getContactInfo } from '@/app/_utils/getContactInfo';
import { FaFacebook, FaYelp } from 'react-icons/fa';
import { NavLinks } from '@/app/_components/shared/nav-links';

const Footer = async () => {
  const {
    phoneNumberSanitized,
    phoneNumber,
    addressLine1,
    addressLine2,
    emailAddress,
    facebookUrl,
    yelpUrl,
  } = await getContactInfo();

  return (
    <footer className='mt-auto py-12'>
      <Container>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <div className='mb-4'>
              <Link href={Routes.Home}>
                <Image
                  src={logoLight}
                  alt='Senet Estate Sales home'
                  width={100}
                />
              </Link>
            </div>
            <p className='text-sm text-gray-600'>
              Your trusted partner for estate sales and vintage finds in&nbsp;
              <b>Southeastern Michigan.</b>
            </p>
            <div className='my-4 flex gap-4'>
              <Link
                href={facebookUrl as string}
                aria-label='Facebook'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook fontSize={'1.75rem'} className='text-richblack' />
              </Link>
              <Link
                href={yelpUrl as string}
                aria-label='Yelp'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaYelp fontSize={'1.75rem'} className='text-richblack' />
              </Link>
            </div>
          </div>
          <div>
            <h2 className='mb-4 text-lg font-semibold'>Quick Links</h2>
            <ul className='space-y-2 text-sm text-gray-600'>
              <NavLinks />
              <li>
                <LinkButton variant='text' href={Routes.ScheduleConsultation}>
                  Schedule a Consultation
                </LinkButton>
              </li>
              <li>
                <LinkButton variant='text' href={Routes.Privacy}>
                  Privacy Policy
                </LinkButton>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-4 text-lg font-semibold'>Contact Info</h2>
            <p className='text-sm text-gray-600'>
              {addressLine1}
              <br />
              {addressLine2}
              <br />
              <br />
              <a
                href={`tel:${phoneNumberSanitized}`}
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
