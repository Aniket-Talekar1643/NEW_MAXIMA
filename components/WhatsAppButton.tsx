'use client';

import { WhatsAppLogo } from './WhatsAppLogo';

export const WhatsAppButton = () => {
  return (
    <button
      onClick={() => window.open("https://wa.me/918856949454", '_blank')}
      className="fixed bottom-24 right-3 z-50 w-14 h-14 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppLogo />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
};
