const CoreValues = () => {
  const values = [
    {
      letter: 'H',
      title: 'Honor',
      description: 'We conduct our business with the highest level of integrity and honor in every project and client with respect and honesty.',
      bgColor: 'bg-primary-green',
      textColor: 'text-white'
    },
    {
      letter: 'M',
      title: 'Mastery',
      description: 'We believe in continuous improvement and mastery of our craft, delivering excellence in every roofing project.',
      bgColor: 'bg-primary-green',
      textColor: 'text-white'
    },
    {
      letter: 'T',
      title: 'Trust',
      description: 'We build lasting relationships based on trust, reliability, and transparency in all our business dealings.',
      bgColor: 'bg-primary-green',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on the foundation of Honor, Mastery, and Trust
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              {/* Letter Circle */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${value.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-3xl font-bold ${value.textColor}`}>
                    {value.letter}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
