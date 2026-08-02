import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${companyInfo.name}のプライバシーポリシーです。個人情報の取得、利用目的、管理及び第三者提供等について定めています。`,
  alternates: {
    canonical: "/privacy",
  },
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. 個人情報の取得",
    body: (
      <p>
        当社は、お問い合わせフォームその他の方法により、氏名、会社名、電話番号、メールアドレス等の個人情報を、適法かつ公正な手段によって取得します。
      </p>
    ),
  },
  {
    title: "2. 利用目的",
    body: (
      <>
        <p>当社は、取得した個人情報を以下の目的の範囲内で利用します。</p>
        <ul className="mt-5 flex flex-col gap-3">
          <li className="flex gap-3">
            <span className="mt-[0.6em] h-px w-3 flex-shrink-0 bg-accent" />
            <span>お問い合わせ、ご相談への対応及び連絡のため</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[0.6em] h-px w-3 flex-shrink-0 bg-accent" />
            <span>商品の仕入れ、販売、買取及び輸出入に関する取引の実施及び管理のため</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[0.6em] h-px w-3 flex-shrink-0 bg-accent" />
            <span>古物営業法その他の法令に基づく本人確認及び記録の保存のため</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[0.6em] h-px w-3 flex-shrink-0 bg-accent" />
            <span>当社サービスに関する案内、重要事項の通知のため</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. 適正な管理",
    body: (
      <p>
        当社は、取得した個人情報の漏えい、滅失又は毀損の防止その他の安全管理のために必要かつ適切な措置を講じ、個人情報を適正に管理します。
      </p>
    ),
  },
  {
    title: "4. 第三者提供",
    body: (
      <p>
        当社は、法令に基づく場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することはありません。
      </p>
    ),
  },
  {
    title: "5. 業務委託",
    body: (
      <p>
        当社は、利用目的の達成に必要な範囲において、個人情報の取扱いの全部又は一部を第三者に委託する場合があります。この場合、委託先に対して適切な監督を行います。
      </p>
    ),
  },
  {
    title: "6. 開示、訂正及び削除",
    body: (
      <p>
        ご本人からご自身の個人情報について開示、訂正、追加、削除又は利用停止のご請求をいただいた場合、当社所定の方法によりご本人であることを確認のうえ、法令に従い合理的な範囲で速やかに対応します。ご希望の際は、下記お問い合わせ窓口までご連絡ください。
      </p>
    ),
  },
  {
    title: "7. Cookie等の利用",
    body: (
      <p>
        当サイトは、現時点では利用者を識別するCookie等を用いた機能を提供しておりません。今後、サイトの利便性向上等を目的としてCookieを利用する場合には、本ポリシーを改定し、利用目的等を明示します。
      </p>
    ),
  },
  {
    title: "8. アクセス解析について",
    body: (
      <p>
        {/*
          将来的に Google Analytics 等のアクセス解析ツールを導入する場合は、
          本文を「導入済み」の内容に修正し、取得する情報（Cookie、IPアドレス等）、
          利用目的、オプトアウトの方法、解析ツール提供事業者のプライバシーポリシーへの
          リンクを追記してください。
        */}
        当サイトでは、現時点でGoogle Analytics等のアクセス解析ツールを導入していません。今後導入する場合には、取得する情報の内容及び利用目的を本ポリシーに明記のうえ公表します。
      </p>
    ),
  },
  {
    title: "9. お問い合わせ窓口",
    body: (
      <div className="flex flex-col gap-2">
        <p>個人情報の取扱いに関するお問い合わせは、下記窓口までご連絡ください。</p>
        <p className="mt-2 font-medium text-foreground-strong">{companyInfo.name}</p>
        <p>
          電話：
          <a href={companyInfo.phoneHref} className="hover:text-accent-strong">
            {companyInfo.phone}
          </a>
        </p>
        <p>
          メール：
          <a href={companyInfo.emailHref} className="hover:text-accent-strong">
            {companyInfo.email}
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "10. 方針の変更",
    body: (
      <p>
        当社は、法令の変更及び事業内容の変化等に応じて、本ポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
      </p>
    ),
  },
  {
    title: "11. 制定日",
    body: <p>2026年8月2日 制定</p>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-28 sm:py-36">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              <span className="eyebrow text-accent">Privacy Policy</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground-strong sm:text-4xl">
              プライバシーポリシー
            </h1>
            <p className="max-w-2xl text-sm leading-loose text-foreground sm:text-base">
              {companyInfo.name}（以下「当社」といいます。）は、お客様の個人情報の重要性を認識し、以下のとおりプライバシーポリシーを定め、個人情報の保護に努めます。
            </p>
          </div>

          <div className="mx-auto mt-20 flex max-w-3xl flex-col divide-y divide-border border-t border-border">
            {sections.map((section) => (
              <section key={section.title} className="flex flex-col gap-5 py-12">
                <h2 className="text-lg font-bold tracking-tight text-foreground-strong">
                  {section.title}
                </h2>
                <div className="text-sm leading-loose text-foreground sm:text-[15px] [&_a]:font-medium [&_a]:text-accent-strong [&_a]:underline [&_a]:underline-offset-2">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
