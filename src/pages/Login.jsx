import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Login page assets
import CapricornLogin from '../assets/CAPRICORN_login.svg';
import AquariusLogin from '../assets/AQUARIUS_login.svg';
import ScorpioLogin from '../assets/SCORPIO_login.svg';
import MandalaCorner from '../assets/mandala_corner_login.svg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] relative">
      {/* Top Navigation Bar */}
      <div className="absolute top-0 right-0 z-20 p-6">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-[#FF6B35] font-medium hover:text-[#D44459] transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-[#073349] font-medium hover:text-[#D44459] transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-[#073349] font-medium hover:text-[#D44459] transition-colors">
            About Us
          </Link>
          <button className="bg-[#D44459] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#B83A4A] transition-colors">
            REQUEST DEMO
          </button>
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Section - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-12 pt-20">
          <div className="w-full max-w-md">
            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Logo */}
              <div className="text-center mb-8">
                <h1 className="text-[#D44459] text-2xl font-bold mb-2">Your logo</h1>
                <h2 className="text-[#073349] text-3xl font-bold">Login</h2>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-[#073349] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="username@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D44459] focus:border-transparent"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-[#073349] font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D44459] focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {showPassword ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <Link to="/forgot-password" className="text-[#073349] text-sm hover:text-[#D44459] transition-colors">
                    Forgot Password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-[#D44459] text-white py-3 rounded-lg font-semibold hover:bg-[#B83A4A] transition-colors"
                >
                  Sign in
                </button>

                {/* Registration Link */}
                <div className="text-center text-[#073349] text-sm">
                  Don't have an account yet?{' '}
                  <Link to="/register" className="font-semibold hover:text-[#D44459] transition-colors">
                    Register for free
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

                          {/* Right Section - Welcome and Illustrations */}
         <div className="hidden lg:flex lg:w-1/2 bg-[#F5F5F0] relative">
           {/* Welcome Message */}
           <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
             <h1 className="text-[#D44459] text-4xl font-bold">Welcome to Tathasstu</h1>
           </div>
           
           {/* Zodiac Grid Layout - Bottom Right */}
           <div className="absolute bottom-8 right-8">
             <div className="grid grid-cols-2 gap-8">
               {/* Capricorn - Top Left */}
               <div className="text-center">
                 <img src={CapricornLogin} alt="Capricorn" className="w-24 h-24 mx-auto mb-2" />
                 <p className="text-[#073349] font-medium text-sm">CAPRICORN</p>
               </div>
               
               {/* Aquarius - Top Right */}
               <div className="text-center">
                 <img src={AquariusLogin} alt="Aquarius" className="w-24 h-24 mx-auto mb-2" />
                 <p className="text-[#073349] font-medium text-sm">AQUARIUS</p>
               </div>
               
               {/* Scorpio - Bottom Left */}
               <div className="text-center">
                 <img src={ScorpioLogin} alt="Scorpio" className="w-24 h-24 mx-auto mb-2" />
                 <p className="text-[#073349] font-medium text-sm">SCORPIO</p>
               </div>
               
               {/* Mandala - Bottom Right */}
               <div className="text-center">
                 <img src={MandalaCorner} alt="Mandala" className="w-24 h-24 mx-auto mb-2" />
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}
