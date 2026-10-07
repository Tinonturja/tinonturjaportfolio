import { Link } from "react-router-dom";
import { interestGroups } from "@/content/site";
import { PageHeader, Tag, Eyebrow, usePageMeta } from "@/components/site/bits";

const Interests = () => {
  usePageMeta(
    "Research interests",
    "Research directions Tinon Turja Majumder wants to pursue in a PhD, and how each relates to his work so far.",
    "/interests",
  );
  return (
    <>
      <PageHeader
        eyebrow="Interests"
        title="Directions for a PhD"
        lead="Three directions I want to pursue. They are interests, not results; each is paired with what I have actually done that relates to it."
      />
      <ol className="space-y-6">
        {interestGroups.map((g, i) => (
          <li key={g.domain} className="rounded-lg border border-border bg-card p-6">
            <p className="font-mono text-xs text-accent">0{i + 1}</p>
            <Eyebrow className="mt-2">{g.domain}</Eyebrow>
            <p className="mt-2 font-serif text-[1.12rem] leading-snug text-foreground">{g.interest}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.methods.map((m) => (
                <Tag key={m}>{m}</Tag>
              ))}
            </div>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              <span className="text-foreground/90">So far: </span>
              {g.soFar.text}{" "}
              <Link to={g.soFar.href} className="text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent">
                See the work
              </Link>
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
        Outside these three, I have recently started on computer vision for the same kind of physical process, with one preregistered
        pilot so far (
        <Link to="/projects/tsfabrics-pilot" className="text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent">
          knitted-fabric video
        </Link>
        ).
      </p>
    </>
  );
};

export default Interests;
