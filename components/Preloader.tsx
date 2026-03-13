"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isPresent, setIsPresent] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Auto-hide fallback just in case the animation hangs
    const timeout = setTimeout(() => {
      setIsPresent(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isPresent || !mounted) return null;

  return (
    <AnimatePresence>
      <motion.div 
        key="preloader"
        className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden"
        exit={{ opacity: 0 }}
      >
        {/* Dark overlay peeking through at the bottom */}
        <motion.div 
          className="absolute inset-0 bg-black/80 pointer-events-auto"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 3.5, ease: "linear" }}
        />

        {/* The Shutter */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-neutral-950 border-b-[12px] border-amber-500 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex-shrink-0 pointer-events-auto origin-top"
          style={{ height: "80vh" }}
          initial={{ y: 0 }}
          animate={{ y: ["0%", "2%", "-150%"] }}
          transition={{ 
            duration: 1.5, 
            times: [0, 0.2, 1], 
            delay: 3.5, 
            ease: "easeInOut" 
          }}
          onAnimationComplete={() => setIsPresent(false)}
        >
          {/* Shutter Texture - horizontal lines */}
          <div className="absolute inset-0 flex flex-col opacity-20 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="flex-1 w-full border-b border-neutral-500 shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
              ))}
          </div>
          
          {/* Lock/Handle hanging from the bottom center */}
          <div className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 translate-y-full flex flex-col items-center">
              <motion.div 
                className="w-1.5 bg-neutral-400 origin-top"
                initial={{ height: "40px" }}
                animate={{ height: ["40px", "100px", "40px"] }}
                transition={{ duration: 1.2, times: [0, 0.5, 1], delay: 2.3 }}
              />
              <motion.div
                 className="w-8 h-8 rounded-full bg-amber-500 border-4 border-neutral-900 shadow-[0_0_15px_rgba(245,158,11,0.5)] -mt-2"
                 initial={{ scale: 1, backgroundColor: "#f59e0b" }}
                 animate={{ scale: [1, 1.3, 1], backgroundColor: ["#f59e0b", "#ffffff", "#f59e0b"] }}
                 transition={{ duration: 1.2, times: [0, 0.5, 1], delay: 2.3 }}
              />
          </div>
        </motion.div>

        {/* The Animated Person */}
        <motion.div 
            className="absolute bottom-[20vh] left-0 -translate-x-1/2 -mb-2 z-[10001] flex flex-col items-center justify-center text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
            initial={{ left: "-20vw", y: 0 }}
            animate={{ 
              left: ["-20%", "50%", "50%", "50%", "50%", "120%"],
              y: [0, 0, -45, 20, 20, 0] 
            }}
            transition={{ 
              duration: 4.5, 
              times: [0, 0.3, 0.45, 0.6, 0.75, 1],
              ease: "easeInOut"
            }}
        >
            {/* Simple Stick Figure SVG */}
            <svg width="80" height="120" viewBox="0 0 60 90" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible">
              {/* Head */}
              <circle cx="30" cy="15" r="10" />
              {/* Body */}
              <line x1="30" y1="25" x2="30" y2="55" />
              
              {/* Left Arm animated reaching */}
              <motion.path 
                d="M 30 35 Q 15 45 10 50" 
                animate={{ d: ["M 30 35 Q 15 45 10 50", "M 30 35 Q 15 25 10 15", "M 30 35 Q 15 45 10 50", "M 30 35 Q 15 45 10 50"] }}
                transition={{ duration: 4.5, times: [0, 0.45, 0.6, 1] }} 
              />
              {/* Right Arm animated reaching */}
              <motion.path 
                d="M 30 35 Q 45 45 50 50" 
                animate={{ d: ["M 30 35 Q 45 45 50 50", "M 30 35 Q 45 25 50 15", "M 30 35 Q 45 45 50 50", "M 30 35 Q 45 45 50 50"] }}
                transition={{ duration: 4.5, times: [0, 0.45, 0.6, 1] }} 
              />
              
              {/* Legs - walking animation */}
              <motion.line 
                x1="30" y1="55" x2="15" y2="85"
                animate={{ x2: [15, 30, 45, 30, 15, 15, 15, 15, 45, 30, 15], y2: [85, 75, 85, 75, 85, 85, 85, 85, 85, 75, 85] }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
              <motion.line 
                x1="30" y1="55" x2="45" y2="85"
                animate={{ x2: [45, 30, 15, 30, 45, 45, 45, 45, 15, 30, 45], y2: [85, 75, 85, 75, 85, 85, 85, 85, 85, 75, 85] }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            </svg>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
