/**
 * Single source of truth for everything the site says about Tinon.
 *
 * Rule for editing: every claim here must be traceable to a document
 * (CV, preprint, Crossref/Zenodo record, project file). If a claim cannot
 * be traced, it does not go on the site. Status lines for manuscripts must
 * be updated by hand when a journal decision arrives.
 */
import type { ReactNode } from "react";

export const ME = "Tinon Turja Majumder";
export const LAST_UPDATED = "October 2026";

export const profile = {
  name: ME,
  position: "Lead Research Assistant, SMART DYEING · Bangladesh University of Textiles",
  location: "Mymensingh, Bangladesh",
  email: "tinonturja@gmail.com",
  cv: "/CV.pdf",
  links: [
    { label: "Email", href: "mailto:tinonturja@gmail.com" },
    { label: "CV", href: "/CV.pdf" },
    { label: "ORCID", href: "https://orcid.org/0009-0000-0684-398X" },
    { label: "GitHub", href: "https://github.com/Tinonturja" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tinon-turja-majumder-07b058202/" },
  ],
};

export const news: { date: string; text: ReactNode }[] = [
  {
    date: "Oct 2026",
    text: (
      <>
        Finished a preregistered computer-vision pilot on knitted-fabric video. It stopped at validation under its own
        stop rule, with the test set unscored; the code, decision log and a{" "}
        <a
          href="https://github.com/Tinonturja/tsfabrics_alignment_pilot/blob/main/docs/TECHNICAL_NOTE.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent"
        >
          technical note
        </a>{" "}
        are public.
      </>
    ),
  },
  {
    date: "Sep 2026",
    text: (
      <>
        Review <i>From prediction to process control</i> posted on ChemRxiv and submitted to{" "}
        <i>Process Safety and Environmental Protection</i>.
      </>
    ),
  },
  {
    date: "Aug 2026",
    text: <>Preprint on physics-informed modelling of reactive-dye adsorption posted on ChemRxiv; the manuscript is under review.</>,
  },
  {
    date: "Mar 2026",
    text: <>Started as Lead Research Assistant on SMART DYEING, funded by the Asian Development Bank through BIRDI (SICIP) after four rounds of review.</>,
  },
  {
    date: "Aug 2025",
    text: <>Completed the M.Sc. in Computer Science and Engineering (Data Science) at United International University.</>,
  },
];

/** Stated research interests, taken from the CV. These are interests, not results. */
export const interests = [
  "Data-driven and hybrid (physics + machine learning) models of industrial processes, with uncertainty quantification, toward digital twins of batch manufacturing.",
  "Learning-based decision-making and closed-loop control of industrial processes under uncertainty, using large-scale plant and sensor data.",
  "Physics-informed and scientific machine learning for parameter identification in reaction–sorption systems.",
];

export type Author = { name: string; corresponding?: boolean };
export type Pub = {
  kind: "Review" | "Article" | "Manuscript";
  title: string;
  authors: Author[];
  source: string; // where it can be read now
  status: string; // exact current status
  year: string;
  doi?: string;
  summary: string;
  role: string;
  links: { label: string; href: string }[];
};

/** Titles, author order, year and DOI verified against Crossref (2026-10-03). Status lines are as reported by the author. */
export const publications: Pub[] = [
  {
    kind: "Review",
    title: "From prediction to process control: a critical review of machine learning in reactive dyeing of cotton",
    authors: [{ name: "Sk. Mainuddin" }, { name: ME, corresponding: true }, { name: "Md Shajjad Khan Faisal" }],
    source: "ChemRxiv preprint",
    status: "Under review at Chemical Engineering Journal Advances",
    year: "2026",
    doi: "10.26434/chemrxiv.15009673/v2",
    summary:
      "Reviews machine-learning work on reactive exhaust dyeing of cotton and argues that the field has to move from offline shade and recipe prediction toward learned closed-loop process control if it is to reduce chemical, water and energy use.",
    role: "Literature screening, coding of studies, synthesis; corresponding author.",
    links: [{ label: "preprint", href: "https://doi.org/10.26434/chemrxiv.15009673/v2" }],
  },
  {
    kind: "Article",
    title:
      "Interfacial Mechanisms of Reactive Dye Adsorption on a Waste-Cotton Derived PVA/TiO₂/Cellulose Biofilm: A Molecular Dynamics and Physics-Informed Predictive Framework",
    authors: [
      { name: "Md Shajjad Khan Faisal" },
      { name: ME, corresponding: true },
      { name: "Kazi Sirajul Islam", corresponding: true },
      { name: "Sk. Mainuddin" },
      { name: "Mohammad Forhad Hossain" },
      { name: "Niger Sultana" },
      { name: "Mahmudul Hasan" },
    ],
    source: "ChemRxiv preprint",
    status: "Under review at Chemical Engineering Journal Advances",
    year: "2026",
    doi: "10.26434/chemrxiv.15008049/v1",
    summary:
      "Combines adsorption experiments, molecular simulation and physics-informed machine learning to explain and predict reactive-dye uptake on a biofilm made from waste cotton.",
    role: "Inverse physics-informed neural network, model benchmarking and code. Molecular dynamics and DFT were carried out by co-authors.",
    links: [
      { label: "preprint", href: "https://doi.org/10.26434/chemrxiv.15008049/v1" },
      { label: "code", href: "https://github.com/Tinonturja/WCF_Biofilm_Adsorption" },
      { label: "software DOI", href: "https://doi.org/10.5281/zenodo.21952872" },
    ],
  },
];

export const inPreparation = {
  title: "Reactive-dye adsorption on a PVA/TiO₂ film containing cellulose from Saccharum spontaneum flower fibre (working description; title not final)",
  note: "Materials study, manuscript in preparation. My role: kinetic and isotherm modelling. The physics-informed network I first built for this study is left out of the manuscript because it did not fit these data well; the simulation below shows the same at this data size.",
  summary:
    "The modelling archive re-analyses the kinetic and isotherm data (eleven kinetic laws compared by leave-one-out error and Akaike weights, with calibration uncertainty carried into the isotherm exponent) and adds a preregistered simulation study of the sampling design: with eight single measurements, which kinetic law can be identified, and do learned models help?",
  findings: [
    "With the eight sampling times used and noise at the level of the real fits, the law that generated the simulated data was recovered in 4 % (two-site first-order) to 96 % (pseudo-first-order) of replicates. Placing points early in the run helped more than placing them late.",
    "In all nine conditions tested, a physics-informed neural network of the same family as my earlier work predicted worse than the classical law chosen by AICc, with 1.2 to 6.5 times its error, and recovered the rate constants in none of the 30 replicates at eight points.",
    "Small neural and Gaussian-process corrections on top of the classical law did not improve accuracy over the measured window; the neural one helped only late in the window for one generating law.",
  ],
  scale: "95,000 simulated replicates for the classical models and 270 for the learned models; protocol written before any result was computed.",
  links: [
    { label: "code and data", href: "https://github.com/Tinonturja/Catkin_Biofilm_Adsorption" },
    { label: "software DOI", href: "https://doi.org/10.5281/zenodo.23195584" },
    { label: "simulation protocol", href: "https://github.com/Tinonturja/Catkin_Biofilm_Adsorption/blob/master/results/design_density/PROTOCOL.md" },
  ],
  figure: {
    src: "/figures/catkin-learners-vs-classical.webp",
    width: 1600,
    height: 818,
    full: "https://github.com/Tinonturja/Catkin_Biofilm_Adsorption/blob/master/results/design_density/fig3_learners_vs_classical.png",
    alt: "Dot plot of the median relative change in prediction error of five learners against the classical law chosen by AICc, for three data-generating laws, three sampling densities, inside the measured window and extrapolated. Both physics-informed networks lie well to the left of zero, meaning larger error, in every panel; the neural and Gaussian-process residual corrections sit at about zero.",
    caption:
      "Learned models against the AICc-selected classical law on simulated kinetic data. Left of zero means a larger error than the classical law. Figure from the archived code.",
  },
};

export const experience = [
  {
    when: "Mar 2026 – present",
    what: "Lead Research Assistant, SMART DYEING",
    where: "Bangladesh University of Textiles · PI: Prof. Dr. Mohammad Forhad Hossain",
  },
  {
    when: "Sep 2025 – Feb 2026",
    what: "Proposal author, SMART DYEING",
    where: "Wrote and defended the funded proposal through four BIRDI review rounds",
  },
  {
    when: "Jan 2024 – Dec 2025",
    what: "Research Assistant, Dyes and Chemicals Engineering Laboratory",
    where: "Bangladesh University of Textiles",
  },
  { when: "Mar 2023 – May 2023", what: "Industrial intern", where: "Fakir Knitwears Ltd." },
  {
    when: "Mar 2018 – Jun 2024",
    what: "Instructor, Mathematics and Analytical Reasoning (part-time)",
    where: "Udvash",
  },
];

export const education = [
  {
    when: "2024 – 2025",
    what: "M.Sc. in Computer Science and Engineering, Data Science concentration",
    where: "United International University, Dhaka",
    detail: "Coursework included machine learning, deep learning, image processing, computational intelligence, data mining and research methodology.",
  },
  {
    when: "2018 – 2023",
    what: "B.Sc. in Textile Engineering, Dyes and Chemicals",
    where: "Bangladesh University of Textiles, Dhaka",
    detail:
      "Group thesis: natural dyes from blue pea and dragon fruit as photosensitizers in dye-sensitized solar cells (dye extraction, UV-Vis and FTIR characterisation, cell fabrication and testing).",
  },
];

/** Unpublished M.Sc. course reports. Authors exactly as printed on the linked PDF. */
export const courseReports: { title: string; authors: string; pdf: string | null }[] = [
  { title: "Efficient-FashionBERT: a scalable two-tower model for cross-modal fashion retrieval", authors: ME, pdf: "/papers/efficient-fashionbert.pdf" },
  { title: "Learned query optimization in modern database systems: a survey", authors: ME, pdf: "/papers/learned-query-optimization.pdf" },
  { title: "Fabric defect detection using histogram equalization and a convolutional neural network", authors: `${ME}, Md. Mahir Uddin`, pdf: null },
  { title: "Automated density-based splitting of merged clusters", authors: `Md. Mahir Uddin, ${ME}`, pdf: "/papers/Automated_Density_Based_Splitting_of_Merged_Clusters (1).pdf" },
  { title: "An intelligent irrigation decision support system using IoT and weather data", authors: `${ME}, Md. Mahir Uddin, Md. Mokit Hossain`, pdf: "/papers/IoT_project.pdf" },
  { title: "A smart parking system for Bangladesh: bilingual licence-plate detection with IoT and WSN", authors: `Md. Motaharul Islam, ${ME}`, pdf: "/papers/smart-parking-system.pdf" },
];

/* ======================================================================
 * Structure for the multi-page site (added Oct 2026).
 * All wording below is taken from the existing site text and the CV;
 * nothing here is new information about the work.
 * ====================================================================== */

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent"
  >
    {children}
  </a>
);

