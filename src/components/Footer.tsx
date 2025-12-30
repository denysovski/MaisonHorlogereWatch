import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    collections: ["Classique", "Sport", "Haute Horlogerie", "Limited Editions"],
    company: ["Our Heritage", "Craftsmanship", "Sustainability", "Careers"],
    services: ["Boutiques", "After-Sales", "Authenticity", "Contact"],
  };

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="luxury-container py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl lg:text-3xl mb-4">
              Join Our World
            </h3>
            <p className="text-background/60 text-sm mb-8">
              Receive exclusive updates on new collections, events, and the art of fine watchmaking.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-background/20 px-6 py-3 text-sm tracking-wide placeholder:text-background/40 focus:outline-none focus:border-background/40 transition-colors"
              />
              <Button
                type="submit"
                className="bg-background text-foreground hover:bg-background/90 px-8"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="luxury-container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-serif text-xl tracking-widest mb-6">
              MAISON HORLOGÈRE
            </p>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs mb-6">
              Private manufacture dedicated to the art of exceptional watchmaking since 1892.
            </p>
            {/* Social links */}
            <div className="flex gap-6">
              {["Instagram", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-widest uppercase text-background/40 hover:text-background transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © 2024 Maison Horlogère. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-background/40 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
