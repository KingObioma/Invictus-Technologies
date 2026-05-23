"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    label: "Frontend",
    color: "orange",
    techs: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    color: "silver",
    techs: ["Node.js", "Python", "Laravel", "Django", "FastAPI", ".NET", "Express.js"],
  },
  {
    label: "Mobile",
    color: "orange",
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Expo"],
  },
  {
    label: "AI / ML",
    color: "silver",
    techs: ["OpenAI", "Anthropic Claude", "LangChain", "RAG", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    label: "Cloud",
    color: "orange",
    techs: ["AWS", "Google Cloud", "Microsoft Azure", "Vercel", "DigitalOcean"],
  },
  {
    label: "DevOps",
    color: "silver",
    techs: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "CI/CD", "Nginx"],
  },
  {
    label: "Databases",
    color: "orange",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma", "Elasticsearch"],
  },
];

export function TechStackSection() {
  return (
    <section className="section-pad bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <SectionHeader
            eyebrow="Our Stack"
            title="Tools That Match the Ambition"
            description="We work with the right tool for each problem — not the trendy one, and not the comfortable one. Our stack reflects decades of accumulated engineering judgment."
          />
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                <div className="shrink-0 w-24 pt-1">
                  <span className="text-xs font-mono text-silver-600 uppercase tracking-[0.18em]">
                    {cat.label}
                  </span>
                </div>
                <div className="flex-1 border-t border-white/5 pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:border-white/5 sm:pl-6">
                  <div className="flex flex-wrap gap-2">
                    {cat.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-sm font-mono border border-white/6 bg-white/[0.02] text-silver-400 hover:border-orange-500/30 hover:text-orange-400 hover:bg-orange-500/5 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {i < categories.length - 1 && (
                <div className="mt-6 orange-line" />
              )}
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-display font-semibold transition-colors"
          >
            Explore our full technology capabilities
            <ArrowUpRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
