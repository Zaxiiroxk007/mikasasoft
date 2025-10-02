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
  ({ className, spacing = "xl", background = "default", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full",
          {
            "py-12 md:py-16": spacing === "sm",
            "py-16 md:py-20": spacing === "md",
            "py-20 md:py-28": spacing === "lg",
            "py-24 md:py-32 lg:py-40": spacing === "xl",
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
