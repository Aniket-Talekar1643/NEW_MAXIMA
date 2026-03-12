"use client";

import * as React from "react";
import { Moon, Sun, Palette, Check, Laptop } from "lucide-react";
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
  const { theme, setTheme } = useTheme();
  const { themeColor, setThemeColor } = useThemeColor();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-10 h-10 transition-all hover:bg-primary/10 relative"
      >
        <Palette className="h-[1.2rem] w-[1.2rem] text-primary" />
        <span className="sr-only">Open theme switcher</span>
      </Button>

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
