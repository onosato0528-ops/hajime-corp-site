import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { companyInfo } from "@/data/company";

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="お問い合わせ"
          lead="お取引、端末の仕入れ・販売、その他事業に関するお問い合わせは、電話またはメールよりご連絡ください。"
        />

        <div className="mt-20 grid gap-16 md:grid-cols-[minmax(0,280px)_1fr] md:gap-20">
          <div className="flex flex-col gap-10 border-t border-border pt-10 md:border-t-0 md:pt-0">
            <div>
              <p className="eyebrow text-foreground/45">Tel</p>
              <a
                href={companyInfo.phoneHref}
                className="mt-3 block text-2xl font-bold tracking-tight text-foreground-strong hover:text-accent-strong"
              >
                {companyInfo.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow text-foreground/45">Mail</p>
              <a
                href={companyInfo.emailHref}
                className="mt-3 block break-all text-lg font-bold tracking-tight text-foreground-strong hover:text-accent-strong"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
