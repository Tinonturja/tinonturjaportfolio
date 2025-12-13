import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    degree: "MSc in Computer Science and Engineering",
    institution: "United International University",
    year: "2025",
    description: "Focus on Machine Learning, Deep Learning, and AI Systems",
  },
  {
    degree: "BSc in Textile Engineering",
    institution: "Dyes and Chemical Engineering Major",
    year: "2023",
    description: "Unique foundation bridging material science and engineering",
  },
];

const experience = [
  {
    role: "Part-Time Lab Lecturer & External Examinee",
    company: "Bangladesh University of Textiles (BUTEX)",
    period: "January 2025 – Present",
    description: "Served as an External Examinee for the course 'Software for Beginners'. Conducted viva and practical examinations to assess student proficiency in basic and advanced Microsoft Office tools (Word, PowerPoint). Evaluated technical competencies and provided structured feedback to students.",
  },
  {
    role: "Intern (Industrial Attachment)",
    company: "Fakir Knitwears Ltd.",
    period: "March 2023 – May 2023",
    description: "Conducted a comprehensive analysis of production planning and Supply Chain Management (SCM) workflows in a composite knitwear industry. Monitored ERP system usage for batch-wise capacity planning and real-time production scheduling. Implemented quality control checks using the 4-Point Inspection System to minimize fabric defects.",
  },
  {
    role: "Lecturer",
    company: "Udvash Academic and Admission Care",
    period: "March 2018 – 2024",
    description: "Mentored over 10,000 students in offline and online platforms for science and engineering admission tests. Developed educational materials and conducted large-scale lecture sessions, demonstrating strong communication and public speaking skills.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A unique journey bridging multiple disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:shadow-[0_0_10px_hsl(48_100%_50%/0.5)] after:absolute after:left-[5px] after:top-6 after:w-0.5 after:h-[calc(100%-1rem)] after:bg-border last:after:hidden"
                >
                  <span className="text-sm text-primary font-semibold">
                    {edu.year}
                  </span>
                  <h4 className="text-lg font-bold text-foreground mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-fade-up delay-200">
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
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:shadow-[0_0_10px_hsl(48_100%_50%/0.5)] after:absolute after:left-[5px] after:top-6 after:w-0.5 after:h-[calc(100%-1rem)] after:bg-border last:after:hidden"
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
      </div>
    </section>
  );
};

export default ExperienceSection;
