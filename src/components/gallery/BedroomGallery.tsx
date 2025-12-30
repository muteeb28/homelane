import React from 'react';
import GalleryCard from './GalleryCard';
import { GalleryImage } from '../../types/gallery';

const BedroomGallery: React.FC = () => {
  const bedroomImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      title: 'Modern Master Bedroom',
      description: 'Elegant contemporary bedroom with minimalist design and natural lighting',
      category: 'bedroom',
      photographer: 'Pixabay'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
      title: 'Scandinavian Style Bedroom',
      description: 'Clean lines and neutral colors create a peaceful sleeping environment',
      category: 'bedroom',
      photographer: 'Jean van der Meulen'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      title: 'Luxury Bedroom Suite',
      description: 'Opulent bedroom design with premium materials and rich textures',
      category: 'bedroom',
      photographer: 'Victoria Borodinova'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg',
      title: 'Cozy Bedroom Retreat',
      description: 'Warm and inviting bedroom with soft lighting and comfortable furnishing',
      category: 'bedroom',
      photographer: 'Vecislavas Popa'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      title: 'Industrial Bedroom Design',
      description: 'Urban bedroom with exposed elements and contemporary styling',
      category: 'bedroom',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      title: 'Minimalist Bedroom',
      description: 'Simple yet sophisticated bedroom design with clean aesthetics',
      category: 'bedroom',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '7',
      url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      title: 'Bohemian Bedroom Style',
      description: 'Eclectic bedroom with rich colors and textured fabrics',
      category: 'bedroom',
      photographer: 'Mediocridad'
    },
    {
      id: '8',
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      title: 'Contemporary Bedroom',
      description: 'Modern bedroom with sleek furniture and artistic elements',
      category: 'bedroom',
      photographer: 'Huy Phan'
    }
  ];

  return (
    <section id="bedroom" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Bedroom Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your bedroom into a personal sanctuary with our stunning design collections. 
            From minimalist to luxurious, find the perfect style for your peaceful retreat.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Storage</h3>
            <p className="text-gray-600">Built-in wardrobes and smart storage solutions</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ambient Lighting</h3>
            <p className="text-gray-600">Perfect lighting design for relaxation and functionality</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Comfort</h3>
            <p className="text-gray-600">Luxurious materials and ergonomic design</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bedroomImages.map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
              onClick={() => console.log('Image clicked:', image.title)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Design Your Dream Bedroom?</h3>
            <p className="text-gray-600 mb-6">
              Our expert designers will help you create the perfect bedroom that reflects your style and meets your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Free Consultation
              </button>
              <button className="btn-secondary">
                View More Designs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BedroomGallery;