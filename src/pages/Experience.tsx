import { experience, experienceDetail, education } from "@/content/site";
import { PageHeader, Section, Bullets, usePageMeta } from "@/components/site/bits";

const Row = ({ when, what, where, children }: { when: string; what: string; where: string; children?: React.ReactNode }) => (
  <li className="grid grid-cols-1 gap-x-8 gap-y-1 border-t border-border py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9.5rem_1fr]">
    <span className="pt-0.5 text-sm tabular-nums text-muted-foreground">{when}</span>
    <div>
      <h3 className="font-medium text-foreground">{what}</h3>
      <p className="text-sm text-muted-foreground">{where}</p>
      {children && <div className="mt-3 text-[0.95rem] leading-relaxed text-foreground/85">{children}</div>}
    </div>
  </li>
);

const Experience = () => {
  usePageMeta(
    "Experience",
    "Research experience and education of Tinon Turja Majumder: SMART DYEING, Dyes and Chemicals Engineering Laboratory, M.Sc. in Computer Science and Engineering, B.Sc. in Textile Engineering.",
    "/experience",
  );
  return (
    <>
      <PageHeader eyebrow="Experience" title="Research experience and education" lead="What I worked on, in what role, and what came out of it." />

      <Section title="Experience" id="experience">
        <ul>
          {experience.map((e) => (
            <Row key={e.what} {...e}>
              {experienceDetail[e.what] && <Bullets items={experienceDetail[e.what]} />}
            </Row>
          ))}
        </ul>
      </Section>

      <Section title="Education" id="education">
        <ul>
          {education.map((e) => (
            <Row key={e.what} when={e.when} what={e.what} where={e.where}>
              {e.detail}
            </Row>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Experience;
