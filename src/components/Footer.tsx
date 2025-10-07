import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-silver-800 text-silver-100 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <span className="font-script text-2xl text-primary-500">Herica & Luis</span>
          </div>
          
          <div className="text-center mb-6 md:mb-0">
            <a 
              href="https://g.co/kgs/CoKKWFA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary-300 transition-colors"
            >
              <MapPin className="mr-2" size={18} />
              <span>ESPAÇO ZARIFI</span>
              <ExternalLink className="ml-1" size={14} />
            </a>
          </div>
          
          <div className="text-sm text-silver-300">
            <p>&copy; {new Date().getFullYear()} | Desenvolvido por João Mello</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;