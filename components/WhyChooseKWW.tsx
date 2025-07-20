import { FaShieldAlt, FaAward, FaNetworkWired, FaLeaf } from 'react-icons/fa';

const WhyChooseKWW = () => {
  const features = [
    {
      title: '20+ Years of Trust',
      description: 'Two decades of reliable service and quality products that customers depend on.',
      icon: <FaShieldAlt className="w-8 h-8 text-white" />,
      iconBg: 'bg-blue-600',
    },
    {
      title: 'BIS & ISO Certified',
      description: 'All products meet international quality standards with proper certifications.',
      icon: <FaAward className="w-8 h-8 text-white" />,
      iconBg: 'bg-green-600',
    },
    {
      title: 'Pan-India Dealer Network',
      description: 'Extensive distribution network ensuring easy access to our products nationwide.',
      icon: <FaNetworkWired className="w-8 h-8 text-white" />,
      iconBg: 'bg-purple-600',
    },
    {
      title: 'Eco-Friendly & Energy-Saving',
      description: 'Committed to sustainability with energy efficient designs that reduce carbon footprint.',
      icon: <FaLeaf className="w-8 h-8 text-white" />,
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
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose KWW Electricals?
          </h2>
          <p className="text-gray-600 text-xl max-w-4xl mx-auto">
            Discover what makes us the preferred choice for electrical solutions across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 px-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white w-60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-black" >
              {/* Icon */}
              <div className={`${feature.iconBg} rounded-2xl p-4 w-fit mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white  rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
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
