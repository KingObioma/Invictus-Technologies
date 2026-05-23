import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, Globe, Smartphone, Brain, Building2, Cloud, Palette, ShoppingCart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack technical execution across web, mobile, AI, enterprise software, cloud infrastructure, and more. Invictus delivers end-to-end engineering for serious businesses.",
};

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "Production-grade web applications engineered for scale.",
    description:
      "We build web applications that handle real load, real users, and real business requirements. Not landing pages or brochure sites — serious software that powers businesses.",
    benefits: [
      "Architected for horizontal scale from day one",
      "Performance budgets enforced at build time",
      "Security-first: OWASP Top 10 addressed by default",
      "SEO-optimized server-side rendering with Next.js",
      "Comprehensive test coverage before production",
    ],
    deliverables: [
      "Full-stack web application with admin dashboard",
      "API layer with documentation",
      "CI/CD pipeline with automated testing",
      "Monitoring and alerting setup",
      "Performance audit report",
      "Deployment to production with staging environment",
    ],
    techs: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    tagline: "Native-quality iOS & Android — one codebase, zero compromise.",
    description:
      "We build mobile applications that users actually want to use. Performant, polished, and built with the architecture to support years of iteration — not just a MVP launch.",
    benefits: [
      "Cross-platform with Flutter or React Native",
      "Native performance via proper state management",
      "Offline-first architecture where appropriate",
      "App Store and Play Store submission handled",
      "Over-the-air updates for rapid iteration",
    ],
    deliverables: [
      "iOS and Android applications",
      "Backend API (if required)",
      "App Store and Play Store submission",
      "Push notification setup",
      "Analytics integration",
      "User documentation",
    ],
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "REST/GraphQL"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions",
    tagline: "AI systems that automate decisions, not just tasks.",
    description:
      "We build production-grade AI systems — not demos. From RAG architectures and custom LLM integrations to fine-tuned models and intelligent automation pipelines that run reliably at scale.",
    benefits: [
      "Purpose-built for your specific business logic",
      "RAG systems grounded in your proprietary data",
      "Evaluation frameworks to measure AI quality",
      "Production inference infrastructure included",
      "Explainable outputs where compliance requires it",
    ],
    deliverables: [
      "Custom AI model or integration",
      "Training and fine-tuning pipeline",
      "Inference API with rate limiting",
      "Evaluation dashboard",
      "Model monitoring and retraining triggers",
      "Documentation and handover",
    ],
    techs: ["OpenAI", "Anthropic Claude", "LangChain", "Python", "TensorFlow", "Vector DBs", "FastAPI"],
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Software",
    tagline: "Mission-critical systems built for the real world.",
    description:
      "Complex business logic. Massive data volumes. Demanding compliance requirements. We've engineered systems in environments where downtime is measured in millions of dollars per minute.",
    benefits: [
      "Multi-tenant architecture with proper isolation",
      "Role-based access control and audit logging",
      "Compliance-ready (GDPR, SOC2, ISO 27001 patterns)",
      "High-availability with 99.99% uptime targets",
      "Integration with existing enterprise systems",
    ],
    deliverables: [
      "Core application with admin portal",
      "Integration adapters for third-party systems",
      "Compliance documentation",
      "Disaster recovery plan",
      "Load testing results",
      "Runbook and incident response playbook",
    ],
    techs: ["Node.js", ".NET", "Java", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "AWS"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Infrastructure that scales. Deployments that ship confidently.",
    description:
      "Modern software delivery requires modern infrastructure. We design and implement cloud architectures, CI/CD pipelines, and DevOps practices that make shipping fast and reliable — not stressful.",
    benefits: [
      "Infrastructure as Code with Terraform",
      "Container orchestration with Kubernetes",
      "Zero-downtime deployment strategies",
      "Cost optimization — we don't over-provision",
      "Security groups, VPCs, and network hardening",
    ],
    deliverables: [
      "Cloud architecture design document",
      "Terraform infrastructure code",
      "CI/CD pipeline configuration",
      "Monitoring stack (metrics, logs, traces)",
      "Alerting with defined SLOs",
      "Runbook documentation",
    ],
    techs: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Interfaces engineered for conversion, retention, and delight.",
    description:
      "We design with purpose. Every layout decision, color choice, and interaction is grounded in user psychology and business objectives — not aesthetic preference or trend-following.",
    benefits: [
      "User research and persona development included",
      "Information architecture before visual design",
      "Design system that scales across the product",
      "Accessibility compliance (WCAG 2.1 AA)",
      "Handoff to development with Figma specifications",
    ],
    deliverables: [
      "User research report",
      "Information architecture map",
      "High-fidelity Figma designs",
      "Interactive prototype",
      "Design system and component library",
      "Developer handoff documentation",
    ],
    techs: ["Figma", "FigJam", "Framer", "Storybook", "Zeroheight"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    tagline: "High-performance storefronts built to convert and scale.",
    description:
      "E-commerce demands performance, reliability, and conversion optimization simultaneously. We build storefronts and marketplace platforms that handle volume without sacrificing experience.",
    benefits: [
      "Sub-second page loads on product pages",
      "Payment gateway integration with proper error handling",
      "Inventory management and fulfillment integrations",
      "Abandoned cart recovery and email automation",
      "Analytics and conversion funnel tracking",
    ],
    deliverables: [
      "Custom storefront or marketplace",
      "Payment and checkout flow",
      "Admin dashboard for inventory and orders",
      "Email automation setup",
      "Analytics integration",
      "Performance optimization report",
    ],
    techs: ["Next.js", "Shopify API", "Stripe", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation & APIs",
    tagline: "Eliminate manual work. Integrate anything. Scale without headcount.",
    description:
      "Business process automation that removes human bottlenecks from high-volume, repeatable work. Integration APIs that connect your systems. Workflow engines that run reliably at any scale.",
    benefits: [
      "Idempotent, retry-safe job processing",
      "Event-driven architecture for real-time workflows",
      "API documentation with OpenAPI specification",
      "Rate limiting, authentication, and abuse protection",
      "Observability built in from the start",
    ],
    deliverables: [
      "Automation system with monitoring",
      "RESTful or GraphQL API",
      "OpenAPI documentation",
      "Webhook system for external integrations",
      "Admin dashboard for workflow monitoring",
      "SLA and performance benchmarks",
    ],
    techs: ["Node.js", "Python", "Kafka", "Redis", "BullMQ", "PostgreSQL", "REST/GraphQL"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge variant="orange" dot>What We Build</Badge>
            <h1 className="font-display font-black text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mt-6 mb-6">
              Every Service.<br />
              <span className="text-gradient-orange">One Standard.</span>
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed max-w-2xl mx-auto">
              We don&apos;t dilute our standards based on project size. Every engagement —
              from a startup MVP to an enterprise platform — gets the same engineering rigour.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.id} delay={i * 0.04}>
                  <div
                    id={service.id}
                    className="group p-8 sm:p-10 rounded-2xl border border-white/7 bg-white/[0.015] hover:border-orange-500/25 transition-all duration-300 scroll-mt-24"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-orange-400" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-white text-2xl sm:text-3xl mb-2">
                          {service.title}
                        </h2>
                        <p className="text-orange-400 font-mono text-sm">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-silver-400 leading-relaxed mb-8 max-w-3xl">
                      {service.description}
                    </p>

                    {/* Grid: Benefits + Deliverables */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 rounded-full bg-orange-500" />
                          What You Get
                        </h3>
                        <ul className="flex flex-col gap-3">
                          {service.benefits.map((b, j) => (
                            <li key={j} className="flex items-start gap-3 text-silver-400 text-sm">
                              <CheckCircle2 size={15} className="text-orange-500 shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 rounded-full bg-silver-600" />
                          Deliverables
                        </h3>
                        <ul className="flex flex-col gap-3">
                          {service.deliverables.map((d, j) => (
                            <li key={j} className="flex items-start gap-3 text-silver-400 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-silver-600 shrink-0 mt-2" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.techs.map(t => (
                        <span key={t} className="px-3 py-1 text-xs font-mono rounded-lg border border-white/8 text-silver-600 bg-white/[0.015]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-display font-semibold text-sm tracking-wide transition-all duration-200 shadow-orange-sm"
                    >
                      Discuss This Service
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
