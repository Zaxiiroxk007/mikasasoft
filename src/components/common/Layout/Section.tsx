import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
  background?: "default" | "alternate" | "gradient" | "glass" | "transparent";
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
            "py-8 md:py-12": spacing === "sm",
            "py-12 md:py-16": spacing === "md",
            "py-16 md:py-24": spacing === "lg",
            "pt-24 pb-20 md:pt-28 md:pb-32": spacing === "xl",
            "py-24 md:py-40 lg:py-48": spacing === "2xl",
            "py-0": spacing === "none",
          },
          {
            "bg-zinc-950": background === "default",
            "bg-zinc-900": background === "alternate",
            "bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950":
              background === "gradient",
            "glass-card": background === "glass",
            "bg-transparent": background === "transparent",
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
