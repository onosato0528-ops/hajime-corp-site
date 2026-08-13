import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import heroImage from "../../public/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-background-deep text-white sm:min-h-screen"
    >
      <Image
        src={heroImage}
        alt="都市のオフィスから見える景色と、デスクに置かれたノートPC・スマートフォン・タブレット"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(7,8,10,0.86) 0%, rgba(7,8,10,0.62) 38%, rgba(7,8,10,0.28) 68%, rgba(7,8,10,0.12) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(5,6,7,0.55) 0%, rgba(5,6,7,0) 45%)",
        }}
      />

      <Container>
        <div className="relative flex flex-col gap-10 py-32 sm:py-40">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/50" aria-hidden="true" />
            <span className="eyebrow text-white/70">Mobile &amp; Telecom Distribution</span>
          </div>

          <h1 className="max-w-2xl text-3xl font-bold leading-[1.3] tracking-tight text-white sm:text-4xl md:text-5xl">
            モバイルとグローバル流通で、
            <br className="hidden sm:block" />
            ビジネスの未来をつなぐ。
          </h1>

          <div className="flex flex-col gap-5 border-l border-white/25 pl-6">
            <p className="max-w-md text-base leading-loose text-white/90 sm:text-lg">
              一株式会社は、スマートフォン・通信機器を中心に、仕入れ、販売、買取及び輸出入を行っています。
            </p>
            <p className="max-w-md text-sm leading-loose text-white/65 sm:text-base">
              迅速かつ誠実な対応を通じて、法人・事業者のお客様に安定した流通サービスを提供します。
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 pt-2 sm:flex-row sm:items-center">
            <Link
              href="/#business"
              className="inline-flex items-center justify-center border border-white bg-white px-9 py-4 text-sm font-medium tracking-[0.02em] text-foreground-strong transition-colors hover:bg-white/90"
            >
              事業内容を見る
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.02em] text-white"
            >
              <span className="border-b border-transparent transition-colors group-hover:border-white/70">
                お問い合わせ
              </span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 flex justify-center pb-10"
      >
        <span className="h-14 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
