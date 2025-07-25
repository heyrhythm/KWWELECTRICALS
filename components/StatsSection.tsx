import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '20+',
      label: 'Years Experience',
      color: 'text-blue-600'
    },
    {
      number: '1M+',
      label: 'Happy Customers',
      color: 'text-green-600'
    },
    {
      number: '500+',
      label: 'Dealer Network',
      color: 'text-blue-600'
    },
    {
      number: 'ISO',
      label: 'Certified Products',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="bg-white py-3 sm:py-8 lg:py-10">
      <div className="lg:max-w-7xl lg:mx-auto px-1 sm:px-4 lg:px-6 scale-90 md:scale-100">
        <div className="flex flex-row lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-34 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1 sm:space-y-2">
              <div className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl truncate lg:truncate-none">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