/** One-sentence research statement (from the Research section of the previous site). */
export const researchQuestion =
  "How process knowledge and machine learning can be combined so that models of industrial processes are accurate with limited data and useful for control.";

export const shortBio = [
  "I trained as a textile engineer in dyes and chemicals and then completed an M.Sc. in computer science with a data-science concentration. My work sits between the two: machine-learning models that are constrained by the chemistry and physics of a process, developed on laboratory and industrial plant data.",
  "I currently lead the data and modelling work on SMART DYEING, a project at Bangladesh University of Textiles, funded by the Asian Development Bank through BIRDI (SICIP), that aims at closed-loop control to reduce chemical, water and energy use in industrial knit dyeing. I am preparing to apply for PhD programs.",
];

export const researchOverview =
  "So far I have approached this question from two sides: identifying physical parameters with physics-informed neural networks on small laboratory datasets, and building the data foundation for learning-based resource reduction in a working dyeing plant. More recently I have started on computer vision for the same kind of physical process, with a preregistered pilot on defect detection in video of moving knitted fabric.";

export type ResearchArea = {
  id: string;
  title: string;
  oneLine: string;
  problem: ReactNode;
  approach: ReactNode;
  methods: string[];
  evidence: ReactNode[];
  contribution: ReactNode;
  status: ReactNode;
  projects: string[]; // project slugs
  pubs?: string[]; // DOIs
};

