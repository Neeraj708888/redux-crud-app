import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold">MyApp</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:bg-blue-600 px-3 py-2 rounded-md">Home</a>
            <a href="#" className="hover:bg-blue-600 px-3 py-2 rounded-md">About</a>
            <a href="#" className="hover:bg-blue-600 px-3 py-2 rounded-md">Services</a>
            <a href="#" className="hover:bg-blue-600 px-3 py-2 rounded-md">Contact</a>

            {/* Search Box */}
            <div className="ml-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-md text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block hover:bg-blue-600 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="block hover:bg-blue-600 px-3 py-2 rounded-md">About</a>
          <a href="#" className="block hover:bg-blue-600 px-3 py-2 rounded-md">Services</a>
          <a href="#" className="block hover:bg-blue-600 px-3 py-2 rounded-md">Contact</a>

          {/* Mobile Search Box */}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md text-black focus:outline-none"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
