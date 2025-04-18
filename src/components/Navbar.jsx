import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const user =  useSelector((state) => state.user.users);

  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-teal-300 via-yellow-300 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <marquee className= 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-2xl'><span className="text-xl font-bold ">Reduxt-toolkit Application</span></marquee>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 font-semibold ">
          <button  className="hover:bg-blue-600 px-1 py-1 rounded-md text-2xl" onClick={() => navigate('/allUsers')}>All Users</button>
          <button  className="hover:bg-blue-600 px-1.5 py-1.5 rounded-md text-xl" onClick={() => navigate('/delete')}>Delete User</button>
          <button  className="hover:bg-blue-600 px-2 py-2 rounded-md" onClick={() => navigate('/')}>Create User</button>
          <button  className="hover:bg-blue-600 px-2 py-2 rounded-md" onClick={() => navigate('/read')}>Last Added User</button>

          <p className='hover:bg-blue-600 px-3 py-2 rounded-md text-red-400'> Count <span className='text-green-900'>({user.length})</span></p>

            {/* Search Box */}
            <div className="border rounded-b-sm">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-md tracking-tighter font-semibold focus:outline-none
                 hover:placeholder:text-gray-400 hover:placeholder:text-center text-black bg-gradient-to-b from-gray-200 via-red-200 to-green-100 cursor-pointer"
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
