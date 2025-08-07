"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductCatalog from "./ProductCatalog";

/* ---------- TYPES ---------- */
interface Product {
  name: string;
  url: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  products: Product[];
}

/* ---------- DATA ---------- */
const categories: Category[] = [
  {
    id: "led-lights",
    name: "LED Lights",
    image: "/assets/Led_Lights_Menu.jpg",
    bgColor: "bg-amber-50",
    products: [
      { name: "Panel Light", url: "/products/led-lights/panel-light" },
      { name: "Down Light", url: "/products/led-lights/down-light" },
      { name: "LED Lamp", url: "/products/led-lights/led-lamp" },
      { name: "Batten Light", url: "/products/led-lights/batten-light" },
      { name: "Spot Light", url: "/products/led-lights/spot-light" },
      { name: "Track Light", url: "/products/led-lights/track-light" },
      { name: "Flood Light", url: "/products/led-lights/flood-light" },
      { name: "Street Light", url: "/products/led-lights/street-light" },
      { name: "High Bay Light", url: "/products/led-lights/high-bay-light" },
      { name: "Outdoor Light", url: "/products/led-lights/outdoor-light" },
      { name: "Strip Light", url: "/products/led-lights/strip-light" },
    ],
  },
  {
    id: "fans",
    name: "Fans",
    image: "/assets/Fans_Menu.JPG",
    bgColor: "bg-orange-50",
    products: [
      { name: "Ceiling Fan", url: "/products/fans/ceiling-fan" },
      { name: "Table Fan", url: "/products/fans/table-fan" },
      { name: "Wall Fan", url: "/products/fans/wall-fan" },
      { name: "Pedestal Fan", url: "/products/fans/pedestal-fan" },
      { name: "Exhaust Fan", url: "/products/fans/exhaust-fan" },
      { name: "Cabin Fan", url: "/products/fans/cabin-fan" },
    ],
  },
  {
    id: "appliances",
    name: "Appliances",
    image: "/assets/Appliances_Menu.JPG",
    bgColor: "bg-red-50",
    products: [
      { name: "Water Heater", url: "/products/appliances/water-heater" },
      { name: "Geyser", url: "/products/appliances/geyser" },
      { name: "Immersion Water Heater", url: "/products/appliances/immersion-water-heater" },
      { name: "Infrared Cooktop", url: "/products/appliances/infrared-cooktop" },
      { name: "Induction Cooker", url: "/products/appliances/induction-cooker" },
      { name: "Steam Iron", url: "/products/appliances/steam-iron" },
      { name: "Dry Iron", url: "/products/appliances/dry-iron" },
      { name: "Mixer Grinder", url: "/products/appliances/mixer-grinder" },
      { name: "Blender", url: "/products/appliances/blender" },
      { name: "Electric Kettle", url: "/products/appliances/electric-kettle" },
      { name: "Room Heater", url: "/products/appliances/room-heater" },
      { name: "Quartz Heater", url: "/products/appliances/quartz-heater" },
      { name: "Fan Heater", url: "/products/appliances/fan-heater" },
    ],
  },
  {
    id: "coolers",
    name: "Coolers",
    image: "/assets/Air Cooler.JPG",
    bgColor: "bg-slate-50",
    products: [
      { name: "Aria", url: "/products/coolers/aria" },
      { name: "Breeza", url: "/products/coolers/breeza" },
      { name: "Windsor", url: "/products/coolers/windsor" },
    ],
  },
];

