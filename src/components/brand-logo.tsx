type BrandLogoProps = {
  height?: number;
  variant?: "default" | "onDark";
};

/**
 * Compact Star Limp wordmark + star icon. Inlined so the "limp" text color
 * can adapt to dark mode (the source SVG hard-codes `#2B2B2B`).
 */
export default function BrandLogo({ height = 40, variant = "default" }: BrandLogoProps) {
  const limpColor = variant === "onDark" ? "#FFFFFF" : "var(--sl-brand-text, #2B2B2B)";
  const width = (height * 600) / 140;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 140"
      width={width}
      height={height}
      role="img"
      aria-label="Star Limp"
    >
      <title>Star Limp</title>
      <g transform="translate(310, 70) rotate(-8) scale(0.75)">
        <g stroke="#0098D8" strokeWidth={3} strokeLinecap="round" opacity={0.7}>
          <line x1={0} y1={-95} x2={0} y2={-78} />
          <line x1={68} y1={-68} x2={58} y2={-58} />
          <line x1={-68} y1={-68} x2={-58} y2={-58} />
          <line x1={85} y1={0} x2={72} y2={0} />
        </g>
        <path
          d="M 0,-65 L 19,-20 L 65,-15 L 30,15 L 40,60 L 0,35 L -40,60 L -30,15 L -65,-15 L -19,-20 Z"
          fill="#0098D8"
        />
        <path
          d="M 0,-40 L 11,-12 L 38,-9 L 18,9 L 24,36 L 0,21 L -24,36 L -18,9 L -38,-9 L -11,-12 Z"
          fill="#5BC0EB"
          opacity={0.6}
        />
      </g>
      <text
        x={40}
        y={100}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={92}
        fontWeight={700}
        fill="#0098D8"
        fontStyle="italic"
      >
        Star
      </text>
      <text
        x={380}
        y={100}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={92}
        fontWeight={700}
        fill={limpColor}
        fontStyle="italic"
      >
        limp
      </text>
    </svg>
  );
}
