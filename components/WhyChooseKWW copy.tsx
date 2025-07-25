import { FaShieldAlt, FaAward, FaNetworkWired, FaLeaf } from 'react-icons/fa';

const WhyChooseKWW = () => {
  const features = [
    {
      title: '20+ Years of Trust',
      description: 'Two decades of reliable service and quality products that customers depend on.',
      icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
      iconBg: 'bg-blue-600',
    },
    {
      title: 'BIS & ISO Certified',
      description: 'All products meet international quality standards with proper certifications.',
      icon: <FaAward className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
      iconBg: 'bg-green-600',
    },
    {
      title: 'Pan-India Dealer Network',
      description: 'Extensive distribution network ensuring easy access to our products nationwide.',
      icon: <FaNetworkWired className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
      iconBg: 'bg-purple-600',
    },
    {
      title: 'Eco-Friendly & Energy-Saving',
      description: 'Committed to sustainability with energy efficient designs that reduce carbon footprint.',
      icon: <FaLeaf className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />,
      iconBg: 'bg-teal-600',
    },
  ];

  const stats = [
    {
      number: '1M+',
      label: 'Satisfied Customer',
      color: 'text-blue-600',
    },
    {
      number: '2000+',
      label: 'Dealer Partner',
      color: 'text-green-600',
    },
    {
      number: '100+',
      label: 'Product Varieties',
      color: 'text-purple-600',
    },
    {
      number: '18+',
      label: 'States Covered',
      color: 'text-orange-600',
    },
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
            Why Choose KWW Electricals?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-xl max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0">
            Discover what makes us the preferred choice for electrical solutions across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 px-0 sm:px-4 lg:px-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-black"
            >
              {/* Icon */}
              <div className={`${feature.iconBg} rounded-xl sm:rounded-2xl p-3 sm:p-3.5 lg:p-4 w-fit mb-4 sm:mb-5 lg:mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKWW;
