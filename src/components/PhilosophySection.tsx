const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-background">
      <div className="luxury-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Philosophy
            </p>
            <div className="luxury-divider" />
          </div>
          
          {/* Main content */}
          <h2 className="luxury-subheading mb-8">
            Where Heritage Meets
            <br />
            <span className="italic">Uncompromising Excellence</span>
          </h2>
          
          <p className="luxury-body max-w-2xl mx-auto mb-12">
            For over a century, our maison has dedicated itself to the pursuit of 
            horological perfection. Every timepiece that leaves our atelier carries 
            within it the spirit of generations of master craftsmen, their expertise 
            refined through decades of unwavering commitment.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 lg:gap-16 pt-12 border-t border-border">
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl mb-2">1892</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Established
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl mb-2">47</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Master Artisans
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl lg:text-4xl mb-2">∞</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Generations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
