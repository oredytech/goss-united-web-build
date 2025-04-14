
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  bio, 
  image, 
  socialLinks 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4 line-clamp-3">{bio}</p>
        
        {socialLinks && (
          <div className="flex space-x-3">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
