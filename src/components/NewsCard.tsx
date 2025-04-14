
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, summary, image, date, category }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Link to={`/news/${id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md mr-3">
            {category}
          </span>
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {date}
          </span>
        </div>
        <Link to={`/news/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{summary}</p>
        <Link 
          to={`/news/${id}`} 
          className="text-primary font-medium hover:underline"
        >
          Lire la suite
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
