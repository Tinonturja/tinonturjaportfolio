import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

/* ---------- links ---------- */

export const linkCls = "text-accent underline decoration-accent/30 underline-offset-[3px] transition-colors hover:decoration-accent";

export const ExtLink = ({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) => {
  const external = /^https?:/.test(href);
  if (href.startsWith("/") && !href.endsWith(".pdf")) {
    return (
      <Link to={href} className={`${linkCls} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={`${linkCls} ${className}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
};

export const LinkRow = ({ links }: { links: { label: string; href: string }[] }) => (
  <p className="text-sm">
    {links.map((l, i) => (
      <span key={l.label}>
        {i > 0 && (
          <span aria-hidden="true" className="mx-2 text-muted-foreground/50">
            /
          </span>
        )}
        <ExtLink href={l.href}>{l.label}</ExtLink>
      </span>
    ))}
  </p>
);

/* ---------- page scaffolding ---------- */

const SITE = "Tinon Turja Majumder";
const ORIGIN = "https://tinonturjamajumder.net";

/** Sets the document title, description and canonical URL for the current page. */
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : `${SITE} · Research`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", ORIGIN + path);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", ORIGIN + path);
  }, [title, description, path]);
}

export const Eyebrow = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground ${className}`}>{children}</p>
);

export const PageHeader = ({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: ReactNode }) => (
  <header className="mb-12">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h1 className="mt-2 font-serif text-[2.1rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[2.4rem]">{title}</h1>
    {lead && <div className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">{lead}</div>}
  </header>
);

export const Section = ({ title, children, id, className = "" }: { title: string; children: ReactNode; id?: string; className?: string }) => (
  <section aria-labelledby={id ? `${id}-h` : undefined} className={`mt-16 first:mt-0 ${className}`}>
    <div className="mb-6 flex items-center gap-4">
      <h2 id={id ? `${id}-h` : undefined} className="shrink-0 font-serif text-[1.35rem] font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
    {children}
  </section>
);

/** Problem → Method → Result style definition list. */
export const Blocks = ({ items }: { items: { label: string; body: ReactNode; muted?: boolean }[] }) => (
  <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-[9rem_1fr]">
    {items.map((b) => (
      <div key={b.label} className="contents">
        <dt className="pt-[0.2rem] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">{b.label}</dt>
        <dd className={b.muted ? "text-muted-foreground" : "text-foreground/90"}>{b.body}</dd>
      </div>
    ))}
  </dl>
);

export const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-2">
    {items.map((t, i) => (
      <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2.5 before:bg-accent">
        {t}
      </li>
    ))}
  </ul>
);

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="inline-block rounded border border-border px-2 py-0.5 text-[0.72rem] text-muted-foreground">{children}</span>
);

export const Status = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded border border-accent/40 px-2 py-0.5 text-[0.72rem] font-medium text-accent">
    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
    {children}
  </span>
);

/** Arrow link used for "go deeper" actions. */
export const More = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="group inline-flex items-center gap-1.5 text-sm text-accent">
    <span className="underline decoration-accent/30 underline-offset-[3px] group-hover:decoration-accent">{children}</span>
    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
      →
    </span>
  </Link>
);
