"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Shield, TrendingUp, Layers, Target } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Production-Grade by Default",
    description:
      "We don't build demos or MVPs that fall apart at scale. Every system we ship is engineered with proper error handling, monitoring, security hardening, and load capacity. Your system will work when it matters most.",
    metric: "99.9% uptime SLA",
  },
  {
    icon: Layers,
    title: "Architecture First",
    description:
      "We design the right system before writing a single line of code. Bad architecture is the most expensive technical debt — we prevent it at the source. Our technical leads have designed systems processing millions of transactions.",
    metric: "Designed for 10x your current scale",
  },
  {
    icon: TrendingUp,
    title: "Speed Without Sacrifice",
    description:
      "We move fast without cutting corners on security, test coverage, or scalability. The fastest way to slow a project down is to ship broken software — so we ship right the first time.",
    metric: "Avg. 8-week MVP delivery",
  },
  {
    icon: Target,
    title: "End-to-End Ownership",
    description:
      "We own the outcome, not just the task. From discovery and architecture to deployment and post-launch support — you have one accountable partner for the entire lifecycle of your product.",
    metric: "Single point of accountability",
  },
];

export function WhyInvictus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Right side glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-50"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: header + quote */}
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Why Invictus"
              title={<>Why Ambitious Companies<br />Choose Invictus</>}
              align="left"
              description="Most tech teams can write code. Very few can engineer systems that survive the real world — high load, edge cases, evolving requirements, and the pressure of actual customers."
            />

            <blockquote className="mt-10 p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5">
              <p className="text-white font-display font-medium text-lg leading-relaxed italic">
                &ldquo;We don&apos;t just build software. We build infrastructure for growth, intelligence for decisions, and systems for scale.&rdquo;
              </p>
              <footer className="mt-4 text-violet-400 text-sm font-mono">
                — Invictus Engineering Philosophy
              </footer>
            </blockquote>
          </div>

          {/* Right: reasons */}
          <div ref={ref} className="flex flex-col gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-6 rounded-2xl border border-white/6 bg-white/[0.015] hover:border-violet-500/25 hover:bg-violet-500/[0.025] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-2 mb-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <h3 className="font-display font-bold text-white text-base leading-tight">
                          {r.title}
                        </h3>
                        <span className="self-start shrink-0 text-[10px] font-mono text-violet-400/70 border border-violet-500/20 bg-violet-500/5 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {r.metric}
                        </span>
                      </div>
                      <p className="text-silver-500 text-sm leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

