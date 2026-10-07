import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { ME, LAST_UPDATED, profile } from "@/content/site";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/interests", label: "Interests" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

const SOCIAL = profile.links.filter((l) => l.label !== "CV");

/* ---------- theme: dark by default, light on request (remembered in this browser) ---------- */

function useTheme() {
  const [dark, setDark] = useState(() => typeof document === "undefined" || document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0f1012" : "#ffffff");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable: the switch still applies for this visit */
    }
  }, [dark]);
  return [dark, setDark] as const;
}

const ThemeSwitch = ({ dark, setDark }: { dark: boolean; setDark: (f: (d: boolean) => boolean) => void }) => {
  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {dark ? "Light theme" : "Dark theme"}
    </button>
  );
};

/* ---------- navigation ---------- */

const NavList = ({ onNavigate }: { onNavigate?: () => void }) => (
  <ul className="space-y-0.5">
    {NAV.map((n) => (
      <li key={n.to}>
        <NavLink
          to={n.to}
          end={n.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `group relative flex items-center rounded-md py-1.5 pl-4 pr-3 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full transition-all duration-300 ${
                  isActive ? "bg-accent opacity-100" : "bg-muted-foreground opacity-0 group-hover:opacity-40"
                }`}
              />
              {n.label}
            </>
          )}
        </NavLink>
      </li>
    ))}
  </ul>
);

const SocialList = () => (
  <ul className="space-y-1.5 text-sm">
    {SOCIAL.map((l) => (
      <li key={l.label}>
        <a
          href={l.href}
          className="text-muted-foreground transition-colors hover:text-accent"
          {...(/^https?:/.test(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {l.label === "Email" ? profile.email : l.label}
        </a>
      </li>
    ))}
  </ul>
);

const Identity = () => (
  <Link to="/" className="block">
    <span className="block font-serif text-[1.2rem] font-semibold leading-snug text-foreground">{ME}</span>
    <span className="mt-1.5 block text-[0.78rem] leading-relaxed text-muted-foreground">
      Machine learning for industrial processes
      <br />
      Textile engineering · Data science
    </span>
  </Link>
);

/* ---------- layout ---------- */

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useTheme();
  const mainRef = useRef<HTMLElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  // New page (not the first load): scroll to top and move focus to the main region for keyboard and screen-reader users.
  const firstLoad = useRef(true);
  useEffect(() => {
    setOpen(false);
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  // Mobile drawer: Escape closes, focus moves into it and back to the button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    drawer.current?.querySelector<HTMLElement>("a")?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      menuBtn.current?.focus();
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      {/* desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[17rem] flex-col border-r border-border bg-sidebar px-7 pb-8 pt-10 lg:flex">
        <Identity />
        <nav aria-label="Primary" className="-ml-4 mt-12">
          <NavList />
        </nav>
        <div className="mt-auto space-y-6">
          <SocialList />
          <ThemeSwitch dark={dark} setDark={setDark} />
        </div>
      </aside>

      {/* mobile top bar */}
      <div className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/85 lg:hidden">
        <Link to="/" className="font-serif text-[1.02rem] font-semibold text-foreground">
          {ME}
        </Link>
        <button
          ref={menuBtn}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="rounded px-2 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* mobile drawer (rendered only while open, so its links are never reachable when hidden) */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="drawer-fade absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div
            id="mobile-nav"
            ref={drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="drawer-slide absolute inset-y-0 left-0 flex w-[82%] max-w-xs flex-col overflow-y-auto border-r border-border bg-sidebar px-7 pb-8 pt-8"
          >
            <Identity />
            <nav aria-label="Primary" className="-ml-4 mt-10">
              <NavList onNavigate={() => setOpen(false)} />
            </nav>
            <div className="mt-auto space-y-6 pt-10">
              <SocialList />
              <ThemeSwitch dark={dark} setDark={setDark} />
            </div>
          </div>
        </div>
      )}

      <div className="lg:pl-[17rem]">
        <main ref={mainRef} id="main" tabIndex={-1} className="outline-none">
          <div key={pathname} className="page-enter mx-auto max-w-[46rem] px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pt-20">
            <Outlet />
          </div>
        </main>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-[46rem] flex-col gap-1 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8 lg:px-12">
            <span>
              © {new Date().getFullYear()} {ME}
            </span>
            <span>Last updated {LAST_UPDATED}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