/* ---------- COMPONENT ---------- */
const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  
  /* mobile-specific product dropdown */
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  /* desktop floating catalog */
  const [isProductCatalogOpen, setIsProductCatalogOpen] = useState(false);

  const router = useRouter();

  const navItems = [
    "Home",
    "Products",
    "About",
    "Services",
    "Store Locator",
    "Dealers",
    "Blog",
    "Careers",
    "Contacts",
  ];

  /* ---------- HELPER FUNCTION FOR ROUTES ---------- */
  const getRouteForItem = (item: string): string => {
    switch (item) {
      case "Home":
        return "/";
      case "About":
        return "/about";
      case "Services":
        return "/services";
      case "Store Locator":
        return "/store-locator";
      case "Dealers":
        return "/dealers";
      case "Blog":
        return "/blog";
      case "Careers":
        return "/careers";
      case "Contacts":
        return "/contacts";
      default:
        return `/${item.toLowerCase().replace(/ /g, "-")}`;
    }
  };

  /* ---------- NAVIGATION HANDLER ---------- */
  const handleNavItemClick = (item: string) => {
    if (item === "Products") {
      setIsProductCatalogOpen((prev) => !prev);
      setActiveItem(item);
      return;
    }
    
    setActiveItem(item);
    setIsProductCatalogOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileProductOpen(false);
    setExpandedMobileCategory(null);
  };

  /* ---------- tsx part ---------- */
  return (
    <>
      {/* HEADER */}
      <header className="bg-white px-3 sm:px-4 lg:px-6 py-3 shadow-md relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Header Row */}
          <div className="flex items-center justify-between">
            {/* Left Section: Hamburger Menu + Logo (Mobile) / Logo Only (Desktop) */}
            <div className="flex items-center gap-2">
              {/* Mobile Menu Button - Only on mobile */}
              <div className="lg:hidden scale-85 lg:scale-100">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-5 h-5 text-gray-600" />
                  ) : (
                    <FaBars className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Logo - Always present */}
              <div className="flex items-center flex-shrink-0">
                <Link href="/" prefetch={true}>
                  <div className="flex items-center scale-150 lg:scale-160 cursor-pointer">
                    <Image
                      src="/assets/icons/KWW Logo.svg"
                      alt="KWW Electricals Logo"
                      width={80}
                      height={40}
                      className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Search Box - Hidden on mobile/tablet */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="w-full border border-gray-300 rounded-full overflow-hidden relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full px-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-red-600/20 bg-white text-gray-700"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Right Section: Dealer + Profile + Cart */}
            <div className="flex items-center gap-1 lg:gap-6 -space-x-3">
              {/* Become A Dealer Button */}
              <Link href="/dealers" prefetch={true}>
                <button className="bg-red-700 hover:bg-red-800 text-white px-2 py-1.5 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm lg:rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap scale-85 lg:scale-100 lg:mr-2">
                  <span className="lg:inline text-xs">Become A Dealer</span>
                </button>
              </Link>

              {/* Profile Button */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 scale-85 lg:scale-100"
                aria-label="Profile"
              >
                <FaUserCircle className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
              </button>

              {/* Cart Button */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 scale-85 lg:scale-100"
                aria-label="Cart"
              >
                <AiOutlineShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Bar - Separate section with top shadow */}
      <div className="lg:hidden bg-white px-3 sm:px-4 py-2 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)] relative">
        <div className="max-w-7xl mx-auto">
          <div className="border border-gray-300 rounded overflow-hidden relative text-xs">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full px-4 py-1 rounded-full bg-white focus:outline-0"
            />
          </div>
        </div>
      </div>

      {/* MOBILE SIDE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 pb-4 relative z-20 ">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-gray-200 pt-3">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) =>
                  item === "Products" ? (
                    <React.Fragment key={item}>
                      {/* TOP-LEVEL PRODUCTS BUTTON */}
                      <button 
                        onClick={() => setIsMobileProductOpen((prev) => !prev)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors duration-200
                          ${isMobileProductOpen ? "text-red-600 bg-red-50 font-semibold" : "text-gray-700 hover:text-red-600 hover:bg-gray-50"}`}
                      >
                        <span>{item}</span>
                        {isMobileProductOpen ? <FaChevronDown /> : <FaChevronRight />}
                      </button>

                      {/* CATEGORY LIST */}
                      {isMobileProductOpen && (
                        <div className="mt-1 space-y-1">
                          {categories.map((cat) => (
                            <div key={cat.id}>
                              {/* CATEGORY ROW */}
                              <button
                                onClick={() =>
                                  setExpandedMobileCategory(
                                    expandedMobileCategory === cat.id ? null : cat.id
                                  )
                                }
                                className="w-full text-left pl-8 pr-4 py-2 rounded-lg flex items-center justify-between text-sm transition-colors duration-200 bg-gray-50 hover:bg-gray-100"
                              >
                                <span>{cat.name}</span>
                                {expandedMobileCategory === cat.id ? <FaChevronDown /> : <FaChevronRight />}
                              </button>

                              {/* PRODUCT LIST */}
                              {expandedMobileCategory === cat.id && (
                                <div className="pl-12 pr-4 py-1 space-y-1 ">
                                  {cat.products.map((p) => (
                                    <Link
                                      key={p.name}
                                      href={p.url}
                                      prefetch={true}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsMobileProductOpen(false);
                                        setExpandedMobileCategory(null);
                                      }}
                                    >
                                      <span className="block w-full text-left text-xs py-1.5 text-gray-700 hover:text-red-600 transition-colors duration-200 cursor-pointer">
                                        {p.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ) : (
                    <Link 
                      key={item}
                      href={getRouteForItem(item)}
                      prefetch={true}
                      onClick={() => {
                        setActiveItem(item);
                        setIsMobileMenuOpen(false);
                        setIsMobileProductOpen(false);
                        setExpandedMobileCategory(null);
                      }}
                    >
                      <span className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 block cursor-pointer ${
                        activeItem === item
                          ? "text-red-600 bg-red-50 font-semibold"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}>
                        {item}
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar with Hover Area Management */}
      <div 
        className="hidden lg:block relative"
        onMouseEnter={() => setIsProductCatalogOpen(false)} // Close if hovering elsewhere
      >
        <nav className="bg-[#f2eeed] shadow-[inset_0_8px_8px_-4px_rgba(0,0,0,0.1),inset_0_4px_4px_-2px_rgba(0,0,0,0.06),inset_0_2px_2px_-1px_rgba(0,0,0,0.03)] relative z-30">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center px-4">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="relative"
                  onClick={() => {
                    if (item === "Products") {
                      setIsProductCatalogOpen(true);
                    } else {
                      setIsProductCatalogOpen(false);
                    }
                  }}
                >
                  {item === "Products" ? (
                    // Keep Products as button since it opens catalog
                    <button
                      onClick={() => handleNavItemClick(item)}
                      className={`py-4 px-5 relative transition-colors duration-200 ${
                        activeItem === item || (item === "Products" && isProductCatalogOpen)
                          ? "text-red-600 font-semibold"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      {item}
                      <FaChevronDown
                        className={`w-4 h-4 inline ml-1 transition-transform duration-200 ${
                          isProductCatalogOpen ? "rotate-180" : ""
                        }`}
                      />
                      {(activeItem === item || (item === "Products" && isProductCatalogOpen)) && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 rounded-t"></div>
                      )}
                    </button>
                  ) : (
                    // Use Link for other navigation items
                    <Link 
                      href={getRouteForItem(item)}
                      prefetch={true}
                      onClick={() => {
                        setActiveItem(item);
                        setIsProductCatalogOpen(false);
                      }}
                    >
                      <span className={`py-4 px-5 relative transition-colors duration-200 block cursor-pointer ${
                        activeItem === item
                          ? "text-red-600 font-semibold"
                          : "text-gray-700 hover:text-red-600"
                      }`}>
                        {item}
                        {item === "Services" && (
                          <FaChevronDown className="w-4 h-4 inline ml-1" />
                        )}
                        {activeItem === item && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 rounded-t"></div>
                        )}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Floating Product Catalog Overlay - Above Home Page */}
      {isProductCatalogOpen && (
        <div
          className="fixed inset-0 z-40"
          onMouseLeave={() => setIsProductCatalogOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 transition-all duration-300" />
          
          {/* Floating Product Catalog - Centered and Elevated */}
          <div className="absolute inset-0 flex items-center justify-center px-4 pt-20">
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full transform transition-all duration-300 scale-100 animate-fade-in-up"
              onMouseLeave={(e) => e.stopPropagation()} // Prevent closing when inside catalog
            >
              {/* Product Catalog Content */}
              <div className="rounded-b-2xl overflow-hidden">
                <ProductCatalog onClose={() => setIsProductCatalogOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
