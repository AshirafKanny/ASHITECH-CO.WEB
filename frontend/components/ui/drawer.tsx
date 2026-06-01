"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type DrawerDirection = "left" | "right" | "top" | "bottom";

type DrawerContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  direction: DrawerDirection;
};

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

function useDrawerContext() {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer components must be used within <Drawer />");
  }
  return context;
}

type DrawerProps = {
  children: React.ReactNode;
  direction?: DrawerDirection;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Drawer({ children, direction = "right", defaultOpen = false, open: controlledOpen, onOpenChange }: DrawerProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [controlledOpen, onOpenChange]
  );

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <DrawerContext.Provider value={{ open, setOpen, direction }}>
      {children}
    </DrawerContext.Provider>
  );
}

type DrawerTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children: React.ReactElement<any>;
};

export function DrawerTrigger({ asChild, children, ...props }: DrawerTriggerProps) {
  const { open, setOpen } = useDrawerContext();

  if (asChild) {
    return React.cloneElement(children, {
      ...props,
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        children.props.onClick?.(event);
        setOpen(!open);
      },
      "aria-expanded": open,
    } as any);
  }

  return (
    <button
      type="button"
      {...props}
      aria-expanded={open}
      onClick={() => setOpen(!open)}
    >
      {children}
    </button>
  );
}

type DrawerCloseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children: React.ReactElement<any>;
};

export function DrawerClose({ asChild, children, ...props }: DrawerCloseProps) {
  const { setOpen } = useDrawerContext();

  if (asChild) {
    return React.cloneElement(children, {
      ...props,
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        children.props.onClick?.(event);
        setOpen(false);
      },
    } as any);
  }

  return (
    <button type="button" {...props} onClick={() => setOpen(false)}>
      {children}
    </button>
  );
}

type DrawerContentProps = React.HTMLAttributes<HTMLDivElement>;

export function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  const { open, setOpen, direction } = useDrawerContext();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!open) {
    return null;
  }

  const positionClasses: Record<DrawerDirection, string> = {
    right: "inset-y-0 right-0 w-[min(24rem,90vw)] translate-x-0 rounded-l-3xl",
    left: "inset-y-0 left-0 w-[min(24rem,90vw)] translate-x-0 rounded-r-3xl",
    top: "inset-x-0 top-0 h-[min(34rem,90vh)] translate-y-0 rounded-b-3xl",
    bottom: "inset-x-0 bottom-0 h-[min(34rem,90vh)] translate-y-0 rounded-t-3xl",
  };

  const drawer = (
    <div className="fixed inset-0 z-[9999]">
      <button
        type="button"
        aria-label="Close drawer overlay"
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "absolute flex h-full max-h-screen flex-col overflow-hidden bg-[#0b63f3] shadow-2xl outline-none",
          positionClasses[direction],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );

  if (!mounted) {
    return null;
  }

  return createPortal(drawer, document.body);
}

export function DrawerHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border-b border-black/10 p-5", className)} {...props} />;
}

export function DrawerTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-lg font-semibold text-[#1F2A3F]", className)} {...props} />;
}

export function DrawerDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("mt-1 text-sm text-[#6b7280]", className)} {...props} />;
}

export function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("border-t border-black/10 p-5", className)} {...props} />;
}
