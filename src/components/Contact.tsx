import { contact, site } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const mailHref = site.emailHref;

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="ping contact" title="Contact" />

        <div className="glow-border overflow-hidden rounded-2xl border border-card-border bg-card">
          <div className="flex items-center gap-2 border-b border-card-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" aria-hidden />
            <span className="ml-2 font-mono text-[11px] text-muted">
              contact.sh
            </span>
          </div>

          <div className="grid gap-8 p-5 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {contact.headline}
              </h3>
              <p className="mt-3 max-w-md text-sm text-muted sm:text-base">
                {contact.blurb}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={mailHref}
                  className="inline-flex min-h-11 max-w-full cursor-pointer items-center justify-center break-anywhere rounded-lg bg-accent px-4 py-2.5 font-mono text-xs font-medium text-background transition hover:brightness-110 sm:text-sm"
                  aria-label={`Send email to ${site.email}`}
                >
                  {site.email}
                </a>
                <a
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-sm text-accent transition hover:bg-accent/20"
                >
                  WhatsApp
                </a>
              </div>
              <p className="mt-3 font-mono text-[11px] text-muted">
                Click email → opens your mail app (Gmail / Outlook / Mail)
              </p>
            </div>

            <div className="min-w-0 rounded-xl border border-card-border bg-background/50 p-4 font-mono text-sm sm:p-5">
              <p className="text-muted"># quick links</p>
              <ul className="mt-3 space-y-3">
                <li className="break-anywhere">
                  <span className="text-accent-2">email</span>
                  <span className="text-muted"> = </span>
                  <a
                    href={mailHref}
                    className="cursor-pointer text-accent underline underline-offset-4 hover:brightness-110"
                    aria-label={`Send email to ${site.email}`}
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-accent-2">whatsapp</span>
                  <span className="text-muted"> = </span>
                  <a
                    href={site.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-foreground hover:text-accent"
                  >
                    {site.whatsapp.phone}
                  </a>
                </li>
                <li>
                  <span className="text-accent-2">wa_user</span>
                  <span className="text-muted"> = </span>
                  <span className="text-foreground">
                    @{site.whatsapp.username}
                  </span>
                </li>
                <li>
                  <span className="text-accent-2">location</span>
                  <span className="text-muted"> = </span>
                  <span className="text-foreground">{site.location}</span>
                </li>
                {Object.entries(site.social)
                  .filter(([key]) => key !== "whatsapp")
                  .map(([key, url]) => (
                    <li key={key}>
                      <span className="text-accent-2">{key}</span>
                      <span className="text-muted"> = </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-foreground hover:text-accent"
                      >
                        open ↗
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
