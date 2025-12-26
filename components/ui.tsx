import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
  {
    variants: {
      intent: {
        primary: "bg-brand text-brand-foreground hover:opacity-90",
        secondary: "bg-neutral-900 text-white hover:bg-neutral-800",
        ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100"
      }
    },
    defaultVariants: {
      intent: "primary"
    }
  }
);

export function Button({
  className,
  intent,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { intent?: "primary" | "secondary" | "ghost"; asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ intent }), className)} {...props} />;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm", className)} {...props} />;
}

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700", className)} {...props} />;
}
