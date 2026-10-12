import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, type Service } from "@/lib/content";

export const metadata = {
  title: "Services – Barkajaya Indonesia",
  description: "Explore our production services — custom furniture manufacturing, contract & bulk production, OEM/ODM, design & prototyping, finishing & upholstery, and export & logistics.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container flex flex-col items-start gap-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
              Our Services
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Production Services for Every Need
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From concept design to final delivery, we offer a full suite of
              manufacturing capabilities tailored to your project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Request a custom quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50">
      <h3 className="text-xl font-semibold text-foreground">
        {service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {service.description}</p>
    </div>
  );
}
