import React, { useRef } from 'react';

type GallerySection = 'kitchen' | 'living-room' | 'bedroom' | 'wardrobe' | 'home-office' | 'bathroom' | 'space-saving' | 'home-interiors';

interface CarouselItem {
  id: string;
  title: string;
  image: string;
}

interface CarouselSection {
  id: string;
  label: string;
  targetSection?: GallerySection;
  items: CarouselItem[];
}

const sections: CarouselSection[] = [
  {
    id: 'e2e',
    label: 'End-to-end offerings',
    targetSection: 'home-interiors',
    items: [
      { id: 'e1', title: 'Living + TV Unit', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'e2', title: 'Dining + Storage', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'e3', title: 'Bedroom Suite', image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'e4', title: 'Kids Room', image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 'kitchen',
    label: 'Modular Kitchen Designs',
    targetSection: 'kitchen',
    items: [
      { id: 'k1', title: 'U-Shape Kitchen', image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'k2', title: 'Minimalist Kitchen', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'k3', title: 'Industrial Kitchen', image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'k4', title: 'Scandinavian Kitchen', image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 'living-room',
    label: 'Living Room Designs',
    targetSection: 'living-room',
    items: [
      { id: 'l1', title: 'Modern Living', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'l2', title: 'Cozy Family', image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'l3', title: 'Luxury Space', image: 'https://images.pexels.com/photos/1618506/pexels-photo-1618506.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'l4', title: 'Minimalist Lounge', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 'wardrobe',
    label: 'Wardrobe Designs',
    targetSection: 'wardrobe',
    items: [
      { id: 'w1', title: 'Walk-in', image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'w2', title: 'Built-in', image: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'w3', title: 'Classic Wood', image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
      { id: 'w4', title: 'Contemporary Closet', image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' }
    ]
  }
];

const HorizontalCarousel: React.FC<{ section: CarouselSection }> = ({ section }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    const container = scrollerRef.current;
    if (!container) return;
    const cardWidth = 320 + 16; // card width + gap
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const scrollAmount = cardWidth * Math.max(1, visibleCards - 1);
    container.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="mb-12">
      <div className="flex items-baseline justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">{section.label}</h3>
        <button
          onClick={() => {
            if (section.targetSection) {
              console.log('Dispatching navigate event for:', section.targetSection);
              const event = new CustomEvent('navigate', {
                detail: { view: 'design-gallery', section: section.targetSection },
                bubbles: true
              });
              window.dispatchEvent(event);
            }
          }}
          className="text-xs text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          See All
        </button>
      </div>

      <div className="relative">
        <div ref={scrollerRef} className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory pr-10 no-scrollbar">
          {section.items.map(item => (
            <div key={item.id} className="snap-start shrink-0 w-[320px]">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white cursor-pointer">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/320x200/f3f4f6/6b7280?text=Image+Loading';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-3">
                  <div className="text-sm font-medium text-gray-900 truncate">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            aria-label="scroll left"
            onClick={() => scroll('left')}
            className="w-8 h-8 -ml-4 rounded-full bg-white/90 backdrop-blur shadow grid place-items-center hover:shadow-md"
          >
            <span className="text-gray-700">‹</span>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            aria-label="scroll right"
            onClick={() => scroll('right')}
            className="w-8 h-8 -mr-4 rounded-full bg-white/90 backdrop-blur shadow grid place-items-center hover:shadow-md"
          >
            <span className="text-gray-700">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white pt-6 pb-4">
      <div className="container mx-auto px-4">
        {sections.map(section => (
          <HorizontalCarousel key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
};

export default Services;