
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Quote className="text-primary mb-4" size={32} />
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        {image && (
          <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
