import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Upload } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const skillOptions = [
  "Java", "Python", "JavaScript", "React", "Angular", "Node.js", "AWS", "Azure",
  "DevOps", ".NET", "SQL", "Data Engineering", "Machine Learning", "Salesforce", "SAP",
];

const serviceOptions = [
  "IT Staffing", "Recruiting", "Software Development", "Web Applications", "Cloud Integration",
];

const experienceOptions = ["0-1 Years", "1-3 Years", "3-5 Years", "5-8 Years", "8-10 Years", "10+ Years"];
const authOptions = ["US Citizen", "Green Card", "H1B", "OPT/CPT", "TN Visa", "Other"];

const CandidateForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [fileName, setFileName] = useState("");

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      const message = encodeURIComponent("Hi Stack Talent, I have submitted my profile.");
      window.open(`https://wa.me/917995506006?text=${message}`, "_blank");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-md mx-4"
        >
          <CheckCircle size={64} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-2xl font-bold mb-3">Profile Submitted!</h2>
          <p className="text-muted-foreground">Thank you for your submission. Redirecting you to WhatsApp...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding bg-gradient-hero">
        <div className="container mx-auto max-w-2xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Join Our Talent Network</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Submit Your <span className="text-gradient">Resume</span></h1>
              <p className="text-muted-foreground">Fill out the form below and let us match you with the right opportunity.</p>
            </motion.div>

            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input required type="text" maxLength={100} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input required type="email" maxLength={255} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <input required type="tel" maxLength={20} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Skills *</label>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => (
                    <button
                      type="button"
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        selectedSkills.includes(skill)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience & Authorization */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Experience *</label>
                  <select required className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select</option>
                    {experienceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Work Authorization *</label>
                  <select required className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select</option>
                    {authOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              {/* Service Interested */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Interested *</label>
                <select required className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                  <option value="">Select a service</option>
                  {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Resume Upload</label>
                <label className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted border border-dashed border-border cursor-pointer hover:border-primary/50 transition-all">
                  <Upload size={18} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{fileName || "Click to upload (PDF, DOC)"}</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">LinkedIn Profile</label>
                <input type="url" maxLength={255} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="https://linkedin.com/in/yourprofile" />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Submit Profile
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CandidateForm;
