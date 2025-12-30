import { ChatBotResponse } from '../types/chat';

const chatResponses: Record<string, ChatBotResponse> = {
  greeting: {
    text: "Hello! Welcome to HomeLane! 👋 I'm here to help you transform your home into your dream space. How can I assist you today?",
    quickReplies: [
      { text: "Free Consultation", action: "consultation" },
      { text: "Our Services", action: "services" },
      { text: "Pricing Info", action: "pricing" },
      { text: "Talk to Expert", action: "whatsapp" }
    ]
  },
  consultation: {
    text: "Great! We offer free design consultations both online and at our experience centers. Our design experts will understand your requirements and create personalized 3D designs for your space.",
    quickReplies: [
      { text: "Book Consultation", action: "book_consultation" },
      { text: "WhatsApp Us", action: "whatsapp" },
      { text: "Our Process", action: "process" }
    ]
  },
  services: {
    text: "We provide comprehensive interior design solutions including:\n\n🍽️ Modular Kitchens\n👔 Wardrobes\n🛋️ Living Room Design\n🛏️ Bedroom Design\n💻 Home Office\n🧸 Kids Bedroom\n\nWhich service interests you most?",
    quickReplies: [
      { text: "Modular Kitchens", action: "kitchen" },
      { text: "Wardrobes", action: "wardrobes" },
      { text: "Living Room", action: "living_room" },
      { text: "Get Quote", action: "whatsapp" }
    ]
  },
  pricing: {
    text: "Our pricing is transparent with no hidden costs! We offer:\n\n✅ Free design consultation\n✅ 3D visualization\n✅ Premium materials\n✅ 45-day delivery guarantee\n✅ 10-year warranty\n\nFor detailed pricing, our experts can provide personalized quotes based on your requirements.",
    quickReplies: [
      { text: "Get Quote", action: "whatsapp" },
      { text: "Payment Plans", action: "payment" },
      { text: "Book Consultation", action: "consultation" }
    ]
  },
  kitchen: {
    text: "Our modular kitchens feature:\n\n🔹 Premium materials & finishes\n🔹 Smart storage solutions\n🔹 Customizable designs\n🔹 Modern appliances integration\n🔹 Easy maintenance\n\nWould you like to see designs or get a quote?",
    quickReplies: [
      { text: "View Designs", action: "designs" },
      { text: "Get Quote", action: "whatsapp" },
      { text: "Book Visit", action: "book_consultation" }
    ]
  },
  wardrobes: {
    text: "Transform your storage with our wardrobes:\n\n🔹 Space-optimized designs\n🔹 Multiple compartments\n🔹 Sliding & hinged doors\n🔹 Premium finishes\n🔹 Accessories & organizers\n\nLet's create the perfect wardrobe for your space!",
    quickReplies: [
      { text: "View Designs", action: "designs" },
      { text: "Get Quote", action: "whatsapp" },
      { text: "Space Planning", action: "consultation" }
    ]
  },
  process: {
    text: "Our simple 4-step process:\n\n1️⃣ Free Consultation - Online or in-person\n2️⃣ 3D Design - Personalized designs\n3️⃣ Material Selection - Premium options\n4️⃣ Installation - Professional setup\n\nReady to start your journey?",
    quickReplies: [
      { text: "Start Now", action: "whatsapp" },
      { text: "Book Consultation", action: "consultation" },
      { text: "See Examples", action: "designs" }
    ]
  },
  whatsapp: {
    text: "Perfect! Our design experts are available on WhatsApp to help you with:\n\n💬 Instant responses\n📱 Share photos of your space\n📋 Get detailed quotes\n🎨 View design options\n📞 Schedule consultations\n\nClick below to start chatting with our team!",
    whatsappRedirect: true
  },
  default: {
    text: "I'd love to help you with that! For detailed assistance with your specific requirements, our design experts on WhatsApp can provide personalized support.",
    quickReplies: [
      { text: "WhatsApp Expert", action: "whatsapp" },
      { text: "Our Services", action: "services" },
      { text: "Free Consultation", action: "consultation" }
    ]
  }
};

export const getBotResponse = (userMessage: string): ChatBotResponse => {
  const message = userMessage.toLowerCase();
  
  // Greeting patterns
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return chatResponses.greeting;
  }
  
  // Service inquiries
  if (message.includes('service') || message.includes('what do you do')) {
    return chatResponses.services;
  }
  
  // Kitchen related
  if (message.includes('kitchen') || message.includes('modular kitchen')) {
    return chatResponses.kitchen;
  }
  
  // Wardrobe related
  if (message.includes('wardrobe') || message.includes('closet')) {
    return chatResponses.wardrobes;
  }
  
  // Consultation related
  if (message.includes('consultation') || message.includes('free consultation')) {
    return chatResponses.consultation;
  }
  
  // Pricing related
  if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
    return chatResponses.pricing;
  }
  
  // Process related
  if (message.includes('process') || message.includes('how it works')) {
    return chatResponses.process;
  }
  
  // WhatsApp related
  if (message.includes('whatsapp') || message.includes('expert') || message.includes('human')) {
    return chatResponses.whatsapp;
  }
  
  return chatResponses.default;
};

export const getResponseByAction = (action: string): ChatBotResponse => {
  return chatResponses[action] || chatResponses.default;
};

export const generateWhatsAppUrl = (message?: string): string => {
  const phoneNumber = '+919876543210'; // Replace with actual WhatsApp Business number
  const defaultMessage = 'Hi! I\'m interested in HomeLane interior design services. Can you help me?';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};