import { useState } from "react";

/* Numbers are from Table 4 of the manuscript (mean of three runs, one connection in Dhaka).
   Services are anonymised in the manuscript, so they are anonymised here too. */
const BASELINE = { down: 40.6, up: 36.18, lat: 4.75 };

type Row = {
  id: string;
  where: string;
  down: number;
  downLoss: number;
  up: number;
  upLoss: number;
  lat: number;
};

const rows: Row[] = [
  { id: "VPN-A", where: "Hong Kong", down: 12.06, downLoss: 70.3, up: 12.72, upLoss: 64.9, lat: 97.44 },
  { id: "VPN-B", where: "Singapore", down: 0.45, downLoss: 98.9, up: 30.78, upLoss: 14.9, lat: 53.87 },
  { id: "VPN-C", where: "Dhaka (via VPN)", down: 24.78, downLoss: 39.0, up: 27.54, upLoss: 23.9, lat: 23.33 },
  { id: "VPN-D", where: "Los Angeles", down: 22.57, downLoss: 44.4, up: 20.61, upLoss: 43.0, lat: 298.69 },
  { id: "VPN-E", where: "Singapore", down: 11.54, downLoss: 71.6, up: 9.99, upLoss: 72.4, lat: 57.67 },
];

/* Upload losses below this are inside the spread of the three baseline uploads (19.20, 43.93, 45.41 Mbps). */
const UPLOAD_NOISE = 40;

const W = 640;
const X0 = 118;
const X1 = 600;
const PITCH = 58;
const BAR = 14;
const TOP = 10;
const H = TOP + rows.length * PITCH + 30;
const x = (pct: number) => X0 + ((X1 - X0) * pct) / 100;

const Stat = ({ value, label, note }: { value: string; label: string; note?: string }) => (
  <div className="rounded-md border border-border bg-background px-4 py-3">
    <p className="font-serif text-[1.9rem] font-semibold leading-none text-accent">{value}</p>
    <p className="mt-2 text-sm leading-snug text-foreground">{label}</p>
    {note && <p className="mt-1 text-xs leading-snug text-muted-foreground">{note}</p>}
  </div>
);

