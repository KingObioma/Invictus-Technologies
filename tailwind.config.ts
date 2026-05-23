import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0A0A0A",
        "surface-2": "#111111",
        "surface-3": "#171717",
        coal: "#1A1A1A",
        ember: {
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
        },
        silver: {
          200: "#F1F5F9",
          300: "#E2E8F0",
          400: "#CBD5E1",
          500: "#94A3B8",
          600: "#64748B",
          700: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-dim": "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
        "grid-bright": "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "orange-radial": "radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)",
        "orange-radial-sm": "radial-gradient(ellipse at center, rgba(249,115,22,0.1) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
        "grid-80": "80px 80px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "orange-sm": "0 0 20px rgba(249,115,22,0.2)",
        "orange-md": "0 0 40px rgba(249,115,22,0.3)",
        "orange-lg": "0 0 80px rgba(249,115,22,0.4)",
        "orange-glow": "0 4px 32px rgba(249,115,22,0.35)",
        "card": "0 1px 3px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
