const CommunityInvolvement = () => {
  const organizations = [
    {
      title: 'Chapman Partnership for the Homeless',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Serving the most vulnerable members of the South Florida Community as a trusted partner.',
      link: 'www.chapmanpartnership.org'
    },
    {
      title: 'Compassion International: Rescuing Children from Poverty',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Child sponsor, conference speaker and community ambassador on behalf of the world\'s most vulnerable children.',
      link: 'www.compassion.com'
    },
    {
      title: 'NBA Chaplain',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Over 15 years of professional sports ministry experience with athletes and the NBA community.',
      link: 'www.athletesinaction.org'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Community Involvement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to support our local and global community through meaningful partnerships
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={org.image} 
                  alt={org.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-dark mb-3 leading-tight">
                  {org.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {org.description}
                </p>

                {/* Link */}
                <div className="flex items-center justify-between">
                  <a 
                    href={`https://${org.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-primary-yellow font-medium text-sm transition-colors duration-200"
                  >
                    {org.link}
                  </a>
                  <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center group-hover:bg-primary-yellow transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Learn more about our community partnerships and how we give back to South Florida
          </p>
          <button className="btn-secondary">
            View All Partnerships
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityInvolvement;
