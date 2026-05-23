import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FinalCTA() {
  return (
    <section className="section-pad bg-black relative overflow-hidden">
      {/* Large center orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 65%)" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Decorative delta (large, watermark) */}
      <div className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none translate-x-1/4 translate-y-1/4 select-none">
        <svg width="600" height="600" viewBox="0 0 34 34" fill="none">
          <path d="M17 2L32 31H2L17 2Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/8 text-orange-400 text-xs font-mono tracking-[0.18em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Ready When You Are
          </span>

          <h2 className="font-display font-black text-white text-5xl sm:text-6xl md:text-7xl leading-[1.04] tracking-tight mb-8">
            Ready to Build<br />
            <span className="text-gradient-orange">Something Serious?</span>
          </h2>

          <p className="text-silver-400 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Your vision is the direction. Our engineering is the execution.<br />
            Together, we build systems that don&apos;t just support businesses — they power them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 px-10 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-lg tracking-wide transition-all duration-200 shadow-orange-glow hover:shadow-orange-md"
            >
              Start the Conversation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="flex items-center gap-2 px-10 py-4 rounded-xl border border-white/12 hover:border-white/25 text-white font-display font-semibold text-lg tracking-wide transition-all duration-200 hover:bg-white/4"
            >
              Explore Our Work
            </Link>
          </div>

          {/* Contact strip */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-5 rounded-2xl border border-white/8 bg-white/[0.02]">
            <a
              href="mailto:invictuskapital@gmail.com"
              className="flex items-center gap-2 text-silver-400 hover:text-orange-400 transition-colors text-sm font-mono"
            >
              <Mail size={15} className="text-orange-500" />
              invictuskapital@gmail.com
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <a
              href="tel:+2347035910594"
              className="flex items-center gap-2 text-silver-400 hover:text-orange-400 transition-colors text-sm font-mono"
            >
              <Phone size={15} className="text-orange-500" />
              +234 703 591 0594
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