const VpnFeature = () => {
  const [active, setActive] = useState<{ i: number; k: "down" | "up" } | null>(null);
  const [table, setTable] = useState(false);

  const readout = (() => {
    if (!active) return "Hover over or focus a bar for the exact figures.";
    const r = rows[active.i];
    if (active.k === "down")
      return `${r.id} download: ${r.down.toFixed(2)} Mbps against ${BASELINE.down.toFixed(2)} Mbps without a VPN, a loss of ${r.downLoss.toFixed(1)}%.`;
    const noisy = r.upLoss < UPLOAD_NOISE ? " This is within the variation of the baseline uploads, so it should not be read as a real loss." : "";
    return `${r.id} upload: ${r.up.toFixed(2)} Mbps against ${BASELINE.up.toFixed(2)} Mbps without a VPN, a loss of ${r.upLoss.toFixed(1)}%.${noisy}`;
  })();

  return (
    <section
      id="vpn-study"
      aria-labelledby="vpn-study-h"
      className="vpn-feature mt-16 scroll-mt-28 overflow-hidden rounded-lg border border-border bg-card md:scroll-mt-20"
    >
      <div className="h-1.5 w-full bg-accent" aria-hidden="true" />
      <div className="px-5 py-7 sm:px-8 sm:py-9">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
          <span>Featured study</span>
          <span aria-hidden="true" className="text-muted-foreground/60">/</span>
          <span className="normal-case tracking-normal text-muted-foreground">Under review at Security and Privacy (Wiley)</span>
        </p>
        <h2 id="vpn-study-h" className="mt-3 font-serif text-[1.65rem] font-semibold leading-snug tracking-tight text-foreground">
          What does a free VPN cost you?
        </h2>
        <p className="mt-1 font-serif text-[1.05rem] italic leading-snug text-muted-foreground">
          Unmasking Free VPNs: an empirical evaluation of performance, data-leak protection and privacy policies of five
          popular services
        </p>
        <p className="mt-4 text-[1.0rem]">
          We put five widely used free VPN services through the same tests in a clean virtual machine on one fibre
          connection in Dhaka: speed and latency against a no-VPN baseline, IP, DNS and WebRTC leak tests, whether the
          free tier includes a kill switch, and a close reading of each privacy policy. The leak protection held. The
          speed and the privacy wording are where the cost shows.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Stat value="39% to 99%" label="Download speed lost" note="Mean 64.8% across the five services" />
          <Stat value="0 of 5" label="Leaked IP, DNS or WebRTC address" note="On a stable connection" />
          <Stat value="1 of 3" label="Desktop apps with a kill switch in the free tier" note="The two browser-based services cover browser traffic only" />
        </div>

        <figure className="mt-8" aria-labelledby="vpn-fig-cap">
          <div className="flex items-end justify-between gap-4">
            <p className="text-sm font-medium text-foreground">Throughput lost compared with no VPN</p>
            <button
              type="button"
              onClick={() => setTable((t) => !t)}
              aria-pressed={table}
              className="text-sm text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent"
            >
              {table ? "Show chart" : "Show table"}
            </button>
          </div>

          {!table ? (
            <>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground" aria-label="Legend">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-4 rounded-sm" style={{ background: "var(--vpn-down)" }} />
                  Download
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-4 rounded-sm" style={{ background: "var(--vpn-up)" }} />
                  Upload
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-4 rounded-sm"
                    style={{ border: "1.5px solid var(--vpn-up)", background: "transparent" }}
                  />
                  Upload loss inside baseline variation
                </li>
              </ul>
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="mt-2 h-auto w-full"
                role="img"
                aria-label="Grouped bar chart of download and upload throughput lost by five free VPN services, as a percentage of the no-VPN baseline. Download losses range from 39.0 to 98.9 percent. The exact values are in the table view."
              >
                {[0, 25, 50, 75, 100].map((g) => (
                  <g key={g}>
                    <line x1={x(g)} x2={x(g)} y1={TOP} y2={H - 26} stroke="hsl(var(--border))" strokeWidth={1} />
                    <text x={x(g)} y={H - 8} textAnchor="middle" fontSize={11} fill="hsl(var(--muted-foreground))">
                      {g}%
                    </text>
                  </g>
                ))}
                {rows.map((r, i) => {
                  const y = TOP + i * PITCH + 8;
                  const noisy = r.upLoss < UPLOAD_NOISE;
                  const bars: { k: "down" | "up"; v: number; yy: number }[] = [
                    { k: "down", v: r.downLoss, yy: y },
                    { k: "up", v: r.upLoss, yy: y + BAR + 4 },
                  ];
                  return (
                    <g key={r.id}>
                      <text x={0} y={y + 12} fontSize={13} fontWeight={600} fill="hsl(var(--foreground))">
                        {r.id}
                      </text>
                      <text x={0} y={y + 28} fontSize={11} fill="hsl(var(--muted-foreground))">
                        {r.where}
                      </text>
                      {bars.map((b) => {
                        const isOn = active?.i === i && active.k === b.k;
                        const hollow = b.k === "up" && noisy;
                        const colour = b.k === "down" ? "var(--vpn-down)" : "var(--vpn-up)";
                        return (
                          <g key={b.k}>
                            {/* larger invisible hit target */}
                            <rect
                              x={X0}
                              y={b.yy - 2}
                              width={X1 - X0}
                              height={BAR + 4}
                              fill="transparent"
                              tabIndex={0}
                              role="img"
                              aria-label={`${r.id} ${b.k === "down" ? "download" : "upload"} loss ${b.v.toFixed(1)} percent`}
                              onMouseEnter={() => setActive({ i, k: b.k })}
                              onMouseLeave={() => setActive(null)}
                              onFocus={() => setActive({ i, k: b.k })}
                              onBlur={() => setActive(null)}
                              style={{ cursor: "default", outline: "none" }}
                            />
                            <rect
                              x={X0}
                              y={b.yy}
                              width={Math.max(x(b.v) - X0, 2)}
                              height={BAR}
                              rx={3}
                              fill={hollow ? "transparent" : colour}
                              stroke={hollow ? colour : isOn ? "hsl(var(--foreground))" : "none"}
                              strokeWidth={hollow ? 1.5 : 1.5}
                              opacity={active && !isOn ? 0.45 : 1}
                              pointerEvents="none"
                            />
                          </g>
                        );
                      })}
                    </g>
                  );
                })}
              </svg>
              <p className="mt-2 min-h-[2.75rem] text-sm leading-snug text-foreground" aria-live="polite">
                {readout}
              </p>
            </>
          ) : (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                <caption className="sr-only">Mean of three runs per service, from Table 4 of the manuscript</caption>
                <thead className="text-xs text-muted-foreground">
                  <tr className="border-b border-border">
                    <th className="py-2 pr-3 font-medium">Condition</th>
                    <th className="py-2 pr-3 font-medium">Test server</th>
                    <th className="py-2 pr-3 text-right font-medium">Download (Mbps)</th>
                    <th className="py-2 pr-3 text-right font-medium">Loss</th>
                    <th className="py-2 pr-3 text-right font-medium">Upload (Mbps)</th>
                    <th className="py-2 pr-3 text-right font-medium">Loss</th>
                    <th className="py-2 text-right font-medium">Latency (ms)</th>
                  </tr>
                </thead>
                <tbody className="tabular-nums">
                  <tr className="border-b border-border text-muted-foreground">
                    <td className="py-2 pr-3">No VPN</td>
                    <td className="py-2 pr-3">Dhaka</td>
                    <td className="py-2 pr-3 text-right">{BASELINE.down.toFixed(2)}</td>
                    <td className="py-2 pr-3 text-right">n/a</td>
                    <td className="py-2 pr-3 text-right">{BASELINE.up.toFixed(2)}</td>
                    <td className="py-2 pr-3 text-right">n/a</td>
                    <td className="py-2 text-right">{BASELINE.lat.toFixed(2)}</td>
                  </tr>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-b border-border">
                      <td className="py-2 pr-3 font-medium">{r.id}</td>
                      <td className="py-2 pr-3">{r.where}</td>
                      <td className="py-2 pr-3 text-right">{r.down.toFixed(2)}</td>
                      <td className="py-2 pr-3 text-right">{r.downLoss.toFixed(1)}%</td>
                      <td className="py-2 pr-3 text-right">{r.up.toFixed(2)}</td>
                      <td className="py-2 pr-3 text-right">{r.upLoss.toFixed(1)}%</td>
                      <td className="py-2 text-right">{r.lat.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <figcaption id="vpn-fig-cap" className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Mean of three Ookla Speedtest runs per service, drawn from Table 4 of the manuscript. The test server
            differed between services, so latency is not compared across them. Services are anonymised.
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-x-8 gap-y-5 text-[0.95rem] sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-[1.05rem] font-semibold text-foreground">Privacy policies</h3>
            <p className="mt-1.5">
              All five used vague or contradictory language, relied on undefined "anonymised" data, or allowed sharing
              with third parties in a way that sits uneasily with the headline privacy claims.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-[1.05rem] font-semibold text-foreground">What it does not show</h3>
            <p className="mt-1.5">
              The study cannot say why the services are slow: server load, throttling and routing distance are not
              separated. It describes five services under one set of conditions and does not support claims about free
              VPNs in general.
            </p>
          </div>
        </div>

        <ul className="mt-6 list-disc space-y-1.5 border-t border-border pt-5 pl-5 text-sm text-muted-foreground marker:text-muted-foreground/60">
          <li>
            The three baseline uploads varied widely (19.20, 43.93 and 45.41 Mbps), so upload losses below about 40% are
            inside the variation already on this connection. They are drawn as outlines.
          </li>
          <li>
            The kill-switch test shows that connectivity stopped when the adapter was disabled. It does not show that
            the kill switch itself blocked the traffic.
          </li>
          <li>Five services, three runs each, one connection, descriptive results only. The policies were read and coded by one author.</li>
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">
          Fawaz Farabi, <span className="text-foreground">Tinon Turja Majumder*</span>, Mohammad Forhad Hossain. I did the
          coding and comparative analysis and am the corresponding author. Not yet peer-reviewed.
        </p>
      </div>
    </section>
  );
};

export default VpnFeature;
