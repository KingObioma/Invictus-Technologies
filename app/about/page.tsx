import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Invictus Technologies — our mission, values, and why clients across 12+ countries trust us to engineer their most critical systems.",
};

const values = [
  {
    title: "Engineering Over Estimation",
    description:
      "We solve problems with engineering rigour, not estimates. If the answer requires investigation, we investigate before we guess. Clients pay for correct solutions, not comfortable ones.",
  },
  {
    title: "Ownership Without Excuses",
    description:
      "We own outcomes — not just deliverables. If something we built breaks, we fix it. If our architecture was wrong, we admit it and correct it. Accountability is non-negotiable.",
  },
  {
    title: "Simplicity as a Feature",
    description:
      "The best system for your problem is the simplest one that works. We resist over-engineering and fight scope creep because bloated systems fail in ways simple ones don't.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We build for what your business will need in 3 years, not just what you need today. Short-term solutions become tomorrow's technical debt — and we've cleaned up enough of that to know better.",
  },
  {
    title: "Radical Transparency",
    description:
      "We tell clients things they don't always want to hear — project risks, technical trade-offs, scope that doesn't make sense. The truth early is cheaper than a surprise late.",
  },
];

const whyUs = [
  {
    title: "Global Standards, Local Understanding",
    description:
      "We're based in Nigeria and understand the African market deeply — infrastructure constraints, payment systems, mobile-first users. We also know how to build for the US, EU, and global markets simultaneously.",
  },
  {
    title: "Senior-Heavy Teams",
    description:
      "We don't staff projects with junior engineers supervised at arm's length. Every Invictus project has experienced engineers who've seen these problems before and know how to navigate them.",
  },
  {
    title: "Architecture as a Core Competency",
    description:
      "Many development shops can execute against a spec. Very few can define the right architecture before the spec exists. This is where we add disproportionate value — especially for complex or scaling systems.",
  },
  {
    title: "No Vendor Lock-In, Ever",
    description:
      "You own everything we build — source code, infrastructure, documentation. We don't use proprietary tools that trap you. Freedom to change partners is part of how we earn long-term trust.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge variant="orange" dot>Our Story</Badge>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mt-6 mb-6">
              Built to Build<br />
              <span className="text-gradient-orange">What Others Can&apos;t</span>
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed max-w-3xl">
              Invictus Technologies was founded on a simple frustration: the gap between what technology
              can do and what most technology companies actually deliver. We built Invictus to close that gap.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section-pad bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 h-full">
                <span className="text-xs font-mono text-orange-400 uppercase tracking-[0.2em] mb-4 block">Mission</span>
                <h2 className="font-display font-bold text-white text-2xl mb-4 leading-tight">
                  Engineer digital infrastructure that powers businesses into their next chapter.
                </h2>
                <p className="text-silver-400 leading-relaxed">
                  We exist to close the gap between what technology can do and what most companies actually
                  get from their technology partners. Our mission is to build the systems that make the
                  most ambitious business goals executable.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="p-8 rounded-2xl border border-white/7 bg-white/[0.02] h-full">
                <span className="text-xs font-mono text-silver-500 uppercase tracking-[0.2em] mb-4 block">Vision</span>
                <h2 className="font-display font-bold text-white text-2xl mb-4 leading-tight">
                  Become the world&apos;s most trusted engineering partner for companies building serious products.
                </h2>
                <p className="text-silver-400 leading-relaxed">
                  We believe Africa is producing some of the world&apos;s most talented engineers — and that the
                  best African technology companies will compete globally on merit, not geography. Invictus
                  is built to be one of them.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="section-pad bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left" className="sticky top-24">
              <SectionHeader
                eyebrow="Our Story"
                title="The Company Behind the Code"
                align="left"
              />
              <div className="mt-8 p-6 rounded-2xl border border-orange-500/15 bg-orange-500/[0.03]">
                <p className="font-display font-bold text-orange-400 text-4xl stat-number mb-2">50+</p>
                <p className="text-silver-500 text-sm">Projects delivered across Africa, Europe, and North America</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-6 text-silver-400 leading-relaxed">
                <p>
                  Invictus was born from a specific observation: companies everywhere needed serious technical
                  help, but the options were either expensive Western agencies that didn&apos;t understand local
                  markets, or cheaper alternatives that couldn&apos;t execute at the required standard.
                </p>
                <p>
                  We set out to build a different kind of technology company — one that could operate at
                  global standards while being deeply grounded in the markets we serve. Our team is built
                  around engineers who have worked at top companies, understand complex system design, and
                  know how to ship software that actually works.
                </p>
                <p>
                  The name Invictus — Latin for &ldquo;unconquered&rdquo; — reflects our posture toward every
                  project. We don&apos;t accept that a system has to be slow, unreliable, or hard to maintain.
                  We don&apos;t accept that good engineering is only available to companies with large budgets.
                  And we don&apos;t accept that African technology companies can&apos;t compete at the highest level.
                </p>
                <p>
                  Today, we serve clients in 12+ countries, from seed-stage startups that need their
                  first production system to enterprise companies rebuilding critical infrastructure.
                  Every engagement runs on the same standard — because our reputation is built one
                  codebase at a time.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionHeader
              eyebrow="Our Values"
              title="What We Believe In"
              description="These aren't poster values. They're the principles that shape how we behave when a project gets hard, a deadline is at risk, or a client asks us to cut corners."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="p-6 rounded-2xl border border-white/7 bg-white/[0.015] hover:border-orange-500/20 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-black text-orange-500/40 text-3xl stat-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{v.title}</h3>
                  <p className="text-silver-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="section-pad bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <SectionHeader
              eyebrow="Why Us"
              title="Why Clients Choose Invictus"
              description="Four things that consistently distinguish us from the alternatives."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map((w, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-white/7 bg-white/[0.015] hover:border-orange-500/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-white text-xl mb-4">{w.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{w.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight mb-6">
              We&apos;re a small team that<br />
              <span className="text-gradient-orange">does serious work.</span>
            </h2>
            <p className="text-silver-400 text-lg leading-relaxed mb-8">
              If you&apos;re building something that matters, we&apos;d like to hear about it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-lg tracking-wide transition-all duration-200 shadow-orange-glow"
            >
              Start the Conversation
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
