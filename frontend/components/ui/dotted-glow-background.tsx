import React from "react";

import { cn } from "@/lib/utils";

type DottedGlowBackgroundProps = {
  className?: string;
  opacity?: number;
  gap?: number;
  radius?: number;
  colorLightVar?: string;
  glowColorLightVar?: string;
  colorDarkVar?: string;
  glowColorDarkVar?: string;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
};

export function DottedGlowBackground({
  className,
  opacity = 1,
  gap = 10,
  radius = 1.6,
  colorLightVar = "--color-neutral-500",
  glowColorLightVar = "--color-neutral-600",
  colorDarkVar = "--color-neutral-500",
  glowColorDarkVar = "--color-sky-800",
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
}: DottedGlowBackgroundProps) {
  const animationDuration = Math.max(6, Math.round((speedMin + speedMax) * 6 * speedScale));
  const backgroundSize = `${gap}px ${gap}px`;
  const dotSize = `${radius}px ${radius}px`;

  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0", className)}
      style={
        {
          opacity,
          backgroundSize,
          backgroundPosition: "center",
          backgroundImage: `radial-gradient(${dotSize} at center, color-mix(in srgb, var(${colorLightVar}) 70%, transparent) 0%, transparent 70%), radial-gradient(${gap * 1.8}px at 20% 20%, color-mix(in srgb, var(${glowColorLightVar}) 60%, transparent) 0%, transparent 70%)`,
          backgroundColor: `color-mix(in srgb, var(${colorDarkVar}) ${backgroundOpacity * 100}%, transparent)`,
          animation: `dottedGlowFloat ${animationDuration}s ease-in-out infinite`,
        } as React.CSSProperties
      }
      data-theme-light={colorLightVar}
      data-theme-dark={colorDarkVar}
    />
  );
}
