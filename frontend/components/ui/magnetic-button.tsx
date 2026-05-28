"use client";

import type React from "react";
import { useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

type MagneticButtonProps = {
  children: React.ReactNode;
  strength?: number;
  className?: string;
};

export function MagneticButton({ children, strength = 14, className }: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    const x = clamp(relX / 6, -strength, strength);
    const y = clamp(relY / 6, -strength, strength);
    setOffset({ x, y });
  };

  const handleLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onFocus={handleLeave}
      onBlur={handleLeave}
    >
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: "transform 160ms ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}
