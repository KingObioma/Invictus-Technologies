import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Badge variant="orange" dot>
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "font-display font-bold text-white leading-[1.08] tracking-tight",
          "text-3xl sm:text-4xl md:text-5xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-silver-500 text-lg leading-relaxed",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
