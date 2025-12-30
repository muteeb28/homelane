import React from 'react';
import GalleryCard from './GalleryCard';
import { GalleryImage } from '../../types/gallery';

const WardrobeGallery: React.FC = () => {
  const wardrobeImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
      title: 'Walk-in Wardrobe',
      description: 'Spacious walk-in closet with organized storage and luxury finishes',
      category: 'wardrobe',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg',
      title: 'Modern Built-in Wardrobe',
      description: 'Sleek built-in wardrobe with sliding doors and smart organization',
      category: 'wardrobe',
      photographer: 'Vecislavas Popa'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      title: 'Classic Wooden Wardrobe',
      description: 'Traditional wooden wardrobe with elegant design and ample storage',
      category: 'wardrobe',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
      title: 'Contemporary Closet Design',
      description: 'Modern closet with glass doors and LED lighting',
      category: 'wardrobe',
      photographer: 'Pixabay'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      title: 'Minimalist Wardrobe',
      description: 'Clean and simple wardrobe design with hidden storage solutions',
      category: 'wardrobe',
      photographer: 'Huy Phan'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      title: 'Luxury Dressing Room',
      description: 'Premium dressing room with custom organizers and mirrors',
      category: 'wardrobe',
      photographer: 'Daria Shevtsova'
    }
  ];

  return (
    <section id="wardrobe" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wardrobe Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Maximize your storage with our smart wardrobe solutions. From walk-in closets to space-saving designs, 
            organize your wardrobe in style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wardrobeImages.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Wardrobe Solutions</h3>
            <p className="text-gray-600 mb-6">
              Get personalized wardrobe designs that fit your space and lifestyle perfectly.
            </p>
            <button className="btn-primary">Design My Wardrobe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WardrobeGallery;