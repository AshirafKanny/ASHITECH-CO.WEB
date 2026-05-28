"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AccordionType = "single" | "multiple";

type AccordionContextValue = {
  type: AccordionType;
  openValues: string[];
  toggleValue: (value: string) => void;
};

type AccordionItemContextValue = {
  value: string;
  isOpen: boolean;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: AccordionType;
  defaultValue?: string[] | string;
  value?: string[] | string;
  onValueChange?: (value: string[] | string) => void;
};

function normalizeValue(value?: string[] | string): string[] {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

export function Accordion({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: AccordionProps) {
  const isControlled = value !== undefined;
  const [internalValues, setInternalValues] = React.useState<string[]>(() => normalizeValue(defaultValue));
  const openValues = isControlled ? normalizeValue(value) : internalValues;

  const setOpenValues = React.useCallback(
    (nextValues: string[]) => {
      if (!isControlled) {
        setInternalValues(nextValues);
      }
      if (onValueChange) {
        onValueChange(type === "single" ? nextValues[0] ?? "" : nextValues);
      }
    },
    [isControlled, onValueChange, type]
  );

  const toggleValue = React.useCallback(
    (nextValue: string) => {
      if (type === "single") {
        setOpenValues(openValues[0] === nextValue ? [] : [nextValue]);
        return;
      }
      if (openValues.includes(nextValue)) {
        setOpenValues(openValues.filter((valueItem) => valueItem !== nextValue));
        return;
      }
      setOpenValues([...openValues, nextValue]);
    },
    [openValues, setOpenValues, type]
  );

  return (
    <AccordionContext.Provider value={{ type, openValues, toggleValue }}>
      <div className={cn(className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within Accordion");
  }
  const isOpen = context.openValues.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn("rounded-2xl", className)} data-state={isOpen ? "open" : "closed"} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);

  if (!context || !itemContext) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);
    if (!event.defaultPrevented) {
      context.toggleValue(itemContext.value);
    }
  };

  return (
    <button
      type="button"
      className={cn("flex w-full items-center justify-between gap-4 text-left", className)}
      aria-expanded={itemContext.isOpen}
      data-state={itemContext.isOpen ? "open" : "closed"}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  return (
    <div
      className={cn("overflow-hidden", className)}
      hidden={!itemContext.isOpen}
      data-state={itemContext.isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
    </div>
  );
}
