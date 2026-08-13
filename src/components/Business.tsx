import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { businessItems } from "@/data/company";
import deviceImage from "../../public/images/business-device.jpg";
import logisticsImage from "../../public/images/business-logistics.jpg";
import handshakeImage from "../../public/images/trust-handshake.jpg";

const galleryImages = [
  {
    src: deviceImage,
    alt: "オフィスのデスクに並べられたスマートフォンとタブレット",
    label: "Devices",
    caption: "モバイル端末・通信機器",
  },
  {
    src: logisticsImage,
    alt: "物流拠点と世界地図が重なる、国内外への流通イメージ",
    label: "Logistics",
    caption: "国内外への流通ネットワーク",
  },
  {
    src: handshakeImage,
    alt: "オフィスで交わされる誠実な取引の握手",
    label: "Partnership",
    caption: "誠実な取引と信頼関係",
  },
];

export default function Business() {
  return (
    <section id="business" className="bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Business"
          title="事業内容"
          lead="モバイル端末・通信機器を中心に、仕入れから販売まで一貫した流通事業を展開しています。"
        />

        <Reveal delay={100} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
          {galleryImages.map((image) => (
            <figure key={image.alt} className="group flex flex-col border border-border">
              <div className="relative aspect-[4/5] overflow-hidden bg-background-subtle sm:aspect-[3/4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="flex flex-col gap-1 px-5 py-4 sm:px-6 sm:py-5">
                <span className="eyebrow text-accent">{image.label}</span>
                <span className="text-sm text-foreground/70">{image.caption}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <div className="mt-16 flex flex-col divide-y divide-border border-t border-border sm:mt-20">
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
