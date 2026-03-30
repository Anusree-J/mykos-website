export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Mycelium illustration */}
          <div className="relative">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-sm mx-auto"
              fill="none"
            >
              {/* Network lines */}
              <path
                d="M80 320 C120 280, 140 200, 200 200"
                stroke="#5B8A72"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M200 200 C260 200, 280 120, 320 80"
                stroke="#5B8A72"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M200 200 C220 240, 280 260, 340 280"
                stroke="#5B8A72"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M200 200 C160 180, 120 140, 80 100"
                stroke="#5B8A72"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M200 200 C180 240, 140 280, 100 300"
                stroke="#5B8A72"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M200 200 C240 180, 300 160, 340 140"
                stroke="#5B8A72"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                d="M200 200 C200 160, 200 120, 200 80"
                stroke="#5B8A72"
                strokeWidth="1.5"
                opacity="0.2"
              />
              <path
                d="M200 200 C240 220, 280 240, 320 320"
                stroke="#5B8A72"
                strokeWidth="1.5"
                opacity="0.2"
              />

              {/* Central hub */}
              <circle cx="200" cy="200" r="8" fill="#5B8A72" opacity="0.8" />

              {/* Connection nodes */}
              <circle cx="80" cy="320" r="5" fill="#C4956A" opacity="0.7" />
              <circle cx="320" cy="80" r="5" fill="#7B9EC4" opacity="0.7" />
              <circle cx="340" cy="280" r="4" fill="#8B7BB5" opacity="0.7" />
              <circle cx="80" cy="100" r="4" fill="#C4A07B" opacity="0.7" />
              <circle cx="100" cy="300" r="3.5" fill="#7B9EC4" opacity="0.6" />
              <circle cx="340" cy="140" r="3.5" fill="#C4956A" opacity="0.6" />
              <circle cx="200" cy="80" r="3" fill="#8B7BB5" opacity="0.5" />
              <circle cx="320" cy="320" r="3" fill="#C4A07B" opacity="0.5" />
            </svg>
          </div>

          {/* Story text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-sage mb-4">
              Why Mykos
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-6">
              Named after nature&apos;s invisible
              <br />
              infrastructure.
            </h2>
            <div className="space-y-4 text-charcoal/60 font-serif leading-relaxed">
              <p>
                Underground fungal networks — mycelium — connect trees, share
                resources, and keep entire forests alive. No one sees them work.
                That&apos;s the point.
              </p>
              <p>
                A chief of staff does the same thing for people. They connect the
                dots, move things forward, and make sure nothing falls through
                the cracks.
              </p>
              <p>
                Until now, only CEOs and executives had one.{" "}
                <span className="text-charcoal font-sans font-medium">
                  Mykos changes that.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
