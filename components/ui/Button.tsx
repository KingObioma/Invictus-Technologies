import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-glow hover:shadow-orange-md",
    secondary:
      "bg-transparent text-orange-400 border border-orange-500/40 hover:border-orange-500 hover:bg-orange-500/8",
    ghost:
      "bg-transparent text-white border border-white/12 hover:border-white/25 hover:bg-white/4",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
