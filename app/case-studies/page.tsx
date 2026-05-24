import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real projects. Real results. Explore how Invictus Technologies has delivered transformative systems across fintech, agritech, logistics, and enterprise software.",
};

const caseStudies = [
  {
    id: "fincore",
    label: "Fintech",
    title: "FinCore — Core Banking Platform Rebuild",
    heroMetric: "95%",
    heroLabel: "Latency Reduction",
    overview:
      "A regional bank processing $8M+ in daily transactions was running on a legacy core banking system built in 2004. Transaction delays of 3+ seconds, a 12% error rate, and a monolithic architecture that blocked every digital initiative. They needed a complete rebuild — without stopping the business.",
    challenge: {
      title: "The Challenge",
      body: "The existing system had no API layer, no horizontal scaling, and no test coverage. Every code change required a 4-hour maintenance window. The bank had attempted two failed rebuilds with other vendors. Trust was low. The CTO had a clear message: deliver on time, or the project dies.",
    },
    solution: {
      title: "Our Solution",
      body: "We designed a microservices-based core banking platform with an event-driven architecture using Kafka as the message backbone. We ran the legacy and new systems in parallel for 90 days, migrating transaction types incrementally with automated rollback triggers. The new API layer enabled the bank to launch a mobile app and partner integrations within weeks of going live.",
      points: [
        "Strangler fig migration pattern — no big-bang cutover",
        "Event sourcing for complete transaction audit trail",
        "Redis-backed session management for real-time concurrency",
        "Automated reconciliation comparing old and new systems daily",
        "Zero-downtime migration with dual-write until parity confirmed",
      ],
    },
    outcome: {
      metrics: [
        { value: "95%", label: "Latency reduction (3s → 140ms)" },
        { value: "0.01%", label: "Transaction error rate (down from 12%)" },
        { value: "$8M+", label: "Daily transaction volume processed" },
        { value: "99.99%", label: "Uptime in first 6 months" },
      ],
      summary:
        "The bank launched a mobile app within 6 weeks of go-live, onboarded 3 fintech partners via API, and is now processing 3x the transaction volume of the legacy system — with no incidents.",
    },
    techs: ["Next.js", "Node.js (microservices)", "PostgreSQL", "Redis", "Apache Kafka", "AWS ECS", "Docker", "Terraform"],
    duration: "7 months",
    team: "4 engineers, 1 architect, 1 PM",
  },
  {
    id: "agroai",
    label: "Agritech / AI",
    title: "AgroAI — Agricultural Intelligence Platform",
    heroMetric: "23%",
    heroLabel: "Yield Improvement",
    overview:
      "An agricultural conglomerate managing 50,000+ hectares across three countries had no data infrastructure. Crop yield was unpredictable. Soil analysis was manual and took 2 weeks. Decisions were made on intuition. They needed AI-driven intelligence that could actually run in areas with limited connectivity.",
    challenge: {
      title: "The Challenge",
      body: "The data problem was fundamental: they had no historical data worth using, inconsistent sensor readings from field IoT devices, and agronomists who were skeptical of software-driven recommendations. Any AI system we built had to earn trust incrementally — not replace human expertise overnight.",
    },
    solution: {
      title: "Our Solution",
      body: "We built a three-layer platform: data ingestion from IoT sensors and satellite imagery, an ML pipeline for yield prediction and anomaly detection, and a field-ready mobile app that worked offline. We involved the agronomists in model evaluation from week two — their domain knowledge became training signal.",
      points: [
        "Satellite imagery analysis via Google Earth Engine API",
        "Custom NDVI processing for crop health mapping",
        "Offline-first mobile app syncing on connectivity",
        "Ensemble model combining sensor data, weather, and historical yield",
        "Agronomist feedback loop built into model retraining pipeline",
      ],
    },
    outcome: {
      metrics: [
        { value: "23%", label: "Improvement in average crop yield" },
        { value: "87%", label: "Reduction in soil analysis time" },
        { value: "$12M", label: "Additional annual revenue attributable to AI decisions" },
        { value: "3 countries", label: "Platform deployed across" },
      ],
      summary:
        "What started as a soil analysis tool became the company's core operational system. The predictive yield model is now used to secure crop financing from banks — turning data into collateral.",
    },
    techs: ["Python (FastAPI)", "TensorFlow", "React", "React Native", "Google Cloud", "Earth Engine API", "PostgreSQL", "Redis"],
    duration: "8 months",
    team: "3 engineers, 1 ML specialist, 1 data engineer",
  },
  {
    id: "logitrack",
    label: "Logistics",
    title: "LogiTrack — Real-Time Logistics Intelligence",
    heroMetric: "67%",
    heroLabel: "Fewer Late Deliveries",
    overview:
      "A pan-African logistics company operating 800+ vehicles across 8 countries had no real-time visibility into their fleet. Dispatchers planned routes manually each morning — a process that took 6 hours and still resulted in 40% late deliveries. Customer satisfaction was collapsing. The board gave the CEO 90 days to fix it.",
    challenge: {
      title: "The Challenge",
      body: "The technical complexity was significant: unreliable connectivity across routes, a fleet of vehicles with inconsistent telematics hardware, dispatchers who had zero trust in technology, and a 90-day deadline that left no room for scope creep or architectural mistakes.",
    },
    solution: {
      title: "Our Solution",
      body: "We built three interconnected systems: a driver mobile app with offline routing and GPS tracking, a dispatcher web dashboard with real-time fleet visibility and AI route optimization, and an analytics platform for management. We phased the rollout by country to manage change carefully.",
      points: [
        "AI route optimization engine using historical delivery data and live traffic",
        "Socket.io real-time fleet tracking with <2s position updates",
        "Offline-capable React Native driver app with local route storage",
        "Dispatcher dashboard with exception-first design (alerts over noise)",
        "Customer SMS notifications at key delivery milestones",
      ],
    },
    outcome: {
      metrics: [
        { value: "67%", label: "Reduction in late deliveries" },
        { value: "6hrs → 18min", label: "Route planning time" },
        { value: "45%", label: "Reduction in fuel costs" },
        { value: "8 countries", label: "Deployed across" },
      ],
      summary:
        "The 90-day mandate was met. The CEO presented the LogiTrack results to the board at day 87 with live data from 600+ vehicles. The company has since expanded to 3 additional countries using the platform.",
    },
    techs: ["React Native", "Next.js", "Node.js", "Socket.io", "Redis", "MongoDB", "Google Maps API", "AWS"],
    duration: "5 months",
    team: "4 engineers, 1 mobile specialist, 1 PM",
  },
];

