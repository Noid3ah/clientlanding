'use client';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <span className='text-orange-500 text-2xl font-bold'>✦</span>
            <span className='text-xl font-bold text-gray-900'>johnsmith.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#home'
              className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
            >
              Home
            </a>
            <a
              href='#services'
              className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
            >
              Services
            </a>
            <a
              href='#about'
              className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
            >
              About
            </a>
            <a
              href='#contact'
              className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <button className='border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors'>
              Let&apos;s talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-200'>
            <nav className='flex flex-col space-y-4'>
              <a
                href='#home'
                className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
              >
                Home
              </a>
              <a
                href='#services'
                className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
              >
                Services
              </a>
              <a
                href='#about'
                className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
              >
                About
              </a>
              <a
                href='#contact'
                className='text-gray-700 hover:text-orange-500 transition-colors font-medium'
              >
                Contact
              </a>
              <button className='border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors w-fit'>
                Let&apos;s talk
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
