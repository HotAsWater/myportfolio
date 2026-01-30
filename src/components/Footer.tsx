import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-muted-foreground mb-8 font-mono">
          Open to game development opportunities
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground/60 font-mono">
          © {new Date().getFullYear()} — Built with precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;