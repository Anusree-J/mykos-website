const features = [
  {
    title: "Connect the dots",
    description:
      "Mykos sees across your calendar, email, tasks, and conversations — surfacing what matters and linking related threads together.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3" fill="#7B9EC4" opacity="0.7" />
        <circle cx="24" cy="8" r="3" fill="#8B7BB5" opacity="0.7" />
        <circle cx="16" cy="24" r="3" fill="#C4956A" opacity="0.7" />
        <path
          d="M8 8L24 8M8 8L16 24M24 8L16 24"
          stroke="#5B8A72"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    title: "Move things forward",
    description:
      "Automatic follow-ups, gentle nudges, and smart scheduling. Mykos keeps your projects and relationships moving without you having to chase.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 16H26M26 16L20 10M26 16L20 22"
          stroke="#5B8A72"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Nothing falls through",
    description:
      "Every commitment tracked, every loose end flagged. Mykos remembers what you said you'd do — and makes sure it happens.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="#5B8A72"
          strokeWidth="2"
          opacity="0.4"
        />
        <path
          d="M12 16L15 19L21 13"
          stroke="#5B8A72"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "The quiet force",
    description:
      "Like mycelium, Mykos works in the background. No noise, no clutter — just the right information at the right time.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 6C16 6 8 12 8 18C8 24 12 26 16 26C20 26 24 24 24 18C24 12 16 6 16 6Z"
          stroke="#5B8A72"
          strokeWidth="2"
          opacity="0.4"
        />
        <circle cx="16" cy="18" r="2" fill="#C4956A" opacity="0.7" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-stone/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-sage mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Your invisible infrastructure.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-offwhite rounded-2xl p-8 border border-stone/50 hover:border-sage/30 transition-colors"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-charcoal/50 leading-relaxed font-serif">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
