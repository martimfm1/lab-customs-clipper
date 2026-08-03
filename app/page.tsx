import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import PortfolioSection from "@/components/portfolio-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
