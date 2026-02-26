import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Brand Storytelling in 2026",
        excerpt: "Discover how AI and creative human touch are reshaping brand narratives in the digital age.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        date: "Jan 28, 2026",
        readTime: "5 min read",
        category: "Branding",
        featured: true,
    },
    {
        id: 2,
        title: "Why Your Content Strategy Needs a Reboot",
        excerpt: "Outdated tactics won't cut it anymore. Here's what actually works in today's attention economy.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
        date: "Jan 25, 2026",
        readTime: "4 min read",
        category: "Strategy",
        featured: false,
    },
    {
        id: 3,
        title: "From Concept to Viral: Our Production Process",
        excerpt: "Behind the scenes of how we turn raw ideas into scroll-stopping content that converts.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
        date: "Jan 22, 2026",
        readTime: "6 min read",
        category: "Production",
        featured: false,
    },
    // 4th article removed
];

const BlogCard = ({
    post,
    index,
}: {
    post: (typeof blogPosts)[0];
    index: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-lg cursor-pointer ${post.featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
        >
            {/* Image Container */}
            <div className="relative h-full min-h-[300px] md:min-h-[400px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                        {post.category}
                    </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-white/70">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className={`font-bold text-white mb-3 group-hover:text-primary transition-colors ${post.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                            }`}
                    >
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/80 mb-4 line-clamp-2">{post.excerpt}</p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                        <span>Read More</span>
                        <ArrowRight
                            size={20}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-300 rounded-lg" />
            </div>
        </motion.article>
    );
};

const BlogSection = () => {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

    return (
        <section id="blog" className="py-24 relative">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium uppercase tracking-wider text-sm">
                        Insights & Ideas
                    </span>
                    <h2 className="section-heading mt-4">
                        Fresh takes. <span className="text-gradient">Hot topics.</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        From strategy deep-dives to production secrets, we share what we
                        learn along the way.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                {/* View All Button removed */}
            </div>
        </section>
    );
};

export default BlogSection;
