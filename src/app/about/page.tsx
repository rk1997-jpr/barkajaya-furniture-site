export const metadata = {
  title: "About – Barkajaya Indonesia",
  description: "Learn about Barkajaya Indonesia’s heritage, craftsmanship, and sustainable teak sourcing in Jepara, Central Java.",
  keywords: ["Barkajaya", "about", "heritage", "teak", "Jepara", "sustainable furniture"],
  openGraph: {
    title: "About – Barkajaya Indonesia",
    description: "Learn about Barkajaya Indonesia’s heritage, craftsmanship, and sustainable teak sourcing.",
    url: "https://barkajaya-furniture-site.vercel.app/about",
    images: [{ url: "https://barkajaya-furniture-site.vercel.app/og-image.jpg" }],
  },
  twitter: { card: "summary_large_image" },
};


import Link from "next/link";
import { Hammer, Factory, Package, PencilRuler, Paintbrush, Ship, Quote } from "lucide-react";
import {
  services,
  projects,
  testimonials,
  type Service,
  type Project,
  type Post,
} from "@/lib/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hammer,
  Factory,
  Package,
  PencilRuler,
  Paintbrush,
  Ship,
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container flex flex-col items-start gap-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
              About Barkajaya
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Crafting Furniture for Brands
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Barkajaya Indonesia has been manufacturing premium furniture since 1997.
              Based in Jepara — the world's center of teak craftsmanship — we combine
              traditional woodworking techniques with modern production capabilities to
              deliver furniture that meets the highest standards of quality and design.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 text-accent">
                  {/* Quote */}
                </span>
                <span className="text-sm text-muted-foreground">
                  25+ years of experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 text-accent">
                  {/* Factory */}
                </span>
                <span className="text-sm text-muted-foreground">
                  1,200+ projects delivered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To become Indonesia's most trusted partner for premium furniture
                manufacturing — delivering exceptional quality, on time, and with
                transparent communication at every stage.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>Sustainable wood sourcing from legal harvesters</li>
                <li>In-house design-to-production workflow</li>
                <li>Quality control at every manufacturing stage</li>
                <li>On-time delivery to 30+ countries worldwide</li>
                <li>Flexible production volumes from prototype to bulk</li>
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Why Choose Barkajaya
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="h-6 w-6 text-primary" />
                    <h4 className="mt-2 text-xl font-semibold text-foreground">
                      Quality Assurance
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      Every piece undergoes rigorous quality checks before leaving our
                      Jepara workshop.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="h-6 w-6 text-primary" />
                    <h4 className="mt-2 text-xl font-semibold text-foreground">
                      On-Time Delivery
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      We coordinate production schedules and logistics to meet your
                      project deadlines.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="h-6 w-6 text-primary" />
                    <h4 className="mt-2 text-xl font-semibold text-foreground">
                      Design Collaboration
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      Our in-house design team works with you from concept through to
                      production-ready drawings.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="h-6 w-6 text-primary" />
                    <h4 className="mt-2 text-xl font-semibold text-foreground">
                      Global Logistics
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      End-to-end shipping, customs documentation and white-glove
                      delivery setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {[
            { value: "1997", label: "Founded" },
            { value: "25+", label: "Years Experience" },
            { value: "30+", label: "Export Countries" },
            { value: "200+", label: "Skilled Craftsmen" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Clients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6">
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}