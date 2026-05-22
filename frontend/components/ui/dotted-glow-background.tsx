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
  gap = 12,
  radius = 1.6,
  colorLightVar = "--color-neutral-500",
  glowColorLightVar = "--color-neutral-600",
  colorDarkVar = "--color-neutral-500",
  glowColorDarkVar = "--color-sky-800",
  backgroundOpacity = 0,
}: DottedGlowBackgroundProps) {
  const dotRadius = Math.max(0.5, radius);
  const backgroundImage = `radial-gradient(circle, var(--dotted-glow-dot-color) ${dotRadius}px, transparent ${dotRadius}px)`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0",
        "[--dotted-glow-dot-color:var(--dotted-glow-dot-color-light)]",
        "[--dotted-glow-glow-color:var(--dotted-glow-glow-color-light)]",
        "dark:[--dotted-glow-dot-color:var(--dotted-glow-dot-color-dark)]",
        "dark:[--dotted-glow-glow-color:var(--dotted-glow-glow-color-dark)]",
        className
      )}
      style={
        {
          "--dotted-glow-dot-color-light": `var(${colorLightVar})`,
          "--dotted-glow-dot-color-dark": `var(${colorDarkVar})`,
          "--dotted-glow-glow-color-light": `var(${glowColorLightVar})`,
          "--dotted-glow-glow-color-dark": `var(${glowColorDarkVar})`,
          backgroundImage,
          backgroundSize: `${gap}px ${gap}px`,
          backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
          opacity,
          boxShadow: "0 0 160px var(--dotted-glow-glow-color)",
        } as React.CSSProperties
      }
    />
  );
}
