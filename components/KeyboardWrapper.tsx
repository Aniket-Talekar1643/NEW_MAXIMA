"use client";

import React, { useState, useEffect } from "react";
import { Keyboard } from "./ui/keyboard";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const KeyboardWrapper = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Simple mobile detection
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleFocus = (e: FocusEvent) => {
            if (isMobile) return;
            const target = e.target as HTMLElement;
            if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
                setIsVisible(true);
            }
        };

        const handleBlur = (e: FocusEvent) => {
            // Delay hide to allow for clicking between inputs or clicking the keyboard itself
            setTimeout(() => {
                if (document.activeElement?.tagName !== "INPUT" && 
                    document.activeElement?.tagName !== "TEXTAREA" &&
                    !document.activeElement?.closest(".virtual-keyboard-container")) {
                    setIsVisible(false);
                }
            }, 100);
        };

        document.addEventListener("focusin", handleFocus);
        document.addEventListener("focusout", handleBlur);

        return () => {
            window.removeEventListener('resize', checkMobile);
            document.removeEventListener("focusin", handleFocus);
            document.removeEventListener("focusout", handleBlur);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <div className="virtual-keyboard-root">
            {/* Spacer to push content up when keyboard is visible */}
            <motion.div 
                animate={{ height: isVisible ? "400px" : "0px" }}
                className="w-full shrink-0 transition-all duration-500 ease-in-out pointer-events-none"
            />

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-xl border-t border-border p-4 pb-8 flex justify-center items-center virtual-keyboard-container"
                    >
                        <button 
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                            aria-label="Close keyboard"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        <div className="w-full max-w-5xl overflow-hidden py-4">
                            <Keyboard enableSound={true} showPreview={true} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
