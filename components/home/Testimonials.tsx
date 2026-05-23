"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Invictus didn't just build us a banking system. They gave us infrastructure that processes over $8 million in daily transactions without a single incident. They understood the business, not just the code.",
    name: "Adaeze Obi",
    title: "CEO, FinCore Solutions",
    location: "Lagos, Nigeria",
    initials: "AO",
  },
  {
    quote:
      "We needed a technical partner who could work at enterprise pace. Invictus delivered our AI platform 2 weeks ahead of schedule, and the architecture was more sophisticated than anything we'd seen from firms 10x their size.",
    name: "Marcus Holt",
    title: "CTO, GreenField Ventures",
    location: "London, UK",
    initials: "MH",
  },
  {
    quote:
      "When you work with Invictus, you realize they're not a dev shop — they're engineering partners. They challenged our assumptions, improved our product vision, and delivered something our users genuinely love.",
    name: "Priya Sharma",
    title: "Founder, AgriSync",
    location: "Singapore",
    initials: "PS",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-pad bg-black relative overflow-hidden">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            eyebrow="Client Stories"
            title="What Our Clients Say"
            description="We let the results do most of the talking. But here's what clients say about working with us."
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-7 rounded-2xl border border-white/7 bg-white/[0.015] hover:border-orange-500/20 hover:bg-orange-500/[0.02] transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-orange-500/40 font-display font-black text-6xl leading-none mb-4 select-none">
                &ldquo;
              </div>

              <blockquote className="flex-1 text-silver-300 leading-relaxed text-base italic mb-6">
                {t.quote}
              </blockquote>

              <div className="border-t border-white/5 pt-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-silver-600 text-xs font-mono">{t.title}</p>
                  <p className="text-silver-700 text-xs font-mono">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
