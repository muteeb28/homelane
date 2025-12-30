import React from 'react';
import GalleryCard from './GalleryCard';
import { GalleryImage } from '../../types/gallery';

const LivingRoomGallery: React.FC = () => {
  const livingRoomImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Modern Living Room',
      description: 'Contemporary living space with clean lines and neutral color palette',
      category: 'living-room',
      photographer: 'Vecislavas Popa'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
      title: 'Cozy Family Room',
      description: 'Warm and inviting family living room with comfortable seating',
      category: 'living-room',
      photographer: 'Victoria Borodinova'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1618506/pexels-photo-1618506.jpeg',
      title: 'Luxury Living Space',
      description: 'Elegant living room with premium furnishing and sophisticated decor',
      category: 'living-room',
      photographer: 'Martin Péchy'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      title: 'Minimalist Lounge',
      description: 'Simple yet stylish living room with focus on functionality',
      category: 'living-room',
      photographer: 'Huy Phan'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      title: 'Open Concept Living',
      description: 'Spacious open-plan living area perfect for entertaining',
      category: 'living-room',
      photographer: 'Joey Galang'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      title: 'Scandinavian Living Room',
      description: 'Nordic-inspired living space with natural materials and light colors',
      category: 'living-room',
      photographer: 'Jean van der Meulen'
    },
    {
      id: '7',
      url: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      title: 'Industrial Style Living',
      description: 'Urban living room with exposed elements and modern furniture',
      category: 'living-room',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '8',
      url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      title: 'Contemporary Entertainment Space',
      description: 'Modern living room designed for relaxation and entertainment',
      category: 'living-room',
      photographer: 'Daria Shevtsova'
    }
  ];

  return (
    <section id="living-room" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Living Room Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create the perfect living space where comfort meets style. Explore our curated collection 
            of living room designs that bring families together and make lasting memories.
          </p>
        </div>

        {/* Living Room Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Smart Furniture</h3>
            <p className="text-xs text-gray-600">Multi-functional furniture for modern living</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Perfect Lighting</h3>
            <p className="text-xs text-gray-600">Ambient and task lighting solutions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Entertainment Setup</h3>
            <p className="text-xs text-gray-600">Integrated TV and media solutions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Comfort First</h3>
            <p className="text-xs text-gray-600">Ergonomic seating and cozy atmosphere</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {livingRoomImages.map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
              onClick={() => console.log('Living room image clicked:', image.title)}
            />
          ))}
        </div>

        {/* Style Guide */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Living Room Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-900">Modern</h4>
              </div>
              <p className="text-sm text-gray-600">Clean lines, minimal clutter, neutral colors</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">🌿</div>
                <h4 className="font-semibold text-gray-900">Scandinavian</h4>
              </div>
              <p className="text-sm text-gray-600">Light woods, whites, cozy textures</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">🎭</div>
                <h4 className="font-semibold text-gray-900">Traditional</h4>
              </div>
              <p className="text-sm text-gray-600">Rich fabrics, warm colors, classic furniture</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">🏭</div>
                <h4 className="font-semibold text-gray-900">Industrial</h4>
              </div>
              <p className="text-sm text-gray-600">Raw materials, exposed elements, urban feel</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Living Space Today</h3>
            <p className="text-gray-600 mb-6">
              Let our expert designers help you create a living room that perfectly reflects your lifestyle and brings your family together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Design Consultation
              </button>
              <button className="btn-secondary">
                Explore More Styles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivingRoomGallery;