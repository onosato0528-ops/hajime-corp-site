import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Business from "@/components/Business";
import LicenseInformation from "@/components/LicenseInformation";
import Strengths from "@/components/Strengths";
import Philosophy from "@/components/Philosophy";
import CompanyProfile from "@/components/CompanyProfile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "一株式会社｜モバイル端末・通信機器の仕入れ・販売・買取・輸出入",
  description:
    "一株式会社は、東京都新宿区を拠点に、スマートフォン・通信機器の仕入れ、販売、買取及び輸出入を行う企業です。古物商許可を取得し、法人・事業者のお客様との安定した取引を行っています。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Business />
        <LicenseInformation />
        <Strengths />
        <Philosophy />
        <CompanyProfile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
