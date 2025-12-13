import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "M.Sc. in Computer Science and Engineering",
    institution: "United International University",
    status: "Ongoing",
    focus: "Focus: Data Science & Intelligent Systems",
  },
  {
    degree: "B.Sc. in Textile Engineering",
    institution: "Bangladesh University of Textiles",
    status: "2023",
    focus: "Major: Dyes and Chemicals Engineering",
  },
];

const testScores = [
  {
    test: "GRE",
    score: "313",
    breakdown: "Quant: 151 | Verbal: 162 | AWA: 3.5",
  },
  {
    test: "IELTS",
    score: "7.5",
    breakdown: "Listening: 8.5",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation bridging engineering and data science
          </p>
        </div>

        {/* Education Cards - Horizontal Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="group bg-card rounded-xl border border-border p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full mb-3">
                    {edu.status}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {edu.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Standardized Test Scores */}
        <div className="animate-fade-up delay-300">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Standardized Test Scores
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {testScores.map((test, index) => (
              <div
                key={test.test}
                className="bg-card rounded-xl border border-border p-6 text-center hover-lift"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {test.score}
                </div>
                <div className="text-xl font-bold text-foreground mb-2">
                  {test.test}
                </div>
                <div className="text-sm text-muted-foreground">
                  {test.breakdown}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
