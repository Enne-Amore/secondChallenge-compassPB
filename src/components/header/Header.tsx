import React from 'react';
import Navbar from './Navbar';
import "./style.css"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

interface HeaderProps {
  showLoginButton?: boolean;
  showNavbar?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLoginButton, showNavbar }) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      console.error("Erro ao tentar encerrar a sessão:", error);
    }
  };
  return (
    
    <header className="bg-blue-750 w-full font-roboto desktop:min-w-[1440px]">
      <div className=" mx-auto flex flex-wrap items-center justify-between p-4">
        
        {/* Logo e Título */}

        <div className="flex items-center space-x-4">
          <Link to='/' onClick={handleLogout}>
          <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
          </Link>
          <h1 className="text-white text-lg md:text-2xl">Project Manager</h1>
        </div>

        {/* Navbar (condicional) */}
        {showNavbar && <Navbar />}

        {/* Botão de Login */}
        {showLoginButton && (
              <Link
              to="/login"
              className="w-[105px] md:w-[162px] lg:w-[240px] 
                md:mt-0 md:ml-4 border border-white hover:border-[#268FE4] 
                transition duration-400 rounded-full text-white text-center 
                px-4 py-2"
            > Login
            </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
