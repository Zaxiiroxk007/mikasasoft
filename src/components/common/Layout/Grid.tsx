import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
}

/**
 * Responsive grid component
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid w-full",
          {
            "grid-cols-1": cols === 1,
            "grid-cols-1 md:grid-cols-2": cols === 2,
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": cols === 3,
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": cols === 4,
            "grid-cols-1 md:grid-cols-3 lg:grid-cols-5": cols === 5,
            "grid-cols-1 md:grid-cols-3 lg:grid-cols-6": cols === 6,
          },
          {
            "gap-4": gap === "sm",
            "gap-6": gap === "md",
            "gap-8": gap === "lg",
            "gap-12": gap === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";
