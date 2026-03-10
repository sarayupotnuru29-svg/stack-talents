import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const serviceOptions = ["IT Staffing", "Recruiting", "Software Development", "Web Applications", "Cloud Integration"];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "7995506006", href: "tel:7995506006" },
  { icon: Mail, label: "Email", value: "Stacktalentitservices@gmail.com", href: "mailto:Stacktalentitservices@gmail.com" },
  { icon: MapPin, label: "Address", value: "USA (Address coming soon)", href: null },
];

const hours = [
  { day: "Monday – Friday", time: "9 AM – 6 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = encodeURIComponent(`Hi Stack Talent, I'm interested in: ${service}. Message: ${message}`);
    setTimeout(() => {
      window.open(`https://wa.me/917995506006?text=${text}`, "_blank");
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-hero">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-12 text-center max-w-md mx-4">
          <CheckCircle size={64} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-2xl font-bold mb-3">Message Sent!</h2>
          <p className="text-muted-foreground">Redirecting you to WhatsApp...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-gradient">Us</span></motion.h1>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have a question or want to work with us? Reach out and we'll get back to you promptly.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="glass-card p-5 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock size={22} className="text-primary" />
                  </div>
                  <p className="font-medium text-foreground">Business Hours</p>
                </div>
                <div className="space-y-2 ml-14">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-destructive" : "text-foreground"}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <motion.h3 variants={fadeUp} className="font-display text-xl font-bold mb-2">Send a Message</motion.h3>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                <input required type="text" maxLength={100} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your name" />
              </motion.div>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input required type="email" maxLength={255} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input type="tel" maxLength={20} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-foreground mb-2">Service *</label>
                <select required value={service} onChange={(e) => setService(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea required maxLength={1000} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your requirements..." />
              </motion.div>

              <motion.button variants={fadeUp} type="submit" className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
