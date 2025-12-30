import { Button } from "@/components/ui/button";
import watch1 from "@/assets/watch-1.jpg";
import watch2 from "@/assets/watch-2.jpg";
import watch3 from "@/assets/watch-3.jpg";

const watches = [
  {
    id: 1,
    name: "Classique Éternelle",
    model: "CE-001",
    price: "CHF 24,500",
    image: watch1,
    description: "41mm Rose Gold · Automatic",
  },
  {
    id: 2,
    name: "Chronographe Sport",
    model: "CS-042",
    price: "CHF 32,800",
    image: watch2,
    description: "43mm Titanium · Chronograph",
  },
  {
    id: 3,
    name: "Dame Précieuse",
    model: "DP-017",
    price: "CHF 18,900",
    image: watch3,
    description: "36mm Rose Gold · Diamond Set",
  },
];

const FeaturedWatches = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-ivory">
      <div className="luxury-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Featured Collection
          </p>
          <div className="luxury-divider mb-8" />
          <h2 className="luxury-subheading">
            Exceptional <span className="italic">Timepieces</span>
          </h2>
        </div>
        
        {/* Watch grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {watches.map((watch, index) => (
            <div
              key={watch.id}
              className="group luxury-card bg-background"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image container */}
              <div className="relative overflow-hidden mb-8">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
              </div>
              
              {/* Watch info */}
              <div className="text-center">
                <p className="text-xs tracking-widest text-muted-foreground mb-2">
                  {watch.model}
                </p>
                <h3 className="font-serif text-xl mb-2">{watch.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {watch.description}
                </p>
                <p className="font-serif text-lg tracking-wide mb-6">
                  {watch.price}
                </p>
                <Button variant="luxury" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <Button variant="outline" size="lg">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWatches;
