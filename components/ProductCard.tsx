// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating?: number; // Make this optional
  features: string[];
  size?: string;
  colors?: string[];
  isBestSeller?: boolean;
}

interface ProductCardProps {
  product: Product;
  onViewProduct?: (productId: number) => void;
  onBuyNow?: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onViewProduct, 
  onBuyNow 
}) => {
  const handleViewProduct = () => {
    if (onViewProduct) {
      onViewProduct(product.id);
    }
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(product.id);
    }
  };

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      white: 'bg-white border-gray-300',
      cream: 'bg-yellow-100',
      yellow: 'bg-yellow-200',
      brown: 'bg-amber-800',
      maroon: 'bg-red-900',
      black: 'bg-black',
      gray: 'bg-gray-400',
    };
    return colorMap[color.toLowerCase()] || 'bg-gray-200';
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto">
      <div className="relative h-48 bg-gray-50 p-4">
        {/* Best Seller Badge */}
        {product.isBestSeller && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Best Seller
            </div>
          </div>
        )}
        
        {/* Product Image */}
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating (only show if exists) */}
        {product.rating && (
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < product.rating! ? 'fill-current' : 'text-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm ml-2">({product.rating}/5)</span>
          </div>
        )}

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.features.map((feature, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded font-medium ${
                index === 0 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Size */}
        {product.size && (
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">Size - </span>{product.size}
          </p>
        )}

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-600 font-semibold mr-2">Color - </span>
            <div className="flex gap-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-5 h-5 rounded-sm border-2 ${getColorClass(color)} ${
                    color.toLowerCase() === 'white' ? 'border-gray-300' : 'border-gray-200'
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleViewProduct}
            className="flex-1 border-2 border-red-600 text-red-600 py-2 px-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
          >
            View Product
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
