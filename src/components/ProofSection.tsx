import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Clock, Zap, Users } from "lucide-react";

const stats = [
  {
    icon: CheckCircle2,
    value: "50+",
    label: "Projects Delivered",
    description: "Across brands, shops & creators",
  },
  {
    icon: Clock,
    value: "100%",
    label: "On-Time Delivery",
    description: "We don't miss deadlines. Ever.",
  },
  {
    icon: Zap,
    value: "24hr",
    label: "Response Time",
    description: "Quick replies, faster execution",
  },
  {
    icon: Users,
    value: "20+",
    label: "Happy Clients",
    description: "From Mumbai to the world",
  },
];

const ProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative bg-card/50">
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Proof of Work
          </span>
          <h2 className="section-heading mt-4">
            Numbers don't lie.{" "}
            <span className="text-gradient">Neither do we.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="card-glow p-6 text-center h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="text-primary" size={24} />
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-primary" />
            <span className="text-sm">No Hidden Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-primary" />
            <span className="text-sm">Direct Communication</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-primary" />
            <span className="text-sm">Transparent Process</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-primary" />
            <span className="text-sm">Revision Friendly</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
