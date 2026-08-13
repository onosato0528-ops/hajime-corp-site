import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const headingColor = tone === "dark" ? "text-foreground-on-dark" : "text-foreground-strong";
  const leadColor = tone === "dark" ? "text-foreground-on-dark-muted" : "text-foreground";
  const ruleColor = tone === "dark" ? "bg-foreground-on-dark-muted" : "bg-accent";
  const eyebrowColor = tone === "dark" ? "text-foreground-on-dark-muted" : "text-accent";

  return (
    <Reveal className={`flex flex-col gap-6 ${alignClass}`}>
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span className={`h-px w-8 ${ruleColor}`} aria-hidden="true" />
          <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
        </div>
      ) : null}
      <h2
        className={`text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl ${headingColor}`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`max-w-2xl text-base leading-loose sm:text-lg ${leadColor}`}>{lead}</p>
      ) : null}
    </Reveal>
  );
}
