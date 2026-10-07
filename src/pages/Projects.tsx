import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "@/content/structure";
import { LinkRow, Status, usePageMeta } from "@/components/site/bits";
import { FigureByKey } from "@/components/site/figures";
import NotFound from "./NotFound";

/** /projects has no page of its own: the Research page is the project index. */
export const ProjectIndex = () => <Navigate to="/research" replace />;

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid gap-x-6 gap-y-0.5 py-2.5 sm:grid-cols-[7.5rem_1fr]">
    <dt className="text-sm text-muted-foreground">{label}</dt>
    <dd className="leading-relaxed">{children}</dd>
  </div>
);

export const ProjectDetail = () => {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx];
  usePageMeta(p ? p.title : "Not found", p ? p.summary.problem : "", `/projects/${slug}`);
  if (!p) return <NotFound inline />;
  const next = projects[(idx + 1) % projects.length];
  return (
    <>
      <p className="mb-6 text-sm">
        <Link to="/research" className="text-muted-foreground transition-colors hover:text-foreground">
          ← Research
        </Link>
      </p>

      <header>
        <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {p.meta} <Status>{p.status}</Status>
        </p>
        <h1 className="mt-2 font-serif text-[1.85rem] font-semibold leading-tight tracking-tight sm:text-[2.1rem]">{p.title}</h1>
      </header>

      {/* Level 2: the whole project in five lines */}
      <dl className="mt-8 divide-y divide-border border-y border-border">
        <Row label="Problem">{p.summary.problem}</Row>
        <Row label="Method">{p.summary.method}</Row>
        <Row label="My role">{p.summary.role}</Row>
        <Row label="Result">{p.summary.result}</Row>
        <Row label="Why it matters">{p.summary.significance}</Row>
      </dl>

      <div className="mt-10 space-y-6">
        {p.figures.map((f) => (
          <FigureByKey key={f} k={f} />
        ))}
      </div>

      {/* Level 3: detail for readers who want it */}
      <section aria-labelledby="details-h" className="mt-12">
        <h2 id="details-h" className="font-serif text-[1.2rem] font-semibold">
          Details
        </h2>
        <dl className="mt-4 space-y-5">
          {p.details.map((d) => (
            <div key={d.label}>
              <dt className="text-sm font-medium text-foreground">{d.label}</dt>
              <dd className="mt-1 leading-relaxed text-foreground/85">{d.body}</dd>
            </div>
          ))}
          {p.limitations && (
            <div>
              <dt className="text-sm font-medium text-foreground">Limitations</dt>
              <dd className="mt-1 leading-relaxed text-muted-foreground">{p.limitations}</dd>
            </div>
          )}
        </dl>
        <LinkRow links={p.links} className="mt-6" />
      </section>

      <p className="mt-14 border-t border-border pt-6 text-sm">
        <span className="text-muted-foreground">Next: </span>
        <Link to={`/projects/${next.slug}`} className="link">
          {next.title}
        </Link>
      </p>
    </>
  );
};
