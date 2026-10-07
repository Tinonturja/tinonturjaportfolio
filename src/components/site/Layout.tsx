import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { ME, LAST_UPDATED, profile } from "@/content/site";

/** One-page site: the navigation jumps to sections. No drop-down; on phones the links sit on a second row. */
const NAV = [
  { href: "/#research", label: "Research" },
  { href: "/#publications", label: "Publications" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

/* ---------- theme: follows the visitor's system setting unless they choose otherwise ---------- */

function useTheme() {
  const [dark, setDark] = useState(() => typeof document !== "undefined" && document.documentElement.classList.contains("dark"));
  const first = useRef(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#121316" : "#ffffff");
    if (first.current) {
      first.current = false;
      return; // do not store anything until the visitor actually chooses
    }
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [dark]);
  return [dark, setDark] as const;
}

const ThemeButton = ({ dark, toggle }: { dark: boolean; toggle: () => void }) => (
  <button
    type="button"
    onClick={toggle}
    aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    title={dark ? "Light theme" : "Dark theme"}
    className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
  >
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 2a6 6 0 0 0 0 12z" fill="currentColor" />
    </svg>
  </button>
);

export default function Layout() {
  const [dark, setDark] = useTheme();
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="mx-auto flex max-w-[44rem] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3.5 sm:px-6">
          <a href="/#top" className="font-serif text-[1.05rem] font-semibold tracking-tight text-foreground">
            {ME}
          </a>
          <nav aria-label="Sections" className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[0.85rem] sm:gap-x-5 sm:text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="py-1 text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a href={profile.cv} className="py-1 text-muted-foreground transition-colors hover:text-foreground">
              CV
            </a>
            <ThemeButton dark={dark} toggle={() => setDark((d) => !d)} />
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <div className="mx-auto max-w-[44rem] px-5 pb-20 pt-12 sm:px-6 sm:pt-16">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[44rem] flex-col gap-1 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <span>
            {ME} · <a href={`mailto:${profile.email}`} className="hover:text-foreground">{profile.email}</a>
          </span>
          <span>Last updated {LAST_UPDATED}</span>
        </div>
      </footer>
    </div>
  );
}
