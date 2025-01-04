'use client'
import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import Image from 'next/image';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
            RoboMart
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search robots..."
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Browse</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Featured</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
          <button className="relative">
            <ShoppingCart className="hover:text-blue-400 transition-colors" size={24} />
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

// ProductCard Component
interface ProductCardProps {
  name: string;
  price: number;
  description: string;
}

const ProductCard = ({ name, price, description }: ProductCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-700 relative">
        <Image
          src="/api/placeholder/400/400"
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-red-500">${price}</span>
        <button className="bg-green-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2025 RoboMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Example Usage / Layout Component
const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8">Featured Robots</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            name="RoboAssistant X1"
            price={999.99}
            description="Advanced household assistant robot with AI capabilities and intuitive interface."
          />
          <ProductCard
            name="SecurityBot Pro"
            price={1499.99}
            description="24/7 autonomous security robot with advanced surveillance and threat detection."
          />
          <ProductCard
            name="CompanionDroid Z3"
            price={799.99}
            description="Interactive companion robot with emotional intelligence and learning capabilities."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;