import { Github } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Physics-Informed Neural Networks",
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
    title: "Computational & Materials Science",
    skills: [
      "Molecular Dynamics (GROMACS)",
      "DFT (Gaussian, B3LYP/6-31G(d))",
      "Adsorption Kinetics (PSO/PFO)",
      "Isotherm Modeling (Freundlich/Langmuir)",
      "Gaussian Process Regression",
      "LaTeX (Overleaf, MiKTeX)",
    ],
  },
  {
    title: "Engineering & Deployment",
    skills: [
      "Python (SciPy, Scikit-Learn)",
      "PyTorch",
      "LangChain",
      "Hugging Face",
      "OpenCV",
      "SQL",
      "IoT Systems",
      "Edge-Cloud Inference",
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
          <p className="section-eyebrow justify-center flex">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills &amp; <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A toolkit spanning applied ML engineering and computational
            research
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
