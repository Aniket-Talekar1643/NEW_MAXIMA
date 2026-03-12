'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import MapMarker from './MapMarker';

const offices = [
    {
        name: 'Pune Office',
        city: 'Pune, India',
        address: '4th Floor, Tech Park, Kharadi, Pune 411014',
        flag: '🇮🇳',
        x: 63.5,
        y: 42.5,
    },
];

const WorldMap: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), { stiffness: 80, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), { stiffness: 80, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        mouseX.set(e.clientX - cx);
        mouseY.set(e.clientY - cy);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Outer Glow Halo */}
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl scale-75 pointer-events-none" />

            <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative"
            >
                {/* Globe Container */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                >
                    {/* Illuminated SVG World Map */}
                    <svg
                        viewBox="0 0 1000 500"
                        className="w-full h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <clipPath id="globeClip">
                                <ellipse cx="500" cy="250" rx="480" ry="240" />
                            </clipPath>
                        </defs>

                        {/* Background circle glow */}
                        <ellipse cx="500" cy="250" rx="490" ry="245" fill="url(#globeGlow)" />

                        {/* Graticule grid lines */}
                        <g stroke="#176A9A" strokeWidth="0.4" strokeOpacity="0.2" fill="none">
                            {/* Longitude lines */}
                            {[-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].map(lon => {
                                const x = ((lon + 180) / 360) * 1000;
                                return <line key={lon} x1={x} y1="10" x2={x} y2="490" />;
                            })}
                            {/* Latitude lines */}
                            {[-60, -30, 0, 30, 60].map(lat => {
                                const y = ((90 - lat) / 180) * 500;
                                return <line key={lat} x1="10" y1={y} x2="990" y2={y} />;
                            })}
                        </g>

                        {/* Continents - simplified paths */}
                        <g fill="#1E3A4C" stroke="#176A9A" strokeWidth="1" strokeOpacity="0.5" filter="url(#glow)">
                            {/* North America */}
                            <path d="M 145 60 L 180 55 L 220 60 L 260 80 L 280 120 L 270 160 L 250 200 L 230 240 L 210 250 L 195 240 L 185 210 L 170 200 L 160 180 L 150 160 L 140 130 L 130 100 Z" />
                            {/* Greenland */}
                            <path d="M 230 30 L 280 25 L 290 50 L 270 70 L 240 65 Z" />
                            {/* South America */}
                            <path d="M 220 265 L 250 255 L 270 270 L 275 310 L 265 360 L 250 400 L 235 430 L 220 420 L 210 390 L 205 350 L 210 310 L 215 280 Z" />
                            {/* Europe */}
                            <path d="M 450 70 L 490 65 L 520 75 L 530 95 L 510 110 L 490 120 L 470 115 L 455 100 Z" />
                            {/* Scandinavia */}
                            <path d="M 470 50 L 490 40 L 510 50 L 505 75 L 480 80 L 465 70 Z" />
                            {/* Africa */}
                            <path d="M 460 130 L 510 125 L 545 145 L 555 200 L 545 260 L 520 320 L 500 370 L 480 360 L 465 320 L 455 270 L 448 220 L 445 165 Z" />
                            {/* Asia */}
                            <path d="M 540 60 L 620 50 L 700 55 L 780 65 L 840 80 L 870 110 L 860 150 L 830 170 L 790 165 L 750 175 L 720 200 L 690 210 L 660 200 L 640 185 L 610 170 L 585 160 L 560 145 L 540 125 L 530 100 Z" />
                            {/* India */}
                            <path d="M 620 175 L 650 170 L 665 200 L 660 240 L 645 270 L 630 265 L 618 240 L 612 205 Z" />
                            {/* Southeast Asia */}
                            <path d="M 720 195 L 760 185 L 780 200 L 775 230 L 750 245 L 725 235 L 715 215 Z" />
                            {/* Australia */}
                            <path d="M 740 310 L 800 300 L 850 315 L 870 360 L 855 400 L 820 415 L 780 410 L 755 390 L 738 360 L 735 330 Z" />
                            {/* Japan */}
                            <path d="M 820 130 L 845 120 L 855 140 L 840 160 L 820 155 Z" />
                            {/* UK / British Isles */}
                            <path d="M 445 80 L 458 74 L 462 88 L 450 95 L 440 90 Z" />
                        </g>

                        {/* Equator line */}
                        <line x1="10" y1="250" x2="990" y2="250" stroke="#176A9A" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="5,5" />
                    </svg>

                    {/* Marker Layer - overlay on top of SVG */}
                    <div className="absolute inset-0">
                        {offices.map(office => (
                            <MapMarker
                                key={office.name}
                                x={office.x}
                                y={office.y}
                                office={{
                                    name: office.name,
                                    city: office.city,
                                    address: office.address,
                                    flag: office.flag,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WorldMap;
