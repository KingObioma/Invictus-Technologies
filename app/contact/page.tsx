import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Invictus Technologies. Tell us about your project and we'll respond within 24 hours with a direct, honest assessment.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
