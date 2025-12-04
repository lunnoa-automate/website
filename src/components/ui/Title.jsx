import { cn } from "../../lib/utils";

const titleSizes = {
  "7.5xl": "xl:text-7.5xl md:text-5.5xl text-4.5xl lg:leading-[120%] leading-[130%]",
  "6xl": "lg:text-6xl md:text-5xl text-4xl lg:leading-[125%] md:leading-[120%]",
  "5xl": "lg:text-5xl sm:text-4.5xl text-3xl lg:leading-[140%] sm:leading-[130%] leading-[120%]",
  "4xl": "lg:text-4xl text-[28px] lg:leading-[140%] leading-[140%]",
  "2xl": "lg:text-2xl md:text-xl text-xl md:leading-[140%]",
};

export function Title({ children, size = "5xl", as: Component = "h2", className }) {
  const Tag = size === "7.5xl" ? "h1" : size === "2xl" ? "h5" : Component;
  
  return (
    <Tag
      className={cn(
        "font-extrabold text-muted-foreground",
        titleSizes[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}