export const researchAreas: ResearchArea[] = [
  {
    id: "plant-data",
    title: "Industrial process data for resource reduction",
    oneLine: "Data foundation and baseline models for cutting chemical, water and energy use in industrial knit dyeing.",
    problem:
      "Industrial reactive dyeing of knit fabric uses large amounts of chemicals, water and energy. The project I work on aims at AI-driven closed-loop process control to reduce them.",
    approach:
      "Extract and clean the plant's controller, telemetry and recipe records; fit baseline models of resource use; and set out, in a critical review, why the field has to move from offline prediction to learned closed-loop control.",
    methods: ["Industrial data extraction and cleaning (Python, SQL)", "Regression baselines with cross-validation", "Systematic literature review"],
    evidence: [
      "98,012 controller batch records and 97,655 decoded machine telemetry logs extracted; 55,989 dosed batches retained after cleaning.",
      "Baseline water-use models on 11,010 batches: cross-validated R² 0.45 (linear) and 0.54 (random forest).",
      <>Review <i>From prediction to process control</i> (ChemRxiv preprint, corresponding author).</>,
    ],
    contribution:
      "A cleaned plant dataset and a first, honest baseline: much of the variation in water use is not yet explained, which is the starting point for better process models.",
    status: "Closed-loop control has not been implemented yet; it is the next phase of the project.",
    projects: ["smart-dyeing"],
    pubs: ["10.26434/chemrxiv.15009673/v2"],
  },
  {
    id: "physics-informed",
    title: "Physics-constrained learning from small datasets",
    oneLine: "Recovering kinetic parameters with physics-informed networks, and testing where such networks stop helping.",
    problem: "Estimate the kinetic parameters of reactive-dye adsorption from small, single-shot batch datasets.",
    approach:
      "Constrain a neural network with the pseudo-second-order rate law so that the kinetic constants are learned as physical parameters; then test, with a preregistered simulation, when such networks beat classical model selection at this data size and when they do not.",
    methods: [
      "Inverse physics-informed neural networks (PyTorch)",
      "Leave-one-out validation; Gaussian process regression",
      "Kinetic-law comparison by leave-one-out error and Akaike weights",
      "Preregistered simulation study",
    ],
    evidence: [
      "Inverse network generalised best of six models compared (leave-one-out R² 0.989, MAE 0.021 mg/g).",
      "In a second study, at eight kinetic points the same family of network predicted worse than the classical law chosen by AICc in all nine conditions tested (1.2 to 6.5 times its error).",
    ],
    contribution:
      "A working inverse-PINN pipeline with archived code, and a documented limit: with eight measurements, a rate-law-constrained network should not be expected to beat classical model selection.",
    status: "One preprint under review; a second manuscript in preparation, with its modelling archive public.",
    projects: ["adsorption-pinn", "kinetic-identifiability"],
    pubs: ["10.26434/chemrxiv.15008049/v1"],
  },
  {
    id: "vision",
    title: "Computer vision for moving textile surfaces",
    oneLine: "A preregistered pilot on anomaly detection in video of knitted fabric moving on the machine.",
    problem:
      "Defect detectors trained only on normal images assume a still surface under a still camera. On a knitting machine the fabric moves between frames.",
    approach:
      "Ask whether averaging anomaly maps at the same physical location, after aligning frames to the measured fabric motion, reduces false alarms and missed defects — with the protocol frozen before any code ran.",
    methods: ["PatchCore-style anomaly detection (pretrained WRN-50-2 features)", "Motion estimation by phase correlation", "Preregistration with staged stop rules"],
    evidence: [
      "Stage 1 passed (144 of 144 automated tests).",
      "Stage 2 stopped at validation: a motion-direction check held on 112 of 200 frame pairs, with 190 required.",
    ],
    contribution:
      "A documented failure mode: when the fabric's pattern repeats about once per frame of motion, a correct shift and its reverse look almost the same. A follow-up must check this before choosing scenarios.",
    status: "No test result; the pilot neither supports nor refutes motion alignment.",
    projects: ["tsfabrics-pilot"],
  },
];

