
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useInView } from "framer-motion";
import { ArrowRight, Play, Instagram, Linkedin, Sparkles, X, Globe, Zap } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/theheadstory", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/theheadstory", label: "LinkedIn" },
];

const rotatingWords = ["ships.", "pops.", "sticks.", "sells.", "wins."];
const rotatingTaglines = [
  "Mumbai's Creative Tech Studio",
  "Where Ideas Meet Execution",
  "Crafting Digital Excellence",
];

const backgroundVideos = [
  "/videos/analytics.mp4",
  "/videos/editing.mp4",
  "/videos/shoot.mp4",
  "/videos/tech.mp4",
];

const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { margin: "-100px" });
  const [responseTime, setResponseTime] = useState(0);
  const [deliveryDays, setDeliveryDays] = useState(0);

  useEffect(() => {
    if (isStatsInView) {
      let timeTarget = 24;
      let timeStart = 0;
      const timeDuration = 1500;
      let daysTarget = 7;
      let daysStart = 0;
      const daysDuration = 1000;
      const frameRate = 16; // roughly 60fps

      const timeStep = Math.ceil(timeTarget / (timeDuration / frameRate));
      const daysStep = Math.ceil(daysTarget / (daysDuration / frameRate));

      const timeInterval = setInterval(() => {
        timeStart += timeStep;
        if (timeStart >= timeTarget) {
          timeStart = timeTarget;
          clearInterval(timeInterval);
        }
        setResponseTime(timeStart);
      }, 58);

      const daysInterval = setInterval(() => {
        daysStart += daysStep;
        if (daysStart >= daysTarget) {
          daysStart = daysTarget;
          clearInterval(daysInterval);
        }
        setDeliveryDays(daysStart);
      }, 200);

      return () => {
        clearInterval(timeInterval);
        clearInterval(daysInterval);
      };
    }
  }, [isStatsInView]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex((i) => (i + 1) % rotatingTaglines.length);
    }, 3500);
    return () => {
      clearInterval(wordInterval);
      clearInterval(taglineInterval);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,107,0,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,107,0,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,107,0,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,107,0,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <motion.div
          style={{
            x: useTransform(mouseX, [0, 1], [-100, 100]),
            y: useTransform(mouseY, [0, 1], [-100, 100]),
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px]"
        />
        <div className="absolute inset-0 opacity-[0.3]">
          <AnimatePresence>
            <motion.div
              key={currentWorkIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onEnded={() => setCurrentWorkIndex((i) => (i + 1) % backgroundVideos.length)}
              >
                <source src={backgroundVideos[currentWorkIndex]} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-8 bottom-20 z-40 hidden lg:flex flex-col gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.2, x: 5 }}
            className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full h-full px-6 md:px-12 lg:pl-32 pt-24 pb-12 gap-12">
        <div className="flex-1 flex flex-col justify-center gap-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl w-fit"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTaglineIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-primary"
              >
                {rotatingTaglines[currentTaglineIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-4"
            >
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Creative
              </motion.span>
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                that{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 50, opacity: 0, rotateX: 90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -50, opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-orange-600"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              We craft{" "}
              <span className="text-foreground font-semibold">scroll-stopping content</span>,{" "}
              build{" "}
              <span className="text-foreground font-semibold">lightning-fast websites</span> &{" "}
              deliver{" "}
              <span className="text-foreground font-semibold">results that matter</span>.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-orange-600 text-white font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all duration-300 flex items-center gap-3"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-row gap-4 items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/50 rounded-2xl p-6 shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] transition-all duration-500 w-64 h-40 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Website Delivery</div>
                </div>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    key={deliveryDays}
                    className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 tabular-nums"
                  >
                    {deliveryDays}
                  </motion.span>
                  <span className="text-2xl font-black text-foreground">days</span>
                  <span className="text-xl font-black text-primary">or less</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground relative z-10">Guaranteed launch. T&C apply*</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/50 rounded-2xl p-6 shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] transition-all duration-500 w-64 h-40 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Response</div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-primary">&lt;</span>
                  <motion.div
                    className="text-5xl font-black text-foreground tabular-nums"
                    key={responseTime}
                  >
                    {responseTime}
                  </motion.div>
                  <span className="text-2xl font-bold text-muted-foreground">hrs</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground relative z-10">Lightning fast replies</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-xl border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg">Showreel video would play here</p>
                  <p className="text-sm mt-2">Add your YouTube or Vimeo embed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
    </section>
  );
};

export default HeroSection;
