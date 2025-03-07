import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold hover:text-gray-300 transition-colors">
          AASARA CONSULTANTS
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#clients" className="hover:text-gray-300 transition-colors">
                Clients
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-300 transition-colors">
                Gallery
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 shadow-lg">
            <ul className="flex flex-col p-4">
              <li className="py-2">
                <a 
                  href="#home" 
                  className="block hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className="py-2">
                <a 
                  href="#about" 
                  className="block hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li className="py-2">
                <a 
                  href="#services" 
                  className="block hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li className="py-2">
                <a 
                  href="#clients" 
                  className="block hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clients
                </a>
              </li>
              <li className="py-2">
                <a 
                  href="#gallery" 
                  className="block hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};