import React from 'react';
import GalleryCard from './GalleryCard';
import { GalleryImage } from '../../types/gallery';

const HomeOfficeGallery: React.FC = () => {
  const officeImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
      title: 'Modern Home Office',
      description: 'Contemporary workspace with ergonomic furniture and natural lighting',
      category: 'home-office',
      photographer: 'Huy Phan'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      title: 'Minimalist Study Room',
      description: 'Clean and organized study space for maximum productivity',
      category: 'home-office',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
      title: 'Executive Home Office',
      description: 'Professional workspace with premium finishes and built-in storage',
      category: 'home-office',
      photographer: 'Vecislavas Popa'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      title: 'Creative Workspace',
      description: 'Inspiring home office setup for creative professionals',
      category: 'home-office',
      photographer: 'Joey Galang'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      title: 'Compact Home Office',
      description: 'Space-efficient office design perfect for small homes',
      category: 'home-office',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      title: 'Scandinavian Office',
      description: 'Nordic-inspired workspace with natural materials and clean design',
      category: 'home-office',
      photographer: 'Huy Phan'
    }
  ];

  return (
    <section id="home-office" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Home Office Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create the perfect work-from-home environment with our productive and inspiring home office designs. 
            Balance comfort and functionality in your personal workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeImages.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Boost Your Productivity</h3>
            <p className="text-gray-600 mb-6">
              Design a home office that enhances your work performance and creativity.
            </p>
            <button className="btn-primary">Plan My Office Space</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOfficeGallery;