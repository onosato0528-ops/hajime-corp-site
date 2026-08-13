import Image from "next/image";
import Container from "./Container";
import cityImage from "../../public/images/philosophy.jpg";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-background-deep py-32 sm:py-44">
      <Image
        src={cityImage}
        alt="晴天の下に立ち並ぶガラス張りのオフィスビル群"
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background-deep/80"
      />

      <Container>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-foreground-on-dark-muted" aria-hidden="true" />
            <span className="eyebrow text-foreground-on-dark-muted">Philosophy</span>
            <span className="h-px w-8 bg-foreground-on-dark-muted" aria-hidden="true" />
          </div>

          <h2 className="text-3xl font-bold leading-[1.3] tracking-tight text-foreground-on-dark sm:text-4xl md:text-5xl">
            信頼を第一に。
          </h2>

          <p className="max-w-xl text-base leading-loose text-foreground-on-dark-muted sm:text-lg">
            一株式会社は、安心、迅速、誠実な取引を通じて、お客様と長期的な信頼関係を築くことを大切にしています。変化の速いモバイル市場において、適正かつ円滑な流通を支える企業を目指します。
          </p>
        </div>
      </Container>
    </section>
  );
}
