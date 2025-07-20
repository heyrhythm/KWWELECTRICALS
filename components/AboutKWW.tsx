
import Image from 'next/image';
import { FaAward, FaLeaf, FaUsers, FaGlobe } from 'react-icons/fa';

const AboutKWW = () => {
  const features = [
    {
      title: 'ISO Certified',
      subtitle: 'Quality Standards',
    //   bgColor: 'bg-blue-200',
      icon: <FaAward className="w-6 h-6 text-blue-700" />,
    },
    {
      title: 'Eco-Friendly',
      subtitle: 'Sustainable Products',
    //   bgColor: 'bg-green-200',
      icon: <FaLeaf className="w-6 h-6 text-green-700" />,
    },
    {
      title: 'Expert Team',
      subtitle: 'Skilled Professionals',
    //   bgColor: 'bg-yellow-200',
      icon: <FaUsers className="w-6 h-6 text-yellow-700" />,
    },
    {
      title: 'Pan-India',
      subtitle: 'Nationwide Reach',
    //   bgColor: 'bg-purple-300',
      icon: <FaGlobe className="w-6 h-6 text-purple-700" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 px-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About KWW Electricals
            </h2>
            <div >
                <p className="text-gray-700 text-lg leading-relaxed">
              With over 20 years of expertise, KWW Electricals manufactures eco-friendly and high-performance electrical goods across India. We are committed to powering homes and businesses with sustainable, energy-efficient solutions.
            </p>
            <br />
            <p className="text-gray-700 text-lg leading-relaxed">
              Our journey began with a simple mission: to make quality electrical products accessible to everyone while contributing to a greener planet. Today, we are proud to be trusted by millions of customers nationwide.
            </p>

            </div>
            

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={` rounded-xl  flex items-center gap-3  `}
                >
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl mt-8">
              Learn More About Us
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/kww-building.jpg" // Replace with your actual image path
                alt="KWW Electricals building with company logo on roof"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKWW;
