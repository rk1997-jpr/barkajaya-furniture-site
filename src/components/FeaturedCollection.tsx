"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeaturedCollectionProps {
  className?: string;
}

const products = [
  {
    id: "dining-table",
    name: "Dining Table",
    material: "Grade-A Teak (Kiln-Dried)",
    leadTime: "8–10 weeks",
  },
  {
    id: "lounge-chair",
    name: "Lounge Chair",
    material: "Grade-A Teak with Cushion",
    leadTime: "6–8 weeks",
  },
  {
    id: "outdoor-bench",
    name: "Outdoor Bench",
    material: "Weather-Resistant Teak",
    leadTime: "10–12 weeks",
  },
  {
    id: "coffee-table",
    name: "Coffee Table",
    material: "Grade-A Teak",
    leadTime: "6–8 weeks",
  },
];

export function FeaturedCollection({ className }: FeaturedCollectionProps) {
  return (
    <section className={cn("bg-background py-24 md:py-32", className)}>
      <div className="container">
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Featured Collection
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Signature pieces,
              <br />
              made to order.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Every piece is built to your specification in Grade-A teak — from
            single statement items to full contract runs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/40"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-5xl font-bold tracking-tight text-accent/30">
                    {product.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </motion.div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.material}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {product.leadTime}
                  </span>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    Inquire Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}