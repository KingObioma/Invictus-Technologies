import { AnimatedSection } from "@/components/ui/AnimatedSection";

const partners = [
  "AWS", "Google Cloud", "Microsoft Azure", "Vercel",
  "OpenAI", "Anthropic", "GitHub", "Stripe",
  "Docker", "Kubernetes", "PostgreSQL", "Redis",
];

export function TrustIndicators() {
  const items = [...partners, ...partners];

  return (
    <section className="bg-black border-y border-white/5 py-10 overflow-hidden">
      <AnimatedSection>
        <p className="text-center text-silver-600 text-xs font-mono tracking-[0.2em] uppercase mb-8">
          Built with &amp; on top of the world&apos;s best infrastructure
        </p>
      </AnimatedSection>

      <div className="relative">
        <div
          className="flex gap-4 whitespace-nowrap animate-marquee"
          style={{ width: "max-content" }}
        >
          {items.map((p, i) => (
            <span
              key={i}
              className="inline-flex items-center px-5 py-2 rounded-lg border border-white/6 bg-white/[0.02] text-silver-500 text-sm font-mono font-medium tracking-wide shrink-0"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
