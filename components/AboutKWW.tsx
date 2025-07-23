import Image from 'next/image';
import { FaAward, FaLeaf, FaUsers, FaGlobe } from 'react-icons/fa';

const AboutKWW = () => {
  const features = [
    {
      title: 'ISO Certified',
      subtitle: 'Quality Standards',
      icon: <FaAward className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-700" />,
    },
    {
      title: 'Eco-Friendly',
      subtitle: 'Sustainable Products',
      icon: <FaLeaf className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-700" />,
    },
    {
      title: 'Expert Team',
      subtitle: 'Skilled Professionals',
      icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-700" />,
    },
    {
      title: 'Pan-India',
      subtitle: 'Nationwide Reach',
      icon: <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-700" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 px-2 sm:px-4 lg:px-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              About KWW Electricals
            </h2>
            <div>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                With over 20 years of expertise, KWW Electricals manufactures eco-friendly and high-performance electrical goods across India. We are committed to powering homes and businesses with sustainable, energy-efficient solutions.
              </p>
              <br />
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                Our journey began with a simple mission: to make quality electrical products accessible to everyone while contributing to a greener planet. Today, we are proud to be trusted by millions of customers nationwide.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-7 lg:mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl flex items-center gap-2 sm:gap-3"
                >
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 text-base sm:text-lg lg:text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
           
          </div>

          {/* Image Section */}
          <div className="relative order-first lg:order-last">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/kww-building.jpg" // Replace with your actual image path
                alt="KWW Electricals building with company logo on roof"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <div className='text-center lg:text-left lg:pl-15 mt-5 sm:mt-9 lg:mt-11 '>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl mt-6 sm:mt-7 lg:mt-8 text-sm sm:text-base">
              Learn More About Us
            </button>
        </div>
         
      </div>
    </section>
  );
};

export default AboutKWW;
