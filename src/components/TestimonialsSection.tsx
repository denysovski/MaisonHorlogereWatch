const testimonials = [
  {
    quote: "A masterpiece that transcends time itself. The attention to detail is simply extraordinary.",
    author: "James Wellington",
    title: "Collector, London",
  },
  {
    quote: "Every glance at my wrist reminds me why true craftsmanship remains irreplaceable.",
    author: "Marie-Claire Dubois",
    title: "Connoisseur, Geneva",
  },
];

const pressLogos = [
  "Hodinkee",
  "Robb Report",
  "Financial Times",
  "GQ",
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="luxury-container">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Distinguished Collectors
          </p>
          <div className="luxury-divider" />
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto mb-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <blockquote className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="w-12 h-px bg-primary mx-auto mb-4" />
              <p className="text-sm tracking-widest uppercase">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground mt-1">{testimonial.title}</p>
            </div>
          ))}
        </div>
        
        {/* Press logos */}
        <div className="border-t border-border pt-16">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {pressLogos.map((logo) => (
              <span
                key={logo}
                className="font-serif text-lg lg:text-xl text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
