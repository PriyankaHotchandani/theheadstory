import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStartup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote:
      "The Head Story transformed our entire digital presence. From website to social media, they delivered beyond our expectations. Highly recommend!",
  },
  {
    name: "Priya Patel",
    role: "Marketing Head, D2C Brand",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote:
      "Their content strategy helped us grow from 5K to 50K followers in just 3 months. The team is responsive, creative, and truly understands Gen-Z marketing.",
  },
  {
    name: "Amit Desai",
    role: "Creator, 500K+ Subscribers",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    quote:
      "Best editing team I've worked with. Fast turnaround, amazing quality, and they actually understand my style. It's like having an in-house team.",
  },
  {
    name: "Sneha Kapoor",
    role: "Owner, Mumbai Boutique",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote:
      "They built our online store and now manage all our social media. Our online sales have grown 300% since we started working together!",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="card-glow p-8 h-full relative">
                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors"
                />

                {/* Quote Text */}
                <p className="text-foreground/90 text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
