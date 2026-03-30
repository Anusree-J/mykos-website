"use client";

import { useState } from "react";
import { MykosLogo } from "./MykosLogo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/80 backdrop-blur-md border-b border-stone/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <MykosLogo size={28} />
          <span className="text-xl font-medium tracking-tight text-charcoal">
            mykos
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#story"
            className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
          >
            Story
          </a>
          <a
            href="#features"
            className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
          >
            How it works
          </a>
          <a
            href="#cta"
            className="inline-flex items-center px-5 py-2 bg-sage text-white text-sm font-medium rounded-full hover:bg-sage-light transition-colors"
          >
            Get early access
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-offwhite border-b border-stone/50 px-6 py-4 space-y-3">
          <a
            href="#story"
            className="block text-sm text-charcoal/60"
            onClick={() => setMobileOpen(false)}
          >
            Story
          </a>
          <a
            href="#features"
            className="block text-sm text-charcoal/60"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="block text-sm text-charcoal/60"
            onClick={() => setMobileOpen(false)}
          >
            How it works
          </a>
          <a
            href="#cta"
            className="inline-flex items-center px-5 py-2 bg-sage text-white text-sm font-medium rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Get early access
          </a>
        </div>
      )}
    </header>
  );
}
