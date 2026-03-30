import { MykosLogo } from "./MykosLogo";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in-up flex justify-center mb-8">
          <MykosLogo size={72} expressive />
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-5xl md:text-7xl font-medium tracking-tight text-charcoal leading-[1.1]">
          Everyone deserves
          <br />
          <span className="text-sage">a chief of staff.</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mt-6 text-lg md:text-xl text-charcoal/60 max-w-xl mx-auto font-serif leading-relaxed">
          Mykos connects the dots, moves things forward, and makes sure nothing
          falls through the cracks. Your day, handled.
        </p>

        <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center px-8 py-3.5 bg-sage text-white font-medium rounded-full hover:bg-sage-light transition-colors text-base"
          >
            Get early access
          </a>
          <a
            href="#story"
            className="inline-flex items-center px-8 py-3.5 text-charcoal/60 font-medium rounded-full border border-stone hover:border-charcoal/20 transition-colors text-base"
          >
            Learn more
          </a>
        </div>

        <div className="animate-fade-in-up-delay-3 mt-16 flex items-center justify-center gap-6 text-xs text-charcoal/30 uppercase tracking-widest">
          <span>My CoS</span>
          <span className="w-1 h-1 rounded-full bg-charcoal/20" />
          <span>For everyone</span>
        </div>
      </div>
    </section>
  );
}
