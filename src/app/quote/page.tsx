"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const serviceOptions = [
  "Custom Furniture Manufacturing",
  "Contract & Bulk Production",
  "OEM / ODM Services",
  "Design & Prototyping",
  "Finishing & Upholstery",
  "Export & Logistics",
];

const materialOptions = [
  "Teak",
  "Mahogany",
  "Oak",
  "Walnut",
  "Pine",
  "Metal / Mixed",
  "Not sure yet",
];

const quantityOptions = [
  "1 – 10 pieces",
  "11 – 50 pieces",
  "51 – 200 pieces",
  "201 – 1,000 pieces",
  "1,000+ pieces",
];

const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "Flexible",
];

export default function QuotePage() {
  const router = useRouter();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    material: "",
    quantity: "",
    timeline: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setTimeout(() => router.push("/contact"), 2500);
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
              Get a Quote
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Start Your Project
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your furniture needs and we'll respond with a
              detailed quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container max-w-3xl">
          {status === "sent" ? (
            <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">
                Quote request sent
              </h2>
              <p className="text-muted-foreground">
                Thanks {form.name.split(" ")[0]} — our team will contact you
                at {form.email} within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">
                    Company
                  </label>
                  <input
                    id="company"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="material" className="block text-sm font-medium text-foreground">
                    Preferred Material
                  </label>
                  <select
                    id="material"
                    value={form.material}
                    onChange={(e) => update("material", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select material</option>
                    {materialOptions.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-foreground">
                    Estimated Quantity
                  </label>
                  <select
                    id="quantity"
                    value={form.quantity}
                    onChange={(e) => update("quantity", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select quantity</option>
                    {quantityOptions.map((q) => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-foreground">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    value={form.timeline}
                    onChange={(e) => update("timeline", e.target.value)}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground">
                  Budget Range (USD)
                </label>
                <input
                  id="budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  placeholder="e.g. $5,000 – $10,000"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Describe your project, dimensions, finishes, and any reference images or sketches you can share."
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <Button type="submit" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Submit Quote Request"}
              </Button>
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again or email us at {siteConfig.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
