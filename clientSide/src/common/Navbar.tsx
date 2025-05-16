







import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const employeeName = "Admin"; // Replace with dynamic value if needed

  return (
    <nav className="bg-green-800 w-full h-16 fixed top-0 left-0 z-40 shadow">
      <div className="flex items-center justify-between h-full px-4">

        {/* Left section with Employee MS and Welcome */}
    <div className="flex items-center space-x-10">
  <span className="text-white text-lg font-semibold ml-3">Employee MS</span>
   <span className="text-gray-300 text-sm ml-15"><h1 className='text-2xl'>Welcome {employeeName}</h1></span>
</div>


        {/* Right: Logout button */}
        <div className='mr-20'>
          <Link
            to="/logOut"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            LogOut
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
