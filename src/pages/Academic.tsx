import profileImage from "@/assets/profile.jpg";

const ME = "Tinon Turja Majumder";
const UPDATED = "October 2026";

const links = [
  { label: "Email", href: "mailto:tinonturja@gmail.com" },
  { label: "CV", href: "/CV.pdf" },
  { label: "ORCID", href: "https://orcid.org/0009-0000-0684-398X" },
  { label: "GitHub", href: "https://github.com/Tinonturja" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tinon-turja-majumder-07b058202/" },
];

const news = [
  { date: "Oct 2026", text: <>Review <i>From prediction to process control</i> submitted to <i>Process Safety and Environmental Protection</i>.</> },
  { date: "Sep 2026", text: <>Review posted as a preprint on ChemRxiv.</> },
  { date: "Aug 2026", text: <>Preprint on physics-informed modelling of reactive-dye adsorption posted on ChemRxiv; now under review.</> },
  { date: "Mar 2026", text: <>Started as Lead Research Assistant on SMART DYEING at BUTEX.</> },
  { date: "Feb 2026", text: <>SMART DYEING proposal funded by BIRDI (BDT 2.18 crore) after four review rounds.</> },
  { date: "Aug 2025", text: <>Completed M.Sc. in Computer Science and Engineering (Data Science), United International University.</> },
];

type Author = { name: string; corresponding?: boolean };
type Pub = {
  badge: string;
  title: string;
  url: string;
  authors: Author[];
  venue: string;
  note: string;
  links: { label: string; href: string }[];
};

const preprints: Pub[] = [
  {
    badge: "ChemRxiv",
    title: "From prediction to process control: a critical review of machine learning in reactive dyeing of cotton",
    url: "https://doi.org/10.26434/chemrxiv.15009673/v2",
    authors: [{ name: "Sk. Mainuddin" }, { name: ME, corresponding: true }, { name: "Md Shajjad Khan Faisal" }],
    venue: "Preprint, 2026 · submitted to Process Safety and Environmental Protection",
    note: "Reviews machine learning in reactive exhaust dyeing and argues that the field must move from offline shade and recipe prediction to learned closed-loop control in order to cut chemical, water and energy use.",
    links: [{ label: "preprint", href: "https://doi.org/10.26434/chemrxiv.15009673/v2" }],
  },
  {
    badge: "ChemRxiv",
    title: "Interfacial mechanisms of reactive dye adsorption on a waste-cotton derived PVA/TiO₂/cellulose biofilm: a molecular dynamics and physics-informed predictive framework",
    url: "https://doi.org/10.26434/chemrxiv.15008049/v1",
    authors: [
      { name: "Md Shajjad Khan Faisal" }, { name: ME, corresponding: true }, { name: "Kazi Sirajul Islam", corresponding: true },
      { name: "Sk. Mainuddin" }, { name: "Mohammad Forhad Hossain" }, { name: "Niger Sultana" }, { name: "Mahmudul Hasan" },
    ],
    venue: "Preprint, 2026 · under review",
    note: "My contribution: an inverse physics-informed neural network, constrained by the pseudo-second-order rate law, that recovers kinetic parameters from batch adsorption data (leave-one-out R² = 0.989).",
    links: [
      { label: "preprint", href: "https://doi.org/10.26434/chemrxiv.15008049/v1" },
      { label: "code", href: "https://github.com/Tinonturja/WCF_Biofilm_Adsorption" },
      { label: "Zenodo", href: "https://doi.org/10.5281/zenodo.21952872" },
    ],
  },
];

const experience = [
  { when: "Mar 2026 – present", what: "Lead Research Assistant, SMART DYEING", where: "Bangladesh University of Textiles (PI: Prof. Dr. Mohammad Forhad Hossain)" },
  { when: "Sep 2025 – Feb 2026", what: "Proposal author, SMART DYEING", where: "Wrote and defended the proposal through four BIRDI review rounds" },
  { when: "Jan 2024 – Dec 2025", what: "Research Assistant, Dyes and Chemicals Engineering Laboratory", where: "Bangladesh University of Textiles" },
  { when: "Mar 2023 – May 2023", what: "Industrial intern", where: "Fakir Knitwears Ltd." },
  { when: "Mar 2018 – Jun 2024", what: "Instructor, Mathematics and Analytical Reasoning (part-time)", where: "Udvash" },
];

const education = [
  { when: "2024 – 2025", what: "M.Sc. in Computer Science and Engineering (Data Science)", where: "United International University, Dhaka" },
  { when: "2018 – 2023", what: "B.Sc. in Textile Engineering (Dyes and Chemicals)", where: "Bangladesh University of Textiles, Dhaka" },
];

const courseReports = [
  { title: "Efficient-FashionBERT: a scalable two-tower model for cross-modal fashion retrieval", authors: ME, pdf: "/papers/efficient-fashionbert.pdf" },
  { title: "Learned query optimization in modern database systems: a survey", authors: ME, pdf: "/papers/learned-query-optimization.pdf" },
  { title: "Fabric defect detection using histogram equalization and a convolutional neural network", authors: `${ME}, Md. Mahir Uddin`, pdf: null },
  { title: "Automated density-based splitting of merged clusters", authors: `Md. Mahir Uddin, ${ME}`, pdf: "/papers/Automated_Density_Based_Splitting_of_Merged_Clusters (1).pdf" },
  { title: "An intelligent irrigation decision support system using IoT and weather data", authors: `${ME}, Md. Mahir Uddin, Md. Mokit Hossain`, pdf: "/papers/IoT_project.pdf" },
  { title: "A smart parking system for Bangladesh: bilingual licence-plate detection with IoT and WSN", authors: `Md. Motaharul Islam, ${ME}`, pdf: "/papers/smart-parking-system.pdf" },
];

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
     className="text-primary underline-offset-2 hover:underline">{children}</a>
);

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="font-serif text-2xl font-semibold text-foreground mt-14 mb-5 pb-2 border-b border-border scroll-mt-20">{children}</h2>
);

