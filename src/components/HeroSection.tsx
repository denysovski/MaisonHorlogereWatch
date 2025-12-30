import { Button } from "@/components/ui/button";
import heroWatch from "@/assets/hero-watch.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-background opacity-50" />
      
      <div className="luxury-container relative z-10 pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-6rem)]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Private Manufacture · Est. 1892
              </p>
            </div>
            
            <h1 className="opacity-0 animate-fade-up animation-delay-200 luxury-heading mb-8">
              Timeless
              <br />
              <span className="italic">Precision</span>
            </h1>
            
            <p className="opacity-0 animate-fade-up animation-delay-400 luxury-body max-w-md mx-auto lg:mx-0 mb-10">
              Each timepiece is a testament to over a century of artisanal excellence, 
              where tradition meets innovation in perfect harmony.
            </p>
            
            <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero">
                Explore Collection
              </Button>
              <Button variant="hero-outline">
                Our Heritage
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative opacity-0 animate-fade-in animation-delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/30" />
              
              <img
                src={heroWatch}
                alt="Luxury timepiece"
                className="w-full max-w-lg mx-auto lg:max-w-none object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
