import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const papers = [
  {
    title: "A Comprehensive Smart Parking System in Context of Bangladesh: Bilingual License Plate Detection and Real-Time Space Availability Using IoT and WSN",
    description: "Proposes an IoT-based smart parking system with bilingual (English & Bangla) license plate recognition using CNN, integrated with Wireless Sensor Networks for real-time parking space detection and a mobile application for urban traffic management.",
    tags: ["IoT", "WSN", "CNN", "Computer Vision", "Smart City"],
    pdfUrl: "/papers/smart-parking-system.pdf"
  },
  {
    title: "Efficient-FashionBERT: A Scalable Two-Tower Model for Cross-Modal Fashion Retrieval",
    description: "A scalable dual-encoder framework combining BERT and Vision Transformer (ViT) for fashion e-commerce retrieval, achieving Recall@10 of 95.8% with 70% lower inference latency using contrastive learning and FAISS vector search.",
    tags: ["Deep Learning", "BERT", "ViT", "FAISS", "Multimodal AI"],
    pdfUrl: "/papers/efficient-fashionbert.pdf"
  },
  {
    title: "Learned Query Optimization in Modern Database Systems: A Comprehensive Survey",
    description: "A comprehensive survey synthesizing findings from 20+ state-of-the-art learned query optimization systems, presenting a structured taxonomy of LQO techniques including reinforcement learning, cost modeling, and hybrid hint-guided approaches.",
    tags: ["Database Systems", "Machine Learning", "Query Optimization", "Survey"],
    pdfUrl: "/papers/learned-query-optimization.pdf"
  }
];

const ResearchPapersSection = () => {
  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Research Papers
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The following are IEEE-format conference-style research papers completed as part of my university coursework and independent study. These papers are not published yet. Ongoing and publishable research works are not included here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-lift flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight line-clamp-3">
                  {paper.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm text-muted-foreground mb-4 flex-1">
                  {paper.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-auto"
                  asChild
                >
                  <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Paper
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPapersSection;
