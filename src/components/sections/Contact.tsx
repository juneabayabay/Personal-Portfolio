"use client";

import { Code2, Link2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import { getLinkedinUrl } from "@/lib/profile-urls";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const requests: Promise<Response>[] = [
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ];

      if (formspreeId) {
        requests.push(
          fetch(`https://formspree.io/f/${formspreeId}`, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          }),
        );
      }

      const results = await Promise.allSettled(requests);
      const anySuccess = results.some(
        (result) => result.status === "fulfilled" && result.value.ok,
      );

      if (!anySuccess) {
        const firstError = results.find(
          (result): result is PromiseFulfilledResult<Response> =>
            result.status === "fulfilled",
        );

        if (firstError) {
          const data = (await firstError.value.json().catch(() => ({}))) as {
            error?: string;
          };
          throw new Error(data.error ?? "Failed to send message.");
        }

        throw new Error("Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email me directly.",
      );
    }
  }

  return (
    <section id="contact" className="section-shell section-panel scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something real"
          description="Internship, collaboration, or a hard problem — send a clear brief. I respond."
          centered={false}
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-6">
          <aside className="glass flex flex-col gap-5 p-5 sm:p-6 lg:p-7">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.16em] text-accent-2 uppercase">
                Direct channels
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer email or LinkedIn? Use the links below — or send the form for a structured message.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-start gap-3 rounded-xl border border-border/80 bg-white/[0.02] p-3 transition-colors hover:border-accent-2/35"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.6rem] tracking-wider text-muted-foreground uppercase">
                      Email
                    </span>
                    <span className="mt-0.5 block break-all text-foreground group-hover:text-accent-2">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-border/80 bg-white/[0.02] p-3 transition-colors hover:border-accent-2/35"
                >
                  <Code2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.6rem] tracking-wider text-muted-foreground uppercase">
                      GitHub
                    </span>
                    <span className="mt-0.5 block text-foreground group-hover:text-accent-2">
                      @{siteConfig.social.githubUsername}
                    </span>
                  </span>
                </a>
              </li>
              {getLinkedinUrl() ? (
                <li>
                  <a
                    href={getLinkedinUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-xl border border-border/80 bg-white/[0.02] p-3 transition-colors hover:border-accent-2/35"
                  >
                    <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.6rem] tracking-wider text-muted-foreground uppercase">
                        LinkedIn
                      </span>
                      <span className="mt-0.5 block text-foreground group-hover:text-accent-2">
                        Professional profile
                      </span>
                    </span>
                  </a>
                </li>
              ) : null}
              <li className="flex items-start gap-3 rounded-xl border border-border/60 p-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-mono text-[0.6rem] tracking-wider uppercase">
                    Based in
                  </span>
                  <span className="mt-0.5 block text-foreground">{siteConfig.location}</span>
                </span>
              </li>
            </ul>
          </aside>

          <div className="glass p-5 sm:p-7 md:p-8">
            {status === "success" ? (
              <div className="flex min-h-[240px] flex-col items-center justify-center text-center">
                <p className="text-lg font-semibold text-foreground">Message received.</p>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 text-sm font-medium text-accent-2 transition-colors hover:text-accent-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-muted-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="contact-input"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-muted-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="contact-input"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-muted-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Internship inquiry"
                    className="contact-input"
                    disabled={status === "loading"}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the role, project, or problem..."
                    className="contact-input"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {status === "error" && errorMessage ? (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-glow btn-primary flex w-full items-center justify-center gap-2 rounded-full px-10 py-3.5 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
