import { Home, Users, Shield, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Home,
      number: '500+',
      label: 'Roofs Installed',
      color: 'text-primary-green'
    },
    {
      icon: Users,
      number: '20+',
      label: 'Years Experience',
      color: 'text-primary-green'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Licensed & Insured',
      color: 'text-primary-green'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Service',
      color: 'text-primary-green'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
