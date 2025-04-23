'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { MenuIcon, CloseIcon } from '@sanity/icons';
import Image, { StaticImageData } from 'next/image';
import logoDark from '../../../public/Vector.png';
import logoLight from '../../../public/Vector-light-mode.png';
import ThemeToggle from '@/app/_components/theme-toggle';
import { ThemeContext } from '@/context/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoImg, setLogoImg] = useState<StaticImageData | null>(null);
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (themeContext?.theme === 'light') {
      setLogoImg(logoLight);
    } else if (themeContext?.theme === 'dark') {
      setLogoImg(logoDark);
    }
  }, [themeContext?.theme]);

  // Delay rendering the logo until the theme is available

  return (
    <header
      className={`sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full  text-sm py-3 transition-shadow ${scrolled ? 'shadow-md' : 'shadow-none'} bg-background`}
    >
      <nav
        className='sm:flex sm:justify-between sm:items-center mx-auto px-4 w-full max-w-[85rem]'
        aria-label='Global'
      >
        <div className='flex justify-between items-center'>
          <ThemeToggle />
          <Link
            href='/'
            className='flex-none focus:opacity-80 focus:outline-hidden font-semibold text-xl'
            aria-label='Brand'
          >
            <div className='inline-flex items-center gap-x-2 py-2 font-bold text-xl'>
              {logoImg && (
                <Image
                  className='w-35 h-auto'
                  src={logoImg}
                  alt='Logo'
                  width={250}
                  height={100}
                />
              )}
            </div>
          </Link>
          <div className='sm:hidden'>
            <button
              type='button'
              className='relative flex justify-center items-center gap-x-2 bg-white hover:bg-gray-50 focus:bg-gray-50 disabled:opacity-50 shadow-2xs border border-gray-200 rounded-lg focus:outline-hidden size-9 text-gray-800 disabled:pointer-events-none'
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
          className={`${isOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}
        >
          <div className='flex sm:flex-row flex-col sm:justify-end sm:items-center gap-5 mt-5 sm:mt-0 sm:ps-5'>
            <Link
              className='focus:outline-hidden font-medium text-blue-500'
              href='/'
            >
              Home
            </Link>
            <Link
              className='focus:outline-hidden font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400'
              href='/contact'
            >
              Contact
            </Link>
            <Link
              className='focus:outline-hidden font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400'
              href='/about'
            >
              About
            </Link>
            <Link
              className='focus:outline-hidden font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400'
              href='#listings'
            >
              Listings
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
