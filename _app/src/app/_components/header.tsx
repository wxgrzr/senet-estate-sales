'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MenuIcon, CloseIcon } from '@sanity/icons';
import Image, { StaticImageData } from 'next/image';
import logoLight from '../../../public/Vector-light-mode.png';
import LinkButton from '@/app/_components/link-button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Delay rendering the logo until the theme is available

  return (
    <header
      className={`sticky top-0 z-50 flex w-full flex-wrap py-3 text-sm transition-shadow sm:flex-nowrap sm:justify-start ${scrolled ? 'shadow-md' : 'shadow-none'} bg-background`}
    >
      <nav
        className='mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className='focus:outline-hidden flex-none text-xl font-semibold focus:opacity-80'
            aria-label='Brand'
          >
            <div className='inline-flex items-center gap-x-2 py-2 text-xl font-bold'>
              <Image
                className='w-35 h-auto'
                src={logoLight}
                alt='Logo'
                width={250}
                height={100}
              />
            </div>
          </Link>
          <div className='sm:hidden'>
            <button
              type='button'
              className='shadow-2xs focus:outline-hidden relative flex size-9 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:bg-gray-50 disabled:pointer-events-none disabled:opacity-50'
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls='navbar-collapse'
              aria-label='Toggle navigation'
            >
              {isOpen ? (
                <CloseIcon className='size-4' />
              ) : (
                <MenuIcon className='size-4' />
              )}
              <span className='sr-only'>Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse'
          className={`${isOpen ? 'block' : 'hidden'} grow basis-full overflow-hidden transition-all duration-300 sm:block`}
        >
          <div className='mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5'>
            <LinkButton
              // className='focus:outline-hidden font-medium text-blue-500'
              variant='text'
              href='/'
            >
              Home
            </LinkButton>
            <LinkButton variant='text' href='/contact'>
              Consultation
            </LinkButton>
            <LinkButton variant='text' href='/about'>
              About Us
            </LinkButton>
            <LinkButton variant='text' href='#listings'>
              Estate Sales
            </LinkButton>
            <LinkButton variant='text' href='/FAQ'>
              FAQ
            </LinkButton>
          </div>
        </div>
      </nav>
    </header>
  );
}
