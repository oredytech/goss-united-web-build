
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary font-heading font-bold text-2xl">GOSS UNITED</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
              À propos
            </Link>
            <Link to="/programs" className="text-gray-700 hover:text-primary font-medium">
              Nos actions
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-primary font-medium">
              Actualités
            </Link>
            <Link to="/youth" className="text-gray-700 hover:text-primary font-medium">
              Espace Jeunes
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
            <Link to="/donate">
              <Button className="bg-accent hover:bg-accent/90">Faire un don</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/programs" 
                className="text-gray-700 hover:text-primary font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos actions
              </Link>
              <Link 
                to="/news" 
                className="text-gray-700 hover:text-primary font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link 
                to="/youth" 
                className="text-gray-700 hover:text-primary font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Espace Jeunes
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-accent hover:bg-accent/90 w-full">Faire un don</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
