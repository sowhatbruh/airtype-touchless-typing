import { motion } from "framer-motion";
import { DollarSign, Settings, Heart, Fingerprint, Layers } from "lucide-react";

const advantages = [
  { icon: DollarSign, title: "Low-Cost Solution", desc: "No additional hardware investment — works with your existing webcam." },
  { icon: Settings, title: "Easy Setup", desc: "Download, install, and start typing in under a minute." },
  { icon: Heart, title: "Accessible Design", desc: "Designed with inclusivity in mind for users of all abilities." },
  { icon: Fingerprint, title: "Touchless Interaction", desc: "Hygienic and convenient for shared or sterile environments." },
  { icon: Layers, title: "Cross-App Compatible", desc: "Works with browsers, editors, chat apps, and any Windows software." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AdvantagesSection = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Advantages</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold mb-5">
          Why Choose AirType?
        </motion.h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {advantages.map((a, i) => (
          <motion.div
            key={a.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={i}
            className="flex items-start gap-4 p-5"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
