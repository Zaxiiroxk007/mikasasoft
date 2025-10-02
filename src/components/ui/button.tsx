import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100",
        secondary:
          "border-2 border-blue-500/40 bg-blue-500/10 backdrop-blur-sm text-zinc-300 hover:bg-blue-500/20 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20",
        ghost: "text-zinc-300 hover:bg-blue-500/10 hover:text-blue-400 hover:-translate-y-0.5",
        outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-sm hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1",
        danger: "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg shadow-md hover:-translate-y-0.5",
      },
      size: {
        sm: "px-4 py-2 text-sm h-9",
        md: "px-6 py-3 text-sm h-11",
        lg: "px-8 py-4 text-base h-12",
        xl: "px-10 py-5 text-lg h-14",
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
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
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
