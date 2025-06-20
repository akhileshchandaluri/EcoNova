import React, { useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart, searchQuery }) => {
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.finish.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Discover Your
          <span className="text-rose-500 block">Perfect Shade</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Premium lipsticks crafted with the finest ingredients for long-lasting color and comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition-colors duration-200">
            Shop Collection
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200">
            Find Your Shade
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {searchQuery ? `Search Results (${filteredProducts.length})` : 'Featured Collection'}
          </h2>
          {!searchQuery && (
            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
              <option>Sort by Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose EcoNova?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Ingredients</h4>
            <p className="text-gray-600">Made with organic, cruelty-free ingredients that nourish your lips.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Long-Lasting</h4>
            <p className="text-gray-600">Up to 12 hours of comfortable wear without drying or flaking.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Perfect Shades</h4>
            <p className="text-gray-600">Carefully curated colors to complement every skin tone and occasion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};