export type Block = { label: string; body: ReactNode; muted?: boolean };
export type Project = {
  slug: string;
  title: string;
  meta: string;
  area: string;
  short: string;
  problem: string;
  method: string;
  result: string;
  status: string;
  tools: string[];
  blocks: Block[];
  figures: ("funnel" | "pinn" | "wcf" | "tsfabrics" | "gates" | "catkin")[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "smart-dyeing",
    title: "SMART DYEING: plant data for resource reduction in knit dyeing",
    meta: "2025 – present · industrial project",
    area: "Industrial process data",
    short: "Plant-scale data foundation and first baseline models for reducing chemical, water and energy use in industrial knit dyeing.",
    problem: "Industrial reactive dyeing of knit fabric uses large amounts of chemicals, water and energy.",
    method: "Controller, telemetry and recipe data extraction and cleaning; baseline models of water use per kilogram of fabric.",
    result: "Cross-validated R² 0.45 (linear) and 0.54 (random forest) on 11,010 batches.",
    status: "Ongoing. Closed-loop control not yet implemented.",
    tools: ["Python", "SQL", "scikit-learn"],
    blocks: [
      {
        label: "Problem",
        body: "Industrial reactive dyeing of knit fabric uses large amounts of chemicals, water and energy. The project aims at AI-driven closed-loop process control to reduce them.",
      },
      {
        label: "Setting",
        muted: true,
        body: "Funded by the Asian Development Bank through BIRDI under SICIP (BDT 2.18 crore, about US$177,000). PI: Prof. Dr. Mohammad Forhad Hossain. Fieldwork at the DBL Group fabric division. I wrote and defended the proposal and lead the data and modelling work.",
      },
      {
        label: "What I built",
        body: (
          <ul className="space-y-1.5">
            <li>Extracted the dyeing-controller database: 98,012 batch records and 97,655 decoded machine telemetry logs.</li>
            <li>Built a verified recipe corpus of 47,403 batches (2021–2026, 137,096 chemical line items) from 459,267 raw ERP records, after removing duplicates and incomplete records.</li>
            <li>Installed water flow metering on production dyeing machines.</li>
          </ul>
        ),
      },
      {
        label: "First result",
        body: "Baseline models of water use per kilogram of fabric, fitted on 11,010 batches: cross-validated R² of 0.45 for a linear model and 0.54 for a random forest. Much of the variation is not yet explained, which is the starting point for better process models.",
      },
      { label: "Status", muted: true, body: "Closed-loop control has not been implemented yet; it is the next phase of the project." },
    ],
    figures: ["funnel"],
    links: [{ label: "related review (preprint)", href: "https://doi.org/10.26434/chemrxiv.15009673/v2" }],
  },
  {
    slug: "adsorption-pinn",
    title: "Physics-informed identification of adsorption kinetics",
    meta: "2024 – 2026 · laboratory study",
    area: "Physics-constrained learning",
    short: "An inverse physics-informed neural network that recovers pseudo-second-order rate constants from a small batch-adsorption dataset.",
    problem: "Estimate kinetic parameters of reactive-dye adsorption on a waste-cotton biofilm from a small batch dataset.",
    method: "Inverse physics-informed neural network (PyTorch), compared with five other models by leave-one-out validation.",
    result: "Best generalisation of the models compared: leave-one-out R² 0.989, MAE 0.021 mg/g.",
    status: "Preprint under review.",
    tools: ["PyTorch", "scikit-learn", "XGBoost", "Gaussian process regression"],
    blocks: [
      { label: "Problem", body: "Estimate the kinetic parameters of reactive-dye adsorption on a biofilm made from waste cotton, from a small batch dataset." },
      {
        label: "Method",
        body: (
          <>
            An inverse physics-informed neural network in PyTorch. The network fits the measured uptake while the residual of the
            pseudo-second-order rate law, <span className="whitespace-nowrap italic">dq/dt = k₂(qₑ − q)²</span>, is penalised, so k₂ and
            qₑ are learned as physical parameters. I compared it with five other models using leave-one-out validation, and coupled the
            Freundlich isotherm with the kinetics through a mass balance in a four-parameter model.
          </>
        ),
      },
      {
        label: "Result",
        body: "The inverse network generalised best of the models compared (leave-one-out R² 0.989, MAE 0.021 mg/g). The coupled model reproduced data at two dosages that differ by a factor of 2.4 (R² 0.962 and 0.992).",
      },
      {
        label: "Limitations",
        muted: true,
        body: (
          <>
            Single-shot measurements without replicates, one dye, one temperature and no uncertainty quantification. In a companion study on
            a second biofilm, a joint kinetics–isotherm network fitted well in-sample but generalised poorly to held-out isotherm points, which
            is why I report leave-one-out results rather than training fit. A preregistered simulation in that companion study found that, with
            eight kinetic points, a similar rate-law-constrained network predicted worse than a classical law chosen by AICc (see{" "}
            <a href="/projects/kinetic-identifiability" className="text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent">
              the kinetic-law identifiability study
            </a>
            ).
          </>
        ),
      },
      {
        label: "Output",
        body: (
          <>
            Preprint under review; code archived on Zenodo (<A href="https://doi.org/10.5281/zenodo.21952872">10.5281/zenodo.21952872</A>).
          </>
        ),
      },
    ],
    figures: ["pinn", "wcf"],
    links: [
      { label: "preprint", href: "https://doi.org/10.26434/chemrxiv.15008049/v1" },
      { label: "code", href: "https://github.com/Tinonturja/WCF_Biofilm_Adsorption" },
      { label: "software DOI", href: "https://doi.org/10.5281/zenodo.21952872" },
    ],
  },
  {
    slug: "kinetic-identifiability",
    title: "Which kinetic law can eight measurements identify? A preregistered simulation",
    meta: "2026 · modelling archive for a manuscript in preparation",
    area: "Physics-constrained learning",
    short: "Re-analysis of a second biofilm's kinetic and isotherm data, and a simulation of whether classical or learned models can identify the kinetic law at this data size.",
    problem: "With eight single measurements, which kinetic law can be identified, and do learned models help?",
    method: "Eleven kinetic laws compared by leave-one-out error and Akaike weights; preregistered simulation of the sampling design.",
    result: "Physics-informed networks predicted worse than the AICc-selected classical law in all nine conditions (1.2 to 6.5 times its error).",
    status: "Manuscript in preparation; code, data and protocol public.",
    tools: ["Python", "AICc / Akaike weights", "Gaussian process regression", "Physics-informed neural networks"],
    blocks: [
      { label: "Manuscript", body: inPreparation.title },
      { label: "Note", muted: true, body: inPreparation.note.replace("the simulation below", "the simulation on this page") },
      { label: "What the archive does", body: inPreparation.summary },
      {
        label: "Findings",
        body: (
          <ul className="space-y-2">
            {inPreparation.findings.map((f) => (
              <li key={f} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent">
                {f}
              </li>
            ))}
          </ul>
        ),
      },
      { label: "Scale", muted: true, body: inPreparation.scale },
    ],
    figures: ["catkin"],
    links: inPreparation.links,
  },
  {
    slug: "tsfabrics-pilot",
    title: "Motion-aligned anomaly detection on knitted-fabric video: a preregistered pilot",
    meta: "2026 · independent project · computer vision",
    area: "Computer vision",
    short: "Does aligning frames to the measured fabric motion before averaging anomaly maps reduce false alarms and missed defects?",
    problem: "Defect detectors trained only on normal images assume a still surface under a still camera; on a knitting machine the fabric moves.",
    method: "PatchCore-style detector with frame-to-frame motion estimated by phase correlation; frozen, hashed protocol with staged stop rules.",
    result: "Stage 1 passed; stopped at Stage 2 when a motion-direction check held on 112 of 200 frame pairs (190 required).",
    status: "Stopped under its own rule; test set never scored.",
    tools: ["PatchCore-style detector (WRN-50-2)", "Phase correlation", "Kaggle GPU", "144 automated tests"],
    blocks: [
      {
        label: "Problem",
        body: "Defect detectors trained only on normal images assume a still surface under a still camera. On a knitting machine the fabric moves between frames. The pilot asked whether averaging anomaly maps at the same physical location, after aligning frames to the measured fabric motion, reduces false alarms and missed defects.",
      },
      {
        label: "Data",
        muted: true,
        body: (
          <>
            TSFabrics, a public video dataset of knitted fabric (Ni et al., 2026, <A href="https://doi.org/10.1038/s41597-026-06748-9">Scientific Data</A>):
            93,196 frames in 22 scenarios. Two folds, split by fabric group so that no fabric appears in both training and test.
          </>
        ),
      },
      {
        label: "Method",
        body: "A PatchCore-style detector (pretrained WRN-50-2 features, coreset memory bank) and frame-to-frame motion estimated by phase correlation. Aligned averaging was compared with single-frame scores, score smoothing and unaligned averaging, plus two controls that break only the correspondence between frames.",
      },
      {
        label: "Design",
        body: "The protocol and every constant were frozen and hashed before any code ran. Test scenarios sat behind an access gate that refused to read them, and the work ran in three sealed stages on Kaggle, with 144 automated tests checking the code against reference implementations. Every decision is in a dated log.",
      },
      {
        label: "Outcome",
        body: "Stage 1 passed. Stage 2 stopped at validation: a motion-direction check held on 112 of 200 frame pairs, with 190 required. The validation fabric's pattern repeats about every 85 px while it moves about 86 px per frame, so a correct shift and its reverse look almost the same. The protocol forbade changing the check after the fact, so the pilot ended there.",
      },
      {
        label: "Limitations",
        muted: true,
        body: "There is no test result: the pilot neither supports nor refutes motion alignment. The scenarios for the failed check were chosen without comparing the fabric's pattern period with its per-frame displacement, which a follow-up must do first. Any follow-up is a new study with its own preregistration.",
      },
    ],
    figures: ["tsfabrics", "gates"],
    links: [
      { label: "code and records", href: "https://github.com/Tinonturja/tsfabrics_alignment_pilot" },
      { label: "technical note", href: "https://github.com/Tinonturja/tsfabrics_alignment_pilot/blob/main/docs/TECHNICAL_NOTE.md" },
      { label: "decision log", href: "https://github.com/Tinonturja/tsfabrics_alignment_pilot/blob/main/docs/decisions/DECISION_LOG.md" },
    ],
  },
];

