import Link from "next/link";
import {
  ArrowRight,
  Hammer,
  Factory,
  Package,
  PencilRuler,
  Paintbrush,
  Ship,
  Quote,
} from "lucide-react";
import { services, projects, testimonials, type Service } from "@/lib/content";
import { BrandStory } from "@/components/BrandStory";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { ExportProcess } from "@/components/ExportProcess";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hammer,
  Factory,
  Package,
  PencilRuler,
  Paintbrush,
  Ship,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container flex flex-col items-start gap-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
              Furniture Manufacturing · Jepara, Indonesia
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Crafted Furniture,
              <br />
              Built for Your Brand.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From custom pieces to high-volume contract production, Barkajaya
              Indonesia turns your designs into finished furniture — on time,
              on spec, and built to last.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory />

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Export Process */}
      <ExportProcess />

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Production Services
              </h2>
              <p className="mt-3 text-muted-foreground">
                End-to-end furniture manufacturing — from concept and prototyping
                to finishing, packing and worldwide delivery.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-border bg-secondary/40 py-20">
        <div className="container">
          <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Selected Work
              </h2>
              <p className="mt-3 text-muted-foreground">
                A glimpse of the hospitality, commercial and residential
                projects we've manufactured.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.slug}
                className="group overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="aspect-[4/3] w-full bg-secondary" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Brands Worldwide
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

      {/* CTA */}
      <section className="border-t border-border bg-primary py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to manufacture your next collection?
          </h2>
          <p className="max-w-xl text-primary-foreground/80">
            Tell us about your project and our team will get back to you within
            24 hours with a detailed quote.
          </p>
          <Link
            href="/quote"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
          >
            Start Your Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Hammer;
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {service.description}
      </p>
    </div>
  );
}
