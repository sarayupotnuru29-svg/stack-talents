import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Stack Talent" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <span className="font-display font-bold text-foreground">STACK TALENT</span>
                <span className="block text-xs text-primary tracking-widest">IT SERVICES</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built on tech. Driven by talent. USA-focused IT staffing & software development solutions.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/stack_talent_itservices?igsh=dDRmdGg3dHczYWFp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/stack-talent-it-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Submit Resume", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              {[
                "IT Staffing Services",
                "Recruiting & Talent Acquisition",
                "Custom Software Development",
                "Web & Enterprise Applications",
                "Cloud & API Integration",
              ].map((s) => (
                <Link key={s} to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:7995506006" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" /> 7995506006
              </a>
              <a href="mailto:Stacktalentitservices@gmail.com" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" /> Stacktalentitservices@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>USA (Address coming soon)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stack Talent IT Services. All rights reserved.
          </div>

          <div className="flex justify-center items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
            >
              <img
                src="/staffarclogo.jpg"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
