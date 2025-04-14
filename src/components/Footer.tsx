
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GOSS UNITED</h3>
            <p className="mb-4">
              Bâtir un avenir inclusif pour les enfants orphelins et démunis en République Démocratique du Congo.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">À propos</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-accent transition-colors">Nos actions</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-accent transition-colors">Actualités</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-accent transition-colors">Faire un don</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Avenue de la Paix, Kinshasa, RDC</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} className="flex-shrink-0" />
                <span>+243 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} className="flex-shrink-0" />
                <span>contact@gossunited.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Inscrivez-vous pour recevoir nos actualités.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-4 py-2 rounded-md text-gray-800"
                required
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} GOSS UNITED asbl. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
