"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe, Smartphone, Brain, Building2, Cloud, Palette, ShoppingCart, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Production-grade web apps engineered for scale, speed, and security. From SaaS platforms to complex portals.",
    href: "/services#web",
    accent: "from-orange-500/20 to-orange-700/5",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native-quality iOS & Android apps built with Flutter and React Native. One codebase, two platforms, zero compromise.",
    href: "/services#mobile",
    accent: "from-orange-600/20 to-orange-800/5",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI and ML systems that automate decisions, surface insights, and transform how your business operates.",
    href: "/services#ai",
    accent: "from-orange-500/20 to-orange-700/5",
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    description: "Complex business systems built to handle mission-critical workloads — ERP, CRM, workflow engines, and custom platforms.",
    href: "/services#enterprise",
    accent: "from-orange-600/20 to-orange-800/5",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure that scales effortlessly. CI/CD pipelines, container orchestration, and deployments that ship confidently.",
    href: "/services#cloud",
    accent: "from-orange-500/20 to-orange-700/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces engineered for conversion, retention, and delight. Design systems that developers love to implement.",
    href: "/services#design",
    accent: "from-orange-600/20 to-orange-800/5",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "High-performance storefronts and marketplace platforms built to handle volume, velocity, and revenue.",
    href: "/services#ecommerce",
    accent: "from-orange-500/20 to-orange-700/5",
  },
  {
    icon: Zap,
    title: "Automation & APIs",
    description: "Business process automation, integration APIs, and workflow systems that eliminate manual effort at scale.",
    href: "/services#automation",
    accent: "from-orange-600/20 to-orange-800/5",
  },
];

export function ServicesOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Build"
          title={<>Full-Stack Technical Execution —<br className="hidden sm:block" /> End to End</>}
          description="We don't specialize in one layer. We engineer the full stack — from database schema to pixel-perfect UI — because fragmented teams produce fragmented products."
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/6 hover:border-orange-500/30 hover:bg-orange-500/[0.03] transition-all duration-300 h-full cursor-pointer"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.accent} border border-orange-500/20`}>
                    <Icon size={20} className="text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-orange-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-silver-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500/60 group-hover:text-orange-400 transition-colors text-xs font-mono">
                    Learn more
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
