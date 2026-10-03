import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Lead Research Assistant",
    company: "Smart Dyeing Project — ADB/BIRDI-funded Research Initiative",
    period: "March 2026 – Present",
    description:
      "Lead research assistant on an industrial project (PI: Prof. Dr. Mohammad Forhad Hossain; partner: DBL Group) aiming at AI-driven closed-loop control to reduce chemical, water and energy use in knit dyeing. Built the data pipeline (controller database, decoded machine telemetry, a 47,403-batch verified recipe corpus), installed water flow metering on production machines, and developed baseline resource-prediction models. Earlier (Sep 2025 – Feb 2026) wrote and defended the funded proposal through four BIRDI review rounds.",
  },
  {
    role: "Intern (Industrial Attachment)",
    company: "Fakir Knitwears Ltd.",
    period: "March 2023 – May 2023",
    description:
      "Conducted a comprehensive analysis of production planning and Supply Chain Management (SCM) workflows in a composite knitwear industry. Monitored ERP system usage for batch-wise capacity planning and real-time production scheduling. Implemented quality control checks using the 4-Point Inspection System to minimize fabric defects.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-eyebrow justify-center flex">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging industrial processes and data-driven research
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Work Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={exp.role}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full after:absolute after:left-[5px] after:top-6 after:w-0.5 after:h-[calc(100%-1rem)] after:bg-border last:after:hidden animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="text-sm text-primary font-semibold">
                  {exp.period}
                </span>
                <h4 className="text-lg font-bold text-foreground mt-1">
                  {exp.role}
                </h4>
                <p className="text-muted-foreground text-sm">{exp.company}</p>
                <p className="text-muted-foreground text-sm mt-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
