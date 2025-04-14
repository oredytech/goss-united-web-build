
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  backgroundImage = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
}) => {
  return (
    <div 
      className="relative bg-primary py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 94, 163, 0.85), rgba(0, 94, 163, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom text-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
