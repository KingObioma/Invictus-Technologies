import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "silver" | "dark" | "outline";
  className?: string;
  dot?: boolean;
}

export function Badge({ children, variant = "orange", className, dot }: BadgeProps) {
  const variants = {
    orange: "bg-violet-500/10 text-violet-400 border border-violet-500/25",
    silver: "bg-white/5 text-silver-400 border border-white/10",
    dark: "bg-white/4 text-silver-500 border border-white/8",
    outline: "bg-transparent text-white border border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest uppercase",
        variants[variant],
        className
      )}
    >
      {dot && (
        <span className={cn(
          "w-1.5 h-1.5 rounded-full",
          variant === "orange" ? "bg-violet-400 animate-pulse" : "bg-silver-500"
        )} />
      )}
      {children}
    </span>
  );
}
