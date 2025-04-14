
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface DonateButtonProps {
  large?: boolean;
  className?: string;
}

const DonateButton: React.FC<DonateButtonProps> = ({ large = false, className = '' }) => {
  return (
    <Link to="/donate">
      <Button 
        className={`${large ? 'text-lg py-6 px-8' : ''} bg-accent hover:bg-accent/90 gap-2 ${className}`}
      >
        <Heart size={large ? 20 : 16} className="mr-1" /> 
        Faire un don
      </Button>
    </Link>
  );
};

export default DonateButton;
