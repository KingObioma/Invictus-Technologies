"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

function DeltaMark({ className }: { className?: string }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="nm-og" x1="0" y1="34" x2="34" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C2410C" />
          <stop offset="55%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
        <linearGradient id="nm-sg" x1="17" y1="3" x2="0" y2="31" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Main triangle */}
      <path d="M17 2L32 31H2L17 2Z" fill="url(#nm-og)" />
      {/* Left face highlight (silver) */}
      <path d="M17 2L2 31L17 23Z" fill="url(#nm-sg)" />
      {/* Bottom shadow */}
      <path d="M17 23L2 31H32Z" fill="black" fillOpacity="0.4" />
      {/* Inner depth notch */}
      <path d="M17 11L25 27H9Z" fill="black" fillOpacity="0.22" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <DeltaMark className="transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-display font-bold text-white text-[1.2rem] tracking-tight leading-none">
                  In<span className="text-gradient-orange">victus</span>
                </span>
                <span className="text-silver-600 text-[0.6rem] tracking-[0.2em] uppercase font-mono">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-silver-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-display font-semibold tracking-wide transition-all duration-200 shadow-orange-sm hover:shadow-orange-md"
              >
                Start a Project
              </Link>
              <button
                className="md:hidden p-2 rounded-lg text-silver-400 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl flex flex-col transition-all duration-300 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="pt-24 px-6 pb-8 flex flex-col h-full">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "px-4 py-4 rounded-xl text-2xl font-display font-bold transition-all duration-300",
                  pathname === link.href
                    ? "text-orange-400"
                    : "text-white hover:text-orange-400",
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-xl font-display font-bold tracking-wide transition-colors shadow-orange-md"
            >
              Start a Project
            </Link>
          </div>

          <div className="mt-auto border-t border-white/8 pt-6 flex flex-col gap-2">
            <a
              href="mailto:invictuskapital@gmail.com"
              className="text-silver-500 text-sm font-mono hover:text-orange-400 transition-colors"
            >
              invictuskapital@gmail.com
            </a>
            <a
              href="tel:+2347035910594"
              className="text-silver-500 text-sm font-mono hover:text-orange-400 transition-colors"
            >
              +234 703 591 0594
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
