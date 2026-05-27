import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function DeltaMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
      <defs>
        <linearGradient id="fm-og" x1="0" y1="34" x2="34" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="55%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <path d="M17 2L32 31H2L17 2Z" fill="url(#fm-og)" />
      <path d="M17 2L2 31L17 23Z" fill="white" fillOpacity="0.18" />
      <path d="M17 23L2 31H32Z" fill="black" fillOpacity="0.4" />
    </svg>
  );
}

const services = [
  { label: "Web Development", href: "/services#web" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "AI Solutions", href: "/services#ai" },
  { label: "Enterprise Software", href: "/services#enterprise" },
  { label: "Cloud & DevOps", href: "/services#cloud" },
  { label: "UI/UX Design", href: "/services#design" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      {/* CTA strip */}
      <div className="border-b border-white/5 bg-gradient-to-r from-black via-violet-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-white text-2xl sm:text-3xl">
              Ready to build something serious?
            </p>
            <p className="text-silver-500 mt-1">
              Let&apos;s talk about your project. No sales pitch — just a direct conversation.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-display font-semibold tracking-wide transition-all duration-200 shadow-orange-sm hover:shadow-orange-md"
          >
            Start the Conversation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <DeltaMark />
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-display font-bold text-white text-xl">
                  In<span className="text-gradient-orange">victus</span>
                </span>
                <span className="text-silver-600 text-[0.6rem] tracking-[0.2em] uppercase font-mono">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-silver-500 text-sm leading-relaxed max-w-sm mb-8">
              Engineering scalable software systems and AI solutions for businesses
              that refuse to stay average. Built for startups, engineered for enterprise.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:invictuskapital@gmail.com"
                className="flex items-center gap-3 text-silver-500 hover:text-violet-400 text-sm transition-colors group"
              >
                <Mail size={14} className="text-violet-400 shrink-0" />
                invictuskapital@gmail.com
              </a>
              <a
                href="tel:+2347035910594"
                className="flex items-center gap-3 text-silver-500 hover:text-violet-400 text-sm transition-colors"
              >
                <Phone size={14} className="text-violet-400 shrink-0" />
                +234 703 591 0594
              </a>
              <span className="flex items-center gap-3 text-silver-500 text-sm">
                <MapPin size={14} className="text-violet-400 shrink-0" />
                Lagos, Nigeria — Serving globally
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-semibold text-white text-xs uppercase tracking-[0.15em] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-silver-500 hover:text-white text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-semibold text-white text-xs uppercase tracking-[0.15em] mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-silver-500 hover:text-white text-sm transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-silver-700 text-xs font-mono">
            © {new Date().getFullYear()} Invictus Technologies Ltd. All rights reserved.
          </p>
          <p className="text-silver-700 text-xs font-mono tracking-wider uppercase">
            Engineering Scalable Systems & AI Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
