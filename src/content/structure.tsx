/**
 * Page structure for the site (rewritten Oct 2026 after the content audit).
 * Every factual statement here is carried over from content/site.tsx or the CV.
 * Rule: one claim, one place. Status is stated once per page, in a short label.
 */
import type { ReactNode } from "react";
import { inPreparation } from "./site";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link">
    {children}
  </a>
);

/* ---------- identity (Level 1) ---------- */

export const oneLine =
  "I build machine-learning models that are constrained by the chemistry and physics of a process, using laboratory and industrial plant data.";

export const bio =
  "I am Lead Research Assistant on SMART DYEING at Bangladesh University of Textiles, where I lead the data and modelling work for a project on closed-loop control to cut chemical, water and energy use in industrial knit dyeing. I trained as a textile engineer in dyes and chemicals and then completed an M.Sc. in computer science with a data-science concentration. I am preparing to apply for PhD programs.";

export const researchQuestion =
  "How can process knowledge and machine learning be combined so that models of industrial processes are accurate with limited data and useful for control?";

/* ---------- projects ---------- */

export type FigureKey = "funnel" | "pinn" | "wcf" | "tsfabrics" | "gates" | "catkin";

export type Project = {
  slug: string;
  title: string;
  short: string; // card title on Home / Research
  meta: string;
  status: string; // 1–3 words
  /** Level 2: one line each */
  summary: { problem: string; method: string; role: string; result: string; significance: string };
  /** Level 3: details, shown on the case-study page only */
  details: { label: string; body: ReactNode }[];
  limitations?: ReactNode;
  figures: FigureKey[];
  thumb: FigureKey;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "smart-dyeing",
    title: "SMART DYEING: plant data for resource reduction in knit dyeing",
    short: "Plant data for resource reduction in industrial dyeing",
    meta: "2025 – present · industrial project",
    status: "Ongoing",
    summary: {
      problem: "Industrial reactive dyeing of knit fabric uses large amounts of chemicals, water and energy.",
      method: "Extraction and cleaning of the plant's controller, telemetry and recipe records; baseline models of water use per kilogram.",
      role: "Wrote and defended the funded proposal; lead the data and modelling work.",
      result: "98,012 controller batch records cleaned; water-use baselines on 11,010 batches with cross-validated R² 0.45 (linear) and 0.54 (random forest).",
      significance: "Much of the variation in water use is not yet explained — the starting point for the process models the project needs before any controller is built.",
    },
    details: [
      {
        label: "Setting",
        body: "Funded by the Asian Development Bank through BIRDI under SICIP (BDT 2.18 crore, about US$177,000). PI: Prof. Dr. Mohammad Forhad Hossain. Fieldwork at the DBL Group fabric division.",
      },
      {
        label: "What I built",
        body: (
          <ul className="list-dash">
            <li>Extracted the dyeing-controller database: 98,012 batch records and 97,655 decoded machine telemetry logs.</li>
            <li>Built a verified recipe corpus of 47,403 batches (2021–2026, 137,096 chemical line items) from 459,267 raw ERP records, after removing duplicates and incomplete records.</li>
            <li>Installed water flow metering on production dyeing machines.</li>
          </ul>
        ),
      },
      { label: "Next", body: "Closed-loop control has not been implemented yet; it is the next phase of the project." },
    ],
    figures: ["funnel"],
    thumb: "funnel",
    links: [{ label: "related review (preprint)", href: "https://doi.org/10.26434/chemrxiv.15009673/v2" }],
  },
  {
    slug: "adsorption-pinn",
    title: "Physics-informed identification of adsorption kinetics",
    short: "Physics-informed identification of adsorption kinetics",
    meta: "2024 – 2026 · laboratory study",
    status: "Preprint",
    summary: {
      problem: "Estimate the kinetic parameters of reactive-dye adsorption on a waste-cotton biofilm from a small batch dataset.",
      method: "Inverse physics-informed neural network (PyTorch) penalising the residual of the pseudo-second-order rate law; compared with five models by leave-one-out validation.",
      role: "Built the network, the model comparison and the code; corresponding author. Molecular dynamics and DFT were done by co-authors.",
      result: "Best generalisation of the six models compared: leave-one-out R² 0.989, MAE 0.021 mg/g.",
      significance: "Rate constants are recovered as physical parameters rather than fitted curve coefficients — but only under the data limits listed below.",
    },
    details: [
      {
        label: "Method",
        body: (
          <>
            The network fits the measured uptake while the residual of <span className="whitespace-nowrap italic">dq/dt = k₂(qₑ − q)²</span> is
            penalised, so k₂ and qₑ are learned as physical parameters. The Freundlich isotherm was coupled with the kinetics through a mass
            balance in a four-parameter model, which reproduced data at two dosages differing by a factor of 2.4 (R² 0.962 and 0.992).
          </>
        ),
      },
      {
        label: "Output",
        body: (
          <>
            ChemRxiv preprint; code archived on Zenodo (<A href="https://doi.org/10.5281/zenodo.21952872">10.5281/zenodo.21952872</A>).
          </>
        ),
      },
    ],
    limitations: (
      <>
        Single-shot measurements without replicates, one dye, one temperature and no uncertainty quantification. A preregistered simulation
        in a companion study found that, with eight kinetic points, a similar rate-law-constrained network predicted worse than a classical
        law chosen by AICc (<a href="/projects/kinetic-identifiability" className="link">see that study</a>).
      </>
    ),
    figures: ["pinn", "wcf"],
    thumb: "wcf",
    links: [
      { label: "preprint", href: "https://doi.org/10.26434/chemrxiv.15008049/v1" },
      { label: "code", href: "https://github.com/Tinonturja/WCF_Biofilm_Adsorption" },
      { label: "software DOI", href: "https://doi.org/10.5281/zenodo.21952872" },
    ],
  },
  {
    slug: "kinetic-identifiability",
    title: "Which kinetic law can eight measurements identify? A preregistered simulation",
    short: "Which kinetic law can eight measurements identify?",
    meta: "2026 · modelling archive for a manuscript in preparation",
    status: "In preparation",
    summary: {
      problem: "With eight single measurements, which kinetic law can be identified, and do learned models help?",
      method: "Eleven kinetic laws compared by leave-one-out error and Akaike weights; a simulation of the sampling design, with the protocol written before any result was computed.",
      role: "Kinetic and isotherm modelling for a materials manuscript in preparation; the modelling archive and simulation.",
      result: "Physics-informed networks predicted worse than the AICc-selected classical law in all nine conditions (1.2 to 6.5 times its error) and recovered the rate constants in none of 30 replicates.",
      significance: "A tested limit for my own earlier method: at this data size, classical model selection should be preferred.",
    },
    details: [
      { label: "Manuscript", body: inPreparation.title },
      {
        label: "Findings",
        body: (
          <ul className="list-dash">
            {inPreparation.findings.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        ),
      },
      { label: "Scale", body: inPreparation.scale },
      { label: "Note", body: inPreparation.note.replace("the simulation below shows", "the simulation on this page shows") },
    ],
    figures: ["catkin"],
    thumb: "catkin",
    links: inPreparation.links,
  },
  {
    slug: "tsfabrics-pilot",
    title: "Motion-aligned anomaly detection on knitted-fabric video: a preregistered pilot",
    short: "Anomaly detection on moving knitted fabric (pilot)",
    meta: "2026 · independent project · computer vision",
    status: "Stopped at validation",
    summary: {
      problem: "Defect detectors trained on normal images assume a still surface; on a knitting machine the fabric moves between frames.",
      method: "PatchCore-style detector with frame-to-frame motion from phase correlation; averaging anomaly maps after aligning frames, tested under a frozen protocol with stop rules.",
      role: "Independent project.",
      result: "Stage 1 passed (144 of 144 tests). Stage 2 stopped: a motion-direction check held on 112 of 200 frame pairs, with 190 required. The test set was never scored.",
      significance: "A documented failure mode: when the pattern repeats about once per frame of motion, a shift and its reverse look alike. Any follow-up must check this first.",
    },
    details: [
      {
        label: "Data",
        body: (
          <>
            TSFabrics, a public video dataset of knitted fabric (Ni et al., 2026, <A href="https://doi.org/10.1038/s41597-026-06748-9">Scientific Data</A>):
            93,196 frames in 22 scenarios, split by fabric group so that no fabric appears in both training and test.
          </>
        ),
      },
      {
        label: "Design",
        body: "The protocol and every constant were frozen and hashed before any code ran. Test scenarios sat behind an access gate, and the work ran in three sealed stages on Kaggle. Aligned averaging was to be compared with single-frame scores, score smoothing, unaligned averaging and two controls that break only the frame correspondence.",
      },
      {
        label: "Why it stopped",
        body: "The validation fabric's pattern repeats about every 85 px while it moves about 86 px per frame. The protocol forbade changing the check after the fact.",
      },
    ],
    limitations: "There is no test result: the pilot neither supports nor refutes motion alignment. Any follow-up is a new study with its own preregistration.",
    figures: ["tsfabrics", "gates"],
    thumb: "tsfabrics",
    links: [
      { label: "code and records", href: "https://github.com/Tinonturja/tsfabrics_alignment_pilot" },
      { label: "technical note", href: "https://github.com/Tinonturja/tsfabrics_alignment_pilot/blob/main/docs/TECHNICAL_NOTE.md" },
      { label: "decision log", href: "https://github.com/Tinonturja/tsfabrics_alignment_pilot/blob/main/docs/decisions/DECISION_LOG.md" },
    ],
  },
];

