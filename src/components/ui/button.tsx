import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "rounded-none bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-[0.12em]",
        heroOutline: "rounded-none border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary",
        light: "rounded-none bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground uppercase tracking-[0.1em]",
        contact: "rounded-none bg-accent text-accent-foreground hover:bg-primary-foreground uppercase tracking-[0.1em]",
        iconLight: "rounded-none border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
        play: "rounded-full border border-primary-foreground/60 bg-primary/30 text-primary-foreground backdrop-blur-sm hover:scale-105 hover:bg-primary/50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-11 w-11",
        hero: "h-14 px-7 text-xs sm:px-9",
        contact: "h-11 px-6 text-[11px]",
        play: "h-20 w-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
