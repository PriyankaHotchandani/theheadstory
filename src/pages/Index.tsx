import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutProofSection from "@/components/AboutProofSection";
import WorkSection from "@/components/WorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Marquee from "@/components/Marquee";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <AboutProofSection />
      <BlogSection />
      <ContactForm />
      <Footer />
      <StickyCTA />
      <Marquee />
    </main>
  );
};

export default Index;
