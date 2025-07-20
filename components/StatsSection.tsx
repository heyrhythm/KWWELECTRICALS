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
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 justify-evenly">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-2xl">
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
