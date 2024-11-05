import React, { useState } from 'react';
import "./style.css";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  // const [search, setSearch] = useState(false);


  const isShow = () => {
    setShow(prevState => !prevState);
  };

  // const isSearch = () => {
  //   setSearch(prevState => !prevState);
  // };

  return (
    <nav className="flex items-center">
      <div className="menu w-6 sm:hidden" onClick={isShow}></div>
      <div className="search bg-center border rounded-md border-[#FFFFFF1A] ml-5 sm:hidden" /*onClick={isSearch}*/></div>

      <ul className="hidden sm:flex">
        <li><a className="mr-5 xl:mr-10 text-white" href="#">Home</a></li>
        <li><a className="mr-5 xl:mr-10 text-white" href="#">About</a></li>
        <li><a className="mr-5 xl:mr-10 text-white" href="#">Settings</a></li>
        <li><a className="mr-5 xl:mr-10 text-white" href="#">Profile</a></li>
      </ul>

      {/* Campo de Busca */}
      <input 
        type="search" 
        placeholder="Search in site" 
        className={`hidden sm:block ml-4 bg-transparent border border-[#FFFFFF1A] rounded-md w-[133px] xl:w-[200px] h-9 px-2 text-white placeholder-white bg-no-repeat bg-right outline-none text-sm placeholder:[#FFFFFF1A]`} 
      />

      {/* Menu de navegação para telas pequenas */}
      <ul 
        className={`sm:hidden absolute left-0 top-16 w-full bg-blue-750 text-center 
        ${show ? 'opacity-100 visible' : 'opacity-0 invisible'} 
        transition-all duration-300 ease-in-out`}>
        <li><a className="text-white block py-4" href="#">Home</a></li>
        <li><a className="text-white block py-4" href="#">About</a></li>
        <li><a className="text-white block py-4" href="#">Settings</a></li>
        <li><a className="text-white block pt-4 pb-8" href="#">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
