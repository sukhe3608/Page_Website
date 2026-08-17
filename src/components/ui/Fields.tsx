import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

export function Field({ label, htmlFor, error, hint, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-navy">
        {label}
        {required && (
          <span className="text-danger" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : hint ? (
        <p className="text-sm text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

const baseClasses =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 outline-none transition-all duration-300 ease-standard";

function stateClasses(hasError: boolean) {
  return hasError
    ? "border-danger/60 focus:border-danger focus:ring-4 focus:ring-danger/10"
    : "border-line focus:border-primary focus:shadow-glow";
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error = false, className, ...rest }: InputProps) {
  return <input className={cn(baseClasses, stateClasses(error), className)} aria-invalid={error || undefined} {...rest} />;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error = false, className, ...rest }: TextareaProps) {
  return (
    <textarea className={cn(baseClasses, stateClasses(error), "min-h-32 resize-y", className)} aria-invalid={error || undefined} {...rest} />
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  options: { value: string; label: string }[];
}

export function Select({ error = false, options, className, ...rest }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(baseClasses, stateClasses(error), "appearance-none pr-10", className)}
        aria-invalid={error || undefined}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
    </div>
  );
}