
import React from 'react';

interface Partner {
  name: string;
  logo: string;
}

interface PartnerLogosProps {
  partners: Partner[];
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({ partners }) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <h3 className="text-xl font-bold text-center mb-8 text-gray-700">Nos Partenaires</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <img src={partner.logo} alt={partner.name} className="h-12 md:h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
