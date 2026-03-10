import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Search, Code, Globe, Cloud, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import staffingImg from "@/assets/staffing-illustration.png";
import softwareImg from "@/assets/software-illustration.png";
import cloudImg from "@/assets/cloud-illustration.png";
import webImg from "@/assets/web-illustration.png";
import recruitingImg from "@/assets/recruiting-illustration.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  { icon: Users, title: "IT Staffing Services", desc: "Contract, contract-to-hire, and permanent placements for top IT roles.", img: staffingImg },
  { icon: Search, title: "Recruiting & Talent Acquisition", desc: "End-to-end talent sourcing with AI-driven candidate matching.", img: recruitingImg },
  { icon: Code, title: "Custom Software Development", desc: "Scalable, robust software solutions tailored to your business.", img: softwareImg },
  { icon: Globe, title: "Web & Enterprise Applications", desc: "Modern web apps and enterprise platforms built for performance.", img: webImg },
  { icon: Cloud, title: "Cloud & API Integration", desc: "Seamless cloud migration and API integration solutions.", img: cloudImg },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img src={logo} alt="" className="w-[600px] h-[600px] object-contain" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Stack Talent IT Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              USA-Focused IT Staffing &{" "}
              <span className="text-gradient">Software Development</span>{" "}
              Solutions
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              We connect top tech talent with global business opportunities.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Hire Talent
              </Link>
              <Link
                to="/careers"
                className="px-8 py-3.5 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all"
              >
                Submit Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold">
              Our Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="glass-card hover-glow p-6 group cursor-pointer"
              >
                <div className="h-40 rounded-lg overflow-hidden mb-5">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
              Who We Are
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold mb-6">
              About Stack Talent
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              Stack Talent IT Services is a USA-focused IT staffing and custom software development company delivering high-performance talent and scalable solutions to businesses worldwide.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 glow-border opacity-30" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold mb-6">
              Looking for top IT talent or your next opportunity?
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Post a Requirement
              </Link>
              <Link
                to="/careers"
                className="px-8 py-3.5 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all"
              >
                Submit Your Profile
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
