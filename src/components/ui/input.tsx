import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

/**
 * Premium input component with floating label
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, label, placeholder, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={type}
          id={inputId}
          className={cn(
            "peer w-full rounded-lg border bg-obsidian px-4 py-3 text-platinum transition-all duration-300",
            "placeholder-transparent",
            "focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent",
            error
              ? "border-crimson focus:ring-crimson"
              : "border-slate/50 hover:border-slate",
            className
          )}
          placeholder={placeholder || label || " "}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "absolute left-4 -top-2.5 bg-obsidian px-1 text-sm transition-all duration-300",
              "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-silver",
              "peer-focus:-top-2.5 peer-focus:text-sm",
              error ? "text-crimson peer-focus:text-crimson" : "text-silver peer-focus:text-emerald"
            )}
          >
            {label}
          </label>
        )}
        {error && <p className="mt-1 text-sm text-crimson">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

/**
 * Premium textarea component with floating label
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, placeholder, id, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "peer w-full rounded-lg border bg-obsidian px-4 py-3 text-platinum transition-all duration-300",
            "placeholder-transparent min-h-[120px] resize-y",
            "focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent",
            error
              ? "border-crimson focus:ring-crimson"
              : "border-slate/50 hover:border-slate",
            className
          )}
          placeholder={placeholder || label || " "}
          {...props}
        />
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "absolute left-4 -top-2.5 bg-obsidian px-1 text-sm transition-all duration-300",
              "peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-silver",
              "peer-focus:-top-2.5 peer-focus:text-sm",
              error ? "text-crimson peer-focus:text-crimson" : "text-silver peer-focus:text-emerald"
            )}
          >
            {label}
          </label>
        )}
        {error && <p className="mt-1 text-sm text-crimson">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
