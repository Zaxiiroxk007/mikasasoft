import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "interactive" | "outline";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

/**
 * Base card component
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, padding = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg",
          // Padding variants
          {
            "p-0": padding === "none",
            "p-3": padding === "sm",
            "p-6": padding === "md",
            "p-8": padding === "lg",
            "p-10": padding === "xl",
          },
          // Card variants
          {
            "bg-zinc-800 border border-zinc-700": variant === "default",
            "glass-card": variant === "glass",
            "card-elevated": variant === "elevated",
            "card-interactive": variant === "interactive",
            "bg-transparent border border-zinc-600": variant === "outline",
          },
          // Hover effects
          hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("mb-4", className)} {...props} />;
  }
);

CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-xl font-semibold text-zinc-100 leading-tight", className)}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("text-sm text-zinc-400 mt-2 leading-relaxed", className)} {...props} />
  );
});

CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("text-zinc-400", className)} {...props} />;
  }
);

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("mt-4 pt-4 border-t border-zinc-700", className)} {...props} />;
  }
);

CardFooter.displayName = "CardFooter";
