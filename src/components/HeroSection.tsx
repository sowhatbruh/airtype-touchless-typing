import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const DOWNLOAD_URL =
  "https://github.com/sowhatbruh/airtype-touchless-typing/releases/download/v1.0/AirType.exe";

const handleDownload = async (e: MouseEvent) => {
  e.preventDefault();
  try {
    const res = await fetch(DOWNLOAD_URL);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AirType.exe";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch {
    window.location.href = DOWNLOAD_URL;
  }
};

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    {/* Subtle grid bg */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
      backgroundSize: "40px 40px",
    }} />

    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            AI-Powered Touchless Typing
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Type Without a{" "}
            <span className="text-gradient">Keyboard</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
            AirType transforms your webcam into a virtual keyboard. Use natural hand gestures to type in any application — no special hardware needed, fully offline and privacy-safe.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href={DOWNLOAD_URL} download="AirType.exe" onClick={handleDownload}>
                <Download className="w-5 h-5 mr-2" />
                Download for Windows
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how-it-works">
                Learn How It Works
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImage}
              alt="AirType AR keyboard with hand gesture recognition"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          {/* Decorative blur */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/5 blur-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
