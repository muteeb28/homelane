import React, { useState } from 'react';
import ConsultationModal from './modals/ConsultationModal';
import PortfolioModal from './modals/PortfolioModal';

const Hero: React.FC = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Home Into Your 
              <span className="text-primary-600"> Dream Space</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              End-to-end interior design solutions with 45-day delivery guarantee. 
              600+ design experts, 10-year warranty, and personalized designs just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="btn-primary text-lg px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Free Design Consultation
              </button>
              <button 
                onClick={() => setIsPortfolioModalOpen(true)}
                className="btn-secondary text-lg px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View Our Work
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">600+</div>
                <div className="text-sm text-gray-600">Design Experts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">45</div>
                <div className="text-sm text-gray-600">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10</div>
                <div className="text-sm text-gray-600">Year Warranty</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-4 transform rotate-2 overflow-hidden">
              <div className="rounded-xl h-96 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg" 
                  alt="Luxury bedroom with elegant chandelier and premium interior design"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Overlay with Text */}
              <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white text-lg font-semibold">Luxury Interior Design</p>
                <p className="text-white/80 text-sm">Transform your space into a dream home</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium transform -rotate-12 shadow-lg">
              Free Consultation
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-12 shadow-lg">
              10 Year Warranty
            </div>
            
            {/* Additional floating badge */}
            <div className="absolute top-8 -left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium transform rotate-12 shadow-lg">
              Premium Quality
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />

      {/* Portfolio Modal */}
      <PortfolioModal 
        isOpen={isPortfolioModalOpen} 
        onClose={() => setIsPortfolioModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;