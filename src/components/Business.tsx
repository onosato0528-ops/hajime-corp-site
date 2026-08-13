import Image, { type StaticImageData } from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import { businessItems } from "@/data/company";
import mobileImage from "../../public/images/business-mobile.jpg";
import deviceImage from "../../public/images/business-device.jpg";
import logisticsImage from "../../public/images/business-logistics.jpg";

const images: Record<string, { src: StaticImageData; alt: string }> = {
  "mobile-devices": {
    src: mobileImage,
    alt: "暗い背景に置かれた複数のスマートフォンとタブレット",
  },
  trading: {
    src: deviceImage,
    alt: "明るいオフィスのデスクに並ぶスマートフォンとノートパソコン",
  },
  logistics: {
    src: logisticsImage,
    alt: "世界地図と物流拠点、コンテナ船が重なる国際物流のイメージ",
  },
};

export default function Business() {
  return (
    <section id="business" className="bg-background py-28 sm:py-36">
      <div className="relative overflow-hidden">
        <SectionWatermark word="BUSINESS" align="right" />
        <Container>
          <SectionHeading
            eyebrow="Business"
            title="事業内容"
            lead="モバイル端末・通信機器を中心に、仕入れから販売まで一貫した流通事業を展開しています。"
          />
        </Container>
      </div>
      <Container>
        <div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-20 md:mt-24 md:gap-0 md:divide-y md:divide-border md:border-t md:border-border">
          {businessItems.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            const image = images[item.id];
            const reversed = index % 2 === 1;

            return (
              <Reveal key={item.id} delay={index * 80}>
                <article>
                  {/* Mobile: full-bleed image with overlaid number/title, description below */}
                  <div className="md:hidden">
                    <div className="relative -mx-6 aspect-[3/4] overflow-hidden bg-background-subtle sm:-mx-8">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        placeholder="blur"
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                        <span
                          aria-hidden="true"
                          className="text-6xl font-bold leading-none tracking-tight text-white/30"
                        >
                          {number}
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-loose text-foreground">
                      {item.description}
                    </p>
                  </div>

                  {/* Desktop: alternating text / image columns */}
                  <div className="hidden md:grid md:grid-cols-2 md:items-center md:gap-16 md:py-20 lg:gap-20">
                    <div className={reversed ? "md:order-2" : "md:order-1"}>
                      <span
                        aria-hidden="true"
                        className="block text-7xl font-bold leading-none tracking-tight text-foreground/10 lg:text-8xl"
                      >
                        {number}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground-strong lg:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-6 max-w-md text-base leading-loose text-foreground lg:text-lg">
                        {item.description}
                      </p>
                    </div>
                    <div
                      className={`relative aspect-[4/5] overflow-hidden bg-background-subtle ${
                        reversed ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
