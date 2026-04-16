import { Github, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold">
            Air<span className="text-primary">Type</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            AI Powered AR Keyboard · Built by <span className="font-medium text-foreground">Your Name</span>
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            contact@example.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AirType. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
