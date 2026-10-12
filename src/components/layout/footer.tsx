"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            Barkajaya
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-muted-foreground sm:inline">
            Indonesia
          </span>
        </div>

        <nav className="flex items-center gap-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-muted-foreground hover:text-foreground transition-colors"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
        <p>
          {siteConfig.address}
        </p>
        <p>
          {siteConfig.phone} • {siteConfig.email}
        </p>
        <p>
          © 2026 Barkajaya Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}