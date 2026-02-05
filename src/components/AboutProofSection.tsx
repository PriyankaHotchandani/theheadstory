import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
        icon: CheckCircle2,
        value: 50,
        suffix: "+",
        label: "Projects Delivered",
        color: "text-orange-500",
    },
    {
        icon: Clock,
        value: 100,
        suffix: "%",
        label: "On-Time Delivery",
        color: "text-blue-500",
    },
    {
        icon: Zap,
        value: 24,
        suffix: "hr",
        label: "Response Time",
        color: "text-purple-500",
    },
    {
        icon: Users,
        value: 20,
        suffix: "+",
        label: "Happy Clients",
        color: "text-green-500",
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
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section id="about" className="py-24 relative bg-card/50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-20" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />

            <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [50, -50, 50],
                        y: [-30, 30, -30],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px]"
                />
            </div>

            <div className="section-container relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 1.1 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-primary font-medium uppercase tracking-wider text-sm"
                    >
                        Why Choose Us
                    </motion.span>
                    <h2 className="mt-6 mb-6">
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                            We actually{" "}
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                            <span className="text-gradient italic font-extrabold">give a damn.</span>
                        </span>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-muted-foreground text-sm tracking-wide max-w-2xl mx-auto"
                    >
                        No fluff. Just proof and principles that drive results.
                    </motion.p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-end gap-12 md:gap-16 lg:gap-20 mb-24">
                    {stats.map((stat, index) => {
                        const count = useCounter(stat.value, isInView);
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 60 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.7 + index * 0.15,
                                    ease: "easeOut"
                                }}
                                style={{
                                    transform: index % 2 === 0 ? 'translateY(-10px)' : 'translateY(10px)'
                                }}
                                className="text-center group"
                            >
                                <div className={`text-6xl md:text-7xl font-black ${stat.color} mb-2 tabular-nums`}>
                                    {count}{stat.suffix}
                                </div>

                                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 60, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 1.2 + index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className="group relative"
                            style={{
                                zIndex: hoveredCard === index ? 10 : 1,
                            }}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="card-glow p-6 h-full flex flex-col relative overflow-hidden"
                                style={{
                                    transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"
                                />

                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-4 relative z-10"
                                >
                                    <reason.icon className="text-primary" size={32} strokeWidth={1.5} />
                                </motion.div>

                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors relative z-10">
                                    {reason.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                                    {reason.description}
                                </p>

                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-full" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutProofSection;