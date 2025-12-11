import { Eye, Brain, Database } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Computer Vision Solutions",
    description:
      "End-to-end image classification and object detection pipelines. From data preprocessing to model deployment on edge devices.",
    features: [
      "Custom CNN architectures",
      "Transfer learning optimization",
      "Real-time inference systems",
    ],
  },
  {
    icon: Brain,
    title: "NLP / LLM Fine-tuning",
    description:
      "Custom fine-tuning and optimization of large language models using techniques like LoRA and quantization for efficient deployment.",
    features: [
      "LoRA fine-tuning",
      "Model quantization",
      "On-device LLM optimization",
    ],
  },
  {
    icon: Database,
    title: "RAG System Development",
    description:
      "Building and deploying advanced Retrieval-Augmented Generation systems for intelligent document Q&A and knowledge bases.",
    features: [
      "Vector database integration",
      "Semantic search pipelines",
      "Custom knowledge bases",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Specialized <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI Consulting & Development tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
