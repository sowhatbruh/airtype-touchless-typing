import { motion } from "framer-motion";
import { Download, Shield, Monitor, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL, triggerDownload } from "@/lib/download";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const DownloadSection = () => (
  <section id="download" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Download</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold mb-5">
          Get AirType Now
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-10">
          Download the installer and start typing touchlessly in seconds.
        </motion.p>

        <motion.div variants={fadeUp} custom={3}>
          <Button size="lg" className="text-base px-8 py-6 h-auto" asChild>
            <a href={DOWNLOAD_URL} download="AirType.exe" onClick={triggerDownload}>
              <Download className="w-5 h-5 mr-2" />
              Download AirType.exe
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="mt-10 grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <Monitor className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Windows 10+</span>
            <span>64-bit, 4 GB RAM, Webcam</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Version 1.0</span>
            <span>Latest stable release</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">100% Offline</span>
            <span>Safe local processing</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default DownloadSection;
