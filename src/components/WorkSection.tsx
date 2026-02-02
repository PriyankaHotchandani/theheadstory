import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const works = [
  {
    id: 1,
    number: "01",
    title: "Brand Rebellion",
    client: "Urban Threads",
    category: "Social & Content",
    year: "2026",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop",
    tags: ["Branding", "Social", "Content Strategy"],
  },
  {
    id: 2,
    number: "02",
    title: "Digital Empire",
    client: "TechFlow Solutions",
    category: "Tech & Websites",
    year: "2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    tags: ["Web App", "No-Code", "E-commerce"],
  },
  {
    id: 3,
    number: "03",
    title: "Viral Chronicles",
    client: "Creator Collective",
    category: "Editing & Production",
    year: "2026",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop",
    tags: ["Reels", "YouTube", "Motion Graphics"],
  },
  {
    id: 4,
    number: "04",
    title: "Aesthetic Overload",
    client: "Minimal Studio",
    category: "Social & Content",
    year: "2025",
    image: "https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?w=1920&h=1080&fit=crop",
    tags: ["Photography", "Paid Ads", "Instagram"],
  },
  {
    id: 5,
    number: "05",
    title: "Code Poetry",
    client: "StartupX",
    category: "Tech & Websites",
    year: "2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    tags: ["Landing Page", "SaaS", "Conversion"],
  },
  {
    id: 6,
    number: "06",
    title: "Frame by Frame",
    client: "Motion Masters",
    category: "Editing & Production",
    year: "2025",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&h=1080&fit=crop",
    tags: ["Video Editing", "Animation", "Post-Production"],
  },
];

const WorkSection = () => {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 relative min-h-screen overflow-hidden">
      <div className="work-background-overlay absolute inset-0 pointer-events-none">
        {works.map((work) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredWork === work.id ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${work.image})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/85 pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Selected Work
          </span>
          <h2 className="section-heading mt-4">
            Stuff we're <span className="text-gradient">proud of.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hover to peek. Click to obsess.
          </p>
        </motion.div>

        <div className="space-y-1">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredWork(work.id)}
              onMouseLeave={() => setHoveredWork(null)}
              className="work-item group relative cursor-pointer"
            >
              <div className="py-8 border-b border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <span className="text-5xl md:text-6xl font-bold text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-300 tabular-nums">
                      {work.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-3xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {work.client} • {work.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden lg:flex gap-2">
                      {work.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="hidden md:block text-sm font-medium text-muted-foreground min-w-[140px] text-right">
                      {work.category}
                    </span>

                    <ArrowUpRight
                      size={32}
                      className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            These are just the highlights. We've got more.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            View Full Portfolio
            <ArrowUpRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
