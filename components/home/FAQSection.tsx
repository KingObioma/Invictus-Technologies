"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "Where is Invictus Technologies headquartered?",
    a: "We're headquartered in Lagos, Nigeria, with team members distributed across multiple countries. We operate across international time zones and have worked seamlessly with clients from North America, Europe, Asia, and across Africa. Location has never been a constraint for us.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely — the majority of our projects are for clients outside Nigeria. We've delivered systems for companies in the UK, US, Singapore, UAE, and across Africa. We adapt to client time zones, communication preferences, and project management tools.",
  },
  {
    q: "How long does a typical project take?",
    a: "Scope determines timeline. A focused MVP with clear requirements can be production-ready in 6–10 weeks. A full enterprise platform typically takes 4–8 months. We'll give you a precise timeline during discovery — one we've thought through carefully, not just told you what you want to hear.",
  },
  {
    q: "What does your pricing model look like?",
    a: "We work on fixed-scope projects, monthly retainers, and dedicated team arrangements depending on what fits best. We don't publish rates publicly because every engagement is scoped specifically — a fair price requires understanding your actual requirements. Contact us and we'll send a proposal within 48 hours.",
  },
  {
    q: "Do you provide maintenance and support after launch?",
    a: "Yes, and most of our clients stay with us on maintenance retainers after launch. We believe in long-term partnerships — the team that built your system is best positioned to evolve it. We offer SLA-backed support packages for production systems.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Our deepest experience is in fintech, agritech, logistics, SaaS, and enterprise software. But we've built successfully across retail, healthcare, education, and manufacturing. The complexity of the technical challenge matters more than the industry label.",
  },
  {
    q: "How do you handle intellectual property and code ownership?",
    a: "You own everything we build for you — full source code, documentation, and all associated intellectual property. This is non-negotiable and explicitly stated in every contract. You're never locked into us.",
  },
  {
    q: "Can you augment our existing engineering team?",
    a: "Yes. We offer team augmentation as a standalone service — embedding our engineers into your existing team to increase velocity and bring specialized expertise. This works particularly well for AI/ML, cloud infrastructure, and mobile development.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`border rounded-xl transition-all duration-200 ${
        open
          ? "border-violet-500/30 bg-violet-500/[0.03]"
          : "border-white/6 bg-white/[0.015] hover:border-white/12"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display font-semibold text-white text-base pr-4">{item.q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
          open ? "border-violet-500/50 bg-violet-500/10 text-violet-400" : "border-white/10 text-silver-500"
        }`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-silver-400 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions, Direct Answers"
            description="We believe in transparency. Here are the questions we hear most often — answered honestly."
          />
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

