import Container from '@/app/_components/container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-auto py-12'>
      <Container>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Senet Estate Sales</h3>
            <p className='text-sm text-gray-600'>
              Your trusted partner for estate sales and vintage finds in&nbsp;
              <b>Southeastern Michigan.</b>
            </p>
          </div>
          <div>
            <h4 className='mb-4 text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/estate-sales' className='hover:underline'>
                  Current Sales
                </Link>
              </li>
              <li>
                <Link href='/consultation' className='hover:underline'>
                  Schedule a Consultation
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/faq' className='hover:underline'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-4 text-lg font-semibold'>Contact Info</h4>
            <p className='text-sm text-gray-600'>
              123 Main Street
              <br />
              Phoenix, AZ 85001
              <br />
              <br />
              <a href='tel' className='text-gray-800 hover:underline'>
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
