import React from 'react';
import GalleryCard from './GalleryCard';
import { GalleryImage } from '../../types/gallery';

const BathroomGallery: React.FC = () => {
  const bathroomImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
      title: 'Luxury Master Bathroom',
      description: 'Spa-like master bathroom with marble finishes and modern fixtures',
      category: 'bathroom',
      photographer: 'Jean van der Meulen'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      title: 'Modern Bathroom Design',
      description: 'Contemporary bathroom with clean lines and premium materials',
      category: 'bathroom',
      photographer: 'Mediocridad'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      title: 'Minimalist Bathroom',
      description: 'Simple yet elegant bathroom design with focus on functionality',
      category: 'bathroom',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      title: 'Compact Bathroom',
      description: 'Space-efficient bathroom solution for smaller homes',
      category: 'bathroom',
      photographer: 'Huy Phan'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      title: 'Classic Bathroom',
      description: 'Timeless bathroom design with traditional elements',
      category: 'bathroom',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg',
      title: 'Contemporary Guest Bathroom',
      description: 'Stylish guest bathroom with modern amenities',
      category: 'bathroom',
      photographer: 'Vecislavas Popa'
    }
  ];

  return (
    <section id="bathroom" className="section-padding bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Bathroom Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your bathroom into a personal spa retreat with our elegant and functional designs. 
            From luxury to compact solutions, create your perfect bathroom space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bathroomImages.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Personal Spa Awaits</h3>
            <p className="text-gray-600 mb-6">
              Create a bathroom that combines luxury, functionality, and your personal style.
            </p>
            <button className="btn-primary">Design My Bathroom</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BathroomGallery;