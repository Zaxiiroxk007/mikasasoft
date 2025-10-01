import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "gold" | "crimson";
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

/**
 * Text with gradient effect
 */
export const GradientText = forwardRef<HTMLElement, GradientTextProps>(
  ({ className, variant = "primary", as: Component = "span", children, ...props }, ref) => {
    return (
      <Component
        ref={ref as never}
        className={cn(
          "bg-clip-text text-transparent bg-gradient-to-r",
          {
            "from-emerald to-brass": variant === "primary",
            "from-gold via-brass to-gold": variant === "gold",
            "from-crimson-light to-crimson": variant === "crimson",
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

GradientText.displayName = "GradientText";
