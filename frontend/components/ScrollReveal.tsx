"use client";

import type React from "react";
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
  y = 24,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
