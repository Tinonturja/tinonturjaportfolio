import type { FigureKey } from "@/content/structure";
import type { ReactNode } from "react";
import { inPreparation } from "@/content/site";

const Frame = ({ children, caption }: { children: ReactNode; caption: ReactNode }) => (
  <figure className="rounded-lg border border-border bg-card p-4 sm:p-6">
    {children}
    <figcaption className="mt-4 text-xs leading-relaxed text-muted-foreground">{caption}</figcaption>
  </figure>
);

/* ---------- SMART DYEING controller-data funnel (numbers from the controller database) ---------- */

const funnel = [
  { n: 98012, label: "batch records in the dyeing-controller database (Aug 2025 – Sep 2026)" },
  { n: 57133, label: "with chemicals dosed; the other 40,879 are mostly washes, strips and re-runs" },
  { n: 55989, label: "dosed batches that ran for at least 20 minutes" },
];

export const FunnelFigure = () => (
  <Frame
    caption={
      <>
        Cleaning the controller records before modelling. Separately, 97,655 machine telemetry logs were decoded, and 11,010 batches could
        be matched to production-report water data for the baseline water model.
      </>
    }
  >
    <ol className="space-y-4" aria-label="Controller data cleaning steps">
      {funnel.map((f) => (
        <li key={f.n}>
          <div className="flex items-baseline gap-3">
            <span className="w-16 shrink-0 text-right font-medium tabular-nums text-foreground">{f.n.toLocaleString("en-US")}</span>
            <span className="text-sm text-muted-foreground">{f.label}</span>
          </div>
          <div className="ml-[4.75rem] mt-1.5 h-1.5 rounded-full bg-muted" aria-hidden="true">
            <div className="h-1.5 rounded-full bg-accent/80" style={{ width: `${(f.n / funnel[0].n) * 100}%` }} />
          </div>
        </li>
      ))}
    </ol>
  </Frame>
);

/* ---------- inverse PINN schematic (simplified; matches the method described in the preprint) ---------- */

const Box = ({ children, accent = false }: { children: ReactNode; accent?: boolean }) => (
  <div className={`rounded-md border px-3 py-2.5 text-sm ${accent ? "border-accent/70" : "border-muted-foreground/35"}`}>{children}</div>
);

const Arrow = () => (
  <span aria-hidden="true" className="flex items-center justify-center text-muted-foreground">
    <span className="sm:hidden">↓</span>
    <span className="hidden sm:inline">→</span>
  </span>
);

export const PinnFigure = () => (
  <Frame
    caption="Simplified schematic of the inverse physics-informed neural network. The kinetic parameters are recovered by minimising the data loss and the residual of the rate law together."
  >
    <div
      role="img"
      aria-label="Schematic: time t enters a neural network that predicts the adsorbed amount q-hat of t. The loss adds a data term and the residual of the pseudo-second-order rate law; k2 and qe are trained with the network."
      className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[auto_auto_auto_auto_1fr]"
    >
      <Box>
        time <i>t</i>
      </Box>
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
          <span className="block italic sm:whitespace-nowrap">dq̂/dt − k₂ (qₑ − q̂)² → 0</span>
          <span className="block text-xs text-muted-foreground">k₂ and qₑ are trainable parameters</span>
        </Box>
      </div>
    </div>
  </Frame>
);

/* ---------- stage gates of the TSFabrics pilot (status from the repository's decision log) ---------- */

const gates: { name: string; line: string; state: string; kind: "done" | "pass" | "stop" | "never" }[] = [
  { name: "Freeze", line: "protocol and every constant hashed", state: "27 Sep", kind: "done" },
  { name: "Calibrate", line: "statistics tested on synthetic data", state: "done", kind: "done" },
  { name: "Stage 1", line: "code and reference tests, CPU", state: "passed, 144 of 144", kind: "pass" },
  { name: "Stage 2", line: "detector and validation, GPU", state: "stopped here", kind: "stop" },
  { name: "Stage 3", line: "one locked run on the test set", state: "never run", kind: "never" },
];

const gateStyle = {
  done: "border-muted-foreground/35",
  pass: "border-foreground/60",
  stop: "border-2 border-accent",
  never: "border-dashed border-muted-foreground/35 text-muted-foreground",
};

export const GateFigure = () => (
  <Frame caption="Each stage could stop the pilot, and a failure could not be repaired by changing the rule that judged it. The pilot stopped at Stage 2, so the test set was never scored.">
    <ol
      aria-label="Stages of the pilot: freeze, calibrate, Stage 1 passed, Stage 2 stopped the pilot, Stage 3 never run"
      className="grid grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-2.5"
    >
      {gates.map((g) => (
        <li key={g.name} className={`rounded-md border px-3 py-2.5 text-sm ${gateStyle[g.kind]}`}>
          <span className={`block font-medium ${g.kind === "never" ? "" : "text-foreground"}`}>{g.name}</span>
          <span className="block text-xs text-muted-foreground">{g.line}</span>
          <span className={`mt-1.5 block text-xs ${g.kind === "stop" ? "font-medium text-accent" : "text-muted-foreground"}`}>{g.state}</span>
        </li>
      ))}
    </ol>
  </Frame>
);

