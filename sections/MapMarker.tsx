'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MapMarkerProps {
    x: number;
    y: number;
    office: {
        name: string;
        city: string;
        address: string;
        flag: string;
    };
}

const MapMarker: React.FC<MapMarkerProps> = ({ x, y, office }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute group z-20"
            style={{ left: `${x}%`, top: `${y}%` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Pulsing Dot */}
            <div className="relative">
                <motion.div
                    className="absolute -inset-2 rounded-full bg-primary/30"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative w-2.5 h-2.5 rounded-full bg-primary border border-white/40 shadow-[0_0_8px_rgba(23,106,154,0.6)] cursor-pointer" />
            </div>

            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 min-w-[200px] bg-[#16161D]/95 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl pointer-events-none"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">{office.flag}</span>
                            <h4 className="text-sm font-bold text-white whitespace-nowrap">{office.name}</h4>
                        </div>
                        <p className="text-xs text-primary font-medium mb-1">{office.city}</p>
                        <p className="text-[10px] text-text-secondary leading-normal">{office.address}</p>
                        
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#16161D]/95" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MapMarker;
