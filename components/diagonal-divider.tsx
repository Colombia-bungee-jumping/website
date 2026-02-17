interface DiagonalDividerProps {
  fromColor?: string
  toColor?: string
  direction?: "left" | "right"
  className?: string
}

export function DiagonalDivider({
  fromColor = "hsl(var(--background))",
  toColor = "hsl(var(--secondary))",
  direction = "right",
  className = "",
}: DiagonalDividerProps) {
  const points =
    direction === "right"
      ? "0,0 100,0 100,100"
      : "0,0 100,0 0,100"

  return (
    <div className={`relative h-20 sm:h-28 lg:h-36 -mt-px -mb-px ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <polygon points="0,0 100,0 100,100 0,100" fill={fromColor} />
        <polygon points={points} fill={toColor} />
      </svg>
    </div>
  )
}
