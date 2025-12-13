import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import sporeImage from "@/assets/project-spore.jpg";
import foodImage from "@/assets/project-food.jpg";
import dsscImage from "@/assets/project-dssc.jpg";

const projects = [
  {
    title: "Spore Detection & Classification",
    year: "2025",
    image: sporeImage,
    description:
      "Developed a custom computer vision pipeline to detect and classify multiple fungal spore types from microscopic slide images. Included training workflow with preprocessing, augmentation, training, loss analysis, and evaluation.",
    tools: ["PyTorch", "EfficientNet-B0", "Transfer Learning", "Image Processing"],
    github: "https://github.com/Tinonturja",
    highlight: "Scalable pipeline for LLM-based counting systems",
  },
  {
    title: "Food Image Classifier",
    year: "2024-2025",
    image: foodImage,
    description:
      "Built a multi-class food image classifier (Pizza-Steak-Sushi) using a curated dataset and PyTorch. Experimented with CNN architectures and hyperparameter tuning to compare model performance.",
    tools: ["PyTorch", "TinyVGG", "Transfer Learning", "CNNs"],
    github: "https://github.com/Tinonturja",
    highlight: "Comprehensive hyperparameter experimentation",
  },
  {
    title: "Natural Dye-Sensitized Solar Cells",
    year: "2023",
    image: dsscImage,
    description:
      "Fabricated Dye-Sensitized Solar Cells (DSSC) using natural photosensitizers extracted from Blue Pea flower petals and Dragon Fruit flesh. Constructed the photovoltaic setup and achieved an open-circuit voltage of 229.1 mV. Analyzed the photoelectrochemical function under the supervision of faculty at BUTEX.",
    tools: ["Renewable Energy", "Material Science", "Research"],
    github: null,
    highlight: "Achieved 229.1 mV open-circuit voltage",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
