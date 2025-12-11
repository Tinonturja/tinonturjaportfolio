import { Github } from "lucide-react";

const skillCategories = [
  {
    title: "Core AI/ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
      "NLP",
      "RAG Systems",
      "Edge AI",
      "LLM Fine-tuning (LoRA)",
      "Quantization",
      "CNNs",
      "Transformers",
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      "PyTorch",
      "Python",
      "LangChain",
      "Hugging Face",
      "SQL",
      "Scikit-Learn",
      "OpenCV",
      "MiniZinc",
      "PDDL",
    ],
  },
  {
    title: "Other Technical",
    skills: [
      "IoT Systems",
      "Smart Parking",
      "Edge-Cloud Inference",
      "Data Preprocessing",
      "Model Deployment",
      "Git/GitHub",
      "Statistical Analysis",
      "Research Writing",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border animate-fade-up"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Tinonturja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            <Github size={20} />
            View my GitHub for more projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
