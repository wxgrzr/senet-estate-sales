'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MenuIcon, CloseIcon } from '@sanity/icons';
import Image from 'next/image';
import { LinkButton } from '@/app/_components/link-button';
import { Routes } from '@/app/constants';
import { NavLinks } from '@/app/_components/shared/nav-links';
import { usePathname } from 'next/navigation'; // Add this import

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full flex-wrap py-3 text-sm transition-shadow md:flex-nowrap md:justify-start ${scrolled ? 'shadow-md' : 'shadow-none'} bg-background`}
    >
      <nav
        className='mx-auto w-full max-w-[82rem] px-4 md:flex md:items-center md:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className='flex-none text-xl font-semibold focus:opacity-80 focus:outline-hidden'
            aria-label='Brand'
          >
            <div className='inline-flex h-auto items-center gap-x-2 py-2 text-xl font-bold'>
              <Image
                className='h-auto w-35'
                src='/senet-logo@2x.png'
                alt='Logo'
                width={272}
                height={90}
                priority
              />
            </div>
          </Link>
          <div className='md:hidden'>
            <button
              type='button'
              className='relative flex size-9 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50'
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls='navbar-collapse'
              aria-label='Toggle navigation menu'
            >
              {isOpen ? (
                <CloseIcon className='size-4' />
              ) : (
                <MenuIcon className='size-4' />
              )}
              <span className='sr-only'>Toggle navigation menu</span>
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse'
          className={`${isOpen ? 'block' : 'hidden'} grow basis-full overflow-hidden transition-all duration-300 md:block`}
        >
          <ul className='mt-5 mb-3 flex flex-col items-start gap-5 md:mt-0 md:mb-0 md:flex-row md:items-center md:justify-end md:ps-5'>
            <NavLinks />
            <li className='md:hidden'>
              <LinkButton variant='text' href={Routes.ScheduleConsultation}>
                Schedule a Consultation
              </LinkButton>
            </li>
            <li className='hidden md:ml-2 md:block'>
              <LinkButton
                variant='secondary'
                href={Routes.ScheduleConsultation}
              >
                Schedule a Consultation
              </LinkButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
