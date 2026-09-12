/**
 * Ornamental frame and corner accents inspired by traditional formal letterpress stationery
 */
export function OrnamentalCorner({ position = "top-left" }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotationClass = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-4 text-[#BDB5A7] ${rotationClass}`}
      aria-hidden="true"
    >
      <path
        d="M2 22V8C2 4.68629 4.68629 2 8 2H22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function SectionDivider({ title }: { title?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-8 w-full max-w-xs mx-auto">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8C0B2] to-transparent" />
      {title ? (
        <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[#8C8275]">
          {title}
        </span>
      ) : (
        <div className="w-1.5 h-1.5 rotate-45 border border-[#A39274] bg-[#FAF8F5]" />
      )}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8C0B2] to-transparent" />
    </div>
  );
}
