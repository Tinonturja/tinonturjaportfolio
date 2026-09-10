import { Brain, Atom, Eye, Cpu } from "lucide-react";

const specializations = [
  { icon: Brain, label: "Machine Learning", color: "text-primary" },
  { icon: Atom, label: "Physics-Informed ML", color: "text-primary" },
  { icon: Eye, label: "Computer Vision", color: "text-primary" },
  { icon: Cpu, label: "Edge AI", color: "text-primary" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow justify-center flex">About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Bridging <span className="text-gradient">Engineering and Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Data Science graduate researcher · prospective PhD / research-based MS candidate
          </p>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="animate-fade-up">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                Data Science graduate student
              </span>{" "}
              working at the intersection of{" "}
              <span className="text-foreground font-semibold">
                physics-informed machine learning, computational materials
                science, and computer vision
              </span>{" "}
              — building models that stay grounded in the physics and
              chemistry of the systems they describe, rather than treating
              them as black boxes.
            </p>
            <p className="animate-fade-up delay-100">
              My path started in{" "}
              <span className="text-foreground font-semibold">
                textile engineering
              </span>
              , where I worked directly with dyeing chemistry, biomaterials,
              and process data. That background now feeds my current
              research: coupling molecular dynamics (GROMACS) and DFT
              (Gaussian) simulations with physics-informed neural networks to
              model reactive-dye adsorption on sustainable, waste-derived
              biofilms — work that has produced a preprint manuscript, with a
              second paper in preparation.
            </p>
            <p className="animate-fade-up delay-200">
              In parallel, I build applied ML systems — edge-deployed computer
              vision for industrial defect detection, IoT sensing pipelines,
              and LLM/RAG tooling — because I believe research is strongest
              when it stays connected to systems that actually have to run.
              I'm now looking for{" "}
              <span className="text-foreground font-semibold">
                PhD and research-based Master's opportunities
              </span>{" "}
              where I can keep working at this intersection of
              physics-informed ML, materials and process modeling, and
              applied computer vision.
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
