import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-emerald to-emerald-dark text-white shadow-lg shadow-emerald/30 hover:shadow-2xl hover:shadow-emerald/50 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100",
        secondary:
          "border-2 border-emerald/40 bg-emerald/10 backdrop-blur-sm text-platinum hover:bg-emerald/20 hover:border-emerald hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald/20",
        ghost: "text-platinum hover:bg-emerald/10 hover:text-emerald hover:-translate-y-0.5",
        outline: "border-2 border-emerald text-emerald hover:bg-emerald hover:text-white shadow-sm hover:shadow-lg hover:shadow-emerald/30 hover:-translate-y-1",
        danger: "bg-crimson text-white hover:bg-crimson-light hover:shadow-lg shadow-md hover:-translate-y-0.5",
      },
      size: {
        sm: "px-6 py-3 text-sm",
        md: "px-8 py-4 text-base",
        lg: "px-10 py-5 text-lg",
        xl: "px-12 py-6 text-xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

/**
 * Premium button component with multiple variants and sizes
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, isLoading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // When using asChild, we can't add extra children, so we simplify the structure
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Shine effect */}
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
        )}

        {/* Content wrapper */}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Loading...
            </>
          ) : (
            children
          )}
        </span>
      </Comp>
    );
  }
);

Button.displayName = "Button";
