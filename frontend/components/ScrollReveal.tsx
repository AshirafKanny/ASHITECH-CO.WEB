"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
}: ScrollRevealProps) {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [disableAnimation, setDisableAnimation] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);
    const updateMobile = () => setDisableAnimation(mobileQuery.matches);
    updatePreference();
    updateMobile();
    mediaQuery.addEventListener("change", updatePreference);
    mobileQuery.addEventListener("change", updateMobile);
    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
      mobileQuery.removeEventListener("change", updateMobile);
    };
  }, []);

  if (!mounted || reduceMotion || disableAnimation) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      viewport={{ once, amount: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
