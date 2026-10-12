"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExportProcessProps {
  className?: string;
}

export function ExportProcess({ className }: ExportProcessProps) {
  const steps = [
    {
      title: "Custom Design & Sourcing",
      description: "Collaborate on design, select sustainably harvested teak.",
    },
    {
      title: "Precision Crafting",
      description: "Skilled artisans shape, join and finish each piece.",
    },
    {
      title: "Quality Assurance & SVLK",
      description: "Rigorous inspection, certification and finishing.",
    },
    {
      title: "Worldwide Logistics",
      description: "Secure packaging, customs clearance and door‑to‑door delivery.",
    },
  ];

  return (
    <section className={cn("py-24 md:py-32 bg-background", className)}>
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
          Our Export Process
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="/quote"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}