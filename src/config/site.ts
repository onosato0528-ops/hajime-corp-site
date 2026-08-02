/**
 * サイト全体の設定値。
 * 公開URLが確定していない段階では環境変数 NEXT_PUBLIC_SITE_URL は未設定のままにし、
 * 下記のプレースホルダーURLでビルド・確認を行ってください。
 * 公開URLが確定したら .env.local 等に NEXT_PUBLIC_SITE_URL を設定してください（README参照）。
 */
const DEFAULT_SITE_URL = "https://example.com";

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  /** 公開URL（末尾スラッシュなし） */
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL),
  /** 公開URLが確定しているかどうか */
  isUrlConfirmed: Boolean(process.env.NEXT_PUBLIC_SITE_URL?.trim()),
  /**
   * お問い合わせフォームの送信先エンドポイント。
   * 未設定の間はフォーム送信を行わず「準備中」の案内を表示します。
   * Formspree / Resend / 自前のサーバーAPIのURLを設定すると送信が有効になります（README参照）。
   */
  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() || "",
  locale: "ja_JP",
} as const;
