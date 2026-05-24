export function Sparkle({
  className = "",
  size = 20,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`animate-sparkle text-primary ${className}`}
      style={{ animationDelay: `${delay}s` }}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0l1.8 8.2L22 10l-8.2 1.8L12 20l-1.8-8.2L2 10l8.2-1.8L12 0z" />
    </svg>
  );
}