/* ---------- research themes (Research page) ---------- */

export const themes = [
  {
    id: "plant-data",
    title: "Industrial process data for resource reduction",
    text: "On SMART DYEING I built the plant's data foundation and the first baselines of resource use. In a review, my co-authors and I argue that machine learning in dyeing has to move from offline prediction to learned closed-loop control.",
    evidence: ["98,012 controller batch records; 97,655 decoded telemetry logs", "Water-use baselines on 11,010 batches: cross-validated R² 0.45 / 0.54"],
    figure: "funnel" as FigureKey,
    projects: ["smart-dyeing"],
  },
  {
    id: "physics-informed",
    title: "Physics-constrained learning from small datasets",
    text: "I used physics-informed neural networks to recover adsorption rate constants from small batch datasets, then tested with a preregistered simulation when such networks beat classical model selection — and found that at eight points they do not.",
    evidence: ["Inverse PINN: leave-one-out R² 0.989 (six models compared)", "Simulation: PINNs 1.2–6.5× the error of the AICc-selected law"],
    figure: "wcf" as FigureKey,
    projects: ["adsorption-pinn", "kinetic-identifiability"],
  },
  {
    id: "vision",
    title: "Computer vision for moving textile surfaces",
    text: "A first, preregistered step into vision for the same kind of physical process: does aligning video frames to the measured fabric motion improve anomaly detection? The pilot stopped at validation under its own rule.",
    evidence: ["Stage 1 passed: 144 of 144 tests", "Stage 2 stopped: direction check 112 of 200 (190 required)"],
    figure: "tsfabrics" as FigureKey,
    projects: ["tsfabrics-pilot"],
  },
];

/* ---------- About page ---------- */

export const roles = [
  { when: "Mar 2026 – present", what: "Lead Research Assistant, SMART DYEING", where: "Bangladesh University of Textiles", line: "Plant data pipeline, instrumentation and baseline models; also wrote and defended the funded proposal (Sep 2025 – Feb 2026)." },
  { when: "Jan 2024 – Dec 2025", what: "Research Assistant, Dyes and Chemicals Engineering Laboratory", where: "Bangladesh University of Textiles", line: "Machine-learning and physics-informed modelling for two dye-adsorption manuscripts." },
  { when: "Mar – May 2023", what: "Industrial intern", where: "Fakir Knitwears Ltd.", line: "Dyeing operations and quality control; the experience that led to SMART DYEING." },
  { when: "Mar 2018 – Jun 2024", what: "Instructor, Mathematics and Analytical Reasoning (part-time)", where: "Udvash", line: "Taught university-admission candidates alongside study." },
];
