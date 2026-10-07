import { ME, publications, inPreparation, courseReports } from "@/content/site";
import { PageTitle, H2, LinkRow, Status, ExtLink, usePageMeta } from "@/components/site/bits";

const Publications = () => {
  usePageMeta("Publications", "Preprints and manuscripts by Tinon Turja Majumder, with their current status.", "/publications");
  return (
    <>
      <PageTitle lead="Neither preprint has been peer-reviewed yet. * corresponding author">Publications</PageTitle>

      <H2>Preprints</H2>
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
      </ol>

      <H2>In preparation</H2>
      <p className="font-medium leading-snug">{inPreparation.title}</p>
      <p className="mt-1 text-sm text-muted-foreground">Materials study; my role: kinetic and isotherm modelling.</p>
      <LinkRow links={[{ label: "modelling archive and simulation study", href: "/projects/kinetic-identifiability" }, ...inPreparation.links.slice(0, 2)]} className="mt-1.5" />

      <details className="mt-14 rounded border border-border px-4 py-3">
        <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">M.Sc. course reports (6, unpublished)</summary>
        <ul className="mt-4 space-y-3 text-sm">
          {courseReports.map((r) => (
            <li key={r.title}>
              {r.pdf ? <ExtLink href={r.pdf}>{r.title}</ExtLink> : <span>{r.title}</span>}
              <span className="block text-muted-foreground">{r.authors}</span>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};

export default Publications;
