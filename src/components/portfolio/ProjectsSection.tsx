import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Smart Dye – AI-Driven Water-Efficient Dyeing System",
    year: "2025 – Present",
    description:
      "An AI-powered textile dyeing optimization system that predicts color shifts across lab, pilot, and bulk scales, detects dyeing endpoints in real time, and reduces water usage by minimizing re-washing and re-dyeing through closed-loop machine learning control.",
    tools: ["Machine Learning", "Computer Vision", "Time-Series Analysis", "Predictive Modeling", "Industrial AI", "Textile Engineering", "Water Sustainability"],
    github: null,
    highlight: "AI-driven water reduction and shade consistency in industrial dyeing",
    status: null,
  },
  {
    title: "Spore Detection & Classification",
    year: "2025",
    description:
      "Developed a custom computer vision pipeline to detect and classify multiple fungal spore types from microscopic slide images. Included training workflow with preprocessing, augmentation, training, loss analysis, and evaluation.",
    tools: ["PyTorch", "EfficientNet-B0", "Transfer Learning", "Image Processing"],
    github: "https://github.com/Tinonturja",
    highlight: "Multi-class fungal spore classification from microscopy images",
    status: null,
  },
  {
    title: "Edge AI Fabric-Defect Detection Pipeline",
    year: "2026 – In Progress",
    description:
      "Building a computer vision / edge-deployment learning pipeline for fabric defect detection: starting with the NEU-DET steel surface-defect dataset on a laptop, with the goal of deploying the trained model on a Raspberry Pi 5 for real-time factory-floor inspection.",
    tools: ["Computer Vision", "Edge AI", "Raspberry Pi 5", "Model Optimization", "Industrial AI"],
    github: null,
    highlight: "Learning pipeline moving from dataset benchmarking toward on-device deployment",
    status: "In Progress",
  },
  {
    title: "Automated Textile Quality Inspection",
    year: "2024",
    description:
      "Developed a defect detection system for GSM Textile Company using EfficientNet in PyTorch. Automated the classification of dyeing faults in real production lines, reducing manual inspection time.",
    tools: ["Computer Vision", "PyTorch", "EfficientNet", "Industrial AI"],
    github: "https://github.com/Tinonturja",
    highlight: "Industrial AI for real-time defect detection",
    status: null,
  },
  {
    title: "Natural Dye-Sensitized Solar Cells",
    year: "2023",
    description:
      "Fabricated Dye-Sensitized Solar Cells (DSSC) using natural photosensitizers extracted from Blue Pea flower petals and Dragon Fruit flesh. Constructed the photovoltaic setup and achieved an open-circuit voltage of 229.1 mV. Analyzed the photoelectrochemical function under the supervision of faculty at BUTEX.",
    tools: ["Renewable Energy", "Material Science", "Research"],
    github: null,
    highlight: "Achieved 229.1 mV open-circuit voltage",
    status: null,
  },
];

const otherWork = [
  "Virtual Fit Check — Next.js/Tailwind/Framer Motion UI prototype (Landing, Upload Studio, Processing State, Results Dashboard)",
  "Streamlit military operations dashboard deployed for a non-technical client",
  "Textile production EDA pipeline — dyeing facility reports, reactive-dye filtering, shade-percentage tracking",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-eyebrow justify-center flex">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notable <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical AI solutions with real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl border border-border overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                    <span className="ml-2 text-sm text-muted-foreground font-normal">
                      ({project.year})
                    </span>
                  </h3>
                  {project.status && (
                    <Badge variant="secondary" className="text-xs whitespace-nowrap shrink-0">
                      {project.status}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-primary font-medium mb-3">
                  {project.highlight}
                </p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      View on GitHub
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional smaller projects */}
        <div className="mt-12 max-w-3xl mx-auto text-center animate-fade-up">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Also Worked On
          </h4>
          <ul className="space-y-2">
            {otherWork.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
