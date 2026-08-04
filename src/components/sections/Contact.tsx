"use client";

import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
      message: String(formData.get("message") ?? ""),
      // Honeypot — bots that fill hidden fields get a silent reject on the API
      _gotcha: String(formData.get("_gotcha") ?? ""),
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
        const failed = results.find(
          (result) => result.status === "fulfilled" && !result.value.ok,
        );
        if (failed && failed.status === "fulfilled") {
          if (failed.value.status === 429) {
            throw new Error(
              "Too many messages from this connection. Please wait a bit and try again.",
            );
          }
          if (failed.value.status === 503) {
            throw new Error(
              `Contact form isn’t configured yet. Email me at ${siteConfig.email}.`,
            );
          }
        }
        throw new Error(
          `Couldn’t send right now. Email me at ${siteConfig.email}.`,
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. You can also email me directly.",
      );
    }
  }

  return (
    <section id="contact" className="section-block scroll-mt-nav pb-16 sm:pb-20">
      <div className="section-inner">
        <div className="section-header section-header--simple">
          <div>
            <h2 className="section-heading">Contact</h2>
            <p className="section-sub">
              Open to internships. I’d love to hear from you.
            </p>
          </div>
        </div>

        <div className="contact-layout">
          <aside className="contact-aside">
            <span className="status-badge">{siteConfig.availability}</span>

            <p className="contact-aside__text">{siteConfig.lookingFor}</p>

            <p className="contact-aside__text contact-aside__text--muted">
              Prefer email? Use the form or message me directly.
            </p>

            <ul className="contact-channels">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="contact-channel">
                  <span className="contact-channel__icon" aria-hidden="true">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="contact-channel__label">Email</span>
                    <span className="contact-channel__value break-all">{siteConfig.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="contact-channel contact-channel--static">
                  <span className="contact-channel__icon" aria-hidden="true">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="contact-channel__label">Location</span>
                    <span className="contact-channel__value">{siteConfig.location}</span>
                  </span>
                </div>
              </li>
            </ul>
          </aside>

          <div className="contact-panel">
            {status === "success" ? (
              <div className="contact-success">
                <p className="font-medium text-foreground">Message sent. Thank you.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="link-arrow mt-4 text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="contact-form__row">
                  <div className="contact-field">
                    <label htmlFor="name" className="contact-label">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="contact-input"
                      required
                      maxLength={100}
                      disabled={status === "loading"}
                      autoComplete="name"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email" className="contact-label">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className="contact-input"
                      required
                      maxLength={254}
                      disabled={status === "loading"}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="message" className="contact-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    className="contact-input"
                    required
                    minLength={10}
                    maxLength={5000}
                    disabled={status === "loading"}
                  />
                </div>

                {status === "error" && errorMessage ? (
                  <p className="text-sm text-red-400" role="alert">{errorMessage}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary contact-submit"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" aria-hidden="true" />
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
