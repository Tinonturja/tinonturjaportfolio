import { Link } from "react-router-dom";
import { researchAreas, researchOverview, researchQuestion, projects, publications } from "@/content/site";
import { PageHeader, Blocks, Bullets, Tag, Eyebrow, More, usePageMeta } from "@/components/site/bits";
import { FigureByKey } from "@/components/site/figures";

/** One representative figure per research area (all figures are from the work itself). */
const areaFigure: Record<string, "funnel" | "wcf" | "tsfabrics"> = {
  "plant-data": "funnel",
  "physics-informed": "wcf",
  vision: "tsfabrics",
};

const Research = () => {
  usePageMeta(
    "Research",
    "Research areas of Tinon Turja Majumder: industrial process data for resource reduction, physics-constrained learning from small datasets, and computer vision for moving textile surfaces.",
    "/research",
  );
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="What I work on"
        lead={
          <>
            <p>
              The question behind my work is {researchQuestion.charAt(0).toLowerCase() + researchQuestion.slice(1)}
            </p>
            <p className="mt-3">{researchOverview}</p>
          </>
        }
      />

      <nav aria-label="Research areas on this page" className="mb-14 rounded-lg border border-border bg-card p-5">
        <Eyebrow>On this page</Eyebrow>
        <ol className="mt-3 space-y-1.5 text-sm">
          {researchAreas.map((a, i) => (
            <li key={a.id}>
              <a href={`#${a.id}`} className="text-foreground/85 transition-colors hover:text-accent">
                <span className="mr-2 font-mono text-xs text-accent">0{i + 1}</span>
                {a.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-20">
        {researchAreas.map((a, i) => {
          const pubs = publications.filter((p) => a.pubs?.includes(p.doi ?? ""));
          return (
            <article key={a.id} id={a.id} aria-labelledby={`${a.id}-h`} className="scroll-mt-24">
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h2 id={`${a.id}-h`} className="mt-1.5 font-serif text-[1.55rem] font-semibold leading-snug tracking-tight">
                {a.title}
              </h2>

              <div className="mt-7">
                <Blocks
                  items={[
                    { label: "Problem", body: a.problem },
                    { label: "Approach", body: a.approach },
                    {
                      label: "Methods",
                      body: (
                        <div className="flex flex-wrap gap-1.5">
                          {a.methods.map((m) => (
                            <Tag key={m}>{m}</Tag>
                          ))}
                        </div>
                      ),
                    },
                    { label: "Evidence", body: <Bullets items={a.evidence} /> },
                    { label: "Contribution", body: a.contribution },
                    { label: "Status", body: a.status, muted: true },
                  ]}
                />
              </div>

              <div className="mt-8">
                <FigureByKey k={areaFigure[a.id]} />
              </div>

              <div className="mt-6 space-y-2">
                {a.projects.map((slug) => {
                  const p = projects.find((x) => x.slug === slug)!;
                  return (
                    <div key={slug}>
                      <More to={`/projects/${slug}`}>Case study: {p.title}</More>
                    </div>
                  );
                })}
                {pubs.map((p) => (
                  <p key={p.doi} className="text-sm text-muted-foreground">
                    Related {p.kind.toLowerCase()}:{" "}
                    <Link to="/publications" className="text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent">
                      {p.title}
                    </Link>
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Research;
