import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

const categories = ["All", "Social", "Tech", "Editing"];

const works = [
  {
    id: 1,
    title: "Brand Launch Campaign",
    category: "Social",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    description: "Full social media rollout for a D2C brand launch",
    isVideo: false,
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
    description: "Complete web build for a Mumbai-based retailer",
    isVideo: false,
  },
  {
    id: 3,
    title: "YouTube Series Edit",
    category: "Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    description: "Ongoing editing partnership with a creator",
    isVideo: true,
  },
  {
    id: 4,
    title: "Product Reels",
    category: "Social",
    image: "https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?w=600&h=600&fit=crop",
    description: "Viral product showcase content",
    isVideo: true,
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "High-converting landing page for a tech startup",
    isVideo: false,
  },
  {
    id: 6,
    title: "Motion Graphics Pack",
    category: "Editing",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=500&fit=crop",
    description: "Custom motion graphics templates",
    isVideo: true,
  },
];

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="work" className="py-24 relative">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Work
          </span>
          <h2 className="section-heading mt-4">
            The proof is in the <span className="text-gradient">pixels.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real work. Real results. See what we've built for brands, shops,
            and creators.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="masonry-grid">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="masonry-item group relative overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                    {work.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {work.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4">
                    {work.description}
                  </p>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-primary">
                    {work.isVideo ? (
                      <>
                        <Play size={16} />
                        <span className="text-sm font-medium">Watch</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">View Project</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Video Icon */}
              {work.isVideo && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Play size={16} className="text-white" fill="white" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-outline">
            See More Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
