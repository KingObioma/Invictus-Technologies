"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 500, prefix: "$", suffix: "M+", label: "Revenue Enabled" },
];

function useCountUp(target: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  stat,
  delay,
  animate,
}: {
  stat: typeof stats[0];
  delay: number;
  animate: boolean;
}) {
  const count = useCountUp(stat.value, 1800, animate);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center py-6 px-4 bg-black/60 border-r border-white/5 last:border-r-0"
    >
      <span className="font-display font-bold text-3xl sm:text-4xl text-white stat-number leading-none mb-1">
        {stat.prefix ?? ""}{count}{stat.suffix}
      </span>
      <span className="text-silver-500 text-xs sm:text-sm text-center leading-tight mt-1">
        {stat.label}
      </span>
    </motion.div>
  );
}

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Orange orb — center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 65%)" }}
      />

      {/* Orange orb — top right */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }}
      />

      {/* Silver orb — bottom left */}
      <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(148,163,184,0.05) 0%, transparent 70%)" }}
      />

      {/* Decorative delta watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <svg width="500" height="500" viewBox="0 0 34 34" fill="none">
          <path d="M17 2L32 31H2L17 2Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-xs font-mono font-medium tracking-[0.18em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Global Technology Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight max-w-5xl"
          >
            We Build Systems That{" "}
            <span className="text-gradient-orange">Power Businesses</span>{" "}
            Forward
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-silver-400 text-lg sm:text-xl leading-relaxed max-w-2xl"
          >
            From AI solutions and enterprise software to cloud infrastructure and mobile apps —
            Invictus engineers scalable digital systems for companies that refuse to stay average.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-display font-bold text-lg tracking-wide transition-all duration-200 shadow-orange-glow hover:shadow-orange-md"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/case-studies"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/12 hover:border-white/25 text-white font-display font-semibold text-lg tracking-wide transition-all duration-200 hover:bg-white/4"
            >
              View Our Work
              <ChevronRight size={18} className="text-silver-500" />
            </Link>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 w-full max-w-4xl orange-line"
          />

          {/* Stats */}
          <div ref={statsRef} className="w-full max-w-4xl mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 border border-white/6 rounded-b-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <StatCard
                  key={i}
                  stat={stat}
                  delay={0.55 + i * 0.08}
                  animate={statsVisible}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
