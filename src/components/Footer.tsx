import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <span className='text-orange-500 text-2xl font-bold'>✦</span>
              <span className='text-xl font-bold'>romainepeddie.</span>
            </div>
            <p className='text-gray-300 mb-6 max-w-md'>
              Professional accounting services for individuals and small
              businesses. Specializing in tax preparation, bookkeeping, and
              client management with a focus on personalized solutions.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-orange-500 transition-colors'
              >
                <span className='sr-only'>LinkedIn</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.21.791-1.21 2.044v3.572h-3.403V9h3.403v1.465h.004c.317-.6 1.092-1.235 2.247-1.235 2.4 0 2.845 1.58 2.845 3.637v5.785z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-orange-500 transition-colors'
              >
                <span className='sr-only'>Twitter</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2 text-gray-300'>
              <li>
                <a href='#' className='hover:text-orange-500 transition-colors'>
                  Tax Accounting
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500 transition-colors'>
                  Bookkeeping
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500 transition-colors'>
                  Client Management
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-orange-500 transition-colors'>
                  Financial Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <div className='space-y-2 text-gray-300'>
              <p>193 1/2 Constant Spring Road</p>
              <p>Kingston 8, Jamaica</p>
              <p className='mt-4'>
                <a
                  href='mailto:peddiework1@gmail.com'
                  className='hover:text-orange-500 transition-colors'
                >
                  peddiework1@gmail.com
                </a>
              </p>
              <p>
                <a
                  href='tel:+1234567890'
                  className='hover:text-orange-500 transition-colors'
                >
                  (876) 867-0310
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © 2024 Romaine Peddie Accounting. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a
                href='#'
                className='text-gray-400 hover:text-orange-500 transition-colors text-sm'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-orange-500 transition-colors text-sm'
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
