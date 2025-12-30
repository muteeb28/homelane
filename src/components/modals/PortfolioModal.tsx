import React, { useState } from 'react';
import { Project, ProjectCategory } from '../../types/portfolio';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Modern Luxury Kitchen',
      category: 'kitchen',
      location: 'Mumbai, Maharashtra',
      completionTime: '35 days',
      budget: '₹8.5 Lakhs',
      description: 'A stunning modern kitchen transformation featuring premium German hardware, quartz countertops, and smart storage solutions.',
      afterImage: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      features: ['Modular Cabinets', 'Quartz Countertops', 'German Hardware', 'Built-in Appliances', 'LED Lighting'],
      client: 'The Sharma Family'
    },
    {
      id: '2',
      title: 'Contemporary Living Room',
      category: 'living-room',
      location: 'Bangalore, Karnataka',
      completionTime: '28 days',
      budget: '₹6.2 Lakhs',
      description: 'Complete living room makeover with contemporary furniture, ambient lighting, and space optimization for a young couple.',
      afterImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['Custom Sofa', 'Entertainment Unit', 'Ambient Lighting', 'False Ceiling', 'Window Treatments'],
      client: 'The Verma Family'
    },
    {
      id: '3',
      title: 'Elegant Master Bedroom',
      category: 'bedroom',
      location: 'Delhi NCR',
      completionTime: '25 days',
      budget: '₹4.8 Lakhs',
      description: 'Luxurious master bedroom design with custom wardrobe, study area, and premium materials creating a serene retreat.',
      afterImage: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      features: ['Custom Wardrobe', 'Study Nook', 'Premium Bedding', 'Chandelier', 'Walk-in Closet'],
      client: 'The Gupta Family'
    },
    {
      id: '4',
      title: 'Spa-like Master Bathroom',
      category: 'bathroom',
      location: 'Pune, Maharashtra',
      completionTime: '20 days',
      budget: '₹3.5 Lakhs',
      description: 'Transformed a regular bathroom into a spa-like retreat with marble finishes, rainfall shower, and modern fixtures.',
      afterImage: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
      features: ['Marble Finishes', 'Rainfall Shower', 'Modern Fixtures', 'Heated Floors', 'Smart Mirror'],
      client: 'The Patel Family'
    },
    {
      id: '5',
      title: 'Scandinavian Style Kitchen',
      category: 'kitchen',
      location: 'Hyderabad, Telangana',
      completionTime: '30 days',
      budget: '₹5.8 Lakhs',
      description: 'Clean, minimalist Scandinavian kitchen with light wood cabinets, white countertops, and efficient storage solutions.',
      afterImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      features: ['Light Wood Cabinets', 'White Countertops', 'Minimalist Design', 'Efficient Storage', 'Natural Lighting'],
      client: 'The Singh Family'
    },
    {
      id: '6',
      title: 'Complete Home Interior',
      category: 'complete-home',
      location: 'Chennai, Tamil Nadu',
      completionTime: '45 days',
      budget: '₹15.2 Lakhs',
      description: 'Full home interior design covering all rooms with a cohesive modern theme, custom furniture, and premium finishes throughout.',
      afterImage: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      features: ['Complete Home Design', 'Custom Furniture', 'Premium Finishes', 'Smart Home Integration', 'Landscaping'],
      client: 'The Reddy Family'
    },
    {
      id: '7',
      title: 'Cozy Bedroom Retreat',
      category: 'bedroom',
      location: 'Kolkata, West Bengal',
      completionTime: '22 days',
      budget: '₹3.8 Lakhs',
      description: 'Warm and cozy bedroom design with soft lighting, comfortable furnishing, and personalized decor elements.',
      afterImage: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg',
      features: ['Soft Lighting', 'Comfortable Furniture', 'Personalized Decor', 'Reading Nook', 'Storage Solutions'],
      client: 'The Das Family'
    },
    {
      id: '8',
      title: 'Open Concept Living',
      category: 'living-room',
      location: 'Ahmedabad, Gujarat',
      completionTime: '32 days',
      budget: '₹7.2 Lakhs',
      description: 'Spacious open-concept living and dining area perfect for entertaining, featuring modern furniture and artistic elements.',
      afterImage: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      features: ['Open Concept', 'Modern Furniture', 'Artistic Elements', 'Entertainment Area', 'Dining Space'],
      client: 'The Joshi Family'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🏠' },
    { id: 'kitchen', label: 'Kitchens', icon: '🍽️' },
    { id: 'living-room', label: 'Living Rooms', icon: '🛋️' },
    { id: 'bedroom', label: 'Bedrooms', icon: '🛏️' },
    { id: 'bathroom', label: 'Bathrooms', icon: '🛁' },
    { id: 'complete-home', label: 'Complete Homes', icon: '🏡' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
      setSelectedProject(null);
    }
  };

  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {selectedProject ? (
          /* Project Detail View */
          <div className="h-full flex flex-col">
            {/* Project Detail Header */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <button 
                    onClick={closeProjectDetail}
                    className="flex items-center space-x-2 text-white hover:text-gray-200 mb-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Portfolio</span>
                  </button>
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <p className="text-blue-100">{selectedProject.location}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project Detail Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div>
                  <img 
                    src={selectedProject.afterImage} 
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Client:</span>
                        <p className="text-gray-600">{selectedProject.client}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Location:</span>
                        <p className="text-gray-600">{selectedProject.location}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Completion Time:</span>
                        <p className="text-gray-600">{selectedProject.completionTime}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Investment:</span>
                        <p className="text-gray-600">{selectedProject.budget}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="btn-primary w-full">
                      Get Similar Design for Your Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Portfolio Grid View */
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Our Work Portfolio</h2>
                  <p className="text-blue-100">Inspiring home transformations by HomeLane</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as ProjectCategory)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className="font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    onClick={() => openProjectDetail(project)}
                    className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={project.afterImage} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>📍 {project.location}</p>
                        <p>⏱️ {project.completionTime}</p>
                        <p>💰 {project.budget}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Ready to transform your home like these amazing projects?</p>
                <button className="btn-primary">
                  Start Your Home Transformation
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioModal;