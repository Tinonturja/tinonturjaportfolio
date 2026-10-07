import { ME, publications, inPreparation, courseReports } from "@/content/site";
import { PageHeader, Section, LinkRow, Status, ExtLink, More, usePageMeta } from "@/components/site/bits";

const Publications = () => {
  usePageMeta(
    "Publications",
    "Preprints and manuscripts by Tinon Turja Majumder, with their exact current status.",
    "/publications",
  );
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Preprints and manuscripts"
        lead="Status lines give the exact current state of each manuscript. Neither preprint has been peer-reviewed yet. * corresponding author"
      />

      <Section title="Preprints" id="preprints">
        <ol className="space-y-10">
          {publications.map((p) => (
            <li key={p.doi}>
              <article>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {p.kind} · {p.year}
                  </span>
                  <Status>Preprint · {p.status}</Status>
                </div>
                <h3 className="mt-2 font-serif text-[1.18rem] font-semibold leading-snug">
                  <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                    {p.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {p.authors.map((a, i) => (
                    <span key={a.name}>
                      {i > 0 && ", "}
                      <span className={a.name === ME ? "font-medium text-foreground" : undefined}>
                        {a.name}
                        {a.corresponding && "*"}
                      </span>
                    </span>
                  ))}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.source}, DOI {p.doi}
                </p>
                <p className="mt-4 leading-relaxed text-foreground/85">{p.summary}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground/90">My role:</span> {p.role}
                </p>
                <div className="mt-3">
                  <LinkRow links={p.links} />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="In preparation" id="in-prep">
        <article>
          <Status>Manuscript in preparation</Status>
          <h3 className="mt-2 font-serif text-[1.1rem] font-semibold leading-snug">{inPreparation.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{inPreparation.note.replace("the simulation below shows", "the simulation in the linked study shows")}</p>
          <div className="mt-3">
            <LinkRow links={inPreparation.links} />
          </div>
          <div className="mt-3">
            <More to="/projects/kinetic-identifiability">Modelling archive and simulation results</More>
          </div>
        </article>
      </Section>

      <Section title="M.Sc. course reports" id="course-reports">
        <p className="mb-4 text-sm text-muted-foreground">Six unpublished reports written for M.Sc. courses at United International University. Not peer-reviewed and not submitted to any venue.</p>
        <ul className="space-y-3 text-sm">
          {courseReports.map((r) => (
            <li key={r.title}>
              {r.pdf ? <ExtLink href={r.pdf}>{r.title}</ExtLink> : <span className="text-foreground/90">{r.title}</span>}
              <span className="block text-muted-foreground">{r.authors}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Publications;
