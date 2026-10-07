import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { ME, LAST_UPDATED, profile } from "@/content/site";

const NAV = [
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/about", label: "About" },
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
  const { pathname } = useLocation();
  const [dark, setDark] = useTheme();
  const mainRef = useRef<HTMLElement>(null);
  const firstLoad = useRef(true);

  // On a new page (not the first load): scroll to top and move focus to the main region.
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  const navCls = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 transition-colors ${isActive ? "text-foreground after:absolute after:inset-x-0 after:-bottom-[1px] after:h-px after:bg-accent" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[44rem] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4 sm:px-6">
          <Link to="/" className="font-serif text-[1.05rem] font-semibold tracking-tight text-foreground">
            {ME}
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={navCls}>
                {n.label}
              </NavLink>
            ))}
            <a href={profile.cv} className="text-muted-foreground transition-colors hover:text-foreground">
              CV
            </a>
            <ThemeButton dark={dark} toggle={() => setDark((d) => !d)} />
          </nav>
        </div>
      </header>

      <main ref={mainRef} id="main" tabIndex={-1} className="flex-1 outline-none">
        <div key={pathname} className="page-enter mx-auto max-w-[44rem] px-5 pb-20 pt-12 sm:px-6 sm:pt-16">
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
