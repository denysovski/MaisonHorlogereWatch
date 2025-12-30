import watchMovement from "@/assets/watch-movement.jpg";

const craftDetails = [
  {
    title: "Movement",
    description: "In-house calibers with hand-finished components and meticulous assembly",
  },
  {
    title: "Materials",
    description: "Ethically sourced precious metals and conflict-free gemstones",
  },
  {
    title: "Finishing",
    description: "Traditional techniques including côtes de Genève and beveling",
  },
];

const CraftsmanshipSection = () => {
  return (
    <section id="craftsmanship" className="py-24 lg:py-32 bg-background">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-primary/30" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-primary/30" />
            <img
              src={watchMovement}
              alt="Watch movement craftsmanship"
              className="w-full relative z-10"
            />
          </div>
          
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              The Art of Watchmaking
            </p>
            <div className="w-16 h-px bg-primary mb-8" />
            
            <h2 className="luxury-subheading mb-8">
              Mastery in Every
              <br />
              <span className="italic">Detail</span>
            </h2>
            
            <p className="luxury-body mb-12">
              Our master watchmakers dedicate hundreds of hours to each timepiece, 
              employing techniques passed down through generations. Every component 
              is hand-finished to perfection, a tradition we refuse to compromise.
            </p>
            
            {/* Details list */}
            <div className="space-y-8">
              {craftDetails.map((detail, index) => (
                <div
                  key={detail.title}
                  className="flex gap-6 items-start border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors duration-300"
                >
                  <div>
                    <h4 className="font-serif text-lg mb-2">{detail.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
