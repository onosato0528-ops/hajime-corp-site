import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { businessItems } from "@/data/company";

export default function Business() {
  return (
    <section id="business" className="bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Business"
          title="事業内容"
          lead="モバイル端末・通信機器を中心に、仕入れから販売まで一貫した流通事業を展開しています。"
        />

        <div className="mt-20 flex flex-col divide-y divide-border border-t border-border">
          {businessItems.map((item, index) => (
            <article
              key={item.id}
              className="grid gap-6 py-14 md:grid-cols-[7rem_1fr] md:gap-x-12 md:py-16"
            >
              <span className="text-sm font-medium tracking-[0.1em] text-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold tracking-tight text-foreground-strong sm:text-2xl">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-sm leading-loose text-foreground sm:text-base">
                  {item.description}
                </p>

                {item.points ? (
                  <ul className="grid gap-x-8 gap-y-2.5 pt-2 text-sm leading-relaxed text-foreground sm:grid-cols-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-[0.6em] h-px w-3 flex-shrink-0 bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.highlight ? (
                  <div className="mt-2 inline-flex flex-col gap-1 self-start border border-border px-6 py-4">
                    <p className="text-xs tracking-wide text-foreground/60">
                      {item.highlight.label}
                    </p>
                    <p className="text-sm font-bold text-foreground-strong sm:text-base">
                      {item.highlight.value}
                    </p>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
