import React, { useState } from 'react';

type AppView = 'home' | 'design-gallery';
type GallerySection = 'kitchen' | 'living-room' | 'bedroom' | 'wardrobe' | 'home-office' | 'bathroom' | 'space-saving' | 'home-interiors';

interface HeaderProps {
  onNavigate: (view: AppView, section?: GallerySection) => void;
  currentView: AppView;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-primary-600">HomeLane</h2>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6">
            <li>
              <button 
                onClick={() => {
                  console.log('Home clicked');
                  onNavigate('home');
                }} 
                className={`transition-colors cursor-pointer ${
                  currentView === 'home' 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Home
              </button>
            </li>
            
            {/* Design Gallery Dropdown */}
            <li className="relative group">
              <button 
                onClick={() => {
                  console.log('Design Gallery clicked');
                  onNavigate('design-gallery');
                }} 
                className={`transition-colors flex items-center cursor-pointer ${
                  currentView === 'design-gallery' 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Design Gallery
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <button 
                    onClick={() => onNavigate('design-gallery', 'kitchen')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Modular Kitchen
                  </button>
                  <button 
                    onClick={() => onNavigate('design-gallery', 'living-room')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Living Room
                  </button>
                  <button 
                    onClick={() => onNavigate('design-gallery', 'wardrobe')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Wardrobe
                  </button>
                  <button 
                    onClick={() => onNavigate('design-gallery', 'home-office')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Home Office
                  </button>
                  <button 
                    onClick={() => onNavigate('design-gallery', 'bedroom')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Bedroom
                  </button>
                  <button 
                    onClick={() => onNavigate('design-gallery', 'bathroom')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Bathroom
                  </button>
                  <button 
                    onClick={() => onNavigate('design-gallery', 'space-saving')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Space Saving Furniture
                  </button>
                  <button 
                    onClick={() => onNavigate('design-gallery', 'home-interiors')} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Home Interiors
                  </button>
                </div>
              </div>
            </li>

            {/* Offerings Dropdown */}
            <li className="relative group">
              <a href="#offerings" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                Offerings
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <a href="#homelane-deco" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                    <div className="font-medium">HomeLane Deco</div>
                    <div className="text-xs text-gray-500">Pocket-friendly interior solutions</div>
                  </a>
                  <a href="#homelane" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                    <div className="font-medium">HomeLane</div>
                    <div className="text-xs text-gray-500">End-to-end interior solutions</div>
                  </a>
                  <a href="#homelane-luxe" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                    <div className="font-medium">HomeLane Luxe</div>
                    <div className="text-xs text-gray-500">Luxury interior solutions</div>
                  </a>
                  <a href="#cubico" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">
                    <div className="font-medium">Cubico</div>
                    <div className="text-xs text-gray-500">Smart business interior solutions</div>
                  </a>
                </div>
              </div>
            </li>

            {/* More Dropdown */}
            <li className="relative group">
              <a href="#more" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <a href="#price-calculator" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Price Calculator</a>
                  <a href="#customer-stories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Customer Stories</a>
                  <a href="#blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blogs</a>
                </div>
              </div>
            </li>

            <li>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    onNavigate('home');
                    setIsMenuOpen(false);
                  }} 
                  className={`block py-2 w-full text-left ${
                    currentView === 'home' 
                      ? 'text-primary-600 font-semibold' 
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  Home
                </button>
              </li>
              
              {/* Design Gallery Mobile */}
              <li>
                <button 
                  onClick={() => {
                    onNavigate('design-gallery');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left font-medium py-2 ${
                    currentView === 'design-gallery' 
                      ? 'text-primary-600 font-semibold' 
                      : 'text-gray-700'
                  }`}
                >
                  Design Gallery
                </button>
                <ul className="ml-4 space-y-1">
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'kitchen');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Modular Kitchen
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'living-room');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Living Room
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'wardrobe');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Wardrobe
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'home-office');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Home Office
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'bedroom');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Bedroom
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'bathroom');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Bathroom
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'space-saving');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Space Saving Furniture
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        onNavigate('design-gallery', 'home-interiors');
                        setIsMenuOpen(false);
                      }} 
                      className="block w-full text-left py-1 text-gray-600 hover:text-primary-600"
                    >
                      Home Interiors
                    </button>
                  </li>
                </ul>
              </li>

              {/* Offerings Mobile */}
              <li>
                <div className="text-gray-700 font-medium py-2">Offerings</div>
                <ul className="ml-4 space-y-1">
                  <li><a href="#homelane-deco" className="block py-1 text-gray-600 hover:text-primary-600">HomeLane Deco</a></li>
                  <li><a href="#homelane" className="block py-1 text-gray-600 hover:text-primary-600">HomeLane</a></li>
                  <li><a href="#homelane-luxe" className="block py-1 text-gray-600 hover:text-primary-600">HomeLane Luxe</a></li>
                  <li><a href="#cubico" className="block py-1 text-gray-600 hover:text-primary-600">Cubico</a></li>
                </ul>
              </li>

              {/* More Mobile */}
              <li>
                <div className="text-gray-700 font-medium py-2">More</div>
                <ul className="ml-4 space-y-1">
                  <li><a href="#price-calculator" className="block py-1 text-gray-600 hover:text-primary-600">Price Calculator</a></li>
                  <li><a href="#customer-stories" className="block py-1 text-gray-600 hover:text-primary-600">Customer Stories</a></li>
                  <li><a href="#blogs" className="block py-1 text-gray-600 hover:text-primary-600">Blogs</a></li>
                </ul>
              </li>

              <li>
                <a href="#about" className="block py-2 text-gray-700 hover:text-primary-600">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 text-gray-700 hover:text-primary-600">
                  Contact
                </a>
              </li>
              <li>
                <button className="btn-primary w-full mt-2">
                  Free Consultation
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;