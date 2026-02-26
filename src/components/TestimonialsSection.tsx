import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Komal Hotchandani",
    role: "Counseling Psychologist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote:
      "As a therapist, I needed a digital space that felt safe, welcoming, and professional for my clients. The Head Story didn't just build a website; they captured the exact emotional essence of my practice. To take my scattered thoughts and deliver a fully functional, beautifully designed platform in under a week is nothing short of miraculous. They completely removed the stress from the process.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sanjeev Shah",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote:
      "I had a broad vision for my brand but no idea how to translate it onto a screen. The Head Story stepped in, organized my ideas, and engineered a website that frankly exceeded my expectations. Their attention to detail and technical execution are top-tier. It's rare to find an agency that actually listens before they build, but they nailed it on the first try.",
    rating: 5,
    verified: true,
  },
  {
    name: "Advait More",
    role: "Creator & Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    quote:
      "Content might be king, but staying consistent is exhausting. Handing my social media and content strategy over to The Head Story was the best investment I've made for my personal brand. They didn't just schedule posts; they built a cohesive, engaging narrative that my audience actually cares about. My digital presence has completely transformed since we started working together.",
    rating: 5,
    verified: true,
  },
  {
    name: "Arjun Bharadwaj",
    role: "Filmmaker & Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote:
      "Post-production is where a project is either made or broken. The Head Story brought an incredible level of polish and cinematic flair to our raw footage. Their editing is sharp, their pacing is intuitive, and their deep understanding of visual storytelling elevated our final product to a whole new level. They are absolute professionals in the cutting room.",
    rating: 5,
    verified: true,
  },
  {
    name: "Vaishnavi Patil",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote:
      "We had hit a massive wall with our content calendar and were running out of things to say. We partnered with The Head Story for blog ideation, and it was a game-changer. They brought fresh, highly creative, and culturally relevant angles to industry topics we thought were exhausted. They don't just hand you a list of titles; they give you complete, engaging story frameworks.",
    rating: 5,
    verified: true,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="section-heading mt-4">
            What <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't take our word for it. Hear from the brands and creators we've worked with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="group relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <motion.div
                animate={{
                  y: [-2, 2, -2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="card-glow p-12 md:p-16 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                  <div className="absolute top-6 right-6 w-20 h-20">
                    <motion.div
                      animate={{
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 rounded-full blur-xl"
                    />
                    <Quote
                      size={40}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/30 group-hover:text-primary/60 transition-colors duration-300"
                    />
                  </div>

                  <div className="flex gap-1 mb-6 relative z-10 justify-center md:justify-start">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star
                          size={20}
                          className="fill-yellow-500 text-yellow-500 group-hover:scale-110 transition-transform"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-foreground text-lg md:text-xl leading-relaxed mb-10 relative z-10 font-light text-center md:text-left max-w-3xl">
                    {currentTestimonial.quote}
                  </p>

                  <div className="flex items-center gap-5 relative z-10 justify-center md:justify-start">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition-opacity" />
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-background"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground text-lg">
                          {currentTestimonial.name}
                        </span>
                        {currentTestimonial.verified && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                          >
                            <BadgeCheck
                              size={20}
                              className="text-primary fill-primary/20"
                            />
                          </motion.div>
                        )}
                      </div>
                      <div className="text-base text-muted-foreground">
                        {currentTestimonial.role}
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-primary/40"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative p-2"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <motion.div
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                    }`}
                  animate={{
                    scale: index === currentIndex ? 1 : 0.85,
                  }}
                  whileHover={{ scale: 1 }}
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
