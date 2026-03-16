"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppLogo } from './WhatsAppLogo';

export const FloatingWhatsApp = () => {
    const phoneNumber = "919657480645"; // From previous edits
    const message = "Hello Maxima Business Solutions, I'd like to enquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-2 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_30px_-5px_#25D366] group"
            aria-label="Chat on WhatsApp"
        >
            <WhatsAppLogo />
            <div className="absolute right-full mr-4 bg-background border border-border px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                Chat with us on WhatsApp
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-[8px] border-transparent border-l-background" />
            </div>
        </motion.a>
    );
};
