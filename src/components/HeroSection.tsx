import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/theheadstory", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/theheadstory", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/theheadstory", label: "Twitter" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-float" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Decorative Dots - Left Side - MarkitUp inspired */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
        {/* Vertical Line with Circles */}
        <div className="w-3 h-3 rounded-full border-2 border-foreground/30" />
        <div className="w-px h-24 bg-foreground/20" />
        <div className="w-3 h-3 rounded-full border-2 border-foreground/30" />
        
        {/* Dot Grid */}
        <div className="mt-8 grid grid-cols-6 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-foreground/20"
            />
          ))}
        </div>
      </div>

      {/* Decorative Dots - Right Side */}
      <div className="absolute right-8 top-1/3 hidden lg:grid grid-cols-6 gap-2">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-foreground/20"
          />
        ))}
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Mumbai's Creative Tech Studio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-heading mb-6"
          >
            <span className="text-foreground">Creative that </span>
            <span className="text-gradient">ships.</span>
            <br />
            <span className="text-foreground">Tech that </span>
            <span className="text-gradient">works.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            We help brands, shops & creators grow through{" "}
            <span className="text-foreground font-medium">content</span>,{" "}
            <span className="text-foreground font-medium">code</span> &{" "}
            <span className="text-foreground font-medium">consistency</span>.
          </motion.p>

          {/* Social Links - MarkitUp Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn-primary group flex items-center gap-2 rounded-full"
            >
              Contact Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 rounded-full"
            >
              <MessageCircle size={18} />
              Download Brochure
            </a>
          </motion.div>

          {/* Floating Stats Badges - MarkitUp Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 relative"
          >
            {/* Stats in pill format */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-lg"
              >
                <span className="text-2xl md:text-3xl font-bold text-foreground">50+</span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-primary">Happy</div>
                  <div className="text-sm font-semibold text-foreground">Clients</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border shadow-lg"
              >
                <span className="text-2xl md:text-3xl font-bold text-foreground">999+</span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-primary">Videos</div>
                  <div className="text-sm font-semibold text-foreground">Edited & Published</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
