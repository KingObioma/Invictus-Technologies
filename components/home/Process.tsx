"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Search, Cpu, Code2, Rocket, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We go deep on your business model, user needs, and technical constraints before a single line of code is written. The right questions upfront save months of rework later.",
    detail: "Business analysis · Technical audit · Requirement mapping · Risk assessment",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Architecture",
    description:
      "We design systems for your current scale and your future growth. Every architectural decision is documented, debated, and chosen for a reason — not convenience.",
    detail: "System design · Tech stack selection · Database schema · API contracts",
  },
  {
    number: "03",
    icon: Code2,
    title: "Engineering",
    description:
      "We build with precision, velocity, and test coverage that gives you confidence to ship. Code reviews, PR discipline, and CI/CD from day one.",
    detail: "Agile sprints · Code reviews · Unit & integration testing · Documentation",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment",
    description:
      "We ship to production with monitoring, alerting, and rollback plans in place. A successful launch is one you can sleep through.",
    detail: "Infrastructure setup · Zero-downtime deploy · Monitoring · Performance tuning",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Partnership",
    description:
      "We stay accountable for what we build, long after launch. Most of our clients stay with us for years because maintaining a long-term relationship is how we do our best work.",
    detail: "Maintenance retainers · Feature development · Scaling support · Team augmentation",
  },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-pad bg-black relative overflow-hidden">
      {/* Subtle side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <SectionHeader
            eyebrow="How We Work"
            title={<>From Idea to Production —<br className="hidden sm:block" /> A Process That Works</>}
            description="We've refined this process across 50+ projects. It eliminates the most common failure modes: unclear scope, poor architecture, slow feedback loops, and launch anxiety."
          />
        </div>

        <div ref={ref} className="flex flex-col gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl border border-white/6 bg-white/[0.015] hover:border-violet-500/25 hover:bg-violet-500/[0.02] transition-all duration-300"
              >
                {/* Number + connector */}
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2 shrink-0">
                  <span className="font-display font-black text-4xl text-gradient-orange leading-none stat-number">
                    {step.number}
                  </span>
                  <div className="hidden sm:block w-px flex-1 bg-gradient-to-b from-violet-500/30 to-transparent mt-2 ml-2 min-h-[40px]" />
                </div>

                {/* Icon */}
                <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-xl bg-violet-500/10 border border-violet-500/20 items-center justify-center self-start">
                  <Icon size={20} className="text-violet-400" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="sm:hidden w-9 h-9 shrink-0 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-violet-400" />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl">{step.title}</h3>
                  </div>
                  <p className="text-silver-400 leading-relaxed mb-4">{step.description}</p>
                  <p className="text-silver-600 text-xs font-mono tracking-wide border-t border-white/5 pt-4">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

