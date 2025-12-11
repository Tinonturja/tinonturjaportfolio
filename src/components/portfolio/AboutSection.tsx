import { Brain, Eye, MessageSquare, Cpu } from "lucide-react";

const specializations = [
  { icon: Brain, label: "Machine Learning", color: "text-primary" },
  { icon: Eye, label: "Computer Vision", color: "text-primary" },
  { icon: MessageSquare, label: "NLP", color: "text-primary" },
  { icon: Cpu, label: "Edge AI", color: "text-primary" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Bridging Engineering and Intelligence
          </p>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="animate-fade-up">
              I am a{" "}
              <span className="text-foreground font-semibold">
                Machine Learning and Computer Vision practitioner
              </span>{" "}
              with a strong interest in building efficient, real-world AI
              systems for edge and mobile devices.
            </p>
            <p className="animate-fade-up delay-100">
              My background spans{" "}
              <span className="text-foreground font-semibold">
                textile engineering, data science, IoT automation
              </span>
              , and deployment-focused deep learning — a unique combination that
              gives me a holistic perspective on solving complex engineering
              challenges.
            </p>
            <p className="animate-fade-up delay-200">
              I enjoy designing end-to-end AI pipelines, experimenting with
              lightweight models, and applying machine learning to solve
              practical, high-impact problems that make a real difference.
            </p>
          </div>

          {/* Specialization Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {specializations.map((spec, index) => (
              <div
                key={spec.label}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover-lift text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <spec.icon
                  className={`w-10 h-10 mx-auto mb-3 ${spec.color} group-hover:scale-110 transition-transform`}
                />
                <span className="text-sm font-medium text-foreground">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
