/**
 * 会社情報の一元管理ファイル。
 * サイト内で表示する会社名・所在地・許可情報等はすべてここから参照してください。
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface BusinessItem {
  id: string;
  title: string;
  description: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
}

export interface ContactInquiryType {
  value: string;
  label: string;
}

export const companyInfo = {
  name: "一株式会社",
  nameReading: "イチ株式会社",
  representativeTitle: "代表取締役",
  representativeName: "橋野 一",
  postalCode: "〒160-0022",
  address: "東京都新宿区新宿二丁目15番29号 Relink SHINJUKU 503",
  get fullAddress() {
    return `${this.postalCode} ${this.address}`;
  },
  established: "2024年3月28日",
  capital: "100万円",
  phone: "03-4400-1446",
  phoneHref: "tel:0344001446",
  email: "hashino@hajime83.co.jp",
  emailHref: "mailto:hashino@hajime83.co.jp",
  license: {
    authority: "東京都公安委員会",
    number: "第304362418154号",
  },
  /**
   * 法人番号（国税庁 法人番号公表サイトで確認済み、13桁）。
   * 会社法人等番号（登記関連の12桁番号: 0111-01-106765）とは異なる番号体系のため、
   * 表示・引用の際は混同しないこと。
   */
  corporateNumber: "2011101106765",

  businessScope: [
    "コンピュータ、ゲーム機器、携帯電話、通信機器及び周辺機器の製造、販売及び輸出入",
    "イベントの企画、立案、制作、実施及び管理並びにコンサルティング",
    "Webサイト、Webコンテンツ及びインターネットサービスの企画、制作、販売、配信、運営及び管理",
    "通信販売業",
    "古物営業法に基づく古物営業",
    "前各号に付帯又は関連する事業",
  ],
} as const;

export const primaryNavItems: NavItem[] = [
  { label: "事業内容", href: "/#business" },
  { label: "当社の特徴", href: "/#strengths" },
  { label: "企業理念", href: "/#philosophy" },
  { label: "会社概要", href: "/#company" },
];

export const contactNavItem: NavItem = { label: "お問い合わせ", href: "/#contact" };

export const businessItems: BusinessItem[] = [
  {
    id: "mobile-devices",
    title: "モバイル端末・通信機器",
    description:
      "スマートフォンを中心に、モバイル端末、通信機器及び周辺機器を取り扱っています。新品・中古を問わず、幅広いラインナップに対応します。",
  },
  {
    id: "trading",
    title: "仕入れ・販売・買取",
    description:
      "法人・事業者のお客様を対象に、端末の仕入れ、販売及び買取を行っています。買取は古物営業法に基づき、適正に実施しています。",
  },
  {
    id: "logistics",
    title: "国内外への流通・輸出入",
    description:
      "国内外の取引先への商品流通及び輸出入を行い、円滑なグローバル供給網の構築に取り組んでいます。",
  },
];

export const strengthItems: StrengthItem[] = [
  {
    id: "speed",
    title: "迅速な対応",
    description: "仕入れから販売まで、円滑でスピード感のある対応を心がけています。",
  },
  {
    id: "integrity",
    title: "誠実な取引",
    description: "法令を遵守し、正確で透明性のある取引を重視しています。",
  },
  {
    id: "global",
    title: "国内外の流通に対応",
    description: "国内外の取引に対応し、商品の円滑な流通に取り組んでいます。",
  },
];

export const contactInquiryTypes: ContactInquiryType[] = [
  { value: "purchase", label: "仕入れに関するお問い合わせ" },
  { value: "sales", label: "販売に関するお問い合わせ" },
  { value: "buyback", label: "買取に関するお問い合わせ" },
  { value: "corporate", label: "法人取引に関するお問い合わせ" },
  { value: "other", label: "その他" },
];
