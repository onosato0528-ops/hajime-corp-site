interface SectionWatermarkProps {
  word: string;
  align?: "left" | "right";
  tone?: "light" | "dark";
}

export default function SectionWatermark({
  word,
  align = "right",
  tone = "light",
}: SectionWatermarkProps) {
  const color = tone === "dark" ? "text-white/[0.04]" : "text-foreground-strong/[0.035]";
  const side = align === "right" ? "right-0" : "left-0";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 ${side} -z-0 hidden -translate-y-1/2 select-none whitespace-nowrap text-[11rem] font-bold leading-none tracking-tight sm:block lg:text-[15rem] ${color}`}
    >
      {word}
    </span>
  );
}
