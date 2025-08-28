import React from 'react';

const Applications = () => {
  const applications = [
    {
      name: 'MS Excel',
      description: 'Advanced spreadsheet analysis and financial modeling',
      icon: '📊',
      proficiency: 'Expert',
      useCase: 'Financial analysis, budgeting, and data management',
    },
    {
      name: 'QuickBooks',
      description: 'Comprehensive accounting software for small businesses',
      icon: '💼',
      proficiency: 'Advanced',
      useCase: 'Bookkeeping, invoicing, and financial reporting',
    },
    {
      name: 'FreshBooks',
      description: 'Cloud-based accounting solution for freelancers',
      icon: '☁️',
      proficiency: 'Advanced',
      useCase: 'Client invoicing, expense tracking, and time management',
    },
    {
      name: 'Sage 300',
      description: 'Enterprise-level accounting and ERP software',
      icon: '🏢',
      proficiency: 'Intermediate',
      useCase: 'Complex business accounting and financial management',
    },
    {
      name: 'CRM Systems',
      description: 'Customer relationship management platforms',
      icon: '👥',
      proficiency: 'Advanced',
      useCase: 'Client management, communication, and project tracking',
    },
  ];

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Applications & Tools
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            I work with industry-standard accounting and business management
            software to deliver professional results for my clients.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {applications.map((app, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='flex items-start space-x-4'>
                <div className='text-4xl'>{app.icon}</div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-xl font-bold text-gray-900'>
                      {app.name}
                    </h3>
                    <span className='bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full'>
                      {app.proficiency}
                    </span>
                  </div>
                  <p className='text-gray-600 text-sm mb-3'>
                    {app.description}
                  </p>
                  <div className='bg-gray-50 rounded-lg p-3'>
                    <p className='text-xs text-gray-500 uppercase font-semibold mb-1'>
                      Primary Use:
                    </p>
                    <p className='text-sm text-gray-700'>{app.useCase}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <div className='bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Why These Tools Matter
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              My expertise with these applications ensures I can work seamlessly
              with your existing systems and provide professional accounting
              services that integrate perfectly with your business workflow.
              Whether you&apos;re using QuickBooks for daily operations or need
              complex financial modeling in Excel, I have the skills to deliver
              exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
