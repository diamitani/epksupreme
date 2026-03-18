export function ArtistpreneurLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Icon - Musical note with entrepreneur spark */}
      <g transform="translate(10, 10)">
        <circle cx="15" cy="25" r="5" fill="url(#grad1)" />
        <rect x="19" y="12" width="3" height="18" fill="url(#grad1)" rx="1.5" />
        <path
          d="M 22 12 Q 30 8, 32 12 L 32 22 Q 30 18, 22 22 Z"
          fill="url(#grad1)"
        />
        <path
          d="M 25 5 L 27 8 L 24 8 Z"
          fill="#FCD34D"
        />
      </g>

      {/* Text */}
      <text
        x="50"
        y="35"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="url(#grad1)"
      >
        Artistpreneur
      </text>
    </svg>
  )
}
