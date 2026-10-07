import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";

/** Internal paths use the router; everything else opens normally (external links in a new tab). */
export const ExtLink = ({ href, children }: { href: string; children: ReactNode }) => {
  if (href.startsWith("/") && !/\.(pdf|png|webp)$/i.test(href)) {
    return (
      <Link to={href} className="link">
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a href={href} className="link" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
};

export const LinkRow = ({ links, className = "" }: { links: { label: string; href: string }[]; className?: string }) => (
  <p className={`text-sm ${className}`}>
    {links.map((l, i) => (
      <span key={l.label}>
        {i > 0 && (
          <span aria-hidden="true" className="mx-2 text-muted-foreground/50">
            ·
          </span>
        )}
        <ExtLink href={l.href}>{l.label}</ExtLink>
      </span>
    ))}
  </p>
);

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

export const PageTitle = ({ children, lead }: { children: ReactNode; lead?: ReactNode }) => (
  <header className="mb-12">
    <h1 className="font-serif text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.25rem]">{children}</h1>
    {lead && <div className="mt-3 text-[1.02rem] leading-relaxed text-muted-foreground">{lead}</div>}
  </header>
);

export const H2 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="mb-5 mt-14 font-serif text-[1.3rem] font-semibold tracking-tight">
    {children}
  </h2>
);

/** Short status label (1–3 words). */
export const Status = ({ children }: { children: ReactNode }) => (
  <span className="inline-block whitespace-nowrap rounded border border-border px-1.5 py-px text-[0.7rem] font-medium text-muted-foreground">
    {children}
  </span>
);
