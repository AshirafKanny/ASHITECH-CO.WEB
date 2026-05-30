"use client";

import Link from "next/link";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
  rel?: string;
  className?: string;
};

const base = "app-animated-button inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold";
const variants: Record<string, string> = {
  primary: "",
  secondary: "",
  ghost: "",
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ href, variant = "primary", className = "", children, target, rel, ...props }, ref) => {
    const classes = `${base} ${variants[variant] ?? ""} ${className}`.trim();

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className={classes} ref={ref as any}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as any} className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
