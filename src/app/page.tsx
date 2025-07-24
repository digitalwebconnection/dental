import AboutSection from "@/components/About";
import BenefitsSection from "@/components/BenefitsSection";
import ByTheNumbers from "@/components/ByTheNumbers";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <QuoteSection />
      <ProgramsSection />
      <BenefitsSection />
      <ByTheNumbers/>
      <TestimonialsSection />
      <ContactSection />
      <Footer/>
    </>
  );
}
