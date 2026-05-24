import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Invictus Technologies' full technology stack — from React and Next.js to TensorFlow, Kubernetes, and beyond. We work with the right tool for each problem.",
};

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    description: "We build interfaces that are fast, accessible, and maintainable. Our frontend stack reflects where the industry has converged after years of experimentation.",
    techs: [
      { name: "React", level: "Expert", desc: "Our primary UI library. We've built everything from simple SPAs to complex real-time dashboards." },
      { name: "Next.js", level: "Expert", desc: "Our default full-stack framework. SSR, SSG, App Router — we've shipped in all configurations." },
      { name: "TypeScript", level: "Expert", desc: "Mandatory on all projects. Type safety isn't optional when you're building for production." },
      { name: "Tailwind CSS", level: "Expert", desc: "Utility-first CSS that makes consistent, performant styling achievable at scale." },
      { name: "Vue.js", level: "Advanced", desc: "Strong alternative to React for specific use cases. We've delivered several production Vue apps." },
      { name: "Angular", level: "Advanced", desc: "Enterprise-grade frontend framework. Used for large-scale business apps with complex state." },
      { name: "Framer Motion", level: "Advanced", desc: "Our animation library of choice for React. Used on this site." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Robust server-side systems designed for correctness, performance, and observability. We choose backend technologies based on the problem, not familiarity.",
    techs: [
      { name: "Node.js", level: "Expert", desc: "High-throughput APIs, real-time systems, microservices. Our most-deployed backend runtime." },
      { name: "Python", level: "Expert", desc: "Primary language for AI/ML workloads, data pipelines, and scientific computing." },
      { name: "FastAPI", level: "Expert", desc: "High-performance Python APIs. Auto-documented, async-native, production-ready." },
      { name: "Django", level: "Advanced", desc: "Full-featured Python web framework for data-heavy applications with complex admin needs." },
      { name: "Laravel", level: "Advanced", desc: "Elegant PHP framework used for rapid development of content-heavy web platforms." },
      { name: ".NET / C#", level: "Advanced", desc: "Microsoft ecosystem expertise for enterprise clients requiring .NET integration." },
      { name: "GraphQL", level: "Advanced", desc: "Flexible query layer for complex data relationships and mobile-heavy frontends." },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Cross-platform mobile applications that feel native on both iOS and Android. We don't sacrifice performance for code sharing.",
    techs: [
      { name: "Flutter", level: "Expert", desc: "Google's UI toolkit for beautiful, natively compiled apps. Our default for new mobile projects." },
      { name: "React Native", level: "Expert", desc: "JavaScript-based cross-platform mobile. Excellent for teams already in the React ecosystem." },
      { name: "Swift", level: "Advanced", desc: "Native iOS development for apps requiring deep platform integration." },
      { name: "Kotlin", level: "Advanced", desc: "Native Android development for maximum platform capability." },
      { name: "Expo", level: "Expert", desc: "Managed React Native workflow for rapid development and OTA updates." },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    description: "We build production-grade AI systems — not demos. Our AI work spans custom model training, LLM integration, RAG architectures, and inference infrastructure.",
    techs: [
      { name: "OpenAI API", level: "Expert", desc: "GPT-4o, embeddings, function calling — integrated into production systems with proper rate limiting and error handling." },
      { name: "Anthropic Claude", level: "Expert", desc: "Claude 3 and 4 family for reasoning-heavy tasks. Preferred for enterprise compliance contexts." },
      { name: "LangChain", level: "Expert", desc: "Framework for building LLM-powered applications with complex tool use and memory." },
      { name: "RAG Systems", level: "Expert", desc: "Retrieval-Augmented Generation for grounding AI in proprietary data. Built with vector DBs and semantic search." },
      { name: "TensorFlow", level: "Advanced", desc: "Deep learning for computer vision, NLP, and custom model training at scale." },
      { name: "PyTorch", level: "Advanced", desc: "Research-to-production ML. Used for fine-tuning and custom model development." },
      { name: "Hugging Face", level: "Advanced", desc: "Model hub and transformers library. Rapid deployment of state-of-the-art pre-trained models." },
      { name: "Vector Databases", level: "Expert", desc: "Pinecone, Qdrant, pgvector — semantic search and similarity retrieval at production scale." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "We design for the cloud from day one. Multi-cloud capable, infrastructure-as-code by default, with proper security posture and cost optimization.",
    techs: [
      { name: "AWS", level: "Expert", desc: "Our primary cloud provider. ECS, RDS, S3, Lambda, CloudFront — full ecosystem fluency." },
      { name: "Google Cloud", level: "Advanced", desc: "GKE, BigQuery, Vertex AI, Earth Engine. Preferred for AI/ML and data-heavy workloads." },
      { name: "Microsoft Azure", level: "Advanced", desc: "Enterprise cloud for Microsoft-stack clients. Active Directory, Azure DevOps, and beyond." },
      { name: "Vercel", level: "Expert", desc: "Our deployment platform for Next.js projects. Edge functions, analytics, and instant previews." },
      { name: "DigitalOcean", level: "Advanced", desc: "Simplified cloud for projects where AWS overhead exceeds the benefit." },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    description: "Modern software delivery requires disciplined infrastructure and deployment practices. We bring DevOps culture, not just tools.",
    techs: [
      { name: "Docker", level: "Expert", desc: "Containerization for consistent environments and reproducible deployments." },
      { name: "Kubernetes", level: "Advanced", desc: "Container orchestration for high-availability, auto-scaling production workloads." },
      { name: "Terraform", level: "Expert", desc: "Infrastructure as Code. All cloud resources version-controlled and repeatable." },
      { name: "GitHub Actions", level: "Expert", desc: "CI/CD pipelines with automated testing, security scanning, and zero-downtime deploys." },
      { name: "Nginx", level: "Expert", desc: "Reverse proxy, load balancing, SSL termination. Battle-tested and understood deeply." },
      { name: "Prometheus / Grafana", level: "Advanced", desc: "Metrics collection, dashboards, and alerting for production observability." },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    description: "The right data store for each problem. We don't default to MongoDB for everything or PostgreSQL for everything — we choose based on the access patterns.",
    techs: [
      { name: "PostgreSQL", level: "Expert", desc: "Our default relational database. JSONB, full-text search, RLS — we use it deep." },
      { name: "Redis", level: "Expert", desc: "Caching, pub/sub, queues, sessions. The Swiss Army knife of backend infrastructure." },
      { name: "MongoDB", level: "Advanced", desc: "Document store for schema-flexible, write-heavy workloads." },
      { name: "MySQL", level: "Advanced", desc: "Proven relational database for high-read applications and legacy system integration." },
      { name: "Supabase", level: "Advanced", desc: "PostgreSQL-backed BaaS with real-time and auth. Rapid development without sacrificing power." },
      { name: "Elasticsearch", level: "Advanced", desc: "Full-text search and log analytics at scale." },
      { name: "Prisma", level: "Expert", desc: "Type-safe ORM for TypeScript projects. Migrations, seeding, and introspection." },
    ],
  },
];

const levelColors = {
  Expert: "border-orange-500/40 bg-orange-500/10 text-orange-400",
  Advanced: "border-white/10 bg-white/[0.03] text-silver-500",
};

export default function TechnologyPage() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge variant="orange" dot>Our Stack</Badge>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mt-6 mb-6">
              The Right Tool<br />
              <span className="text-gradient-orange">for Every Problem</span>
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed max-w-2xl mx-auto">
              We work with the right tool for each problem — not the trendy one, not the comfortable one.
              Our stack is the result of engineering judgment accumulated across 50+ projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick nav */}
      <section className="sticky top-16 z-30 bg-black/95 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 px-4 py-1.5 rounded-lg border border-white/8 text-silver-500 hover:border-orange-500/30 hover:text-orange-400 text-sm font-mono transition-all"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {categories.map((cat, ci) => (
              <AnimatedSection key={cat.id} delay={ci * 0.04}>
                <div id={cat.id} className="scroll-mt-32">
                  {/* Category header */}
                  <div className="mb-8 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display font-black text-4xl text-orange-500/25 stat-number">
                        {String(ci + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display font-bold text-white text-3xl">{cat.label}</h2>
                    </div>
                    <p className="text-silver-500 leading-relaxed max-w-3xl">{cat.description}</p>
                  </div>

                  {/* Tech grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {cat.techs.map((tech, ti) => (
                      <div
                        key={ti}
                        className="p-5 rounded-xl border border-white/6 bg-white/[0.015] hover:border-orange-500/25 hover:bg-orange-500/[0.02] transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <h3 className="font-display font-bold text-white text-base group-hover:text-orange-200 transition-colors">
                            {tech.name}
                          </h3>
                          <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono border ${levelColors[tech.level as keyof typeof levelColors]}`}>
                            {tech.level}
                          </span>
                        </div>
                        <p className="text-silver-500 text-xs leading-relaxed">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Ready?"
              title="Don't See What You Need?"
              description="This list isn't exhaustive. If your project requires a technology not listed here, tell us — we'll assess it honestly and bring in the right expertise."
            />
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-bold text-lg tracking-wide transition-all duration-200 shadow-orange-glow"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
