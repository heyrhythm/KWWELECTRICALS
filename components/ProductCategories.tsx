import Image from 'next/image';
import { FaLightbulb, FaHome, FaFan, FaSnowflake, FaArrowRight } from 'react-icons/fa';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "LED Lights",
      description: "Energy-efficient LED bulbs, tubes and decorative lighting solutions",
      icon: <FaLightbulb className="w-6 h-6 text-white" />,
      iconBg: "bg-orange-500",
      image: "/images/led-lights.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      title: "Home Appliances", 
      description: "Energy-efficient LED bulbs, tubes and decorative lighting solutions",
      icon: <FaHome className="w-6 h-6 text-white" />,
      iconBg: "bg-purple-500",
      image: "/images/home-appliances.jpg", // Replace with your actual image path
    },
    {
      id: 3,
      title: "Electric Fans",
      description: "BLDC ceiling fans, table fans and exhaust fans for every need",
      icon: <FaFan className="w-6 h-6 text-white" />,
      iconBg: "bg-green-500", 
      image: "/images/electric-fans.jpg", // Replace with your actual image path
    },
    {
      id: 4,
      title: "Air Coolers",
      description: "Energy-efficient air coolers for home and industrial cooling needs",
      icon: <FaSnowflake className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-500",
      image: "/images/air-coolers.jpg", // Replace with your actual image path
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white from-50% to-red-600 to-50% py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            Our Product Categories
          </h2>
          <p className="text-gray-800 text-2xl max-w-4xl mx-auto">
            Discover our comprehensive range of electrical products designed for modern homes and businesses
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${category.iconBg} rounded-lg p-2`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Explore Button */}
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group">
                  <span>Explore Range</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
  <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
    View All Products
  </button>
</div>

      </div>
    </section>
  );
};

export default ProductCategories;
