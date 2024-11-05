import React from 'react';
import "./style.css"






const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center">
     
      <div className="menu w-6 sm:hidden"  ></div>
      <div className="search bg-center border rounded-md border-[#FFFFFF1A] ml-5 sm:hidden"></div>

      <ul className='hidden sm:flex'>
        <li><a className='mr-5 xl:mr-10 text-white' href="#">Home</a></li>
        <li><a className='mr-5 xl:mr-10 text-white' href="#">About</a></li>
        <li><a className='mr-5 xl:mr-10 text-white' href="#">Settings</a></li>
        <li><a className='mr-5 xl:mr-10 text-white' href="#">Profile</a></li>
      </ul>
      {/* Campo de Busca */}
       <input 
        type="search" 
        placeholder="Search in site" 
        className="hidden sm:block ml-4 bg-transparent border border-[#FFFFFF1A] rounded-md w-[133px] xl:w-[200px] h-9 px-2 text-white placeholder-white bg-no-repeat bg-right outline-none text-sm placeholder:[#FFFFFF1A]" 
      />
    </nav>
  );
};

export default Navbar;
