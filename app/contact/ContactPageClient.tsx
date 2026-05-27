"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const projectTypes = [
  "Web Application",
  "Mobile App",
  "AI / ML System",
  "Enterprise Software",
  "Cloud & DevOps",
  "UI/UX Design",
  "E-Commerce",k
  "Automation / API",
  "Team Augmentation",
  "Technical Consulting",
  "Other",
];

const budgets = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $150,000",
  "$150,000+",
  "Not sure yet",
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise<void>((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-violet-500/25 bg-violet-500/[0.03]">
        <div className="w-16 h-16 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center mb-6">
          <CheckCircle2 size={30} className="text-violet-400" />
        </div>
        <h3 className="font-display font-bold text-white text-2xl mb-3">Message Received</h3>
        <p className="text-silver-400 leading-relaxed max-w-sm">
          We&apos;ll review your project details and respond within 24 hours — usually sooner.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-silver-500 uppercase tracking-[0.15em] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-silver-700 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/[0.02] transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-silver-500 uppercase tracking-[0.15em] mb-2">
            Work Email *
          </label>
          <input
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-silver-700 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/[0.02] transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-silver-500 uppercase tracking-[0.15em] mb-2">
            Company
          </label>
          <input
            type="text"
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-silver-700 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/[0.02] transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-silver-500 uppercase tracking-[0.15em] mb-2">
            Your Role
          </label>
          <input
            type="text"
            placeholder="CTO, Founder, VP Engineering..."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-silver-700 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/[0.02] transition-all text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-silver-500 uppercase tracking-[0.15em] mb-2">
          Project Type *
        </label>
        <select
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/[0.02] transition-all text-sm appearance-none cursor-pointer"
        >
          <option value="" disabled className="bg-black text-silver-500">
            Select a service type...
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-[#111] text-white">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-mono text-silver-500 uppercase tracking-[0.15em] mb-2">
          Estimated Budget
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <label
              key={b}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/8 bg-white/[0.02] cursor-pointer hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition-all text-sm text-silver-400"
            >
              <input type="radio" name="budget" value={b} className="sr-only" />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-silver-500 uppercase tracking-[0.15em] mb-2">
          Tell Us About Your Project *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Describe what you're building, the problem you're solving, your timeline, and any specific technical requirements or constraints..."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/8 text-white placeholder-silver-700 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/[0.02] transition-all text-sm resize-none leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-violet-500 hover:bg-violet-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-display font-bold text-base tracking-wide transition-all duration-200 shadow-orange-sm hover:shadow-orange-md"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Your Project Brief
            <ArrowRight size={17} />
          </>
        )}
      </button>

      <p className="text-silver-700 text-xs font-mono text-center">
        We respond within 24 hours. No sales calls unless you request one.
      </p>
    </form>
  );
}

export function ContactPageClient() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge variant="orange" dot>
              Let&apos;s Talk
            </Badge>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mt-6 mb-6">
              Tell Us What
              <br />
              <span className="text-gradient-orange">You&apos;re Building</span>
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed max-w-2xl mx-auto">
              No long intake forms. No discovery calls before you know if we&apos;re the right fit.
              Just tell us about your project and we&apos;ll give you a real response.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="p-8 sm:p-10 rounded-2xl border border-white/7 bg-white/[0.015]">
                  <h2 className="font-display font-bold text-white text-2xl mb-2">Project Brief</h2>
                  <p className="text-silver-500 text-sm mb-8">
                    The more context you give us, the better our response will be.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-5">
              <AnimatedSection delay={0.1}>
                <div className="p-6 rounded-2xl border border-white/7 bg-white/[0.015]">
                  <h3 className="font-display font-bold text-white text-base mb-5">
                    Direct Contact
                  </h3>
                  <div className="flex flex-col gap-4">
                    <a href="mailto:invictuskapital@gmail.com" className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                        <Mail size={15} className="text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-silver-600 uppercase tracking-wide mb-0.5">Email</p>
                        <p className="text-silver-300 text-sm group-hover:text-violet-400 transition-colors">
                          invictuskapital@gmail.com
                        </p>
                      </div>
                    </a>
                    <a href="tel:+2347035910594" className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                        <Phone size={15} className="text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-silver-600 uppercase tracking-wide mb-0.5">Phone</p>
                        <p className="text-silver-300 text-sm group-hover:text-violet-400 transition-colors">
                          +234 703 591 0594
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                        <MapPin size={15} className="text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-silver-600 uppercase tracking-wide mb-0.5">Location</p>
                        <p className="text-silver-300 text-sm">Lagos, Nigeria</p>
                        <p className="text-silver-600 text-xs font-mono">Serving clients globally</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="p-6 rounded-2xl border border-violet-500/15 bg-violet-500/[0.03]">
                  <h3 className="font-display font-bold text-white text-base mb-4">What Happens Next</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { step: "01", text: "We review your brief within 24 hours" },
                      { step: "02", text: "We send a direct, honest response — not a sales pitch" },
                      { step: "03", text: "If there's a fit, we schedule a working session" },
                      { step: "04", text: "We send a scoped proposal within 48 hours of that call" },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3">
                        <span className="font-display font-black text-violet-500/40 text-sm stat-number shrink-0 pt-0.5">
                          {s.step}
                        </span>
                        <p className="text-silver-400 text-sm leading-relaxed">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="p-6 rounded-2xl border border-white/7 bg-white/[0.015]">
                  <h3 className="font-display font-bold text-white text-base mb-3">Response Time</h3>
                  <span className="font-display font-black text-violet-400 text-3xl stat-number">&lt;24h</span>
                  <p className="text-silver-500 text-xs font-mono mt-1">Guaranteed first response</p>
                  <p className="text-silver-700 text-xs font-mono mt-2">
                    Usually within a few hours during Lagos business hours (WAT, UTC+1)
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

