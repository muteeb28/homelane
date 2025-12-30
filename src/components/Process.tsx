import React from 'react';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, description, isLast }) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="relative z-10 bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
      {stepNumber}
    </div>
    
    {/* Connector Line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 z-0" 
           style={{ width: 'calc(100% - 4rem)', marginLeft: '2rem' }} />
    )}
    
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 max-w-xs">{description}</p>
  </div>
);

const Process: React.FC = () => {
  const steps = [
    {
      title: 'Free Consultation',
      description: 'Book a free design consultation online or visit our experience center'
    },
    {
      title: '3D Design',
      description: 'Our experts create personalized 3D designs based on your requirements'
    },
    {
      title: 'Material Selection',
      description: 'Choose from premium materials and finishes for your interiors'
    },
    {
      title: 'Installation',
      description: 'Professional installation with quality checks at every milestone'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to transform your home
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Schedule your free consultation today and take the first step towards your dream home.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;