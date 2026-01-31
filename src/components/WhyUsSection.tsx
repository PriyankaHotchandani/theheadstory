import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Clock,
  Code2,
  Handshake,
  Zap,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "We don't outsource blindly",
    description:
      "Everything is done in-house or by vetted partners. Your project never gets lost in translation.",
  },
  {
    icon: Clock,
    title: "We deliver on time",
    description:
      "Deadlines are sacred. We've never missed one. Your launch date is our promise.",
  },
  {
    icon: Code2,
    title: "We understand tech + content",
    description:
      "Rare combo. We think like marketers and build like engineers.",
  },
  {
    icon: Handshake,
    title: "We work like partners",
    description:
      "Not vendors. We're invested in your success, not just the invoice.",
  },
  {
    icon: Zap,
    title: "We move fast",
    description:
      "No endless meetings. No bureaucracy. Just quick decisions and faster execution.",
  },
  {
    icon: HeartHandshake,
    title: "We won't ghost you",
    description:
      "Post-project support is real. We're here even after the work is done.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative bg-card/50">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Why The Head Story?
          </span>
          <h2 className="section-heading mt-4">
            Because we actually{" "}
            <span className="text-gradient">give a damn.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We've seen agencies overpromise and underdeliver. That's not us.
            Here's what makes us different.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-glow p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="text-primary" size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm flex-1">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
