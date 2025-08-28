import React from 'react';

const Consultation = () => {
  return (
    <section id='contact' className='py-20 bg-teal-800'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Left Column - Business Information */}
          <div className='text-white space-y-8'>
            <h2 className='text-4xl font-bold mb-8'>
              Get a personal consultation
            </h2>

            <div className='space-y-6'>
              {/* Office Information */}
              <div className='flex items-start space-x-4'>
                <div className='text-green-400 text-2xl'>📍</div>
                <div>
                  <h3 className='font-bold text-lg mb-2'>Office</h3>
                  <p className='text-gray-200 leading-relaxed'>
                    123 Business Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className='flex items-start space-x-4'>
                <div className='text-green-400 text-2xl'>✉️</div>
                <div>
                  <h3 className='font-bold text-lg mb-2'>Contact</h3>
                  <p className='text-gray-200 leading-relaxed'>
                    info@johnsmithaccounting.com
                    <br />
                    support@johnsmithaccounting.com
                  </p>
                </div>
              </div>

              {/* Open Hours */}
              <div className='flex items-start space-x-4'>
                <div className='text-green-400 text-2xl'>🕒</div>
                <div>
                  <h3 className='font-bold text-lg mb-2'>Open Hours</h3>
                  <p className='text-gray-200 leading-relaxed'>
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 2pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-6'>
              <p className='text-gray-300 leading-relaxed'>
                Ready to get started with professional accounting services?
                Schedule a consultation to discuss your specific needs and how I
                can help streamline your financial operations.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='bg-white rounded-xl p-8 shadow-xl'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Request a Consultation
            </h3>

            <form className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Name *
                  </label>
                  <input
                    type='text'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                    placeholder='John Stuart'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Phone *
                  </label>
                  <input
                    type='tel'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                    placeholder='(123) 456-7890'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Email Address *
                </label>
                <input
                  type='email'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                  placeholder='name@company.com'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Service Interested In *
                </label>
                <select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'>
                  <option>Tax Accounting</option>
                  <option>Bookkeeping</option>
                  <option>Client Management</option>
                  <option>All Services</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                  placeholder='Personal Tax Planning'
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
                  placeholder='I need help with the next problem...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-green-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors'
              >
                Request a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
