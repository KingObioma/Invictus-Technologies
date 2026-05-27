"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Brain, Cpu, Layers, GitBranch, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FeaturedCapabilities() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <SectionHeader
            eyebrow="Core Strengths"
            title="Where We Go Deeper"
            description="Some capabilities define us. These are the areas where our expertise is most differentiated — and where we deliver the most value."
          />
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">

          {/* AI — large card */}
          <AnimatedSection
            delay={0.05}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <Link href="/services#ai" className="group flex flex-col h-full min-h-[280px] p-8 rounded-2xl bg-gradient-to-br from-violet-950/30 via-[#0A0A0A] to-black border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden cursor-pointer">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.4) 0%, transparent 70%)" }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
                    <Brain size={26} className="text-violet-400" />
                  </div>
                  <Badge variant="orange">Featured</Badge>
                </div>

                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4 leading-tight">
                  AI & Machine Learning Solutions
                </h3>
                <p className="text-silver-400 leading-relaxed mb-6 flex-1">
                  We don&apos;t just call the OpenAI API. We build AI systems with custom training pipelines,
                  RAG architectures, fine-tuned models, and production-grade inference infrastructure.
                  From intelligent automation to predictive analytics — AI that actually works in production.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Custom LLM Integration", "RAG Systems", "Predictive Models", "AI Automation", "Vector DBs"].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono border border-violet-500/20 text-violet-400/70 bg-violet-500/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-violet-400 font-display font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore AI Services
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Mobile */}
          <AnimatedSection delay={0.1}>
            <Link href="/services#mobile" className="group flex flex-col h-full min-h-[200px] p-6 rounded-2xl bg-white/[0.02] border border-white/7 hover:border-violet-500/25 hover:bg-violet-500/[0.02] transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/15 to-violet-700/5 border border-violet-500/20 flex items-center justify-center mb-4">
                <Layers size={20} className="text-violet-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Cross-Platform Mobile</h3>
              <p className="text-silver-500 text-sm leading-relaxed flex-1">
                Flutter and React Native apps that feel native on both platforms. No compromise on performance or UX.
              </p>
              <div className="mt-4 flex items-center gap-1 text-violet-500/50 group-hover:text-violet-400 text-xs font-mono transition-colors">
                View service <ArrowUpRight size={11} />
              </div>
            </Link>
          </AnimatedSection>

          {/* Enterprise */}
          <AnimatedSection delay={0.15}>
            <Link href="/services#enterprise" className="group flex flex-col h-full min-h-[200px] p-6 rounded-2xl bg-white/[0.02] border border-white/7 hover:border-violet-500/25 hover:bg-violet-500/[0.02] transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/15 to-violet-700/5 border border-violet-500/20 flex items-center justify-center mb-4">
                <Cpu size={20} className="text-violet-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Enterprise Architecture</h3>
              <p className="text-silver-500 text-sm leading-relaxed flex-1">
                Microservices, event-driven systems, and distributed architectures that scale to millions of users.
              </p>
              <div className="mt-4 flex items-center gap-1 text-violet-500/50 group-hover:text-violet-400 text-xs font-mono transition-colors">
                View service <ArrowUpRight size={11} />
              </div>
            </Link>
          </AnimatedSection>

          {/* DevOps */}
          <AnimatedSection delay={0.2} className="md:col-span-2 lg:col-span-1">
            <Link href="/services#cloud" className="group flex flex-col h-full min-h-[200px] p-6 rounded-2xl bg-white/[0.02] border border-white/7 hover:border-violet-500/25 hover:bg-violet-500/[0.02] transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/15 to-violet-700/5 border border-violet-500/20 flex items-center justify-center mb-4">
                <GitBranch size={20} className="text-violet-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Cloud & DevOps</h3>
              <p className="text-silver-500 text-sm leading-relaxed flex-1">
                AWS, GCP, and Azure infrastructure with Kubernetes, Docker, and fully automated CI/CD pipelines.
              </p>
              <div className="mt-4 flex items-center gap-1 text-violet-500/50 group-hover:text-violet-400 text-xs font-mono transition-colors">
                View service <ArrowUpRight size={11} />
              </div>
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

