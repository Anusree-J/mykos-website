export function MykosLogo({
  size = 40,
  expressive = false,
}: {
  size?: number;
  expressive?: boolean;
}) {
  const height = size;
  const width = size * 1.2;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main mycelium line */}
      <path
        d="M4 32 C10 32, 12 12, 18 12 C24 12, 22 28, 28 28 C34 28, 34 8, 40 8"
        stroke="#5B8A72"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Branch */}
      <path
        d="M28 28 C32 28, 36 18, 44 16"
        stroke="#5B8A72"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Connection dots */}
      {expressive && (
        <>
          <circle cx="18" cy="12" r="3.5" fill="#8B7BB5" opacity="0.9" />
          <circle cx="40" cy="8" r="3" fill="#7B9EC4" opacity="0.9" />
          <circle cx="4" cy="32" r="3" fill="#C4956A" opacity="0.9" />
        </>
      )}
      {!expressive && (
        <>
          <circle cx="18" cy="12" r="3" fill="#5B8A72" opacity="0.6" />
          <circle cx="40" cy="8" r="2.5" fill="#5B8A72" opacity="0.5" />
        </>
      )}
    </svg>
  );
}
