import { contact, site } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const mailHref = site.emailHref;

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="ping contact" title="Contact" />

        <div className="glow-border overflow-hidden rounded-2xl border border-card-border bg-card">
          <div className="flex items-center gap-2 border-b border-card-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
            <span className="ml-2 font-mono text-[11px] text-muted">
              contact.sh
            </span>
          </div>

          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {contact.headline}
              </h3>
              <p className="mt-3 max-w-md text-muted">{contact.blurb}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailHref}
                  className="inline-flex cursor-pointer rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition hover:brightness-110"
                  aria-label={`Send email to ${site.email}`}
                >
                  {site.email}
                </a>
                <a
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer rounded-lg border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-sm text-accent transition hover:bg-accent/20"
                >
                  WhatsApp
                </a>
              </div>
              <p className="mt-3 font-mono text-[11px] text-muted">
                Click email → opens your mail app (Gmail / Outlook / Mail)
              </p>
            </div>

            <div className="rounded-xl border border-card-border bg-background/50 p-5 font-mono text-sm">
              <p className="text-muted"># quick links</p>
              <ul className="mt-3 space-y-2">
                <li>
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
                  // WhatsApp is listed above via site.whatsapp; avoid a duplicate row.
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
