import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyMe } from "@/components/WhyMe";
import { Process } from "@/components/Process";
import { Referral } from "@/components/Referral";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingMessenger } from "@/components/FloatingMessenger";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Built by Lyka — Websites & portfolios made simple" },
      {
        name: "description",
        content:
          "Affordable, beginner-friendly website creation for creators, freelancers, and small businesses. Starting at ₱1,000.",
      },
      { property: "og:title", content: "Built by Lyka — Websites & portfolios made simple" },
      {
        property: "og:description",
        content:
          "Soft, modern websites built around you. Portfolios, landing pages, and business sites starting at ₱1,000.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <Process />
        <Referral />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
