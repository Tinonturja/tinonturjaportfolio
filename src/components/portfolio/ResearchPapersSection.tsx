import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const papers: {
  title: string;
  authors: string;
  description: string;
  tags: string[];
  pdfUrl: string | null;
  thumbnailUrl: string | null;
}[] = [
  {
    title: "A Comprehensive Smart Parking System in Context of Bangladesh: Bilingual License Plate Detection and Real-Time Space Availability Using IoT and WSN",
    authors: "Md. Motaharul Islam, Tinon Turja Majumder",
    description: "Proposes an IoT-based smart parking system with bilingual (English & Bangla) license plate recognition using CNN, integrated with Wireless Sensor Networks for real-time parking space detection and a mobile application for urban traffic management.",
    tags: ["IoT", "WSN", "CNN", "Computer Vision", "Smart City"],
    pdfUrl: "/papers/smart-parking-system.pdf",
    thumbnailUrl: "/papers/thumbnails/smart-parking-system.jpg"
  },
  {
    title: "Efficient-FashionBERT: A Scalable Two-Tower Model for Cross-Modal Fashion Retrieval",
    authors: "Tinon Turja Majumder",
    description: "A dual-encoder framework combining BERT and Vision Transformer (ViT) for fashion retrieval, trained with contrastive learning and indexed with FAISS; Recall@10 of 95.8% on ~44k pairs from the Fashion Product Images dataset.",
    tags: ["Deep Learning", "BERT", "ViT", "FAISS", "Multimodal AI"],
    pdfUrl: "/papers/efficient-fashionbert.pdf",
    thumbnailUrl: "/papers/thumbnails/efficient-fashionbert.jpg"
  },
  {
    title: "Learned Query Optimization in Modern Database Systems: A Comprehensive Survey",
    authors: "Tinon Turja Majumder",
    description: "A survey of 20+ learned query optimization systems, with a taxonomy covering learned cost models, learning-to-rank, reinforcement learning and hybrid hint-guided approaches.",
    tags: ["Database Systems", "Machine Learning", "Query Optimization", "Survey"],
    pdfUrl: "/papers/learned-query-optimization.pdf",
    thumbnailUrl: "/papers/thumbnails/LearnedQueryOptimizationThumbnail_page-0001.jpg"
  },
  {
    title: "Automated Density-Based Splitting of Merged Clusters",
    authors: "Md. Mahir Uddin, Tinon Turja Majumder",
    description: "A density-based recursive splitting mechanism for K-means clustering that detects clusters by identifying low-density regions, removing the need to choose the cluster count in advance.",
    tags: ["Machine Learning", "Clustering", "K-means", "Unsupervised Learning"],
    pdfUrl: "/papers/Automated_Density_Based_Splitting_of_Merged_Clusters (1).pdf",
    thumbnailUrl: "/papers/thumbnails/Automated_Density_Based_Splitting_of_Merged_Clusters_thumbnail_page-0001.jpg"
  },
  {
    title: "Fabric Defect Detection Using Histogram Equalization and Convolutional Neural Network",
    authors: "Tinon Turja Majumder, Md. Mahir Uddin",
    description: "Histogram equalization for preprocessing and a ResNet-50 classifier on 25,600 fabric images; equalization improved recall on low-contrast defects at the cost of overall accuracy (87.1% vs 90.2%) under class imbalance.",
    tags: ["Computer Vision", "CNN", "ResNet-50", "Textile", "Quality Control"],
    pdfUrl: null,
    thumbnailUrl: null
  },
  {
    title: "An Intelligent Irrigation Decision Support System using IoT and Weather Data",
    authors: "Tinon Turja Majumder, Md. Mahir Uddin, Md. Mokit Hossain",
    description: "An irrigation decision-support system combining IoT soil and environmental sensors with weather forecasts to schedule irrigation.",
    tags: ["IoT", "Smart Agriculture", "ESP32", "Weather Forecasting", "Sensors"],
    pdfUrl: "/papers/IoT_project.pdf",
    thumbnailUrl: "/papers/thumbnails/IoT_project_thumbnail_page-0001.jpg"
  }
];

const ResearchPapersSection = () => {
  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-eyebrow justify-center flex">MSc Coursework · United International University</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Course Project Reports
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Unpublished reports written for MSc courses. None has been submitted to a journal; they are listed to show coursework, not as publications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-lift flex flex-col overflow-hidden"
            >
              {/* Paper Thumbnail */}
              {paper.thumbnailUrl && (
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={paper.thumbnailUrl}
                  alt={`${paper.title} - First page preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary/50">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              )}

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {paper.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  {paper.authors} · MSc course project (unpublished)
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                  {paper.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {paper.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{paper.tags.length - 3}
                    </Badge>
                  )}
                </div>
                {paper.pdfUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                  asChild
                >
                  <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Report
                  </a>
                </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPapersSection;
