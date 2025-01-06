'use client'
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-purple-500/20 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
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
const ProductCard = ({ name, price, description }: { name: string; price: number; description: string }) => {
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

// Login Page Component
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl 
        hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:border-purple-500/40 transition-all duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-400">Log in to access your RoboMart account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Email</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 placeholder-gray-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Mail className="absolute left-3 top-2.5 text-purple-400" size={20} />
              </div>
            </div>
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 pr-10 placeholder-gray-500"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Lock className="absolute left-3 top-2.5 text-purple-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-purple-400 hover:text-purple-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-purple-500/30 bg-gray-900/50 text-purple-500 focus:ring-purple-500/50"
              />
              <label className="ml-2 text-sm text-gray-400">Remember me</label>
            </div>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500/20 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-lg 
              hover:bg-purple-500 hover:text-white transition-all duration-300
              hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            Sign In
          </button>
          <p className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-purple-400 hover:text-purple-300">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

// Sign Up Page Component
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl 
        hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:border-purple-500/40 transition-all duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Create Account
          </h2>
          <p className="mt-2 text-gray-400">Join RoboMart and explore the future of robotics</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 placeholder-gray-500"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <User className="absolute left-3 top-2.5 text-purple-400" size={20} />
              </div>
            </div>
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Email</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 placeholder-gray-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Mail className="absolute left-3 top-2.5 text-purple-400" size={20} />
              </div>
            </div>
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 pr-10 placeholder-gray-500"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Lock className="absolute left-3 top-2.5 text-purple-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-purple-400 hover:text-purple-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 pr-10 placeholder-gray-500"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
                <Lock className="absolute left-3 top-2.5 text-purple-400" size={20} />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              required
              className="h-4 w-4 rounded border-purple-500/30 bg-gray-900/50 text-purple-500 focus:ring-purple-500/50"
            />
            <label className="ml-2 text-sm text-gray-400">
              I agree to the{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500/20 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-lg 
              hover:bg-purple-500 hover:text-white transition-all duration-300
              hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            Create Account
          </button>
          <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-purple-400 hover:text-purple-300">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const AuthPage = ({ children, title, subtitle }: { 
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-md w-full space-y-8 p-8 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl 
        hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:border-purple-500/40 transition-all duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {title}
          </h2>
          <p className="mt-2 text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

const AuthContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-md w-full space-y-8 p-8 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl 
        hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:border-purple-500/40 transition-all duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-400">Log in to access your RoboMart account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Email</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 placeholder-gray-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Mail className="absolute left-3 top-2.5 text-purple-400" size={20} />
              </div>
            </div>
            <div className="relative">
              <label className="text-purple-400 text-sm font-medium mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg 
                    focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:outline-none
                    pl-10 pr-10 placeholder-gray-500"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Lock className="absolute left-3 top-2.5 text-purple-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-purple-400 hover:text-purple-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-purple-500/30 bg-gray-900/50 text-purple-500 focus:ring-purple-500/50"
              />
              <label className="ml-2 text-sm text-gray-400">Remember me</label>
            </div>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500/20 border border-purple-500/50 text-purple-400 px-4 py-2 rounded-lg 
              hover:bg-purple-500 hover:text-white transition-all duration-300
              hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            Sign In
          </button>
          <p className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-purple-400 hover:text-purple-300">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Layout as default, LoginPage, SignUpPage, AuthPage, AuthContainer };