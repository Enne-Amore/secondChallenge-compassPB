import React, { useState } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

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
      <div className="menu w-6 sm:hidden cursor-pointer" onClick={isShow}></div>
      <div className="search bg-center cursor-pointer border rounded-md border-[#FFFFFF1A] ml-5 sm:hidden" /*onClick={isSearch}*/></div>

      <ul className="hidden sm:flex">
        <li><Link to="/" className="mr-5 xl:mr-10 text-white hover:underline" >Home</Link></li>
        <li><Link to="/" className="mr-5 xl:mr-10 text-white hover:underline" >About</Link></li>
        <li><Link to="/" className="mr-5 xl:mr-10 text-white hover:underline" >Settings</Link></li>
        <li><Link to="/" className="mr-5 xl:mr-10 text-white hover:underline" >Profile</Link></li>
      </ul>

      {/* Campo de Busca */}
      <input 
        type="search" 
        placeholder="Search in site" 
        className={`hidden sm:block ml-4 bg-transparent border border-[#FFFFFF1A] rounded-md w-[133px] xl:w-[200px] h-9 px-2 text-white placeholder-white bg-no-repeat bg-right outline-none text-sm placeholder:[#FFFFFF1A] hover:border-[#268FE4] transition duration-400`} 
      />

      {/* Menu de navegação para telas pequenas */}
      <ul 
        className={`sm:hidden absolute z-50 left-0 top-16 w-full bg-blue-750 text-center 
        ${show ? 'opacity-100 visible' : 'opacity-0 invisible'} 
        transition-all duration-300 ease-in-out`}>
        <li><Link to="/" className="text-white hover:underline block py-4">Home</Link></li>
        <li><Link to="/" className="text-white hover:underline block py-4">About</Link></li>
        <li><Link to="/" className="text-white hover:underline block py-4">Settings</Link></li>
        <li><Link to="/" className="text-white hover:underline block pt-4 pb-8">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
