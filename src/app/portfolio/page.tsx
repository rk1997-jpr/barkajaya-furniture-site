import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/content";

export const metadata = {
  title: "Portfolio – Barkajaya Indonesia",
  description: "Browse our portfolio of hospitality, commercial and residential furniture projects manufactured and exported worldwide.",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container flex flex-col items-start gap-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A selection of hospitality, commercial and residential projects
              we've manufactured for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card">
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
  );
}
