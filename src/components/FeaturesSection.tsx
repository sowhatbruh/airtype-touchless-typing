import { motion } from "framer-motion";
import { Zap, Eye, SpellCheck, MonitorSmartphone, ShieldCheck, Cpu } from "lucide-react";

const features = [
  { icon: Zap, title: "Real-Time Gesture Typing", desc: "Type at natural speed with instant gesture-to-keystroke conversion." },
  { icon: Eye, title: "Webcam-Based Hand Tracking", desc: "Uses your existing webcam — no depth sensors or special cameras." },
  { icon: SpellCheck, title: "AI Spell Correction", desc: "Built-in offline language model fixes typos automatically." },
  { icon: MonitorSmartphone, title: "Works Across All Apps", desc: "Seamlessly integrates with any Windows application." },
  { icon: ShieldCheck, title: "Offline & Privacy-Safe", desc: "All processing happens locally. Your data never leaves your machine." },
  { icon: Cpu, title: "No Special Hardware", desc: "Just a standard laptop or webcam. That's all you need." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Features</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold mb-5">
          Everything You Need
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto">
          AirType packs powerful capabilities into a lightweight, easy-to-use desktop application.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={i}
            className="group bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-base font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
