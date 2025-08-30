import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Navigation Back Button */}
      <section className='bg-white border-b'>
        <div className='container mx-auto px-4'>
          <div className='py-4'>
            <Link
              href='/'
              className='inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors'
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className='bg-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
              Comprehensive Accounting Services
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed'>
              Professional accounting solutions tailored to your business needs.
              From tax preparation to comprehensive bookkeeping, I provide
              reliable financial services that help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <section className='bg-white border-b'>
        <div className='container mx-auto px-4'>
          <nav className='flex flex-wrap justify-center gap-4 py-6'>
            <a
              href='#tax-accounting'
              className='px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors'
            >
              Tax Accounting
            </a>
            <a
              href='#bookkeeping'
              className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors'
            >
              Bookkeeping
            </a>
            <a
              href='#client-management'
              className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors'
            >
              Client Management
            </a>
            <a
              href='#consultation'
              className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors'
            >
              Consultation
            </a>
          </nav>
        </div>
      </section>

      {/* Tax Accounting Section */}
      <section id='tax-accounting' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Tax Accounting Services
              </h2>
              <p className='text-xl text-gray-600'>
                Comprehensive tax preparation and planning for individuals and
                businesses
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  What I Offer
                </h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Individual tax return preparation
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Business tax returns (S-Corp, LLC, Partnership)
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Quarterly estimated tax calculations
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Tax planning and strategy
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    IRS correspondence and audit support
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Why Choose My Tax Services
                </h3>
                <div className='space-y-4'>
                  <div className='bg-orange-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-orange-800 mb-2'>
                      Expert Knowledge
                    </h4>
                    <p className='text-orange-700 text-sm'>
                      Stay current with the latest tax laws and regulations
                    </p>
                  </div>
                  <div className='bg-orange-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-orange-800 mb-2'>
                      Maximize Deductions
                    </h4>
                    <p className='text-orange-700 text-sm'>
                      Identify all eligible deductions to minimize your tax
                      liability
                    </p>
                  </div>
                  <div className='bg-orange-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-orange-800 mb-2'>
                      Year-Round Support
                    </h4>
                    <p className='text-orange-700 text-sm'>
                      Available for questions and planning throughout the year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping Section */}
      <section id='bookkeeping' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Bookkeeping Services
              </h2>
              <p className='text-xl text-gray-600'>
                Organized, accurate financial records to keep your business
                running smoothly
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Core Bookkeeping Tasks
                </h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Accounts payable and receivable management
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Bank and credit card reconciliation
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Monthly financial statements
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Payroll processing and reporting
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Chart of accounts setup and maintenance
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Benefits for Your Business
                </h3>
                <div className='space-y-4'>
                  <div className='bg-white p-4 rounded-lg shadow-sm'>
                    <h4 className='font-semibold text-gray-800 mb-2'>
                      Financial Clarity
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Clear view of your business performance and cash flow
                    </p>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-sm'>
                    <h4 className='font-semibold text-gray-800 mb-2'>
                      Tax Ready
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Organized records make tax time stress-free
                    </p>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-sm'>
                    <h4 className='font-semibold text-gray-800 mb-2'>
                      Business Growth
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Data-driven insights to make informed business decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Management Section */}
      <section id='client-management' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                Client Management
              </h2>
              <p className='text-xl text-gray-600'>
                Streamlined processes to manage client relationships and
                projects effectively
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Management Solutions
                </h3>
                <ul className='space-y-3 text-gray-600'>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Client portal setup and management
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Document management and sharing
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Project tracking and deadlines
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Communication and follow-up systems
                  </li>
                  <li className='flex items-start'>
                    <span className='text-orange-500 mr-3 mt-1'>✓</span>
                    Performance reporting and analytics
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Technology Integration
                </h3>
                <div className='space-y-4'>
                  <div className='bg-orange-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-orange-800 mb-2'>
                      Cloud-Based
                    </h4>
                    <p className='text-orange-700 text-sm'>
                      Access your data securely from anywhere, anytime
                    </p>
                  </div>
                  <div className='bg-orange-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-orange-800 mb-2'>
                      Automated Workflows
                    </h4>
                    <p className='text-orange-700 text-sm'>
                      Reduce manual tasks and improve efficiency
                    </p>
                  </div>
                  <div className='bg-orange-50 p-4 rounded-lg'>
                    <h4 className='font-semibold text-orange-800 mb-2'>
                      Real-Time Updates
                    </h4>
                    <p className='text-orange-700 text-sm'>
                      Stay informed with instant notifications and updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id='consultation' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Need Expert Advice?
            </h2>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Whether you&apos;re starting a new business, facing financial
              challenges, or need strategic planning, I&apos;m here to help with
              personalized consultation.
            </p>

            <div className='bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Consultation Services
              </h3>
              <div className='grid md:grid-cols-2 gap-6 text-left'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    Business Setup
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Entity selection, accounting system setup, and compliance
                    guidance
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    Financial Review
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Analyze your current financial situation and identify
                    opportunities
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    Growth Planning
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Strategic financial planning for business expansion and
                    scaling
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    Problem Solving
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Address specific financial challenges and find solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-orange-500'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold text-white mb-6'>
            Ready to Get Started?
          </h2>
          <p className='text-xl text-orange-100 mb-8 max-w-2xl mx-auto'>
            Let&apos;s discuss how I can help your business thrive financially.
            Contact me today for a consultation or to request specific services.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Request Service
            </button>
            <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors'>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
