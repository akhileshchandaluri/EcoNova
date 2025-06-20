import React from 'react';
import { Award, Heart, Leaf } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-rose-500">EcoNova</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Born from a passion for beauty and self-expression, EcoNova creates premium lipsticks 
          that empower you to feel confident and beautiful every day.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            EcoNova Website is Founded in 2025 by Titiksha, an EC undergrad with a deep love for technology, 
            EcoNova started as a small project by Sravanthi and Akhilesh. With a vision to create 
            high-quality, cruelty-free lipsticks that cater to all skin tones, Titiksha poured
            her heart into developing a range of shades that celebrate diversity and individuality.
          </p>
          <p className="text-gray-600 mb-4">
            Our formulas are developed with premium ingredients, ensuring each shade not only 
            looks stunning but also feels comfortable throughout the day. We believe that beauty 
            should be accessible, sustainable, and empowering.
          </p>
          <p className="text-gray-600">
            Today, EcoNova is trusted by thousands of customers worldwide who appreciate 
            quality, ethics, and the perfect shade for every moment.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxe Lips Collection"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cruelty-Free</h3>
            <p className="text-gray-600">
              We never test on animals and are certified cruelty-free. Beauty should never come 
              at the expense of animal welfare.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable</h3>
            <p className="text-gray-600">
              Our packaging is recyclable and we're committed to reducing our environmental 
              impact through responsible sourcing.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
            <p className="text-gray-600">
              Every product is crafted with the finest ingredients and undergoes rigorous 
              testing to ensure exceptional quality and performance.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Founder</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">EcoNova</h3>
              <p className="text-rose-500 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                With over 15 years in the beauty industry, Titiksha brings a unique blend of 
                scientific knowledge and artistic vision to EcoNova. Her background in 
                cosmetic chemistry and passion for inclusive beauty drives our innovation.
              </p>
              <p className="text-gray-600">
                "I believe every person deserves to feel beautiful and confident. That's why 
                we create products that not only look amazing but also care for your lips."
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sarah Chen"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};