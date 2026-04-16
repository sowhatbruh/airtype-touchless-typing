import { motion } from "framer-motion";
import { Camera, Hand, Brain, Keyboard, AppWindow, ArrowRight } from "lucide-react";

const steps = [
  { icon: Camera, label: "Webcam Input", desc: "Your standard webcam captures hand movements in real time." },
  { icon: Hand, label: "Hand Detection", desc: "Computer vision detects and tracks hand landmarks precisely." },
  { icon: Brain, label: "Gesture Recognition", desc: "AI interprets finger positions as keystrokes on a virtual layout." },
  { icon: Keyboard, label: "AI Correction", desc: "Offline language model corrects typos for accurate output." },
  { icon: AppWindow, label: "Application Output", desc: "Keystrokes are sent directly to any active application." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-muted/40">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">How It Works</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold mb-5">
          From Gesture to Keystroke
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto">
          A seamless pipeline transforms your hand movements into accurate text input in five simple steps.
        </motion.p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={i}
            className="flex items-center"
          >
            <div className="flex flex-col items-center text-center w-44">
              <div className="w-16 h-16 rounded-2xl bg-card shadow-card border border-border flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold mb-1">{step.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden lg:block w-5 h-5 text-primary/40 mx-4 flex-shrink-0" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
