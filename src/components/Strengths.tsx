import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { strengthItems } from "@/data/company";

const icons: Record<string, React.ReactNode> = {
  speed: (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M6 20L14 8L22 20"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 20L14 12L19 20" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  integrity: (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="18" height="18" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M10 14L13 17L19 10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  global: (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.25" />
      <ellipse cx="14" cy="14" rx="4" ry="9" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5 14H23" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  ),
};

export default function Strengths() {
  return (
    <section id="strengths" className="bg-background-subtle py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Why Us" title="当社の特徴" />

        <div className="mt-20 grid divide-y divide-border border-t border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {strengthItems.map((item) => (
            <article key={item.id} className="flex flex-col gap-6 py-12 md:px-10 md:py-14 md:first:pl-0 md:last:pr-0">
              <div className="text-accent-strong">{icons[item.id]}</div>
              <h3 className="text-lg font-bold tracking-tight text-foreground-strong">
                {item.title}
              </h3>
              <p className="text-sm leading-loose text-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
