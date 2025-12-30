import React from 'react';
import { GalleryImage } from '../../types/gallery';

interface GalleryCardProps {
  image: GalleryImage;
  onClick?: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-4 aspect-h-3 bg-gray-200">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
          <p className="text-sm text-gray-200">{image.description}</p>
          {image.photographer && (
            <p className="text-xs text-gray-300 mt-2">Photo by {image.photographer}</p>
          )}
        </div>
      </div>

      {/* View Details Button */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;