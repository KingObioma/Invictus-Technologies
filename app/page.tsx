import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedCapabilities } from "@/components/home/FeaturedCapabilities";
import { Process } from "@/components/home/Process";
import { WhyInvictus } from "@/components/home/WhyInvictus";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Invictus Technologies — Engineering Scalable Software Systems & AI Solutions",
  description:
    "Invictus Technologies engineers scalable digital systems for businesses that refuse to stay average. AI solutions, enterprise software, web & mobile development.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServicesOverview />
      <FeaturedCapabilities />
      <Process />
      <WhyInvictus />
      <TechStackSection />
      <CaseStudiesPreview />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
