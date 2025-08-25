import { UserButton } from '@clerk/clerk-react';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 xl:px-48 py-4 border-b border-gray-200 bg-white" id='top'>
      
      <div className="flex items-center text-lg space-x-2">
        <img 
          src="/logos/s.png" 
          alt="Logo" 
          className="w-9 h-9" 
        />
        <a href="/" className="text-base font-semibold text-black">
          Sathii
        </a>
      </div>

      <div className='flex items-center gap-4'>
        <a
          href="/about"
          className="text-base text-gray-600 hover:text-black transition-colors"
        >
          About
        </a>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </nav>
  );
};

export default Navbar;
