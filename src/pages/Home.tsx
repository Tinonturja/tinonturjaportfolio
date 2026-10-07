import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";
import { ME, profile, shortBio, researchQuestion, researchAreas, projects, publications, interests, news } from "@/content/site";
import { Eyebrow, Section, More, LinkRow, Bullets, Status, usePageMeta } from "@/components/site/bits";

const featured = ["smart-dyeing", "adsorption-pinn", "tsfabrics-pilot"];

const Home = () => {
  usePageMeta(
    "",
    "Tinon Turja Majumder: textile engineer and data scientist working on physics-informed machine learning and plant data for industrial dyeing processes. Lead Research Assistant, SMART DYEING, Bangladesh University of Textiles.",
    "/",
  );
  return (
    <>
      {/* ---------- hero ---------- */}
      <section aria-label="Introduction">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>{profile.position}</Eyebrow>
            <h1 className="mt-3 font-serif text-[2.4rem] font-semibold leading-[1.1] tracking-tight sm:text-[2.9rem]">{ME}</h1>
          </div>
          <img
            src={profileImage}
            alt={`Portrait of ${ME}`}
            width={128}
            height={128}
            className="h-24 w-24 shrink-0 rounded-full border border-border object-cover grayscale-[15%] sm:h-28 sm:w-28"
          />
        </div>

        <p className="mt-8 border-l-2 border-accent pl-5 font-serif text-[1.3rem] leading-snug text-foreground sm:text-[1.4rem]">
          My research asks {researchQuestion.charAt(0).toLowerCase() + researchQuestion.slice(1)}
        </p>

        <div className="mt-7 space-y-4 text-[1.02rem] leading-relaxed text-foreground/85">
          {shortBio.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={profile.cv}
            className="rounded-md border border-accent/60 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          >
            CV (PDF)
          </a>
          <Link to="/research" className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-muted-foreground/60">
            Research overview
          </Link>
          <a href={`mailto:${profile.email}`} className="px-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            {profile.email}
          </a>
        </div>
      </section>

      {/* ---------- research snapshot ---------- */}
      <Section title="Research snapshot" id="snapshot" className="mt-20">
        <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {researchAreas.map((a, i) => (
            <li key={a.id} className="bg-card p-5">
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-[1.05rem] font-semibold leading-snug">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.oneLine}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90">{a.methods.slice(0, 2).join(" · ")}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <More to="/research">How each area works: problem, approach, evidence</More>
        </div>
      </Section>

      {/* ---------- selected research ---------- */}
      <Section title="Selected research" id="selected">
        <ul className="space-y-4">
          {featured.map((slug) => {
            const p = projects.find((x) => x.slug === slug)!;
            return (
              <li key={slug}>
                <Link
                  to={`/projects/${slug}`}
                  className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Eyebrow>{p.meta}</Eyebrow>
                    <Status>{p.status}</Status>
                  </div>
                  <h3 className="mt-2 font-serif text-[1.15rem] font-semibold leading-snug text-foreground group-hover:text-accent">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                  <p className="mt-3 text-sm text-foreground/85">
                    <span className="text-muted-foreground">Result: </span>
                    {p.result}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <More to="/projects">All projects</More>
        </div>
      </Section>

      {/* ---------- selected publications ---------- */}
      <Section title="Selected publications" id="pubs">
        <p className="-mt-2 mb-5 text-sm text-muted-foreground">Preprints; neither has been peer-reviewed yet. * corresponding author</p>
        <ol className="space-y-6">
          {publications.map((p) => (
            <li key={p.doi}>
              <p className="font-serif text-[1.02rem] font-semibold leading-snug">
                <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {p.title}
                </a>
              </p>
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
              </p>
              <p className="mt-1 text-sm">
                <span className="text-muted-foreground">{p.source}, {p.year}. </span>
                <span className="text-foreground/90">{p.status}.</span>
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-5">
          <More to="/publications">Publications and manuscripts in preparation</More>
        </div>
      </Section>

      {/* ---------- current direction ---------- */}
      <Section title="Current direction" id="direction">
        <div className="space-y-4 leading-relaxed text-foreground/85">
          <p>
            On SMART DYEING, the cleaned plant data and the first water-use baselines are in place; closed-loop control has not been
            implemented yet and is the next phase of the project. On the modelling side, a preregistered simulation has shown where
            rate-law-constrained networks stop helping at small sample sizes. In computer vision, a preregistered pilot on knitted-fabric
            video stopped at validation under its own stop rule, and its failure mode is documented for a follow-up.
          </p>
        </div>
      </Section>

      {/* ---------- PhD fit ---------- */}
      <Section title="Directions for a PhD" id="phd">
        <p className="mb-4 leading-relaxed text-foreground/85">
          I am preparing to apply for PhD programs. These are the directions I want to pursue; they are interests, not results.
        </p>
        <Bullets items={interests} />
        <div className="mt-5">
          <More to="/interests">How these relate to my work so far</More>
        </div>
      </Section>

      {/* ---------- news ---------- */}
      <Section title="Recent" id="news">
        <ul className="space-y-3">
          {news.map((n, i) => (
            <li key={n.date + i} className="grid grid-cols-[5.5rem_1fr] gap-4 text-[0.95rem]">
              <span className="pt-px text-sm tabular-nums text-muted-foreground">{n.date}</span>
              <span className="text-foreground/85">{n.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="mt-16 rounded-lg border border-border bg-card p-5">
        <p className="text-sm text-muted-foreground">Contact</p>
        <div className="mt-2">
          <LinkRow links={profile.links} />
        </div>
      </div>
    </>
  );
};

export default Home;
