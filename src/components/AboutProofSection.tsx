import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
    Shield,
    Clock,
    Zap,
    Handshake,
    Code2,
    HeartHandshake,
    Globe,
    Users,
} from "lucide-react";

function useCounter(target: number, isInView: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, target, {
            duration: 2,
            onUpdate: (value) => setCount(Math.floor(value)),
        });

        return controls.stop;
    }, [target, isInView]);

    return count;
}

const stats = [
    {
        icon: Globe,
        value: 7,
        suffix: " days",
        label: "Website Delivery",
        color: "text-primary",
    },
    {
        icon: Clock,
        value: 100,
        suffix: "%",
        label: "On-Time Delivery",
        color: "text-primary",
    },
    {
        icon: Zap,
        value: 24,
        suffix: "hr",
        label: "Response Time",
        color: "text-primary",
    },
    {
        icon: Users,
        value: 20,
        suffix: "+",
        label: "Happy Clients",
        color: "text-primary",
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
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="section-container relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-medium uppercase tracking-wider text-sm">
                        Why Choose Us
                    </span>
                    <h2 className="mt-4 mb-4 text-5xl md:text-6xl font-black tracking-tight">
                        We actually{" "}
                        <span className="text-gradient italic">give a damn.</span>
                    </h2>
                    <p className="text-muted-foreground text-base max-w-xl mx-auto">
                        No fluff. Just proof and principles that drive results.
                    </p>
                </motion.div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => {
                        const count = useCounter(stat.value, isInView);
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="bg-card/60 border border-border rounded-2xl p-6 text-center"
                            >
                                <div className={`text-5xl font-black ${stat.color} mb-1 tabular-nums`}>
                                    {count}{stat.suffix}
                                </div>
                                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Reasons grid with glassmorphism and animated icons */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                            className="group bg-transparent backdrop-blur-xl border border-white/30 hover:border-primary/60 rounded-2xl p-6 flex flex-col gap-4 shadow-xl transition-all duration-300 hover:shadow-2xl ring-1 ring-white/10 relative overflow-hidden"
                            style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shadow-md border border-white/20 relative"
                                initial={{ scale: 0.7, opacity: 0, rotate: -45 }}
                                animate={{ scale: 1.15, opacity: 1, rotate: 0 }}
                                whileHover={{ scale: 1.25, rotate: 15 }}
                                transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
                            >
                                <reason.icon className="text-primary drop-shadow-lg" size={26} strokeWidth={1.5} />
                                <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                    <span className="block w-2/3 h-1/3 bg-white/40 rounded-full blur-[8px] opacity-60 absolute top-1 left-1" />
                                    <span className="block w-1/3 h-1/6 bg-white/60 rounded-full blur-[12px] opacity-80 absolute bottom-1 right-1" />
                                </span>
                            </motion.div>
                            <div>
                                <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                                    {reason.title}
                                </h3>
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