const Row = ({ when, what, where }: { when: string; what: string; where: string }) => (
  <div className="grid grid-cols-1 sm:grid-cols-[10.5rem_1fr] gap-x-6 gap-y-0.5 py-2">
    <div className="text-sm text-muted-foreground tabular-nums">{when}</div>
    <div><div className="text-foreground">{what}</div><div className="text-sm text-muted-foreground">{where}</div></div>
  </div>
);

const Academic = () => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border">
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-sm">
        <a href="#" className="font-serif font-semibold text-base">{ME}</a>
        <div className="hidden sm:flex gap-6 text-muted-foreground">
          <a href="#research" className="hover:text-foreground">Research</a>
          <a href="#publications" className="hover:text-foreground">Publications</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="/CV.pdf" className="hover:text-foreground">CV</a>
        </div>
      </nav>
    </header>

    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 leading-relaxed">
      {/* Intro */}
      <section className="flex flex-col-reverse sm:flex-row gap-8 items-start">
        <div className="flex-1">
          <h1 className="font-serif text-4xl font-semibold tracking-tight">{ME}</h1>
          <p className="mt-1 text-muted-foreground">Lead Research Assistant · Bangladesh University of Textiles</p>
          <p className="mt-5">
            I work on SMART DYEING, a BIRDI-funded project with DBL Group that aims at AI-driven closed-loop
            control to cut chemical, water and energy use in industrial knit dyeing. I trained as a textile
            engineer (B.Sc., Dyes and Chemicals, BUTEX) and hold an M.Sc. in Computer Science and Engineering
            (Data Science) from United International University. I am looking for PhD positions.
          </p>
          <p className="mt-4 text-sm">
            {links.map((l, i) => (
              <span key={l.label}>{i > 0 && <span className="text-muted-foreground mx-2">·</span>}<A href={l.href}>{l.label}</A></span>
            ))}
          </p>
        </div>
        <img src={profileImage} alt={ME} className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border border-border shrink-0" />
      </section>

      <H2 id="research">Research</H2>
      <p>
        My research combines process knowledge with machine learning. I am interested in hybrid physics–data
        models of industrial processes, and in using plant and sensor data to move from offline prediction
        toward closed-loop control. My current work uses inverse physics-informed neural networks to identify
        adsorption kinetics from sparse experiments, and plant-scale data from dyeing machines to model resource use.
      </p>

      <H2 id="news">News</H2>
      <ul className="space-y-2">
        {news.map((n) => (
          <li key={n.date + String(n.text)} className="grid grid-cols-[5.5rem_1fr] gap-4">
            <span className="text-sm text-muted-foreground tabular-nums pt-0.5">{n.date}</span><span>{n.text}</span>
          </li>
        ))}
      </ul>

      <H2 id="publications">Preprints</H2>
      <p className="text-sm text-muted-foreground -mt-2 mb-4">* corresponding author</p>
      <div className="space-y-7">
        {preprints.map((p) => (
          <article key={p.title} className="grid grid-cols-1 sm:grid-cols-[6rem_1fr] gap-x-5 gap-y-2">
            <div><span className="inline-block text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border">{p.badge}</span></div>
            <div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary">{p.title}</a>
              <div className="text-sm mt-1">
                {p.authors.map((a, i) => (
                  <span key={a.name}>{i > 0 && ", "}<span className={a.name === ME ? "font-semibold" : "text-muted-foreground"}>{a.name}{a.corresponding && "*"}</span></span>
                ))}
              </div>
              <div className="text-sm italic text-muted-foreground mt-0.5">{p.venue}</div>
              <p className="text-sm mt-2">{p.note}</p>
              <div className="text-sm mt-1.5">
                {p.links.map((l, i) => (<span key={l.label}>{i > 0 && <span className="text-muted-foreground"> / </span>}<A href={l.href}>{l.label}</A></span>))}
              </div>
            </div>
          </article>
        ))}
        <article className="grid grid-cols-1 sm:grid-cols-[6rem_1fr] gap-x-5 gap-y-2">
          <div><span className="inline-block text-xs font-medium px-2 py-1 rounded border border-dashed border-border text-muted-foreground">In prep.</span></div>
          <div>
            <span className="font-medium">Reactive dye adsorption on a <i>Saccharum spontaneum</i> flower-fibre cellulose PVA/TiO₂ biofilm</span>
            <div className="text-sm italic text-muted-foreground mt-0.5">Manuscript in preparation · my role: kinetic and isotherm modelling</div>
            <div className="text-sm mt-1.5"><A href="https://github.com/Tinonturja/Catkin_Biofilm_Adsorption">code</A></div>
          </div>
        </article>
      </div>

      <H2 id="projects">Research projects</H2>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium">SMART DYEING: data-driven resource optimisation in industrial knit dyeing <span className="text-sm font-normal text-muted-foreground">(2025 – present)</span></h3>
          <p className="text-sm mt-1.5">
            So far I have extracted the dyeing-controller database (98,012 batch records and 97,655 decoded machine
            telemetry logs), built a verified recipe corpus of 47,403 batches (2021–2026) from 459,267 raw ERP records,
            installed water flow metering on production machines, and fitted baseline models of water use per kg of
            fabric (cross-validated R² 0.45 linear, 0.54 random forest). Closed-loop control is the next phase.
          </p>
        </div>
        <div>
          <h3 className="font-medium">Natural-dye photosensitizers for dye-sensitized solar cells <span className="text-sm font-normal text-muted-foreground">(B.Sc. group thesis, 2023)</span></h3>
          <p className="text-sm mt-1.5">Extracted natural dyes from blue pea and dragon fruit, characterised them by UV-Vis and FTIR, and fabricated and tested dye-sensitized solar cells.</p>
        </div>
      </div>

      <H2 id="experience">Experience</H2>
      <div>{experience.map((e) => <Row key={e.what} {...e} />)}</div>

      <H2 id="education">Education</H2>
      <div>{education.map((e) => <Row key={e.what} {...e} />)}</div>

      <H2 id="coursework">M.Sc. course reports</H2>
      <details className="group">
        <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">Unpublished reports written for M.Sc. courses at United International University ({courseReports.length})</summary>
        <ul className="mt-3 space-y-2 text-sm">
          {courseReports.map((r) => (
            <li key={r.title}>
              {r.pdf ? <A href={r.pdf}>{r.title}</A> : <span>{r.title}</span>}
              <span className="text-muted-foreground"> — {r.authors}</span>
            </li>
          ))}
        </ul>
      </details>
    </main>

    <footer className="border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} {ME}</span><span>Last updated: {UPDATED}</span>
      </div>
    </footer>
  </div>
);

export default Academic;
