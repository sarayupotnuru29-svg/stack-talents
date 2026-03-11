import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { scrollVariants } from "@/hooks/use-scroll-animation";
import staffingImg from "@/assets/staffing-illustration.png";
import recruitingImg from "@/assets/recruiting-illustration.png";
import softwareImg from "@/assets/software-illustration.png";
import webImg from "@/assets/web-illustration.png";
import cloudImg from "@/assets/cloud-illustration.png";

const { fadeUp, fadeLeft, fadeRight, stagger } = scrollVariants;

const servicesSections = [
  {
    title: "IT Staffing Services",
    desc: "We provide flexible staffing solutions tailored to your project needs. Whether you need contract professionals for short-term projects, contract-to-hire arrangements to evaluate talent, or permanent placements for long-term roles — we deliver pre-vetted IT professionals who hit the ground running.",
    bullets: ["Contract Staffing", "Contract-to-Hire", "Permanent Placements"],
    img: staffingImg,
  },
  {
    title: "Recruiting & Talent Acquisition",
    desc: "Our tech-driven recruitment model leverages advanced sourcing techniques and AI-powered candidate matching to find the perfect fit for your organization. We handle end-to-end talent acquisition so you can focus on growing your business.",
    bullets: ["AI-Powered Sourcing", "End-to-End Recruitment", "Technical Screening"],
    img: recruitingImg,
  },
  {
    title: "Custom Software Development",
    desc: "From concept to deployment, we build scalable, robust software solutions tailored to your unique business challenges. Our experienced development teams work with modern tech stacks to deliver high-quality products on time and within budget.",
    bullets: ["Full-Stack Development", "Agile Methodology", "Quality Assurance"],
    img: softwareImg,
  },
  {
    title: "Web & Enterprise Applications",
    desc: "We create modern web applications and enterprise platforms built for performance, scalability, and exceptional user experience. Our solutions integrate seamlessly with your existing infrastructure.",
    bullets: ["Responsive Web Apps", "Enterprise Portals", "UI/UX Design"],
    img: webImg,
  },
  {
    title: "Cloud & API Integration",
    desc: "Seamlessly migrate to the cloud and integrate your systems with our expert cloud and API integration services. We help you modernize your infrastructure for greater efficiency and scalability.",
    bullets: ["Cloud Migration", "API Development", "Microservices Architecture"],
    img: cloudImg,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Our Expertise</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mb-6">
              Services We <span className="text-gradient">Offer</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive IT staffing and software development solutions designed to accelerate your business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesSections.map((service, idx) => (
        <section key={service.title} className={`section-padding ${idx % 2 === 0 ? "bg-gradient-dark" : "bg-background"}`}>
          <div className="container mx-auto">
            <AnimatedSection
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <motion.div variants={idx % 2 === 0 ? fadeLeft : fadeRight} className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <h2 className="font-display text-3xl font-bold mb-5">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div variants={idx % 2 === 0 ? fadeRight : fadeLeft} className={`rounded-2xl overflow-hidden glow-border ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                <img src={service.img} alt={service.title} className="w-full h-auto" />
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
