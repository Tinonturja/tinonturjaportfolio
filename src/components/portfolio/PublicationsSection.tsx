import { ExternalLink, FlaskConical } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title:
      "Interfacial Mechanisms of Reactive Dye Adsorption on a Waste-Cotton Derived PVA/TiO₂/Cellulose Biofilm: A Molecular Dynamics and Physics-Informed Predictive Framework",
    authors:
      "Md Shajjad Khan Faisal, Tinon Turja Majumder, Kazi Sirajul Islam, Sk. Mainuddin, Mohammad Forhad Hossain, Niger Sultana, Mahmudul Hasan",
    status: "Preprint · ChemRxiv",
    description:
      "Couples molecular dynamics and DFT with a physics-informed neural network to model reactive-dye adsorption on a sustainable, waste-cotton derived biofilm. The inverse PINN — constrained by the PSO rate law — outperformed five other benchmarked ML models (leave-one-out R² = 0.989), alongside strong classical fits (PSO kinetics R² = 0.998, Freundlich isotherm R² = 0.978). The biofilm removed up to 49% of a reactive azo dye within 170 minutes.",
    tags: [
      "Physics-Informed Neural Networks",
      "Molecular Dynamics",
      "DFT",
      "Adsorption Kinetics",
      "Sustainable Materials",
    ],
    link: "https://doi.org/10.26434/chemrxiv.15008049/v1",
    linkLabel: "View Preprint",
  },
  {
    title:
      "Reactive Dye Adsorption on a Novel Saccharum spontaneum (Catkin) Flower-Fibre PVA/TiO₂ Biofilm",
    authors: "Tinon Turja Majumder, with Kazi Sirajul Islam and collaborators",
    status: "In Preparation",
    description:
      "A companion study introducing the first use of Saccharum spontaneum (wild sugarcane) flower-fibre CMC in a PVA/TiO₂ adsorptive biofilm, targeting an anionic reactive dye — most prior cellulose-composite work has focused on cationic dyes. Includes full materials characterization (FTIR, XRD, FE-SEM/EDX, DSC, mechanical testing) and a heating-based dye recovery and biofilm-reuse step. Currently being extended with a physics-informed ML modeling section mirroring the companion study above.",
    tags: [
      "Sustainable Biomaterials",
      "Adsorption Isotherms",
      "Circular Economy",
      "Materials Characterization",
    ],
    link: null,
    linkLabel: null,
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-eyebrow justify-center flex">Publications</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Publications &amp; <span className="text-gradient">Preprints</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed-track research at the intersection of computational
            materials science and physics-informed machine learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <Card
              key={pub.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-lift flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FlaskConical className="w-5 h-5 text-primary" />
                  </div>
                  <Badge
                    variant={pub.link ? "default" : "secondary"}
                    className="text-xs whitespace-nowrap"
                  >
                    {pub.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-snug">
                  {pub.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  {pub.authors}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-sm text-muted-foreground mb-4 flex-1">
                  {pub.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {pub.link ? (
                  <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {pub.linkLabel}
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="w-full mt-auto" disabled>
                    Manuscript in Preparation
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

export default PublicationsSection;
