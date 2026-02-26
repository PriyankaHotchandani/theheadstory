import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Let's Build Something Great
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Got a brand to build
            <br />
            <span className="text-gradient">or a product to launch?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stop scrolling. Start building. Let's have a conversation that
            actually leads somewhere.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center gap-2 text-lg px-10 py-5"
            >
              Book a Strategy Call
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Response Time Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            ⚡ Average response time: Under 24 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
