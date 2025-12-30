import React, { useEffect } from 'react';
import BedroomGallery from './BedroomGallery';
import ModularKitchenGallery from './ModularKitchenGallery';
import LivingRoomGallery from './LivingRoomGallery';
import WardrobeGallery from './WardrobeGallery';
import HomeOfficeGallery from './HomeOfficeGallery';
import BathroomGallery from './BathroomGallery';

type GallerySection = 'kitchen' | 'living-room' | 'bedroom' | 'wardrobe' | 'home-office' | 'bathroom' | 'space-saving' | 'home-interiors';

interface DesignGalleryProps {
  activeSection: GallerySection;
  onSectionChange: (section: GallerySection) => void;
}

const DesignGallery: React.FC<DesignGalleryProps> = ({ activeSection, onSectionChange }) => {

  const galleryTabs = [
    { id: 'kitchen', label: 'Modular Kitchen', icon: '🍽️' },
    { id: 'living-room', label: 'Living Room', icon: '🛋️' },
    { id: 'bedroom', label: 'Bedroom', icon: '🛏️' },
    { id: 'wardrobe', label: 'Wardrobe', icon: '👔' },
    { id: 'home-office', label: 'Home Office', icon: '💻' },
    { id: 'bathroom', label: 'Bathroom', icon: '🛁' },
    { id: 'space-saving', label: 'Space Saving', icon: '📦' },
    { id: 'home-interiors', label: 'Home Interiors', icon: '🏠' }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'kitchen':
        return <ModularKitchenGallery />;
      case 'living-room':
        return <LivingRoomGallery />;
      case 'bedroom':
        return <BedroomGallery />;
      case 'wardrobe':
        return <WardrobeGallery />;
      case 'home-office':
        return <HomeOfficeGallery />;
      case 'bathroom':
        return <BathroomGallery />;
      case 'space-saving':
        return (
          <section className="section-padding bg-gray-50">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Space Saving Furniture</h2>
              <p className="text-xl text-gray-600 mb-8">Smart furniture solutions for compact living spaces</p>
              <div className="bg-white rounded-lg p-8">
                <p className="text-gray-600">Gallery coming soon...</p>
              </div>
            </div>
          </section>
        );
      case 'home-interiors':
        return (
          <section className="section-padding bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Home Interiors</h2>
              <p className="text-xl text-gray-600 mb-8">Complete home interior solutions and decor</p>
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="text-gray-600">Gallery coming soon...</p>
              </div>
            </div>
          </section>
        );
      default:
        return <ModularKitchenGallery />;
    }
  };

  return (
    <div id="design-gallery" className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Design Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore our stunning collection of interior designs across different rooms and spaces. 
            Get inspired and find the perfect style for your home.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-4">
            {galleryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSectionChange(tab.id as GallerySection)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap mr-4 transition-all duration-200 ${
                  activeSection === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <div className="min-h-screen">
        {renderActiveSection()}
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Design Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our expert designers are here to bring your vision to life with personalized solutions for every space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Calculate Price
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignGallery;