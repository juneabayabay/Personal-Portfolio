"use client";

import { Code2, Link2, Loader2, Mail, Send } from "lucide-react";
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
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's build something amazing together."
          description="Have an internship opportunity or want to collaborate? I'd love to hear from you."
        />

        <div className="glass p-5 sm:p-8 md:p-10">
          {status === "success" ? (
            <div className="text-center">
              <p className="text-foreground/90">
                Thanks for your message! I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-accent-2 transition-colors hover:text-accent-1"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 sm:grid-cols-2">
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
                  placeholder="Tell me about your opportunity..."
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
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-col items-center justify-center gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex max-w-full items-center gap-2 break-all transition-colors hover:text-white sm:break-normal"
            >
              <Mail className="h-4 w-4 text-accent-2" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <span className="hidden h-4 w-px bg-white/10 sm:inline" />
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Code2 className="h-4 w-4 text-accent-2" aria-hidden="true" />
              github.com/{siteConfig.social.githubUsername}
            </a>
            {getLinkedinUrl() ? (
              <>
                <span className="hidden h-4 w-px bg-white/10 sm:inline" />
                <a
                  href={getLinkedinUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Link2 className="h-4 w-4 text-accent-2" aria-hidden="true" />
                  LinkedIn
                </a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
