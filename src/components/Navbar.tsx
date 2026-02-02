import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#", number: "01" },
  { name: "Services", href: "#services", number: "02" },
  { name: "Work", href: "#work", number: "03" },
  { name: "Testimonials", href: "#testimonials", number: "04" },
  { name: "Why Us", href: "#about", number: "05" },
  { name: "Blog", href: "#blog", number: "06" },
  { name: "Contact", href: "#contact", number: "07" },
];

const verticalNav = [
  { name: "Home", href: "#", id: "home" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Work", href: "#work", id: "work" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "Why Us", href: "#about", id: "about" },
  { name: "Blog", href: "#blog", id: "blog" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [footerFade, setFooterFade] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = verticalNav
        .filter((item) => item.id !== "home")
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: item.id,
              top: rect.top,
              bottom: rect.bottom,
            };
          }
          return null;
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      const viewportCenter = window.innerHeight / 2;
      const currentSection = sections.find((section) => {
        return section.top <= viewportCenter && section.bottom >= viewportCenter;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (sections.length) {
        const first = sections[0];
        const last = sections[sections.length - 1];

        if (viewportCenter < first.top) {
          setActiveSection("home");
        } else if (viewportCenter > last.bottom) {
          setActiveSection(last.id);
        }
      } else {
        setActiveSection("home");
      }

      const footer = document.querySelector("footer");
      if (footer && navRef.current) {
        const footerRect = footer.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        const fadeStart = navRect.bottom;
        const fadeEnd = navRect.top;
        const footerTop = footerRect.top;

        if (footerTop >= fadeStart) {
          setFooterFade(0);
        } else if (footerTop <= fadeEnd) {
          setFooterFade(1);
        } else {
          const progress = (fadeStart - footerTop) / (fadeStart - fadeEnd);
          setFooterFade(progress);
        }
      } else {
        setFooterFade(0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-8 left-8 z-50"
      >
        <a href="#" className="block">
          <img
            src={logo}
            alt="The Head Story"
            className="h-20 w-auto drop-shadow-[0_0_30px_rgba(255,107,0,0.6)] hover:scale-110 transition-transform duration-300"
          />
        </a>
      </motion.div>

      <motion.div
        ref={navRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: footerFade * 60 }}
        transition={{ duration: 0.4 }}
        className="fixed right-8 top-[45%] -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="relative">
          <div className="relative w-12 h-[480px] flex flex-col items-center justify-center gap-10">
            {verticalNav.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative flex items-center"
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${isActive
                    ? "bg-primary scale-150 shadow-[0_0_20px_rgba(255,107,0,0.6)]"
                    : "bg-muted-foreground/30 group-hover:bg-primary group-hover:scale-150"
                    }`} />

                  <div className={`absolute right-7 transition-all duration-300 ${isActive || "opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                    } ${isActive && "opacity-100 translate-x-0"
                    }`}>
                    <span className="whitespace-nowrap px-4 py-2 rounded-full bg-card/90 backdrop-blur-xl border border-border/50 shadow-xl text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="absolute left-1/2 top-4 bottom-16 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 -z-10" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`fixed top-8 right-8 z-50 hidden lg:block transition-all duration-500 ${isScrolled ? "scale-90" : "scale-100"
          }`}
      >
        <a
          href="#contact"
          className="group px-6 py-3 rounded-full bg-gradient-to-r from-primary to-orange-600 text-white font-semibold shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm"
        >
          Book a Call
          <ArrowUpRight
            size={16}
            className="group-hover:rotate-45 transition-transform"
          />
        </a>
      </motion.div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 lg:hidden w-14 h-14 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all duration-300"
      >
        <div className="relative w-5 h-5">
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full origin-center transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full origin-center transition-all"
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-background"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 mb-12 justify-center"
                >
                  <Sparkles className="text-primary" size={20} />
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    Navigation
                  </span>
                </motion.div>

                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-primary/50 transition-all"
                      >
                        <div className="flex items-center gap-6">
                          <span className="text-5xl md:text-6xl font-bold text-muted-foreground/20 group-hover:text-primary/40 transition-colors tabular-nums">
                            {link.number}
                          </span>
                          <span className="text-3xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {link.name}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={32}
                          className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300"
                        />
                      </a>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-16 text-center"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-orange-600 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all"
                  >
                    Book a Call
                    <ArrowUpRight size={20} />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
