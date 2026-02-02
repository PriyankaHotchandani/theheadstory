import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Film, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Social & Content",
    description:
      "Strategy, ideation, shoot, edit, and posting. We handle your entire content pipeline so you can focus on growing.",
    features: ["Content Strategy", "Social Media", "Paid Ads", "Brand Design"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Code,
    title: "Tech & Websites",
    description:
      "Landing pages, no-code websites, and web apps. Built fast, built right, built to convert.",
    features: [
      "Landing Pages",
      "No-Code Sites",
      "Web Apps",
      "Shop Digitization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Film,
    title: "Editing & Production",
    description:
      "Fast turnaround editing for creators. Reels, long-form, thumbnails — we've got your back.",
    features: [
      "Reels & Shorts",
      "YouTube Edits",
      "Thumbnails",
      "Motion Graphics",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const glowHSL =
    service.title === 'Social & Content'
      ? '28 100% 50%'
      : service.title === 'Tech & Websites'
        ? '200 100% 50%'
        : '270 100% 70%';

  const shadowColor =
    service.title === 'Social & Content'
      ? 'hover:shadow-orange-500/20'
      : service.title === 'Tech & Websites'
        ? 'hover:shadow-blue-500/20'
        : 'hover:shadow-purple-500/20';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`card-glow group relative p-8 cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${shadowColor}`}
      style={{ '--glow': glowHSL } as React.CSSProperties}
      data-glow={glowHSL}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
      >
        <service.icon size={28} className="text-white" />
      </div>

      {/* Title with Arrow */}
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <ArrowUpRight
          size={20}
          className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6">{service.description}</p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {service.features.map((feature, i) => (
          <span
            key={i}
            className="px-3 py-1.5 text-xs font-medium bg-secondary rounded-full text-secondary-foreground hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {feature}
          </span>
        ))}
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-lg`}
        style={{
          boxShadow: '0 0 20px transparent',
          transition: 'transform 0.5s, box-shadow 0.5s'
        }}
        onMouseEnter={(e) => {
          const shadow = service.title === 'Social & Content'
            ? '0 0 20px rgba(249, 115, 22, 0.5)'
            : service.title === 'Tech & Websites'
              ? '0 0 20px rgba(59, 130, 246, 0.5)'
              : '0 0 20px rgba(168, 85, 247, 0.5)';
          e.currentTarget.style.boxShadow = shadow;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px transparent';
        }}
      />
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="section-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            What We Do
          </span>
          <h2 className="section-heading mt-4">
            Three things.{" "}
            <span className="text-gradient">Done exceptionally.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We don't do everything. We do content, tech, and editing — and we do
            them better than anyone else.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
