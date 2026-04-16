import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Does AirType need an internet connection?", a: "No. AirType runs entirely offline. All hand tracking and AI correction happens locally on your machine, ensuring complete privacy." },
  { q: "Does it require special hardware?", a: "Not at all. Any standard laptop webcam or USB webcam is sufficient. No depth sensors or infrared cameras needed." },
  { q: "Can it work in low light conditions?", a: "AirType works best in normal lighting. Very dim environments may reduce hand tracking accuracy, but moderate indoor lighting is perfectly fine." },
  { q: "Which applications does it support?", a: "AirType sends standard keystrokes to your operating system, so it works with any application — browsers, text editors, chat apps, and more." },
  { q: "Is my data safe?", a: "Absolutely. Since everything is processed locally, no images or keystrokes are transmitted over the internet. Your privacy is fully preserved." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-muted/40">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-12"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">FAQ</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </motion.h2>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <AccordionItem value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow">
                <AccordionTrigger className="text-left font-medium text-sm hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
