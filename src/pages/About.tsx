import { profile, education, interests } from "@/content/site";
import { roles } from "@/content/structure";
import { PageTitle, H2, LinkRow, usePageMeta } from "@/components/site/bits";

const About = () => {
  usePageMeta(
    "About",
    "Background, research experience, education and PhD research directions of Tinon Turja Majumder.",
    "/about",
  );
  return (
    <>
      <PageTitle>About</PageTitle>

      <p className="leading-relaxed text-foreground/85">
        I trained as a textile engineer in dyes and chemicals, worked in an industrial dyeing unit, and then completed an M.Sc. in computer
        science with a data-science concentration. My work sits between the two: machine-learning models that are constrained by the
        chemistry and physics of a process, developed on laboratory and industrial plant data. The full chronology is in my{" "}
        <a href={profile.cv} className="link">
          CV
        </a>
        .
      </p>

      <H2>Research experience</H2>
      <ul className="space-y-5">
        {roles.map((r) => (
          <li key={r.what} className="grid gap-x-6 sm:grid-cols-[9rem_1fr]">
            <span className="text-sm tabular-nums text-muted-foreground">{r.when}</span>
            <div>
              <p className="font-medium">{r.what}</p>
              <p className="text-sm text-muted-foreground">{r.where}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-foreground/85">{r.line}</p>
            </div>
          </li>
        ))}
      </ul>

      <H2>Education</H2>
      <ul className="space-y-5">
        {education.map((e) => (
          <li key={e.what} className="grid gap-x-6 sm:grid-cols-[9rem_1fr]">
            <span className="text-sm tabular-nums text-muted-foreground">{e.when}</span>
            <div>
              <p className="font-medium">{e.what}</p>
              <p className="text-sm text-muted-foreground">{e.where}</p>
            </div>
          </li>
        ))}
      </ul>

      <H2>What I want to work on in a PhD</H2>
      <ul className="space-y-2.5">
        {interests.map((t) => (
          <li key={t} className="list-dash-item leading-relaxed text-foreground/85">
            {t}
          </li>
        ))}
      </ul>

      <H2>Contact</H2>
      <p className="leading-relaxed text-foreground/85">
        Email is best: <a href={`mailto:${profile.email}`} className="link">{profile.email}</a>. Based in {profile.location}.
      </p>
      <LinkRow links={profile.links.filter((l) => l.label !== "Email")} className="mt-3" />
    </>
  );
};

export default About;
