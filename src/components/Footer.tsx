import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Social & Content", href: "#services" },
    { name: "Tech & Websites", href: "#services" },
    { name: "Editing & Production", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#work" },
    { name: "FAQs", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/theheadstory", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/theheadstory", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/theheadstory", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@theheadstory", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={logo} alt="The Head Story" className="h-12 w-auto mb-6 drop-shadow-[0_0_10px_rgba(255,107,0,0.3)]" />
            <p className="text-muted-foreground mb-6 max-w-sm">
              Creative that ships. Tech that works. We help brands, shops &
              creators grow through content, code & consistency.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@theheadstory.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>hello@theheadstory.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Head Story. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
