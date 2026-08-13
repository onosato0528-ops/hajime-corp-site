import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${companyInfo.name}｜モバイル端末・通信機器の仕入れ・販売・買取・輸出入`,
    template: `%s｜${companyInfo.name}`,
  },
  description:
    "一株式会社は、東京都新宿区を拠点に、スマートフォン・通信機器の仕入れ、販売、買取及び輸出入を行う企業です。古物商許可を取得し、法人・事業者のお客様との安定した取引を行っています。",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: companyInfo.name,
    description:
      "一株式会社は、東京都新宿区を拠点に、スマートフォン・通信機器の仕入れ、販売、買取及び輸出入を行う企業です。古物商許可を取得し、法人・事業者のお客様との安定した取引を行っています。",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  description:
    "スマートフォン・通信機器の仕入れ、販売、買取及び輸出入を行う流通企業。古物商許可取得済み。",
  telephone: companyInfo.phone,
  email: companyInfo.email,
  foundingDate: "2024-03-28",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "法人番号",
    value: companyInfo.corporateNumber,
  },
  address: {
    "@type": "PostalAddress",
    postalCode: companyInfo.postalCode.replace("〒", ""),
    addressRegion: "東京都",
    streetAddress: companyInfo.address,
    addressCountry: "JP",
  },
  founder: {
    "@type": "Person",
    name: companyInfo.representativeName,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
