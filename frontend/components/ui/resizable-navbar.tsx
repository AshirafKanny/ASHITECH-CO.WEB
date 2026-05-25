"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
};

type NavbarProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

type NavBodyProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

type NavItemsProps = {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
};

type NavbarLogoProps = {
  href?: string;
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
};

type NavbarButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

type MobileNavMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

type MobileNavToggleProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function Navbar({ children, className, ...props }: NavbarProps) {
  return (
    <header
      className={cn("fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur", className)}
      {...props}
    >
      {children}
    </header>
  );
}

export function NavBody({ children, className, ...props }: NavBodyProps) {
  return (
    <div className={cn("site-container flex h-16 items-center justify-between gap-4", className)} {...props}>
      {children}
    </div>
  );
}

export function NavItems({ items, className, onItemClick }: NavItemsProps) {
  return (
    <ul className={cn("hidden items-center gap-8 md:flex", className)}>
      {items.map((item) => (
        <li key={item.link}>
          <Link
            href={item.link}
            className="text-sm font-medium text-[#1F2A3F] transition-colors hover:text-[#F97316]"
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function NavbarLogo({
  href = "/",
  src = "/keniwebdesign-01.png",
  alt = "KENI WEB DESIGN logo",
  className,
  imageClassName,
  width = 110,
  height = 32,
}: NavbarLogoProps) {
  return (
    <Link href={href} className={cn("flex items-center", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className={cn("h-8 w-auto", imageClassName)}
      />
      <span className="sr-only">KENI WEB DESIGN</span>
    </Link>
  );
}

export function NavbarButton({ variant = "primary", className, ...props }: NavbarButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[#0b63f3] text-white hover:bg-[#0756d6]"
      : "border border-blue-600 text-blue-700 hover:bg-blue-50";

  return (
    <button className={cn(base, styles, className)} {...props} />
  );
}

export function MobileNav({ children, className, ...props }: NavBodyProps) {
  return (
    <div className={cn("md:hidden", className)} {...props}>
      {children}
    </div>
  );
}

export function MobileNavHeader({ children, className, ...props }: NavBodyProps) {
  return (
    <div className={cn("site-container flex h-16 items-center justify-between", className)} {...props}>
      {children}
    </div>
  );
}

export function MobileNavToggle({ isOpen, onClick }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      className="rounded-md p-2 text-[#1F2A3F]"
      onClick={onClick}
    >
      {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
    </button>
  );
}

export function MobileNavMenu({ isOpen, onClose, children, className }: MobileNavMenuProps) {
  return (
    <div className={cn("border-t border-black/10 bg-white", className)} hidden={!isOpen}>
      <div className="site-container py-4">
        <div className="flex flex-col gap-4" onClick={onClose}>
          {children}
        </div>
      </div>
    </div>
  );
}