/* ---------- raster figures (all taken from the work itself; white backgrounds kept as published) ---------- */

const images = {
  wcf: {
    src: "/figures/wcf-train-vs-loo.webp",
    width: 1400,
    height: 992,
    full: undefined as string | undefined,
    alt: "Bar chart of training and leave-one-out R² for six models: Gaussian process regression, polynomial of degree 2 and 3, random forest, XGBoost and the physics-constrained network. The physics-constrained network has the highest leave-one-out R², about 0.99.",
    caption:
      "Training versus leave-one-out R² for the six models compared on the adsorption-kinetics data (figure from the ChemRxiv preprint). The physics-constrained network has the highest leave-one-out R² and the smallest gap between training and held-out performance.",
  },
  tsfabrics: {
    src: "/figures/tsfabrics-at06b.webp",
    width: 1400,
    height: 1140,
    full: undefined as string | undefined,
    alt: "Two panels. A strip of 200 frame pairs coloured by outcome shows long runs of both passes and failures. A scatter of the error after warping by the measured shift against the error after warping by its reverse, both relative to no warp, shows points close to the diagonal and mostly above 1 on both axes: 112 pairs hold, 88 fail, and no warp beats both in 158 pairs.",
    caption:
      "Why the pilot stopped. On 200 consecutive frame pairs, warping by the measured shift and by its reverse fit the next frame about equally badly, and usually worse than no warp at all, because the fabric's pattern repeats about once per frame of motion. Drawn from the committed Stage 2 record.",
  },
  catkinfits: {
    src: "/figures/catkin-classical-fits.webp",
    width: 1600,
    height: 1245,
    full: "https://github.com/Tinonturja/Catkin_Biofilm_Adsorption/blob/master/results/final_analysis/classical_fits.png" as string | undefined,
    alt: "Four panels. (a) Measured uptake over 170 minutes at 40 mg per litre with four fitted kinetic laws; the burst plus square-root-of-time curve follows the points, pseudo-first- and pseudo-second-order curves level off too early. (b) Fit and leave-one-out error for nine kinetic laws with Akaike weights; burst plus square-root-of-time has the lowest leave-one-out error and weight 0.77. (c) Uptake at 170 minutes against equilibrium concentration, close to a straight line, with Freundlich and linear fits. (d) Histogram of the Freundlich exponent when calibration uncertainty is propagated, spread from about 0.5 to 2.5 and centred near 1.2, overlapping n equals 1.",
    caption:
      "Measured kinetic and isotherm data with the classical fits. (a) Kinetics at 40 mg/L; (b) kinetic laws compared by fit and leave-one-out error; (c) uptake against concentration at 170 min; (d) the Freundlich exponent under calibration uncertainty. Figure from the archived code; select the image for full size.",
  },
  catkin: {
    src: inPreparation.figure.src,
    width: inPreparation.figure.width,
    height: inPreparation.figure.height,
    full: inPreparation.figure.full as string | undefined,
    alt: inPreparation.figure.alt,
    caption: `${inPreparation.figure.caption} Select the image for full size.`,
  },
};

export const ImageFigure = ({ k }: { k: keyof typeof images }) => {
  const f = images[k];
  const img = (
    <img src={f.src} width={f.width} height={f.height} loading="lazy" decoding="async" alt={f.alt} className="h-auto w-full" />
  );
  return (
    <Frame caption={f.caption}>
      <div className="overflow-hidden rounded bg-white p-1.5">
        {f.full ? (
          <a href={f.full} target="_blank" rel="noopener noreferrer" className="block">
            {img}
          </a>
        ) : (
          img
        )}
      </div>
    </Frame>
  );
};

/** Small preview of a project's main figure, used in lists. Decorative: the list text carries the meaning. */
export const Thumb = ({ k }: { k: FigureKey }) => {
  if (k === "funnel" || k === "pinn" || k === "gates") {
    return (
      <div aria-hidden="true" className="flex h-full w-full flex-col justify-center gap-2 rounded bg-card p-3">
        {funnel.map((f) => (
          <div key={f.n} className="h-1.5 rounded-full bg-accent/70" style={{ width: `${(f.n / funnel[0].n) * 100}%` }} />
        ))}
        <span className="mt-1 text-[0.6rem] tabular-nums text-muted-foreground">98,012 → 55,989</span>
      </div>
    );
  }
  const f = images[k];
  return (
    <div aria-hidden="true" className="h-full w-full overflow-hidden rounded bg-white">
      <img src={f.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
    </div>
  );
};

export const FigureByKey = ({ k }: { k: FigureKey }) => {
  if (k === "funnel") return <FunnelFigure />;
  if (k === "pinn") return <PinnFigure />;
  if (k === "gates") return <GateFigure />;
  return <ImageFigure k={k} />;
};
