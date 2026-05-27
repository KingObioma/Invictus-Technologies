"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "fincore",
    title: "FinCore Banking Platform",
    industry: "Fintech",
    challenge: "Legacy core banking system causing 3-second delays and 12% transaction error rate",
    outcome: "95% reduction in transaction latency. 0.01% error rate. $8M+ in daily volume.",
    techs: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS ECS"],
    color: "from-violet-950/40 via-transparent to-transparent",
    metric: { value: "95%", label: "Latency Reduction" },
  },
  {
    id: "agroai",
    title: "AgroAI Intelligence Platform",
    industry: "Agritech",
    challenge: "Manual soil analysis taking 2 weeks, unpredictable crop yields across 50,000+ hectares",
    outcome: "23% increase in average yield. 87% reduction in analysis time. $12M additional annual revenue.",
    techs: ["Python", "TensorFlow", "React", "GCP", "Earth Engine API"],
    color: "from-violet-900/30 via-transparent to-transparent",
    metric: { value: "23%", label: "Yield Improvement" },
  },
  {
    id: "logitrack",
    title: "LogiTrack Logistics System",
    industry: "Logistics",
    challenge: "40% late deliveries, no real-time visibility across 8 countries, manual route planning",
    outcome: "67% reduction in late deliveries. Route optimization automated. 45% fuel cost reduction.",
    techs: ["React Native", "Next.js", "Node.js", "Socket.io", "Redis"],
    color: "from-violet-950/40 via-transparent to-transparent",
    metric: { value: "67%", label: "Fewer Late Deliveries" },
  },
];

export function CaseStudiesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            eyebrow="Our Work"
            title="Results That Speak"
            align="left"
            description="Three projects. Three industries. Three transformations."
          />
          <Link
            href="/case-studies"
            className="shrink-0 inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-display font-semibold transition-colors text-sm"
          >
            All case studies
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/case-studies#${cs.id}`}
                className={`group flex flex-col h-full rounded-2xl border border-white/7 bg-gradient-to-br ${cs.color} overflow-hidden hover:border-violet-500/30 transition-all duration-300 cursor-pointer`}
              >
                {/* Metric header */}
                <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-silver-600 uppercase tracking-[0.15em]">
                    {cs.industry}
                  </span>
                  <div className="text-right">
                    <span className="font-display font-black text-2xl text-gradient-orange stat-number">
                      {cs.metric.value}
                    </span>
                    <span className="text-silver-600 text-xs block font-mono">{cs.metric.label}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="font-display font-bold text-white text-xl group-hover:text-violet-200 transition-colors">
                    {cs.title}
                  </h3>
                  <div>
                    <p className="text-silver-600 text-xs font-mono uppercase tracking-wide mb-1.5">Challenge</p>
                    <p className="text-silver-400 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-silver-600 text-xs font-mono uppercase tracking-wide mb-1.5">Outcome</p>
                    <p className="text-silver-300 text-sm leading-relaxed font-medium">{cs.outcome}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.techs.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/8 text-silver-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-white/5">
                  <span className="flex items-center gap-1 text-violet-500/50 group-hover:text-violet-400 text-xs font-mono transition-colors">
                    Read case study <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

