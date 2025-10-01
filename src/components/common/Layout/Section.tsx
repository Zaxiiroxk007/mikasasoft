import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
  background?: "default" | "alternate" | "gradient";
}

/**
 * Section wrapper component with consistent spacing
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "lg", background = "default", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full",
          {
            "py-8 md:py-12": spacing === "sm",
            "py-12 md:py-16": spacing === "md",
            "py-16 md:py-24": spacing === "lg",
            "py-20 md:py-32": spacing === "xl",
            "py-0": spacing === "none",
          },
          {
            "bg-deep-midnight": background === "default",
            "bg-obsidian": background === "alternate",
            "bg-gradient-to-b from-deep-midnight via-obsidian to-deep-midnight":
              background === "gradient",
          },
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
