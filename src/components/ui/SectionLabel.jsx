import { cn } from "../../lib/utils";

export function SectionLabel({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 justify-center px-6 py-2 bg-accent text-primary-foreground rounded-[40px] text-base font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}

