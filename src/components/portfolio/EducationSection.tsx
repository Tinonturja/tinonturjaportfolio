import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "M.Sc. in Computer Science and Engineering",
    institution: "United International University (UIU), Bangladesh",
    status: "2024 – 2025",
    focus: "Major: Data Science · CGPA: 3.61/4.00",
    note:
      "Entered from a non-CS background via bridging coursework in Object-Oriented Programming and Data Structures & Algorithms, then AI, Machine Learning, Deep Learning, NLP, Big Data, Advanced Database Systems, and Research Methodology.",
  },
  {
    degree: "B.Sc. in Textile Engineering",
    institution: "Bangladesh University of Textiles (BUTEX)",
    status: "2018 – 2023",
    focus: "Major: Dyes & Chemicals Engineering · CGPA: 3.05/4.00",
    note:
      "Strong quantitative core for a non-CS degree — calculus, linear algebra, ODEs & complex variables, and a full statistics sequence (probability, hypothesis testing, regression, design of experiments).",
  },
];

const testScores = [
  {
    test: "GRE",
    score: "313",
    breakdown: "Quant: 162 | Verbal: 151 | AWA: 3.5",
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
          <p className="section-eyebrow justify-center flex">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging engineering and data science — a deliberate transition,
            not a detour
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
                  <p className="text-primary text-sm font-medium mb-3">
                    {edu.focus}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {edu.note}
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
                <div className="text-4xl font-bold text-primary mb-2 font-serif">
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
