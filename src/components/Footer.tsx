import Link from "next/link";
import Container from "./Container";
import { companyInfo } from "@/data/company";

const footerLinks = [
  { label: "事業内容", href: "/#business" },
  { label: "会社概要", href: "/#company" },
  { label: "お問い合わせ", href: "/#contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-subtle">
      <Container>
        <div className="grid gap-14 py-20 sm:py-24 md:grid-cols-[1fr_auto] md:gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-base font-bold tracking-tight text-foreground-strong">
              {companyInfo.name}
            </p>
            <p className="text-sm leading-loose text-foreground/70">{companyInfo.fullAddress}</p>
            <p className="text-sm text-foreground/70">
              電話：
              <a href={companyInfo.phoneHref} className="hover:text-accent-strong">
                {companyInfo.phone}
              </a>
            </p>
            <p className="text-sm text-foreground/70">
              メール：
              <a href={companyInfo.emailHref} className="hover:text-accent-strong">
                {companyInfo.email}
              </a>
            </p>
            <p className="text-sm text-foreground/70">
              {companyInfo.license.authority} 古物商許可番号 {companyInfo.license.number}
            </p>
          </div>

          <nav aria-label="フッターメニュー" className="flex flex-col gap-4 md:items-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 transition-colors hover:text-accent-strong"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border py-8">
          <p className="text-xs tracking-wide text-foreground/45">
            Copyright © {year} {companyInfo.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
