import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";
import { ME, profile, publications, inPreparation, news, education, courseReports } from "@/content/site";
import { oneLine, bio, researchQuestion, projects, roles } from "@/content/structure";
import { LinkRow, Status, ExtLink, usePageMeta } from "@/components/site/bits";
import { FigureByKey } from "@/components/site/figures";

/** Single-page site. Every section is reachable from the header; nothing is hidden behind a drop-down. */

const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28 pt-16 sm:scroll-mt-20">
    <h2 id={`${id}-h`} className="mb-6 font-serif text-[1.45rem] font-semibold tracking-tight">
      {title}
    </h2>
    {children}
  </section>
);

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="grid gap-x-6 gap-y-0.5 py-2.5 sm:grid-cols-[7.5rem_1fr]">
    <dt className="text-sm text-muted-foreground">{label}</dt>
    <dd className="leading-relaxed">{children}</dd>
  </div>
);

const Dated = ({ when, children }: { when: string; children: ReactNode }) => (
  <li className="grid gap-x-6 sm:grid-cols-[9rem_1fr]">
    <span className="text-sm tabular-nums text-muted-foreground">{when}</span>
    <div>{children}</div>
  </li>
);

const Index = () => {
  usePageMeta(
    "",
    "Tinon Turja Majumder: machine-learning models constrained by process chemistry and physics, on laboratory and industrial plant data. Lead Research Assistant, SMART DYEING, Bangladesh University of Textiles.",
    "/",
  );

  // Old multi-page URLs redirect here with a #section; jump to it once the page has rendered.
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [hash]);

  return (
    <>
      {/* Introduction */}
      <section id="top" aria-label="Introduction" className="flex scroll-mt-28 flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div>
          <h1 className="font-serif text-[2.2rem] font-semibold leading-[1.1] tracking-tight sm:text-[2.5rem]">{ME}</h1>
          <p className="mt-2 text-[0.95rem] text-muted-foreground">{profile.position}</p>
          <p className="mt-6 text-[1.1rem] leading-relaxed">{oneLine}</p>
          <p className="mt-4 leading-relaxed text-foreground/80">{bio}</p>
          <LinkRow links={profile.links} className="mt-6" />
        </div>
        <img
          src={profileImage}
          alt={`Portrait of ${ME}`}
          width={112}
          height={112}
          className="h-24 w-24 shrink-0 rounded-full border border-border object-cover sm:h-28 sm:w-28"
        />
      </section>

      {/* Research: every project in full, one after another */}
      <Section id="research" title="Research">
        <p className="-mt-2 mb-10 leading-relaxed text-muted-foreground">{researchQuestion}</p>
        <div className="space-y-20">
          {projects.map((p) => (
            <article key={p.slug} id={p.slug} aria-labelledby={`${p.slug}-h`} className="scroll-mt-28 sm:scroll-mt-20">
              <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {p.meta} <Status>{p.status}</Status>
              </p>
              <h3 id={`${p.slug}-h`} className="mt-1.5 font-serif text-[1.2rem] font-semibold leading-snug tracking-tight">
                {p.title}
              </h3>
              <dl className="mt-5 divide-y divide-border border-y border-border">
                <Row label="Problem">{p.summary.problem}</Row>
                <Row label="Method">{p.summary.method}</Row>
                <Row label="My role">{p.summary.role}</Row>
                <Row label="Result">{p.summary.result}</Row>
                <Row label="Why it matters">{p.summary.significance}</Row>
              </dl>
              {p.slug === "smart-dyeing" && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Funded by the Asian Development Bank through BIRDI under SICIP (BDT 2.18 crore, about US$177,000). PI: Prof. Dr. Mohammad
                  Forhad Hossain. Fieldwork at the DBL Group fabric division. Closed-loop control has not been implemented yet; it is the
                  next phase of the project.
                </p>
              )}
              <div className="mt-6 space-y-6">
                {p.figures
                  .filter((f) => f !== "pinn" && f !== "gates")
                  .map((f) => (
                    <FigureByKey key={f} k={f} />
                  ))}
              </div>
              {p.limitations && (
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Limitations. </span>
                  {p.limitations}
                </p>
              )}
              <LinkRow links={p.links} className="mt-4" />
            </article>
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications">
        <ol className="space-y-7">
          {publications.map((p) => (
            <li key={p.doi}>
              <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {p.kind} · {p.year} <Status>{p.status}</Status>
              </p>
              <h3 className="mt-1 font-medium leading-snug">
                <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {p.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.authors.map((a, i) => (
                  <span key={a.name}>
                    {i > 0 && ", "}
                    <span className={a.name === ME ? "font-medium text-foreground" : undefined}>
                      {a.name}
                      {a.corresponding && "*"}
                    </span>
                  </span>
                ))}
                . {p.source}, doi:{p.doi}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">My role: {p.role}</p>
              <LinkRow links={p.links} className="mt-1.5" />
            </li>
          ))}
          <li>
            <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              Manuscript <Status>In preparation</Status>
            </p>
            <h3 className="mt-1 font-medium leading-snug">{inPreparation.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">My role: kinetic and isotherm modelling.</p>
            <LinkRow links={inPreparation.links.slice(0, 2)} className="mt-1.5" />
          </li>
        </ol>
        <p className="mt-6 text-xs text-muted-foreground">Preprints are not yet peer-reviewed. * corresponding author</p>
      </Section>

      {/* Experience and education */}
      <Section id="experience" title="Experience">
        <ul className="space-y-5">
          {roles.map((r) => (
            <Dated key={r.what} when={r.when}>
              <p className="font-medium">{r.what}</p>
              <p className="text-sm text-muted-foreground">{r.where}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-foreground/85">{r.line}</p>
            </Dated>
          ))}
        </ul>
        <h3 className="mb-5 mt-12 font-serif text-[1.15rem] font-semibold">Education</h3>
        <ul className="space-y-5">
          {education.map((e) => (
            <Dated key={e.what} when={e.when}>
              <p className="font-medium">{e.what}</p>
              <p className="text-sm text-muted-foreground">{e.where}</p>
            </Dated>
          ))}
        </ul>
        <h3 className="mb-3 mt-12 font-serif text-[1.15rem] font-semibold">M.Sc. course reports</h3>
        <p className="mb-3 text-sm text-muted-foreground">Unpublished coursework.</p>
        <ul className="space-y-2 text-sm">
          {courseReports.map((r) => (
            <li key={r.title}>
              {r.pdf ? <ExtLink href={r.pdf}>{r.title}</ExtLink> : <span>{r.title}</span>}
              <span className="text-muted-foreground"> · {r.authors}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* News */}
      <Section id="news" title="Recent">
        <ul className="space-y-2.5 text-[0.95rem]">
          {news.map((n, i) => (
            <li key={n.date + i} className="grid grid-cols-[4.5rem_1fr] gap-3">
              <span className="pt-0.5 text-sm tabular-nums text-muted-foreground">{n.date}</span>
              <span className="text-foreground/85">{n.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="leading-relaxed text-foreground/85">
          Email is best: <a href={`mailto:${profile.email}`} className="link">{profile.email}</a>. Based in {profile.location}.
        </p>
        <LinkRow links={profile.links.filter((l) => l.label !== "Email")} className="mt-3" />
      </Section>
    </>
  );
};

export default Index;
