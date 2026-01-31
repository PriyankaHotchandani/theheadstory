import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
            <p className="text-muted-foreground mb-8">
              We've received your message and will get back to you within 24
              hours. In the meantime, feel free to reach out on WhatsApp for
              faster response.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative Dots - MarkitUp inspired */}
      <div className="absolute left-10 top-1/4 hidden lg:grid grid-cols-6 gap-2">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/20"
          />
        ))}
      </div>
      <div className="absolute right-10 bottom-1/4 hidden lg:grid grid-cols-6 gap-2">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/20"
          />
        ))}
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Let's Build Something Great
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Got a brand to build
              <br />
              <span className="text-gradient">or a product to launch?</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8">
              Stop scrolling. Start building. Let's have a conversation that
              actually leads somewhere.
            </p>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-whatsapp/20 flex items-center justify-center">
                  <MessageCircle size={18} className="text-whatsapp" />
                </div>
                <div>
                  <div className="font-medium text-foreground">WhatsApp Us</div>
                  <div className="text-sm">+91 99999 99999</div>
                </div>
              </a>
            </div>

            {/* Response Time Note */}
            <p className="mt-8 text-sm text-muted-foreground">
              ⚡ Average response time: Under 24 hours
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="card-glow p-8 space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">Contact Us</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Fill out the form and we'll be in touch soon
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="Your Role"
                    value={formData.position}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 99999 99999"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Tell us about your project *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="What are you looking to build? What's your timeline?"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full group flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
