import { useEffect, useState, type ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import {
  ME,
  LAST_UPDATED,
  profile,
  news,
  interests,
  publications,
  inPreparation,
  experience,
  education,
  courseReports,
} from "@/content/site";

/* ---------- small building blocks ---------- */

const ExtLink = ({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) => {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`text-accent underline decoration-accent/30 underline-offset-[3px] transition-colors hover:decoration-accent ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
};

const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28 pt-16 md:scroll-mt-20">
    <h2 id={`${id}-h`} className="font-serif text-[1.6rem] font-semibold tracking-tight text-foreground">
      {title}
    </h2>
    <div className="mt-6">{children}</div>
  </section>
);

const Label = ({ children }: { children: ReactNode }) => (
  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{children}</dt>
);

const Row = ({ when, what, where, detail }: { when: string; what: string; where: string; detail?: string }) => (
  <li className="grid grid-cols-1 gap-x-8 gap-y-1 border-t border-border py-4 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr]">
    <span className="text-sm tabular-nums text-muted-foreground">{when}</span>
    <div>
      <p className="text-foreground">{what}</p>
      <p className="text-sm text-muted-foreground">{where}</p>
      {detail && <p className="mt-1.5 text-sm text-muted-foreground">{detail}</p>}
    </div>
  </li>
);

/* ---------- figure: inverse PINN schematic (simplified; matches the method described in the preprint) ---------- */

const Box = ({ children, accent = false }: { children: ReactNode; accent?: boolean }) => (
  <div className={`rounded-md border px-3 py-2.5 text-sm ${accent ? "border-accent/70" : "border-muted-foreground/40"}`}>{children}</div>
);

const Arrow = () => (
  <span aria-hidden="true" className="flex items-center justify-center text-muted-foreground">
    <span className="sm:hidden">↓</span>
    <span className="hidden sm:inline">→</span>
  </span>
);

const PinnFigure = () => (
  <figure className="mt-8 rounded-md border border-border bg-card p-4 sm:p-6">
    <div
      role="img"
      aria-label="Schematic: time t enters a neural network that predicts the adsorbed amount q-hat of t. The loss adds a data term and the residual of the pseudo-second-order rate law; k2 and qe are trained with the network."
      className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[auto_auto_auto_auto_1fr]"
    >
      <Box>time <i>t</i></Box>
      <Arrow />
      <Box>
        neural network
        <span className="block italic text-muted-foreground">q̂(t)</span>
      </Box>
      <Arrow />
      <div className="grid gap-3">
        <Box>
          <span className="block text-foreground">Data loss</span>
          <span className="block text-xs text-muted-foreground">squared error between q̂ and measured q</span>
        </Box>
        <Box accent>
          <span className="block text-foreground">Physics loss: pseudo-second-order rate law</span>
          <span className="block whitespace-nowrap italic">dq̂/dt − k₂ (qₑ − q̂)² → 0</span>
          <span className="block text-xs text-muted-foreground">k₂ and qₑ are trainable parameters</span>
        </Box>
      </div>
    </div>
    <figcaption className="mt-4 text-xs leading-relaxed text-muted-foreground">
      Simplified schematic of the inverse physics-informed neural network. The kinetic parameters are recovered by
      minimising the data loss and the residual of the rate law together.
    </figcaption>
  </figure>
);

/* ---------- theme toggle (light by default; choice remembered in this browser) ---------- */

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => typeof document !== "undefined" && document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0e0e10" : "#ffffff");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still switches for this visit */
    }
  }, [dark]);
  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className="rounded p-1.5 text-muted-foreground transition-colors hover:text-foreground"
    >
      {dark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
};

/* ---------- page ---------- */

const navItems = [
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Academic = () => (
  <div className="min-h-screen bg-background text-foreground antialiased">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2"
    >
      Skip to content
    </a>

    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="font-serif text-[1.05rem] font-semibold text-foreground">
          {ME}
        </a>
        <ul className="ml-auto mr-5 hidden gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cv} className="text-accent transition-colors hover:text-foreground">
              CV
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <a href={profile.cv} className="text-sm text-accent md:hidden">
            CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
      <nav aria-label="Sections" className="border-t border-border md:hidden">
        <ul className="mx-auto flex max-w-3xl gap-5 overflow-x-auto px-5 py-2.5 text-sm text-muted-foreground">
          {navItems.map((n) => (
            <li key={n.href} className="shrink-0">
              <a href={n.href} className="hover:text-foreground">{n.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    <main id="main" className="mx-auto max-w-3xl px-5 pb-24 pt-14 leading-relaxed sm:px-6">
      {/* ---------- intro ---------- */}
      <section id="top" aria-label="Introduction" className="scroll-mt-20">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <h1 className="font-serif text-[2.4rem] font-semibold leading-tight tracking-tight sm:text-[2.75rem]">{ME}</h1>
            <p className="mt-2 text-[0.95rem] text-muted-foreground">{profile.position}</p>
          </div>
          <img
            src={profileImage}
            alt={`Portrait of ${ME}`}
            width={128}
            height={128}
            className="h-28 w-28 shrink-0 rounded-full border border-border object-cover sm:h-32 sm:w-32"
          />
        </div>

        <div className="mt-8 space-y-4 text-[1.05rem]">
          <p>
            I trained as a textile engineer in dyes and chemicals and then completed an M.Sc. in computer science with a
            data-science concentration. My work sits between the two: machine-learning models that are constrained by the
            chemistry and physics of a process, developed on laboratory and industrial plant data.
          </p>
          <p>
            I currently lead the data and modelling work on SMART DYEING, a BIRDI-funded project at Bangladesh University
            of Textiles that aims at closed-loop control to reduce chemical, water and energy use in industrial knit
            dyeing. I am preparing to apply for PhD programs.
          </p>
        </div>

        <p className="mt-6 text-sm">
          {profile.links.map((l, i) => (
            <span key={l.label}>
              {i > 0 && <span aria-hidden="true" className="mx-2.5 text-muted-foreground/60">/</span>}
              <ExtLink href={l.href}>{l.label}</ExtLink>
            </span>
          ))}
        </p>
      </section>

      {/* ---------- news ---------- */}
      <Section id="news" title="Recent">
        <ul className="space-y-3">
          {news.map((n) => (
            <li key={n.date} className="grid grid-cols-[5.5rem_1fr] gap-4 text-[0.95rem]">
              <span className="pt-px text-sm tabular-nums text-muted-foreground">{n.date}</span>
              <span>{n.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- research ---------- */}
      <Section id="research" title="Research">
        <p>
          The question behind my work is how process knowledge and machine learning can be combined so that models of
          industrial processes are accurate with limited data and useful for control. So far I have approached it from
          two sides: identifying physical parameters with physics-informed neural networks on small laboratory datasets,
          and building the data foundation for learning-based resource reduction in a working dyeing plant.
        </p>
        <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Directions I want to pursue in a PhD</h3>
        <ul className="mt-3 space-y-2.5">
          {interests.map((t) => (
            <li key={t} className="relative pl-5 text-[0.97rem] before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- publications ---------- */}
      <Section id="publications" title="Publications">
        <p className="-mt-2 mb-6 text-sm text-muted-foreground">
          Preprints. Neither has been peer-reviewed yet. * corresponding author
        </p>
        <ol className="space-y-9">
          {publications.map((p) => (
            <li key={p.doi}>
              <article>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {p.kind} · {p.year}
                </p>
                <h3 className="mt-1.5 font-serif text-[1.15rem] font-semibold leading-snug">
                  <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {p.title}
                  </a>
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
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
                  <span className="text-muted-foreground">{p.source}, DOI {p.doi}. </span>
                  <span className="text-foreground">{p.status}.</span>
                </p>
                <p className="mt-3 text-[0.95rem]">{p.summary}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground/90">My role:</span> {p.role}
                </p>
                <p className="mt-2 text-sm">
                  {p.links.map((l, i) => (
                    <span key={l.label}>
                      {i > 0 && <span aria-hidden="true" className="mx-2 text-muted-foreground/60">/</span>}
                      <ExtLink href={l.href}>{l.label}</ExtLink>
                    </span>
                  ))}
                </p>
              </article>
            </li>
          ))}
        </ol>
        <div className="mt-9 border-t border-border pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">In preparation</p>
          <p className="mt-1.5">{inPreparation.title}</p>
          <p className="text-sm text-muted-foreground">{inPreparation.note}</p>
        </div>
      </Section>

      {/* ---------- projects ---------- */}
      <Section id="projects" title="Research projects">
        <article aria-labelledby="p1">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">2025 – present · industrial project</p>
          <h3 id="p1" className="mt-1.5 font-serif text-[1.25rem] font-semibold">SMART DYEING: plant data for resource reduction in knit dyeing</h3>
          <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-[8rem_1fr]">
            <Label>Problem</Label>
            <dd>
              Industrial reactive dyeing of knit fabric uses large amounts of chemicals, water and energy. The project
              aims at AI-driven closed-loop process control to reduce them.
            </dd>
            <Label>Setting</Label>
            <dd className="text-muted-foreground">
              Funded by BIRDI (BDT 2.18 crore, about US$177,000). PI: Prof. Dr. Mohammad Forhad Hossain. Fieldwork at the
              DBL Group fabric division. I wrote and defended the proposal and lead the data and modelling work.
            </dd>
            <Label>What I built</Label>
            <dd>
              <ul className="space-y-1.5">
                <li>Extracted the dyeing-controller database: 98,012 batch records and 97,655 decoded machine telemetry logs.</li>
                <li>Built a verified recipe corpus of 47,403 batches (2021–2026, 137,096 chemical line items) from 459,267 raw ERP records, after removing duplicates and incomplete records.</li>
                <li>Installed water flow metering on production dyeing machines.</li>
              </ul>
            </dd>
            <Label>First result</Label>
            <dd>
              Baseline models of water use per kilogram of fabric, fitted on 11,010 batches: cross-validated R² of 0.45 for
              a linear model and 0.54 for a random forest. Much of the variation is not yet explained, which is the
              starting point for better process models.
            </dd>
            <Label>Status</Label>
            <dd className="text-muted-foreground">Closed-loop control has not been implemented yet; it is the next phase of the project.</dd>
          </dl>
        </article>

        <article aria-labelledby="p2" className="mt-14 border-t border-border pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">2024 – 2026 · laboratory study</p>
          <h3 id="p2" className="mt-1.5 font-serif text-[1.25rem] font-semibold">Physics-informed identification of adsorption kinetics</h3>
          <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-[8rem_1fr]">
            <Label>Problem</Label>
            <dd>
              Estimate the kinetic parameters of reactive-dye adsorption on a biofilm made from waste cotton, from a small
              batch dataset.
            </dd>
            <Label>Method</Label>
            <dd>
              An inverse physics-informed neural network in PyTorch. The network fits the measured uptake while the
              residual of the pseudo-second-order rate law, <span className="whitespace-nowrap italic">dq/dt = k₂(qₑ − q)²</span>,
              is penalised, so k₂ and qₑ are learned as physical parameters. I compared it with five other models using
              leave-one-out validation, and coupled the Freundlich isotherm with the kinetics through a mass balance in a
              four-parameter model.
            </dd>
            <Label>Result</Label>
            <dd>
              The inverse network generalised best of the models compared (leave-one-out R² 0.989, MAE 0.021 mg/g). The
              coupled model reproduced data at two dosages that differ by a factor of 2.4 (R² 0.962 and 0.992).
            </dd>
            <Label>Limitations</Label>
            <dd className="text-muted-foreground">
              Single-shot measurements without replicates, one dye, one temperature and no uncertainty quantification. In a
              companion study on a second biofilm, a joint kinetics–isotherm network fitted well in-sample but generalised
              poorly to held-out isotherm points, which is why I report leave-one-out results rather than training fit.
            </dd>
            <Label>Output</Label>
            <dd>
              Preprint under review; code archived on Zenodo (<ExtLink href="https://doi.org/10.5281/zenodo.21952872">10.5281/zenodo.21952872</ExtLink>).
            </dd>
          </dl>
          <PinnFigure />
          <figure className="mt-6 rounded-md border border-border bg-card p-4 sm:p-6">
            <div className="overflow-hidden rounded bg-white">
              <img
                src="/figures/wcf-train-vs-loo.webp"
                width={1400}
                height={992}
                loading="lazy"
                decoding="async"
                alt="Bar chart of training and leave-one-out R² for six models: Gaussian process regression, polynomial of degree 2 and 3, random forest, XGBoost and the physics-constrained network. The physics-constrained network has the highest leave-one-out R², about 0.99."
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Training versus leave-one-out R² for the six models compared on the adsorption-kinetics data (figure from
              the preprint analysis). The physics-constrained network has the highest leave-one-out R² and the smallest
              gap between training and held-out performance.
            </figcaption>
          </figure>
        </article>
      </Section>

      {/* ---------- experience ---------- */}
      <Section id="experience" title="Experience">
        <ul>{experience.map((e) => <Row key={e.what} {...e} />)}</ul>
      </Section>

      {/* ---------- education ---------- */}
      <Section id="education" title="Education">
        <ul>{education.map((e) => <Row key={e.what} {...e} />)}</ul>
      </Section>

      {/* ---------- coursework ---------- */}
      <Section id="coursework" title="M.Sc. course reports">
        <details className="group rounded-md border border-border bg-card/60 px-4 py-3">
          <summary className="cursor-pointer select-none text-sm text-muted-foreground marker:text-muted-foreground hover:text-foreground">
            Six unpublished reports written for M.Sc. courses at United International University
          </summary>
          <ul className="mt-4 space-y-3 text-sm">
            {courseReports.map((r) => (
              <li key={r.title}>
                {r.pdf ? <ExtLink href={r.pdf}>{r.title}</ExtLink> : <span>{r.title}</span>}
                <span className="block text-muted-foreground">{r.authors}</span>
              </li>
            ))}
          </ul>
        </details>
      </Section>

      {/* ---------- contact ---------- */}
      <Section id="contact" title="Contact">
        <p>
          The best way to reach me is by email at <ExtLink href={`mailto:${profile.email}`}>{profile.email}</ExtLink>. I am
          based in {profile.location}.
        </p>
      </Section>
    </main>

    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-1 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <span>© {new Date().getFullYear()} {ME}</span>
        <span>Last updated {LAST_UPDATED}</span>
      </div>
    </footer>
  </div>
);

export default Academic;
