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
    status: "Submitted to Process Safety and Environmental Protection",
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
    status: "Under review",
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
  note: "Materials study, manuscript in preparation. My role: kinetic and isotherm modelling.",
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
