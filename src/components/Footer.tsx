"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
// Social icons are inlined SVGs – no external import needed

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-foreground text-background py-12", className)}>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Contact & CTA */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>
          <p className="mb-2 text-sm">{siteConfig.address}</p>
          <p className="mb-2 text-sm">{siteConfig.phone}</p>
          <p className="mb-4 text-sm">{siteConfig.email}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Us
          </Link>
        </div>

        {/* Export credentials / badges */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Export Credentials</h3>
          <ul className="space-y-2 text-sm">
            <li>SVLK Certified (Legal Wood)</li>
            <li>ISO 9001 Quality Management</li>
            <li>FSC Partner (Selective)</li>
          </ul>
        </div>

        {/* Social links */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com/barkajaya" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="Facebook">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>
            </Link>
            <Link href="https://instagram.com/barkajaya" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
            </Link>
            <Link href="https://twitter.com/barkajaya" target="_blank" rel="noopener noreferrer" className="hover:text-accent" aria-label="X / Twitter">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.55 7.49L23 22h-6.18l-4.84-6.33L6.44 22H3.2l7-8L3 2h6.35l4.37 5.78L18.9 2Zm-1.08 18h1.79L6.7 3.85H4.77L17.82 20Z"/></svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs opacity-80">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}