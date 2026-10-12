"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrandStoryProps {
  className?: string;
}

const stats = [
  { value: "15+", label: "Years Export" },
  { value: "100%", label: "Legal Wood / SVLK Certified" },
  { value: "30+", label: "Partner Countries" },
];

export function BrandStory({ className }: BrandStoryProps) {
  return (
    <section className={cn("bg-background py-24 md:py-32", className)}>
      <div className="container">
        {/* Editorial header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our Heritage
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Rooted in Jepara,
              <br />
              crafted for the world.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              For over two decades, Barkajaya has shaped sustainably harvested
              teak into furniture that carries the quiet confidence of
              Indonesian craft. Every board is traced to legal, SVLK-certified
              plantations across Central Java — never clear-cut, never
              compromised.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              In our Jepara workshop, master artisans blend generations of
              joinery knowledge with modern precision. The result is furniture
              built to be inherited, not replaced.
            </p>
          </div>
        </div>

        {/* Minimalist 3-column stats block */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-8 py-10">
              <div className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}