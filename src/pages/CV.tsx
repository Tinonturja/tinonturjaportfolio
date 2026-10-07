import { profile, LAST_UPDATED } from "@/content/site";
import { PageHeader, usePageMeta } from "@/components/site/bits";

const CV = () => {
  usePageMeta("CV", "Curriculum vitae of Tinon Turja Majumder (PDF).", "/cv");
  return (
    <>
      <PageHeader eyebrow="CV" title="Curriculum vitae" lead={`Two-page academic CV (PDF), updated ${LAST_UPDATED}.`} />
      <div className="flex flex-wrap gap-3">
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-accent/60 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          View CV
        </a>
        <a
          href={profile.cv}
          download="Tinon_Turja_Majumder_CV.pdf"
          className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-muted-foreground/60"
        >
          Download PDF
        </a>
      </div>
      <div className="mt-8 hidden overflow-hidden rounded-lg border border-border bg-white md:block">
        <object data={`${profile.cv}#view=FitH`} type="application/pdf" aria-label="CV preview" className="h-[80vh] w-full">
          <p className="p-6 text-sm text-neutral-700">
            Your browser cannot show the PDF here.{" "}
            <a href={profile.cv} className="underline">
              Open the CV
            </a>
            .
          </p>
        </object>
      </div>
      <p className="mt-4 text-sm text-muted-foreground md:hidden">On a phone, open the PDF to read it.</p>
    </>
  );
};

export default CV;
