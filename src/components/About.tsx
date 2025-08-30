import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Content */}
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold text-gray-900'>
              About Me & What I Do
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              I&apos;m a dedicated freelance accounting professional with over 8
              years of experience helping individuals and small businesses
              navigate their financial responsibilities. My approach combines
              technical expertise with personalized service to ensure each
              client receives the attention and solutions they deserve.
            </p>

            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <div className='text-orange-500 text-xl mt-1'>✦</div>
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    Professional Background
                  </h3>
                  <p className='text-gray-600'>
                    Certified accountant with specialized training in tax law,
                    bookkeeping practices, and financial management systems.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='text-orange-500 text-xl mt-1'>✦</div>
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    Business Model
                  </h3>
                  <p className='text-gray-600'>
                    Operating as an independent contractor, I provide remote
                    accounting services to clients nationwide, specializing in
                    tax preparation, bookkeeping, and client relationship
                    management.
                  </p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='text-orange-500 text-xl mt-1'>✦</div>
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    Service Delivery
                  </h3>
                  <p className='text-gray-600'>
                    All services are delivered remotely through secure digital
                    platforms, ensuring convenience and accessibility for
                    clients while maintaining professional standards and
                    confidentiality.
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-4'>
              <Link
                href='/services'
                className='bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block'
              >
                Learn More About My Services
              </Link>
            </div>
          </div>

          {/* Right Column - Stats/Info Cards */}
          <div className='space-y-6'>
            <div className='grid grid-cols-2 gap-6'>
              <div className='bg-orange-50 rounded-xl p-6 text-center'>
                <div className='text-3xl font-bold text-orange-600 mb-2'>
                  8+
                </div>
                <div className='text-gray-700 font-medium'>
                  Years Experience
                </div>
              </div>

              <div className='bg-gray-50 rounded-xl p-6 text-center'>
                <div className='text-3xl font-bold text-gray-700 mb-2'>50+</div>
                <div className='text-gray-700 font-medium'>Happy Clients</div>
              </div>

              <div className='bg-gray-50 rounded-xl p-6 text-center'>
                <div className='text-3xl font-bold text-gray-700 mb-2'>
                  100%
                </div>
                <div className='text-gray-700 font-medium'>Remote Service</div>
              </div>

              <div className='bg-orange-50 rounded-xl p-6 text-center'>
                <div className='text-3xl font-bold text-orange-600 mb-2'>
                  24/7
                </div>
                <div className='text-gray-700 font-medium'>
                  Support Available
                </div>
              </div>
            </div>

            <div className='bg-gray-50 rounded-xl p-6'>
              <h3 className='font-semibold text-gray-900 mb-3'>
                Proven & Trusted
              </h3>
              <p className='text-sm text-gray-600'>
                Built on reliability and consistency, this journey is about
                creating work that people can count on. Trust comes from keeping
                things simple and clear, and dependable every step of the way
                and that is what I offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
