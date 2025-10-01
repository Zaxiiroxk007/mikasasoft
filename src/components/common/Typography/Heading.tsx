import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
}

/**
 * Semantic heading component with consistent styling
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: Component = "h2", gradient = false, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-heading font-bold text-platinum",
          {
            "text-5xl md:text-6xl lg:text-7xl": Component === "h1",
            "text-4xl md:text-5xl lg:text-6xl": Component === "h2",
            "text-3xl md:text-4xl lg:text-5xl": Component === "h3",
            "text-2xl md:text-3xl lg:text-4xl": Component === "h4",
            "text-xl md:text-2xl lg:text-3xl": Component === "h5",
            "text-lg md:text-xl lg:text-2xl": Component === "h6",
          },
          gradient && "bg-gradient-to-r from-emerald to-brass bg-clip-text text-transparent",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
