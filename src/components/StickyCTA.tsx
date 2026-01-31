import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const StickyCTA = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-t border-border py-4 md:hidden"
    >
      <div className="section-container flex gap-3">
        <a
          href="#contact"
          className="btn-primary flex-1 flex items-center justify-center gap-2 py-3 text-sm"
        >
          Book a Call
          <ArrowRight size={16} />
        </a>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex items-center justify-center gap-2 py-3 px-4"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
