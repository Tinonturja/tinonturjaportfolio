const Stat = ({ value, label, note }: { value: string; label: string; note?: string }) => (
  <div className="rounded-md border border-border bg-background px-4 py-3">
    <p className="font-serif text-[1.9rem] font-semibold leading-none text-accent">{value}</p>
    <p className="mt-2 text-sm leading-snug text-foreground">{label}</p>
    {note && <p className="mt-1 text-xs leading-snug text-muted-foreground">{note}</p>}
  </div>
);

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent underline decoration-accent/30 underline-offset-[3px] transition-colors hover:decoration-accent"
  >
    {children}
  </a>
);

const AnomalyFeature = () => (
  <section
    id="anomaly-study"
    aria-labelledby="anomaly-study-h"
    className="mt-10 scroll-mt-28 overflow-hidden rounded-lg border border-border bg-card md:scroll-mt-20"
  >
    <div className="h-1.5 w-full bg-accent" aria-hidden="true" />
    <div className="px-5 py-7 sm:px-8 sm:py-9">
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
        <span>Featured study</span>
        <span aria-hidden="true" className="text-muted-foreground/60">/</span>
        <span className="normal-case tracking-normal text-muted-foreground">
          Pre-registered, with code, protocols and results public
        </span>
      </p>
      <h2 id="anomaly-study-h" className="mt-3 font-serif text-[1.65rem] font-semibold leading-snug tracking-tight text-foreground">
        Hidden evaluation choices in high-resolution anomaly localization
      </h2>
      <p className="mt-1 font-serif text-[1.05rem] italic leading-snug text-muted-foreground">
        Crop coverage, tiling and memory banks
      </p>
      <p className="mt-4 text-[1.0rem]">
        Anomaly-localization benchmarks make quiet choices: how images are cropped, whether a high-resolution frame is
        scored whole or in tiles, and what the detector's memory bank is fitted on. I measured what each choice does to
        the scores across four datasets, with every protocol written and fingerprinted before its results existed.
      </p>

      <figure className="mt-6">
        <img
          src="/figures/anomaly-graphical-abstract.webp"
          alt="Three panels. Crop coverage: 7.39 percent of marked defect pixels lie outside every released RAW-FABRID crop. Inference layout: tiled minus native pixel AP is -0.028 for WRN-50 and +0.207 for DINOv2. Memory bank: a bank built from whole frames raises native-frame pixel AP by 0.13 on RAW-FABRID and 0.22 on VisA."
          width={1800}
          height={803}
          loading="lazy"
          className="w-full rounded-md border border-border bg-white"
        />
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
          The three choices and what each did. The memory-bank panel is exploratory (paired banks, three seeds).
        </figcaption>
      </figure>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat value="7.39%" label="Of marked defect pixels sit outside every released RAW-FABRID crop" note="Restoring them raised pixel AP by 0.022 to 0.032, on every held-out roll" />
        <Stat value="+0.2 AP" label="Tiling gained a DINOv2 detector, and it overtook the primary detector" note="On RAW-FABRID, under the Protocol 5 banks" />
        <Stat value="+0.131 / +0.223" label="Pixel AP from fitting the bank on whole frames" note="RAW-FABRID (7 of 7 rolls) and VisA (10 of 12 categories)" />
      </div>

      <div className="mt-8 grid gap-x-8 gap-y-5 text-[0.95rem] sm:grid-cols-2">
        <div>
          <h3 className="font-serif text-[1.05rem] font-semibold text-foreground">Tiled against native prediction</h3>
          <p className="mt-1.5">
            For the primary WRN-50 PatchCore-style detector, tiling lowered pixel AP on RAW-FABRID (−0.028), VisA
            (−0.027) and TSFabrics (−0.011), with intervals that exclude zero. AITEX showed no material difference. The
            pre-registered decision rule was met.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-[1.05rem] font-semibold text-foreground">Patch-level reporting</h3>
          <p className="mt-1.5">
            Under the widely reused AITEX blind-grid protocol, 53% of the patches labelled "defect" contain less than 1%
            defect, so patch labels overstate what a detector is asked to find.
          </p>
        </div>
      </div>

      <figure className="mt-8">
        <img
          src="/figures/anomaly-score-maps.webp"
          alt="Anomaly score heatmaps for a VisA cashew and a RAW-FABRID fabric roll, for a PatchCore-style and a DINOv2 detector, each with native full-frame and tiled prediction. Tiling leaves visible grid seams in the PatchCore-style maps and changes the DINOv2 score range."
          width={2000}
          height={548}
          loading="lazy"
          className="w-full rounded-md border border-border bg-white"
        />
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
          What the choice looks like in the score maps: the same image and detector, native against tiled. Tiling leaves
          grid seams in the PatchCore-style maps and rescales the DINOv2 scores. Images: VisA (CC BY-NC-SA 4.0) and
          RAW-FABRID v1 (CC BY 4.0, Pérez-Llorens, Albero-Albero and Silvestre-Blanes).
        </figcaption>
      </figure>

      <figure className="mt-8">
        <img
          src="/figures/anomaly-e2-bank-layout.webp"
          alt="Four panels of pixel AP for tiled and native inference, with the memory bank built from 256-pixel tiles or from full frames, for DINOv2 and WRN-50 on RAW-FABRID and VisA."
          width={1800}
          height={600}
          loading="lazy"
          className="w-full rounded-md border border-border bg-white"
        />
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
          The paired 2 × 2 bank experiment. The bank layout moves the DINOv2 detector far more than it moves WRN-50.
        </figcaption>
      </figure>

      <p className="mt-6 text-sm text-muted-foreground">
        Every number above is regenerated from the released code and per-image histograms; the follow-up designs were
        fingerprinted before their first score. The memory-bank experiments were designed after the Protocol 5 results and
        are labelled exploratory. Manuscript in preparation.
      </p>
      <p className="mt-3 text-sm">
        <Link href="https://github.com/Tinonturja/raw-fabrid-study">Code and protocols on GitHub</Link>
        <span aria-hidden="true" className="mx-2.5 text-muted-foreground/60">/</span>
        <Link href="https://doi.org/10.5281/zenodo.24459807">Archive on Zenodo, doi:10.5281/zenodo.24459807</Link>
      </p>
    </div>
  </section>
);

export default AnomalyFeature;
