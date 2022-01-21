"use client"

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type FloatingElement = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  speed: number;
  color: string;
  delay: number;
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  useEffect(() => {
    const colors = [
      'bg-blue-500/20', 'bg-purple-500/20', 'bg-green-500/20', 
      'bg-indigo-500/20', 'bg-cyan-500/20'
    ];
    
    const newElements = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 100 + 50,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5
    }));
    
    setElements(newElements);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <div 
          key={element.id}
          className={cn(
            "absolute rounded-full blur-3xl", 
            element.color
          )}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
            opacity: element.opacity,
            animation: `float ${element.speed}s infinite alternate ease-in-out`,
            animationDelay: `${element.delay}s`
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(30px, 30px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}