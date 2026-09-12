/**
 * Delicate botanical crest inspired by traditional letterpress wedding stationery
 */
export default function BotanicalCrest({ className = "w-16 h-16 text-[#8C8275]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central delicate stem */}
      <path
        d="M50 88C50 68 50 32 50 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Top bud / blossom */}
      <path
        d="M50 12C48 9 46 6 50 4C54 6 52 9 50 12Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Left branch leaves */}
      <path
        d="M50 24C44 22 38 18 36 14C38 20 44 24 50 25"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 36C42 34 34 29 32 24C34 31 42 37 50 38"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 48C40 46 31 41 28 35C31 43 41 49 50 50"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 60C41 58 32 53 29 47C32 55 42 61 50 62"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 72C43 71 36 67 34 62C36 68 44 73 50 74"
        fill="currentColor"
        opacity="0.75"
      />

      {/* Right branch leaves */}
      <path
        d="M50 24C56 22 62 18 64 14C62 20 56 24 50 25"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 36C58 34 66 29 68 24C66 31 58 37 50 38"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 48C60 46 69 41 72 35C69 43 59 49 50 50"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 60C59 58 68 53 71 47C68 55 58 61 50 62"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M50 72C57 71 64 67 66 62C64 68 56 73 50 74"
        fill="currentColor"
        opacity="0.75"
      />

      {/* Subtle delicate berries / dots */}
      <circle cx="43" cy="20" r="1.2" fill="currentColor" />
      <circle cx="57" cy="20" r="1.2" fill="currentColor" />
      <circle cx="39" cy="32" r="1.2" fill="currentColor" />
      <circle cx="61" cy="32" r="1.2" fill="currentColor" />
      <circle cx="36" cy="45" r="1.2" fill="currentColor" />
      <circle cx="64" cy="45" r="1.2" fill="currentColor" />
      <circle cx="37" cy="58" r="1.2" fill="currentColor" />
      <circle cx="63" cy="58" r="1.2" fill="currentColor" />
    </svg>
  );
}
