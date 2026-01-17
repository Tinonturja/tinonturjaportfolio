import { ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "IBM Generative AI Engineering Professional Certificate",
    issuer: "IBM via Coursera",
    date: "January 2026",
    courses: 16,
    description: "Comprehensive professional certification covering generative AI architectures, LLMs, and NLP engineering. Gained hands-on experience with PyTorch, Hugging Face Transformers, RAG applications, LangChain, and prompt engineering. Developed practical skills in building AI-powered applications using GPT, BERT, and transformer-based models.",
    tags: ["Generative AI", "LLMs", "RAG", "LangChain", "PyTorch", "NLP"],
    verifyUrl: "https://coursera.org/verify/professional-cert/AY6XWAPC25J2",
    thumbnailUrl: "/certificates/ibm-genai.jpg"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University via Coursera",
    date: "January 2025",
    courses: 3,
    description: "Foundational specialization by Andrew Ng covering supervised learning (regression, classification, neural networks, decision trees), unsupervised learning (clustering, anomaly detection), recommender systems, and reinforcement learning. Acquired best practices for building production-ready ML models with real-world applications.",
    tags: ["Machine Learning", "Neural Networks", "Supervised Learning", "Reinforcement Learning"],
    verifyUrl: "https://coursera.org/verify/specialization/O3L82HSKT65Q",
    thumbnailUrl: "/certificates/ml-specialization.jpg"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-primary">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and specialized courses completed to build expertise in AI, Machine Learning, and Data Science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover-lift bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              {/* Certificate Thumbnail */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img 
                  src={cert.thumbnailUrl} 
                  alt={`${cert.title} - Certificate preview`}
                  className="w-full h-full object-contain bg-white p-2 transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary/50">
                          <circle cx="12" cy="8" r="6"></circle>
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                        </svg>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                    {cert.courses} Courses
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.tags.slice(0, 4).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {cert.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{cert.tags.length - 4}
                    </Badge>
                  )}
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Verify Certificate
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
