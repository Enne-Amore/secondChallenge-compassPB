import React from 'react';
import "./style.css"

const Navbar: React.FC = () => {
  return (
    <nav className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 mt-4 md:mt-0">
      <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10">
        <li><a href="#" className="text-white text-sm md:text-lg">Home</a></li>
        <li><a href="#" className="text-white text-sm md:text-lg">About</a></li>
        <li><a href="#" className="text-white text-sm md:text-lg">Settings</a></li>
        <li><a href="#" className="text-white text-sm md:text-lg">Profile</a></li>
      </ul>

      {/* Campo de Busca */}
      <input 
        type="search" 
        placeholder="Search in site" 
        className="hidden md:block ml-4 bg-transparent border border-white/50 rounded-md max-w-xs h-9 px-2 text-white placeholder-white bg-no-repeat bg-right outline-none" 
      />
    </nav>
  );
};

export default Navbar;
