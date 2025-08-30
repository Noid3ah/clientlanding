'use client';

import React, { useState } from 'react';
import ServiceRequestModal from './ServiceRequestModal';
import Link from 'next/link';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id='home' className='min-h-screen bg-gray-50 flex items-center'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8 col-span-1'>
            <div className='space-y-4'>
              <h1 className='  lg:text-6xl font-bold text-gray-900 leading-tight'>
                <span className='block text-6xl'>HI, I&apos;M ROMAINE</span>
                <span className='block text-6xl'>A PROFESSIONAL</span>
                <span className='flex items-center gap-3'>
                  <span className='text-orange-500 text-5xl'>✦</span>
                  <span className='text-6xl font-black'>
                    {/* make orange gradient */}
                    <span className='bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>
                      ACCOUNTING ASSOCIATE
                    </span>
                  </span>
                </span>
                <span className='block text-4xl'>BASED IN JAMAICA</span>
              </h1>
            </div>

            <div className='flex items-center gap-3 text-sm uppercase tracking-wider text-gray-700'>
              <span>TAX ACCOUNTING</span>
              <span className='text-orange-500'>✦</span>
              <span>BOOKKEEPING</span>
              <span className='text-orange-500'>✦</span>
              <span>CLIENT MANAGEMENT</span>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                onClick={openModal}
                className='bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors'
              >
                Request Services
              </button>
              <Link
                href='/services'
                className='border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors inline-block text-center hover:border-orange-500'
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className='flex justify-center lg:justify-end'>
            <div className='relative'>
              <div className='w-[450px] h-[450px] bg-gray-100 rounded-full p-4 shadow-xl overflow-hidden'>
                <div className='relative w-full h-full'>
                  {/* Profile image positioned to overflow at top */}
                  <img
                    src='/landingIMG.png'
                    alt='Profile Photo'
                    className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-auto object-cover -translate-y-5'
                    style={{
                      bottom: '-20%',
                    }}
                  />
                </div>
              </div>
              {/* Abstract geometric elements */}
              <div className='absolute -top-4 -right-4 w-20 h-20'>
                <div className='w-full h-1 bg-orange-500 absolute top-0 left-0 transform rotate-45'></div>
                <div className='w-full h-1 bg-orange-500 absolute bottom-0 right-0 transform -rotate-45'></div>
              </div>
              <div className='absolute -bottom-4 -left-4 w-16 h-16'>
                <div className='w-full h-1 bg-orange-500 absolute top-1/2 left-0 transform -translate-y-1/2'></div>
                <div className='w-1 h-full bg-orange-500 absolute top-0 left-1/2 transform -translate-x-1/2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Request Modal */}
      <ServiceRequestModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
