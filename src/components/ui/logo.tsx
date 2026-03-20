export function ArtistpreneurLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Three circles from Atlas branding */}
      <circle cx="15" cy="30" r="8" fill="#82ACFC" />
      <circle cx="30" cy="30" r="8" fill="#AB93F1" />
      <circle cx="22.5" cy="18" r="8" fill="#82ACFC" opacity="0.7" />

      {/* Artistpreneur text */}
      <text
        x="50"
        y="38"
        fontFamily="Inter, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#1A0B2E"
      >
        Artistpreneur
      </text>
    </svg>
  )
}
