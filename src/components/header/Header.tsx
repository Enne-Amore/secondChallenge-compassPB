import React from 'react';
import Navbar from './Navbar';

interface HeaderProps {
  showLoginButton?: boolean;
  showNavbar?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLoginButton, showNavbar }) => {
  return (
    <header className="bg-blue-750 w-full">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between p-4">
        
        {/* Logo e Título */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-white text-lg md:text-2xl">Project Manager</h1>
        </div>

        {/* Navbar (condicional) */}
        {showNavbar && <Navbar />}

        {/* Botão de Login */}
        {showLoginButton && (
          <a 
            href="#" 
            className="w-[105px] md:w-[162px] lg:w-[240px] md:mt-0 md:ml-4 border border-white hover:border-[#268FE4]  rounded-full text-white text-center px-4 py-2 transition duration-400"
          >
            Login
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
