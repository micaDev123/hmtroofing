import { Home, RefreshCw, Wrench, Settings } from 'lucide-react';

const CompleteRoofingSolutions = () => {
  const solutions = [
    {
      icon: Home,
      title: 'New Roofs',
      description: 'Complete roof installations from the ground up with expert craftsmanship and premium materials.',
      features: [
        'Professional consultation',
        'Premium materials',
        'Expert installation',
        'Comprehensive warranty'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Re-Roof',
      description: 'Professional roof replacement services to give your property a fresh, durable roofing system.',
      features: [
        'Complete tear-off',
        'Structural inspection',
        'Modern materials',
        'Energy efficiency'
      ]
    },
    {
      icon: Wrench,
      title: 'Repairs',
      description: 'Expert roof repair services for leaks, storm damage, and general maintenance issues.',
      features: [
        'Emergency repairs',
        'Leak detection',
        'Storm damage',
        'Preventive maintenance'
      ]
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Regular maintenance programs to extend your roof life and prevent costly repairs.',
      features: [
        'Scheduled inspections',
        'Preventive care',
        'Gutter cleaning',
        'Performance optimization'
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Complete Roofing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From new installations to emergency repairs, we provide expert roofing services 
            with quality materials and professional craftsmanship.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="text-center group hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-dark mb-4">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="text-left space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-yellow rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6">
                  <button className="text-primary-green font-semibold hover:text-primary-yellow transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompleteRoofingSolutions;
