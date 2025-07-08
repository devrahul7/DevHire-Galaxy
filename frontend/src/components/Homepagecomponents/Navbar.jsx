import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-[#f7bea9]' : 'bg-white'
    }`}>
      <div className="px-0">
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <div className="text-4xl font-bold text-[#ff6b35]">
            DevHire Galaxy
          </div>
                   
          {/* Auth Buttons */}
          <div className="flex gap-4 text-3xl">
            <button className="px-4 py-2 text-gray-700 hover:bg-[#d97757] rounded transition-colors duration-200">
              Login
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-[#d97757] rounded transition-colors duration-200">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}