import React from 'react';
import GalleryCard from './GalleryCard';
import { GalleryImage } from '../../types/gallery';

const ModularKitchenGallery: React.FC = () => {
  const kitchenImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      title: 'Modern U-Shape Kitchen',
      description: 'Spacious U-shaped kitchen with contemporary cabinets and marble countertops',
      category: 'kitchen',
      photographer: 'Mark McCammon'
    },
    {
      id: '2',
      url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      title: 'Minimalist Kitchen Design',
      description: 'Clean white kitchen with sleek appliances and handle-less cabinets',
      category: 'kitchen',
      photographer: 'Daria Shevtsova'
    },
    {
      id: '3',
      url: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
      title: 'Industrial Kitchen Style',
      description: 'Urban kitchen featuring exposed brick and stainless steel appliances',
      category: 'kitchen',
      photographer: 'Fotoaibe'
    },
    {
      id: '4',
      url: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      title: 'Scandinavian Kitchen',
      description: 'Light wood cabinets with white countertops and natural lighting',
      category: 'kitchen',
      photographer: 'Jean van der Meulen'
    },
    {
      id: '5',
      url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      title: 'Luxury Kitchen Island',
      description: 'Premium kitchen with large island and high-end finishes',
      category: 'kitchen',
      photographer: 'Joey Galang'
    },
    {
      id: '6',
      url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      title: 'Contemporary L-Shape Kitchen',
      description: 'Efficient L-shaped layout with smart storage solutions',
      category: 'kitchen',
      photographer: 'Jean van der Meulen'
    },
    {
      id: '7',
      url: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
      title: 'Classic White Kitchen',
      description: 'Timeless white kitchen with traditional styling and modern functionality',
      category: 'kitchen',
      photographer: 'Jean van der Meulen'
    },
    {
      id: '8',
      url: 'https://images.pexels.com/photos/1963041/pexels-photo-1963041.jpeg',
      title: 'Dark Theme Kitchen',
      description: 'Sophisticated dark kitchen with contrasting light elements',
      category: 'kitchen',
      photographer: 'Charlotte May'
    }
  ];

  return (
    <section id="modular-kitchen" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Modular Kitchen Designs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium modular kitchen collections that blend functionality with aesthetics. 
            From contemporary to classic, create your perfect culinary space.
          </p>
        </div>

        {/* Kitchen Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Storage</h3>
            <p className="text-sm text-gray-600">Intelligent cabinet systems with maximum space utilization</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Appliances</h3>
            <p className="text-sm text-gray-600">Integrated modern appliances from top brands</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Materials</h3>
            <p className="text-sm text-gray-600">Durable materials with water and termite resistance</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Design</h3>
            <p className="text-sm text-gray-600">Personalized layouts tailored to your space and needs</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kitchenImages.map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
              onClick={() => console.log('Kitchen image clicked:', image.title)}
            />
          ))}
        </div>

        {/* Kitchen Styles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Kitchen Styles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Contemporary</h4>
              <p className="text-gray-600 text-sm">Clean lines, minimalist design, and integrated appliances</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Scandinavian</h4>
              <p className="text-gray-600 text-sm">Light wood, white finishes, and natural elements</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Industrial</h4>
              <p className="text-gray-600 text-sm">Raw materials, exposed elements, and urban aesthetics</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Dream Kitchen?</h3>
            <p className="text-gray-600 mb-6">
              Get a personalized kitchen design consultation and transform your cooking space into a culinary paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Free Kitchen Consultation
              </button>
              <button className="btn-secondary">
                Calculate Kitchen Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularKitchenGallery;