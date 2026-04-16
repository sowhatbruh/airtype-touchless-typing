import { motion } from "framer-motion";
import { Accessibility, Hospital, Glasses } from "lucide-react";

const useCases = [
  { icon: Accessibility, title: "Accessibility", desc: "Empowers users with limited mobility to type effortlessly." },
  { icon: Hospital, title: "Sterile Environments", desc: "Ideal for hospitals and labs where touchless input is essential." },
  { icon: Glasses, title: "AR Interfaces", desc: "A natural fit for augmented reality interfaces." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">About the Project</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold mb-5">
          Redefining How We Type
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
          AirType is a Windows desktop application that captures hand gestures through your webcam and converts them into real-time keyboard inputs. Combining computer vision for hand tracking with AI-based offline correction, it delivers a touchless typing experience that's accurate, private, and accessible to everyone.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {useCases.map((uc, i) => (
          <motion.div
            key={uc.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={i}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
              <uc.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{uc.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
