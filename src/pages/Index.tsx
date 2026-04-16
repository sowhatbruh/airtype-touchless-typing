import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import DownloadSection from "@/components/DownloadSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HowItWorksSection />
    <FeaturesSection />
    <AdvantagesSection />
    <DownloadSection />
    <FAQSection />
    <FooterSection />
  </div>
);

export default Index;
