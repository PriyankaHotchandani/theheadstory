import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Shield,
    Clock,
    Zap,
    Handshake,
    Code2,
    HeartHandshake,
    CheckCircle2,
    Users,
} from "lucide-react";

const stats = [
    {
        icon: CheckCircle2,
        value: "50+",
        label: "Projects Delivered",
        color: "from-orange-500 to-amber-500",
    },
    {
        icon: Clock,
        value: "100%",
        label: "On-Time Delivery",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Zap,
        value: "24hr",
        label: "Response Time",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Users,
        value: "20+",
        label: "Happy Clients",
        color: "from-green-500 to-emerald-500",
    },
];

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

const AboutProofSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 relative bg-card/50">
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
                        Why Choose Us
                    </span>
                    <h2 className="section-heading mt-4">
                        We actually <span className="text-gradient">give a damn.</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        No fluff. Just proof and principles that drive results.
                    </p>
                </motion.div>

                {/* Stats - Compact Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            className="relative group"
                        >
                            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
                                {/* Icon */}
                                <div
                                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3`}
                                >
                                    <stat.icon className="text-white" size={20} />
                                </div>

                                {/* Value */}
                                <div className="text-3xl font-bold text-gradient mb-1">
                                    {stat.value}
                                </div>

                                {/* Label */}
                                <div className="text-sm font-medium text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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
                                <p className="text-muted-foreground text-sm leading-relaxed">
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

export default AboutProofSection;
