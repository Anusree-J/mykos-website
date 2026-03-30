"use client";

import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="py-24 md:py-32 px-6 bg-charcoal">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-sage mb-4">
          Early access
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Your day, handled.
        </h2>
        <p className="text-white/50 font-serif mb-10 leading-relaxed">
          Join the waitlist and be among the first to experience what it&apos;s
          like to have a chief of staff working quietly behind the scenes.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-sage/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-sage text-white text-sm font-medium rounded-full hover:bg-sage-light transition-colors whitespace-nowrap"
            >
              Join waitlist
            </button>
          </form>
        ) : (
          <div className="bg-sage/10 border border-sage/20 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-sage font-medium">You&apos;re on the list.</p>
            <p className="text-white/40 text-sm mt-1">
              We&apos;ll be in touch soon.
            </p>
          </div>
        )}

        <p className="mt-6 text-xs text-white/20">
          No spam. Just updates when we launch.
        </p>
      </div>
    </section>
  );
}