export default function CaseStudiesPage() {
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
            <Badge variant="orange" dot>Our Work</Badge>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mt-6 mb-6">
              Results That<br />
              <span className="text-gradient-orange">Speak for Themselves</span>
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed max-w-2xl mx-auto">
              Three industries. Three transformations. Real numbers, real challenges, real outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case studies */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.id} delay={i * 0.08}>
                <article
                  id={cs.id}
                  className="rounded-2xl border border-white/7 bg-white/[0.015] overflow-hidden scroll-mt-24"
                >
                  {/* Header */}
                  <div className="p-8 sm:p-10 border-b border-white/5 bg-gradient-to-r from-orange-950/20 to-transparent">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                      <div>
                        <Badge variant="orange" className="mb-4">{cs.label}</Badge>
                        <h2 className="font-display font-black text-white text-2xl sm:text-4xl leading-tight mb-2">
                          {cs.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-silver-600">
                          <span>Duration: {cs.duration}</span>
                          <span>·</span>
                          <span>Team: {cs.team}</span>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="font-display font-black text-5xl sm:text-6xl text-gradient-orange stat-number leading-none">
                          {cs.heroMetric}
                        </div>
                        <div className="text-silver-500 text-sm font-mono mt-1">{cs.heroLabel}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10">
                    {/* Overview */}
                    <p className="text-silver-400 leading-relaxed text-lg mb-10">
                      {cs.overview}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                      {/* Challenge */}
                      <div>
                        <h3 className="font-display font-bold text-white text-lg mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 rounded-full bg-red-500/60" />
                          {cs.challenge.title}
                        </h3>
                        <p className="text-silver-400 leading-relaxed text-sm">{cs.challenge.body}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="font-display font-bold text-white text-lg mb-3 flex items-center gap-2">
                          <span className="w-1 h-5 rounded-full bg-orange-500" />
                          {cs.solution.title}
                        </h3>
                        <p className="text-silver-400 leading-relaxed text-sm mb-4">{cs.solution.body}</p>
                        <ul className="flex flex-col gap-2">
                          {cs.solution.points.map((p, j) => (
                            <li key={j} className="flex items-start gap-2 text-silver-500 text-sm">
                              <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0 mt-2" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="p-6 rounded-xl border border-orange-500/15 bg-orange-500/[0.03] mb-8">
                      <h3 className="font-display font-bold text-white text-sm uppercase tracking-[0.15em] mb-5">
                        Outcomes
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-5">
                        {cs.outcome.metrics.map((m, j) => (
                          <div key={j}>
                            <div className="font-display font-black text-2xl text-gradient-orange stat-number leading-none mb-1">
                              {m.value}
                            </div>
                            <div className="text-silver-500 text-xs font-mono leading-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-silver-400 text-sm leading-relaxed border-t border-white/5 pt-5">
                        {cs.outcome.summary}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cs.techs.map(t => (
                        <span key={t} className="px-3 py-1 text-xs font-mono rounded-lg border border-white/8 text-silver-600 bg-white/[0.015]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-display font-semibold text-sm transition-colors"
                    >
                      Build something like this
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
