import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

  const [search, setSearch] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const user =  useSelector((state) => state.user.users);

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-teal-300 via-yellow-300 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <marquee className= 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-2xl'><span className="text-xl font-bold ">Reduxt-toolkit Application</span></marquee>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 font-semibold ">
          <button  className="hover:bg-blue-600 px-1 py-1 rounded-md text-md" onClick={() => navigate('/allUsers')}>All Users</button>
          <button  className="hover:bg-blue-600 px-1.5 py-1.5 rounded-md text-md" onClick={() => navigate('/delete')}>Delete User</button>
          <button  className="hover:bg-blue-600 px-2 py-2 rounded-md text-md" onClick={() => navigate('/')}>Create User</button>
          <button  className="hover:bg-blue-600 px-2 py-2 rounded-md text-md" onClick={() => navigate('/read')}>Last Added User</button>

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
        <div className="md:hidden px-4 pb-4 space-y-2 flex flex-col">
          <button  className="hover:bg-blue-600 px-1 py-1 rounded-md text-xl" onClick={() => navigate('/allUsers')}>All Users</button>
          <button  className="hover:bg-blue-600 px-1.5 py-1.5 rounded-md text-xl" onClick={() => navigate('/delete')}>Delete User</button>
          <button  className="hover:bg-blue-600 px-2 py-2 rounded-md text-xl" onClick={() => navigate('/')}>Create User</button>
          <button  className="hover:bg-blue-600 px-2 py-2 rounded-md text-xl" onClick={() => navigate('/read')}>Last Added User</button>

          <p className='hover:bg-blue-600 px-3 py-2 rounded-md text-red-400 font-bold text-center'> Total User <span className='text-green-900'>({user.length})</span></p>

          {/* Mobile Search Box */}
          <div className="mt-2 items-center flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-1/2 px-3 py-2 rounded-md bg-black text-white hover:font-semibold focus:outline-none cursor-pointer text-center"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
