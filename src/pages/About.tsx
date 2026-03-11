import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, MessageCircle } from "lucide-react";
import { useRef } from "react";
import aboutImg from "@/assets/about-illustration.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const whyUs = [
  { icon: ShieldCheck, title: "Pre-screened Professionals", desc: "Every candidate goes through rigorous technical and background screening." },
  { icon: Zap, title: "Fast Hiring Turnaround", desc: "We deliver top talent quickly without compromising quality." },
  { icon: BarChart3, title: "Scalable Staffing Models", desc: "Flexible engagement models that grow with your business needs." },
  { icon: MessageCircle, title: "Transparent Communication", desc: "Open, honest partnership with regular updates and reporting." },
];

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p variants={fadeUp} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Us</motion.p>
              <motion.h1 variants={fadeLeft} className="font-display text-4xl md:text-5xl font-bold mb-6">
                Bridging <span className="text-gradient">Technology</span> & Talent
              </motion.h1>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-4">
                Stack Talent IT Services is a USA-focused IT staffing and custom software development company. We combine a tech-driven recruitment model with global reach to deliver high-performance talent and scalable solutions.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                Our deep understanding of the technology landscape allows us to match the right talent with the right opportunity — fast, efficiently, and with transparency at every step.
              </motion.p>
            </div>
            <motion.div variants={scaleIn} className="rounded-2xl overflow-hidden glow-border">
              <img src={aboutImg} alt="Stack Talent team" className="w-full h-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <AnimatedSection className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeLeft} className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                "To bridge technology talent with business innovation."
              </p>
            </motion.div>
            <motion.div variants={fadeRight} className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                "To become a trusted global IT workforce partner."
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Why Stack Talent</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold">Why Choose Us</motion.h2>
          </AnimatedSection>
          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <motion.div key={item.title} variants={scaleIn} className="glass-card hover-glow p-6 text-center">
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
