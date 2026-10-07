import { Link, useParams } from "react-router-dom";
import { projects } from "@/content/site";
import { PageHeader, Blocks, Eyebrow, Tag, Status, LinkRow, More, usePageMeta } from "@/components/site/bits";
import { FigureByKey } from "@/components/site/figures";
import NotFound from "./NotFound";

export const ProjectIndex = () => {
  usePageMeta(
    "Projects",
    "Research projects by Tinon Turja Majumder, written up as case studies: problem, method, result and limitations.",
    "/projects",
  );
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Research projects"
        lead="Each project is written up as a case study: the problem, what was done, what came out of it, and its limitations."
      />
      <ol className="space-y-5">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/projects/${p.slug}`}
              className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-muted-foreground/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Eyebrow>
                  {p.area} · {p.meta}
                </Eyebrow>
                <Status>{p.status}</Status>
              </div>
              <h2 className="mt-2.5 font-serif text-[1.25rem] font-semibold leading-snug text-foreground group-hover:text-accent">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
              <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[5.5rem_1fr]">
                <dt className="text-muted-foreground">Problem</dt>
                <dd className="text-foreground/85">{p.problem}</dd>
                <dt className="text-muted-foreground">Method</dt>
                <dd className="text-foreground/85">{p.method}</dd>
                <dt className="text-muted-foreground">Result</dt>
                <dd className="text-foreground/85">{p.result}</dd>
              </dl>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <span className="mt-4 inline-block text-sm text-accent">
                Read the case study <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export const ProjectDetail = () => {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx];
  usePageMeta(p ? p.title : "Not found", p ? p.short : "", `/projects/${slug}`);
  if (!p) return <NotFound inline />;
  const prev = projects[idx - 1];
  const next = projects[idx + 1];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
        <Link to="/projects" className="transition-colors hover:text-foreground">
          Projects
        </Link>
        <span aria-hidden="true" className="mx-2">
          /
        </span>
        <span>{p.area}</span>
      </nav>
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2">
          <Eyebrow>{p.meta}</Eyebrow>
          <Status>{p.status}</Status>
        </div>
        <h1 className="mt-3 font-serif text-[1.9rem] font-semibold leading-tight tracking-tight sm:text-[2.2rem]">{p.title}</h1>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-muted-foreground">{p.short}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tools.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </header>

      <Blocks items={p.blocks} />

      <div className="mt-10 space-y-6">
        {p.figures.map((f) => (
          <FigureByKey key={f} k={f} />
        ))}
      </div>

      {p.links.length > 0 && (
        <div className="mt-8 rounded-lg border border-border bg-card p-5">
          <Eyebrow>Code, data and documents</Eyebrow>
          <div className="mt-2">
            <LinkRow links={p.links} />
          </div>
        </div>
      )}

      <nav aria-label="Other projects" className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        <div>
          {prev && (
            <Link to={`/projects/${prev.slug}`} className="group block">
              <Eyebrow>Previous</Eyebrow>
              <span className="mt-1 block text-sm text-foreground/85 group-hover:text-accent">← {prev.title}</span>
            </Link>
          )}
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link to={`/projects/${next.slug}`} className="group block">
              <Eyebrow>Next</Eyebrow>
              <span className="mt-1 block text-sm text-foreground/85 group-hover:text-accent">{next.title} →</span>
            </Link>
          ) : (
            <More to="/projects">All projects</More>
          )}
        </div>
      </nav>
    </>
  );
};
