import Container from "./Container";
import Reveal from "./Reveal";
import { companyInfo } from "@/data/company";

export default function LicenseInformation() {
  return (
    <section id="license" className="border-y border-border bg-background-subtle py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span className="eyebrow text-accent">License</span>
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground-strong sm:text-3xl">
            古物商許可情報
          </h2>
          <p className="mt-2 max-w-md text-sm leading-loose text-foreground sm:text-base">
            当社は古物営業法に基づき、以下の許可を取得しています。
          </p>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto mt-14 max-w-xl px-4">
          <span className="absolute -left-1 -top-1 h-6 w-6 border-l border-t border-foreground-strong/40" />
          <span className="absolute -right-1 -top-1 h-6 w-6 border-r border-t border-foreground-strong/40" />
          <span className="absolute -bottom-1 -left-1 h-6 w-6 border-b border-l border-foreground-strong/40" />
          <span className="absolute -bottom-1 -right-1 h-6 w-6 border-b border-r border-foreground-strong/40" />

          <div className="flex flex-col items-center gap-4 border-y border-border px-10 py-14 text-center sm:px-16">
            <p className="text-xs tracking-[0.14em] text-foreground/60">
              {companyInfo.license.authority}
            </p>
            <p className="text-xl font-bold tracking-tight text-foreground-strong sm:text-2xl">
              古物商許可番号
            </p>
            <p className="text-2xl font-bold tracking-[0.06em] text-foreground-strong sm:text-3xl">
              {companyInfo.license.number}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
