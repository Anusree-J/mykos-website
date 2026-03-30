const steps = [
  {
    number: "01",
    title: "Connect your world",
    description:
      "Link your calendar, email, and tools. Mykos maps the relationships between your tasks, people, and commitments.",
    color: "bg-dusty-blue/20",
  },
  {
    number: "02",
    title: "Let it learn",
    description:
      "Mykos quietly observes how you work — your priorities, your patterns, your preferences. It adapts to you, not the other way around.",
    color: "bg-lavender/20",
  },
  {
    number: "03",
    title: "Stay in flow",
    description:
      "Get proactive briefings, smart reminders, and contextual suggestions. Everything you need, nothing you don't.",
    color: "bg-terracotta/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-sage mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Three steps to clarity.
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 md:gap-10 items-start"
            >
              <div
                className={`shrink-0 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center`}
              >
                <span className="text-sm font-mono font-medium text-charcoal/60">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-charcoal/50 font-serif leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
