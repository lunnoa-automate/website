import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }) {
  return (
    <span 
      className={cn(
        "inline-block bg-accent text-primary font-semibold px-4 py-2 rounded-full text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
