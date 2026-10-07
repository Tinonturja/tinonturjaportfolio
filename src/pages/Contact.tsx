import { profile } from "@/content/site";
import { PageHeader, usePageMeta } from "@/components/site/bits";

const Contact = () => {
  usePageMeta("Contact", "Contact Tinon Turja Majumder by email; ORCID, GitHub and LinkedIn profiles.", "/contact");
  const rows = profile.links.filter((l) => l.label !== "CV");
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact"
        lead={
          <>
            The best way to reach me is by email. I am based in {profile.location}.
          </>
        }
      />
      <dl className="divide-y divide-border rounded-lg border border-border bg-card">
        {rows.map((l) => (
          <div key={l.label} className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-4 text-sm">
            <dt className="text-muted-foreground">{l.label}</dt>
            <dd className="min-w-0 break-words">
              <a
                href={l.href}
                className="text-accent underline decoration-accent/30 underline-offset-[3px] hover:decoration-accent"
                {...(/^https?:/.test(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label === "Email" ? profile.email : l.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
};

export default Contact;
