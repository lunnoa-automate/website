import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-primary text-secondary-foreground hover:bg-transparent hover:text-primary-foreground rounded-lg border-2 border-primary",
  secondary: "bg-accent text-primary-foreground rounded-[40px] border-transparent",
  outline: "border-2 border-primary bg-transparent text-primary-foreground hover:bg-primary hover:text-secondary-foreground rounded-lg",
  ghost: "bg-transparent hover:bg-accent text-muted-foreground",
};

const buttonSizes = {
  default: "px-[33px] py-4",
  sm: "py-[5px] px-5 text-sm",
  lg: "px-[38px] py-4",
  xl: "px-12 py-5",
};

export function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className, 
  asChild,
  ...props 
}) {
  // Simple asChild implementation - render children directly if asChild
  if (asChild && children) {
    const child = children;
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2.5 justify-center whitespace-nowrap text-lg font-bold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
      >
        {child}
      </span>
    );
  }

  return (
    <button
      className={cn(
        "inline-flex items-center gap-2.5 justify-center whitespace-nowrap text-lg font-bold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
