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
  points?: string[];
  highlight?: {
    label: string;
    value: string;
  };
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
  phone: "080-5304-8540",
  phoneHref: "tel:08053048540",
  email: "onosato0528@gmail.com",
  emailHref: "mailto:onosato0528@gmail.com",
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
    id: "mobile-distribution",
    title: "モバイル端末・通信機器の流通事業",
    description:
      "新品・中古のスマートフォンをはじめとするモバイル端末、通信機器及び周辺機器の仕入れ、販売、買取及び輸出入を行っています。",
    points: [
      "スマートフォンの仕入れ",
      "スマートフォンの販売",
      "スマートフォンの買取",
      "法人向け端末販売",
      "国内外への販売",
      "輸出入業務",
      "通信機器及び周辺機器の販売",
    ],
  },
  {
    id: "secondhand-dealer",
    title: "古物事業",
    description:
      "東京都公安委員会の許可を取得し、古物営業法を遵守した適正な買取及び販売を行っています。",
    highlight: {
      label: companyInfo.license.authority,
      value: `古物商許可番号 ${companyInfo.license.number}`,
    },
  },
  {
    id: "ec-web",
    title: "EC・Web事業",
    description:
      "インターネットを利用した商品の販売並びにWebサイト、Webコンテンツ及び各種サービスの企画、制作、運営を行っています。",
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
