import React from 'react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'Tax Accounting',
      description:
        'Comprehensive tax preparation and planning services for individuals and small businesses. Expert guidance to maximize deductions and ensure compliance.',
      icon: '📊',
      features: [
        'Tax Preparation',
        'Tax Planning',
        'IRS Compliance',
        'Deduction Optimization',
      ],
    },
    {
      title: 'Bookkeeping',
      description:
        'Professional bookkeeping services to maintain accurate financial records. From basic record keeping to complex financial reporting.',
      icon: '📚',
      features: [
        'Financial Records',
        'Monthly Reports',
        'Bank Reconciliation',
        'Financial Analysis',
      ],
    },
    {
      title: 'Client Management',
      description:
        'Streamlined client relationship management with personalized service and ongoing support for all your accounting needs.',
      icon: '🤝',
      features: [
        'Client Onboarding',
        'Ongoing Support',
        'Regular Updates',
        'Custom Solutions',
      ],
    },
  ];

  return (
    <section id='services' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            What I Can Do for You
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Professional accounting services tailored to meet your business
            needs. From tax preparation to comprehensive bookkeeping solutions.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300'
            >
              <div className='text-6xl mb-6 text-center'>{service.icon}</div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>
                {service.title}
              </h3>
              <p className='text-gray-600 mb-6 text-center leading-relaxed'>
                {service.description}
              </p>

              <ul className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className='flex items-center text-gray-700'
                  >
                    <span className='text-orange-500 mr-3'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className='mt-6 text-center'>
                <Link
                  href={`/services#${service.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                  className='bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block'
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
