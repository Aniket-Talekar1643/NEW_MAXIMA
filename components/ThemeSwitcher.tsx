"use client";

import * as React from "react";
import { Moon, Sun, Palette, Check, Laptop, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useThemeColor, ThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@/lib/utils";

const colors: { name: ThemeColor; color: string }[] = [
  { name: "blue", color: "bg-blue-500" },
  { name: "violet", color: "bg-violet-500" },
  { name: "rose", color: "bg-rose-500" },
  { name: "green", color: "bg-green-500" },
  { name: "orange", color: "bg-orange-500" },
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showIntro, setShowIntro] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const { themeColor, setThemeColor } = useThemeColor();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const hasVisited = localStorage.getItem("maxima-visited");
    if (!hasVisited) {
      setShowIntro(true);
      localStorage.setItem("maxima-visited", "true");
    }
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowIntro(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowIntro(false);
        }}
        className="rounded-full w-10 h-10 transition-all hover:bg-primary/10 relative"
      >
        <Palette className="h-[1.2rem] w-[1.2rem] text-primary" />
        <span className="sr-only">Open theme switcher</span>
      </Button>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="absolute top-full right-0 mt-4 w-72 p-0 rounded-[2rem] bg-background/40 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-[70] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
            <div className="relative p-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/60">Style Your Space</h4>
                  <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                    Choose a color that suits your style. ✨
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowIntro(false)}
                className="group relative w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Got it!</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
            {/* Elegant pointer */}
            <div className="absolute -top-1.5 right-3 w-3 h-3 bg-background/40 border-t border-l border-white/20 rotate-45 backdrop-blur-2xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute right-0 mt-2 w-56 p-4 rounded-3xl bg-background/80 backdrop-blur-xl border border-border shadow-2xl z-[60]"
          >
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-3 ml-1">Mode</p>
                <div className="flex bg-muted/30 p-1 rounded-full border border-border/50">
                  <button
                    onClick={() => setTheme("light")}
                    className={cn(
                      "flex-1 flex items-center justify-center py-2 rounded-full transition-all",
                      theme === "light" ? "bg-background shadow-sm text-primary" : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    <Sun className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={cn(
                      "flex-1 flex items-center justify-center py-2 rounded-full transition-all",
                      theme === "dark" ? "bg-background shadow-sm text-primary" : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    <Moon className="h-4 w-4" />
                  </button>
                   <button
                    onClick={() => setTheme("system")}
                    className={cn(
                      "flex-1 flex items-center justify-center py-2 rounded-full transition-all",
                      theme === "system" ? "bg-background shadow-sm text-primary" : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    <Laptop className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-3 ml-1">Accent Color</p>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setThemeColor(c.name)}
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-2",
                        c.color,
                        themeColor === c.name ? "border-foreground scale-110 shadow-lg" : "border-transparent"
                      )}
                    >
                      {themeColor === c.name && <Check className="h-4 w-4 text-white" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
