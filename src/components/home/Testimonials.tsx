import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      nameKey: 'testimonials.client1.name',
      roleKey: 'testimonials.client1.role',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      textKey: 'testimonials.client1.text'
    },
    {
      nameKey: 'testimonials.client2.name',
      roleKey: 'testimonials.client2.role',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      textKey: 'testimonials.client2.text'
    },
    {
      nameKey: 'testimonials.client3.name',
      roleKey: 'testimonials.client3.role',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      textKey: 'testimonials.client3.text'
    }
  ];

  return (
    <section className="section-padding bg-white hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-primary-yellow fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{t(testimonial.textKey)}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={t(testimonial.nameKey)}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-dark">
                    {t(testimonial.nameKey)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t(testimonial.roleKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
