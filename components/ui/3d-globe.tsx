'use client';

import React, { useRef, useEffect, useState } from 'react';

interface Marker {
  lat: number;
  lng: number;
  src: string;
  label: string;
}

interface GlobeConfig {
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
}

interface Globe3DProps {
  markers: Marker[];
  config?: GlobeConfig;
  onMarkerClick?: (marker: Marker) => void;
  onMarkerHover?: (marker: Marker | null) => void;
}

export const Globe3D: React.FC<Globe3DProps> = ({
  markers,
  config = {},
  onMarkerClick,
  onMarkerHover,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredMarker, setHoveredMarker] = useState<Marker | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rotation = 0;
    let animationId: number;

    const drawGlobe = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const globeRadius = Math.min(width, height) * 0.35;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw atmosphere
      if (config.atmosphereColor) {
        const gradient = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.8, centerX, centerY, globeRadius * 1.2);
        gradient.addColorStop(0, config.atmosphereColor + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw globe
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Draw sphere
      const sphereGradient = ctx.createRadialGradient(
        -globeRadius * 0.3, -globeRadius * 0.3, 0,
        globeRadius, globeRadius, globeRadius * 1.5
      );
      sphereGradient.addColorStop(0, '#4a90e2');
      sphereGradient.addColorStop(0.7, '#2c5aa0');
      sphereGradient.addColorStop(1, '#1a365d');
      
      ctx.beginPath();
      ctx.arc(0, 0, globeRadius, 0, Math.PI * 2);
      ctx.fillStyle = sphereGradient;
      ctx.fill();
      
      // Draw grid lines
      ctx.strokeStyle = '#ffffff20';
      ctx.lineWidth = 1;
      
      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        for (let lng = 0; lng <= 360; lng += 10) {
          const x = globeRadius * Math.cos(lat * Math.PI / 180) * Math.cos((lng + rotation) * Math.PI / 180);
          const y = globeRadius * Math.sin(lat * Math.PI / 180);
          if (lng === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      // Longitude lines
      for (let lng = 0; lng < 360; lng += 30) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 10) {
          const x = globeRadius * Math.cos(lat * Math.PI / 180) * Math.cos((lng + rotation) * Math.PI / 180);
          const y = globeRadius * Math.sin(lat * Math.PI / 180);
          if (lat === -90) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      ctx.restore();

      // Draw markers
      markers.forEach((marker, index) => {
        const lat = marker.lat * Math.PI / 180;
        const lng = (marker.lng + rotation) * Math.PI / 180;
        
        const x = centerX + globeRadius * Math.cos(lat) * Math.cos(lng);
        const y = centerY - globeRadius * Math.cos(lat) * Math.sin(lng);
        
        // Check if marker is visible (front of globe)
        const isVisible = Math.cos(lng) > 0;
        
        if (isVisible) {
          // Marker dot
          ctx.beginPath();
          ctx.arc(x, y, hoveredMarker === marker ? 8 : 5, 0, Math.PI * 2);
          ctx.fillStyle = hoveredMarker === marker ? '#ff6b6b' : '#4da6ff';
          ctx.fill();
          
          // Marker glow
          if (hoveredMarker === marker) {
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fillStyle = '#ff6b6b40';
            ctx.fill();
          }
          
          // Label
          if (hoveredMarker === marker) {
            ctx.fillStyle = '#ffffff';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(marker.label, x, y - 20);
          }
        }
      });

      // Auto-rotate
      if (config.autoRotateSpeed) {
        rotation += config.autoRotateSpeed;
      }

      animationId = requestAnimationFrame(drawGlobe);
    };

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    drawGlobe();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      let foundMarker: Marker | null = null;
      const currentRadius = Math.min(canvas.width, canvas.height) * 0.35;
      
      markers.forEach((marker) => {
        const lat = marker.lat * Math.PI / 180;
        const lng = (marker.lng + rotation) * Math.PI / 180;
        
        const markerX = canvas.width / 2 + currentRadius * Math.cos(lat) * Math.cos(lng);
        const markerY = canvas.height / 2 - currentRadius * Math.cos(lat) * Math.sin(lng);
        
        const distance = Math.sqrt(Math.pow(x - markerX, 2) + Math.pow(y - markerY, 2));
        
        if (distance < 15) {
          foundMarker = marker;
        }
      });
      
      setHoveredMarker(foundMarker);
      onMarkerHover?.(foundMarker);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const currentRadius = Math.min(canvas.width, canvas.height) * 0.35;
      
      markers.forEach((marker) => {
        const lat = marker.lat * Math.PI / 180;
        const lng = (marker.lng + rotation) * Math.PI / 180;
        
        const markerX = canvas.width / 2 + currentRadius * Math.cos(lat) * Math.cos(lng);
        const markerY = canvas.height / 2 - currentRadius * Math.cos(lat) * Math.sin(lng);
        
        const distance = Math.sqrt(Math.pow(x - markerX, 2) + Math.pow(y - markerY, 2));
        
        if (distance < 15) {
          onMarkerClick?.(marker);
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [markers, config, onMarkerClick, onMarkerHover, hoveredMarker]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
