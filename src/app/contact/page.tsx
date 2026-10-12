"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container flex flex-col items-start gap-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
              Contact
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Questions about a project or production capability? Reach out and
              our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Address</div>
                  <div className="text-sm text-muted-foreground">{siteConfig.address}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <div className="text-sm text-muted-foreground">{siteConfig.phone}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">{siteConfig.email}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Working Hours</div>
                  <div className="text-sm text-muted-foreground">Mon–Sat, 8:00 – 17:00 WIB</div>
                </div>
              </li>
            </ul>

            {/* Map placeholder */}
            <div className="mt-8 aspect-[4/3] w-full rounded-lg border border-border bg-secondary">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Map embed placeholder
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button type="submit" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>
              {status === "sent" && (
                <p className="text-sm text-accent">Message sent — we'll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}