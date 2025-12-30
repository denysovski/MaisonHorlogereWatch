import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturedWatches from "@/components/FeaturedWatches";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Maison Horlogère | Private Luxury Watch Manufacture Since 1892</title>
        <meta
          name="description"
          content="Discover exceptional Swiss timepieces from Maison Horlogère. Over a century of artisanal excellence in luxury watchmaking. Explore our exclusive collections."
        />
        <meta name="keywords" content="luxury watches, Swiss watches, haute horlogerie, private manufacture, mechanical watches" />
        <link rel="canonical" href="https://maisonhorlogere.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <PhilosophySection />
          <FeaturedWatches />
          <CraftsmanshipSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
