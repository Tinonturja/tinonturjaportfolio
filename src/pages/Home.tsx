import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";
import { ME, profile, publications, inPreparation, news } from "@/content/site";
import { oneLine, bio, projects } from "@/content/structure";
import { H2, LinkRow, Status, usePageMeta } from "@/components/site/bits";
import { Thumb } from "@/components/site/figures";

const Home = () => {
  usePageMeta(
    "",
    "Tinon Turja Majumder: machine-learning models constrained by process chemistry and physics, on laboratory and industrial plant data. Lead Research Assistant, SMART DYEING, Bangladesh University of Textiles.",
    "/",
  );
  const featured = projects.filter((p) => p.slug !== "kinetic-identifiability");
  return (
    <>
      {/* Level 1: who, what, where to look */}
      <section aria-label="Introduction" className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
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

      {/* Level 1–2: strongest evidence, one click from each case study */}
      <section aria-labelledby="work-h">
        <H2 id="work-h">Research</H2>
        <ul className="divide-y divide-border border-y border-border">
          {featured.map((p) => (
            <li key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="group grid grid-cols-[1fr] gap-4 py-5 sm:grid-cols-[7.5rem_1fr]">
                <div className="hidden h-[5.2rem] sm:block">
                  <Thumb k={p.thumb} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-medium text-foreground group-hover:text-accent">{p.short}</h3>
                    <Status>{p.status}</Status>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.summary.result}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm">
          <Link to="/research" className="link">
            All research, including a simulation study that tests the limits of my own method
          </Link>
        </p>
      </section>

      <section aria-labelledby="pubs-h">
        <H2 id="pubs-h">Preprints</H2>
        <ol className="space-y-4 text-[0.95rem]">
          {publications.map((p) => (
            <li key={p.doi}>
              <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent">
                {p.title}
              </a>
              <span className="block text-sm text-muted-foreground">
                {p.authors.map((a) => (a.name === ME ? `${a.name}${a.corresponding ? "*" : ""}` : a.name.split(" ").slice(-1)[0])).join(", ")} · ChemRxiv {p.year} · {p.status}
              </span>
            </li>
          ))}
          <li className="text-sm text-muted-foreground">
            In preparation: {inPreparation.title.replace(" (working description; title not final)", "")} (working title).
          </li>
        </ol>
        <p className="mt-3 text-xs text-muted-foreground">Not yet peer-reviewed. * corresponding author</p>
      </section>

      <section aria-labelledby="news-h">
        <H2 id="news-h">Recent</H2>
        <ul className="space-y-2.5 text-[0.95rem]">
          {news.slice(0, 4).map((n, i) => (
            <li key={n.date + i} className="grid grid-cols-[4.5rem_1fr] gap-3">
              <span className="pt-0.5 text-sm tabular-nums text-muted-foreground">{n.date}</span>
              <span className="text-foreground/85">{n.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
