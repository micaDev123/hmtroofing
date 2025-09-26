const ServiceProcess = () => {
  const steps = [
    {
      number: '1',
      title: 'Inspection',
      description: 'Comprehensive roof inspection and assessment to identify issues and determine the best solution.',
      details: 'Our certified inspectors will thoroughly examine your roof structure, materials, and overall condition.'
    },
    {
      number: '2',
      title: 'Estimate',
      description: 'Detailed written estimate with material specifications and transparent pricing breakdown.',
      details: 'Receive a comprehensive quote with no hidden fees and detailed explanation of recommended work.'
    },
    {
      number: '3',
      title: 'Installation',
      description: 'Professional installation by certified technicians using premium materials and proven techniques.',
      details: 'Expert installation with attention to detail, safety protocols, and minimal disruption to your property.'
    },
    {
      number: '4',
      title: 'Warranty',
      description: 'Comprehensive warranty coverage and ongoing support for your peace of mind.',
      details: 'Full warranty protection with responsive customer service and maintenance support when needed.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to project completion
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gray-dark">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Step Details */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.details}
              </p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
