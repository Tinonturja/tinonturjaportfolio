import { Link } from "react-router-dom";
import { themes, projects, researchQuestion } from "@/content/structure";
import { PageTitle, Status, usePageMeta } from "@/components/site/bits";
import { FigureByKey } from "@/components/site/figures";

const Research = () => {
  usePageMeta(
    "Research",
    "Three research themes: industrial process data for resource reduction, physics-constrained learning from small datasets, and computer vision for moving textile surfaces.",
    "/research",
  );
  return (
    <>
      <PageTitle lead={researchQuestion}>Research</PageTitle>

      <div className="space-y-16">
        {themes.map((t) => (
          <section key={t.id} id={t.id} aria-labelledby={`${t.id}-h`} className="scroll-mt-8">
            <h2 id={`${t.id}-h`} className="font-serif text-[1.35rem] font-semibold leading-snug tracking-tight">
              {t.title}
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/85">{t.text}</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {t.evidence.map((e) => (
                <li key={e} className="list-dash-item">
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <FigureByKey k={t.figure} />
            </div>
            <ul className="mt-4 space-y-1.5">
              {t.projects.map((slug) => {
                const p = projects.find((x) => x.slug === slug)!;
                return (
                  <li key={slug} className="flex flex-wrap items-baseline gap-x-2 text-sm">
                    <Link to={`/projects/${slug}`} className="link">
                      {p.title}
                    </Link>
                    <Status>{p.status}</Status>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
};

export default Research;
