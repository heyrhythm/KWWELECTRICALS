import Image from 'next/image';
import { FaLightbulb, FaHome, FaFan, FaSnowflake, FaArrowRight } from 'react-icons/fa';


const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "LED Lights",
      description: "Energy-efficient LED bulbs, tubes and decorative lighting solutions",
      icon: <FaLightbulb className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />,
      iconBg: "bg-orange-500",
      image: "/assets/products/gandu2.JPG",
    },
    {
      id: 2,
      title: "Home Appliances",
      description: "Energy-efficient LED bulbs, tubes and decorative lighting solutions",
      icon: <FaHome className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />,
      iconBg: "bg-purple-500",
      image: "/assets/products/Appliances.JPG",
    },
    {
      id: 3,
      title: "Electric Fans",
      description: "BLDC ceiling fans, table fans and exhaust fans for every need",
      icon: <FaFan className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />,
      iconBg: "bg-green-500",
      image: "/assets/products/Fan Category Blog 1.JPG",
    },
    {
      id: 4,
      title: "Air Coolers",
      description: "Energy-efficient air coolers for home and industrial cooling needs",
      icon: <FaSnowflake className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />,
      iconBg: "bg-blue-500",
      image: "/assets/products/Cooler.png",
    }
  ];

  return (
    <section className=" bg-gradient-to-b from-white from-50% to-red-600 to-50%  ">
      <div className="w-full py-12 sm:py-16 lg:py-20 -mb-48 md:-mb-0">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6   scale-80 md:scale-100 origin-top">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-3 lg:mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-800 text-sm sm:text-base lg:text-xl max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0">
              Discover our comprehensive range of electrical products designed for modern homes and businesses
            </p>
          </div>

          {/* Categories Grid - REMOVED the extra scale-90 */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 lg:gap-6 mb-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative aspect-square sm:aspect-square lg:aspect-3/4 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className={`${category.iconBg} rounded-lg p-1.5 sm:p-2`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <button className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group text-sm sm:text-base">
                    <span>Explore Range</span>
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center pt-5 md:pt-10">
            <button className="bg-white text-red-600 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg mb-8 mt-4 font-bold text-base sm:text-lg hover:bg-red-800 hover:text-white transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
