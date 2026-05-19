import { CTASection } from "@/components/CTASection";
import { DriverGuideSection } from "@/components/DriverGuideSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { PlatformSection } from "@/components/PlatformSection";
import { RiderGuideSection } from "@/components/RiderGuideSection";
import { StatsSection } from "@/components/StatsSection";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>

      <PlatformSection />
      <RiderGuideSection />
      <DriverGuideSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default DashboardPage;