/** What each role involved. Taken from the CV (Oct 2026). */
export const experienceDetail: Record<string, string[]> = {
  "Lead Research Assistant, SMART DYEING": [
    "Built the project data pipeline: dyeing-controller database (98,012 batch records), 97,655 decoded machine telemetry logs and a recipe corpus from the plant's ERP records.",
    "On-site instrumentation at the DBL Group fabric division, including water flow metering on production dyeing machines.",
    "Methodology and predictive models for shade-category and recipe-level resource optimisation; baseline water-use models.",
    "Set up laboratory trial apparatus for controlled validation experiments.",
  ],
  "Proposal author, SMART DYEING": [
    "Authored and defended the project proposal through four consecutive competitive review rounds to funding approval (BDT 2.18 crore, about US$177,000).",
  ],
  "Research Assistant, Dyes and Chemicals Engineering Laboratory": [
    "Designed an inverse physics-informed neural network (PyTorch) constrained by pseudo-second-order kinetics to recover rate constants from batch adsorption data, and a mass-balance-coupled isotherm–kinetic surface model.",
    "Developed the machine-learning and physics-informed modelling for two biofilm dye-adsorption manuscripts, including Gaussian process regression and leave-one-out model benchmarking.",
  ],
  "Industrial intern": ["Observed industrial dyeing operations, quality control and large-scale production; this experience motivated the SMART DYEING project."],
  "Instructor, Mathematics and Analytical Reasoning (part-time)": [
    "Taught mathematics and analytical reasoning to university-admission candidates for six years, part-time alongside study.",
  ],
};

/** Grouping of the three stated interests (above) with the work that relates to each so far. */
export const interestGroups = [
  {
    domain: "Batch manufacturing processes",
    interest: interests[0],
    methods: ["Hybrid physics + machine-learning models", "Uncertainty quantification"],
    soFar: { text: "Baseline water-use models on SMART DYEING plant data. Uncertainty quantification is not yet part of my work.", href: "/projects/smart-dyeing" },
  },
  {
    domain: "Industrial process control",
    interest: interests[1],
    methods: ["Learning-based decision-making", "Closed-loop control", "Plant and sensor data"],
    soFar: { text: "The review From prediction to process control argues for this direction; the SMART DYEING controller has not been built yet.", href: "/publications" },
  },
  {
    domain: "Reaction–sorption systems",
    interest: interests[2],
    methods: ["Physics-informed neural networks", "Parameter identification", "Model selection at small sample sizes"],
    soFar: { text: "Inverse PINN for adsorption kinetics, and a simulation study of where such networks stop helping.", href: "/projects/adsorption-pinn" },
  },
];
