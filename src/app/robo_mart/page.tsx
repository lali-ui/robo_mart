'use client'
import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
});

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-purple-500/20 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className={`${spaceGrotesk.className} text-2xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 
            hover:from-pink-600 hover:via-purple-500 hover:to-violet-500
            drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]
            hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]
            transform hover:scale-105
            transition-all duration-300 cursor-pointer`}>
            RoboMart
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search robots..."
              className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                placeholder-gray-500"
            />
            <Search className="absolute right-3 top-2.5 text-purple-400" size={20} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Browse</a>
            <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Featured</a>
            <a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Support</a>
          </div>
          <button className="relative">
            <ShoppingCart className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all" size={24} />
            <span className="absolute -top-2 -right-2 bg-purple-500 text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
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
    <div className="group bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 
      hover:transform hover:scale-105 transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:border-purple-500/40">
      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-900/50 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
        <Image
          src="/api/placeholder/400/400"
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">{name}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          ${price}
        </span>
        <button className="bg-purple-500/20 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-lg 
          hover:bg-purple-500 hover:text-white transition-all duration-300
          hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-400 py-12 mt-20 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">About</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Terms</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-400 font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">Discord</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-500">&copy; 2025 RoboMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Example Usage / Layout Component
const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Featured Robots
        </h1>
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