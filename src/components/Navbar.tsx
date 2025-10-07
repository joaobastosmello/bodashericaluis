import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-silver-100 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <span className="font-script text-3xl text-primary-500 font-medium">HL</span>
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => 
              isActive ? 'nav-link active' : 'nav-link'
            }>
              INICIO
            </NavLink>
            <NavLink to="/presentear" className={({isActive}) => 
              isActive ? 'nav-link active' : 'nav-link'
            }>
              PRESENTEAR
            </NavLink>
            <NavLink to="/convite" className={({isActive}) => 
              isActive ? 'nav-link active' : 'nav-link'
            }>
              CONVITE
            </NavLink>
          </div>
          
          <button 
            className="md:hidden text-silver-700 hover:text-primary-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-silver-100 mt-4 rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <NavLink to="/" className={({isActive}) => 
                isActive ? 'nav-link active' : 'nav-link'
              }>
                INICIO
              </NavLink>
              <NavLink to="/presentear" className={({isActive}) => 
                isActive ? 'nav-link active' : 'nav-link'
              }>
                PRESENTEAR
              </NavLink>
              <NavLink to="/convite" className={({isActive}) => 
                isActive ? 'nav-link active' : 'nav-link'
              }>
                CONVITE
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;