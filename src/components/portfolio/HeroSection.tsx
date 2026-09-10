import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const stats = [
  { value: "1", label: "ChemRxiv Preprint" },
  { value: "6", label: "Research Papers" },
  { value: "313", label: "GRE Score" },
  { value: "7.5", label: "IELTS Score" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="section-eyebrow justify-center lg:justify-start animate-fade-up">
              Tinon Turja Majumder
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up delay-100">
              Machine Learning for{" "}
              <span className="text-gradient">Materials &amp; Industrial Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
              Data Science graduate researcher bridging textile &amp; materials
              engineering, physics-informed machine learning, and computer
              vision — currently coupling molecular simulation with deep
              learning to model sustainable dye-adsorption biomaterials, and
              building edge AI for industrial quality control.
            </p>
            <p className="text-sm md:text-base text-primary font-medium mb-8 animate-fade-up delay-200">
              Seeking PhD &amp; research-based Master's opportunities in ML for
              scientific and industrial systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 animate-fade-up delay-300">
              <Button variant="hero" asChild>
                <a href="#publications">
                  View Publications <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* CV Downloads */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start mb-10 animate-fade-up delay-300">
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText size={16} /> Industry CV
              </a>
              <a
                href="/ACADEMIC_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText size={16} /> Academic CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-12 animate-fade-up delay-400">
              <a
                href="https://github.com/Tinonturja"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(43_74%_55%/0.4)]"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tinon-turja-majumder-07b058202/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(43_74%_55%/0.4)]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tinonturja@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(43_74%_55%/0.4)]"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-500">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left border-t border-border pt-3"
                >
                  <div className="text-xl md:text-2xl font-bold text-primary font-serif">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs text-muted-foreground leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary overflow-hidden pulse-glow">
                <img
                  src={profileImage}
                  alt="Tinon Turja Majumder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
