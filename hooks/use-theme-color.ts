"use client";

import { useState, useEffect } from "react";

export type ThemeColor = "blue" | "violet" | "rose" | "green" | "orange";

export function useThemeColor() {
  const [themeColor, setThemeColor] = useState<ThemeColor>("blue");

  useEffect(() => {
    const savedColor = localStorage.getItem("theme-color") as ThemeColor;
    if (savedColor) {
      setThemeColor(savedColor);
      document.documentElement.classList.forEach((cls) => {
        if (cls.startsWith("theme-")) {
          document.documentElement.classList.remove(cls);
        }
      });
      document.documentElement.classList.add(`theme-${savedColor}`);
    }
  }, []);

  const updateThemeColor = (color: ThemeColor) => {
    setThemeColor(color);
    localStorage.setItem("theme-color", color);
    
    document.documentElement.classList.forEach((cls) => {
      if (cls.startsWith("theme-")) {
        document.documentElement.classList.remove(cls);
      }
    });
    document.documentElement.classList.add(`theme-${color}`);
  };

  return { themeColor, setThemeColor: updateThemeColor };
}
