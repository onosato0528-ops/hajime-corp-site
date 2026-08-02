import { siteConfig } from "@/config/site";

export interface ContactFormPayload {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  agreedToPrivacyPolicy: boolean;
}

export interface ContactSubmitResult {
  ok: boolean;
  message: string;
}

/**
 * お問い合わせフォームの送信処理。
 *
 * NEXT_PUBLIC_CONTACT_FORM_ENDPOINT が未設定の間は、実際の送信は行わず
 * 「準備中」である旨を明確に伝えます（送信完了したように見せない）。
 *
 * 送信先を有効にする方法（README参照）：
 * - Formspree 等のフォーム送信サービスのエンドポイントURLを設定する
 * - Resend 等を利用する自前のサーバーAPI（例: /api/contact）を実装し、そのURLを設定する
 * いずれの場合も、下記の fetch 呼び出し部分はそのまま利用できる想定です。
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactSubmitResult> {
  const endpoint = siteConfig.contactFormEndpoint;

  if (!endpoint) {
    return {
      ok: false,
      message:
        "送信機能は現在準備中です。お急ぎの場合はお電話またはメールにて直接ご連絡ください。",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`送信に失敗しました (status: ${response.status})`);
    }

    return {
      ok: true,
      message: "お問い合わせを送信しました。担当者よりご連絡いたします。",
    };
  } catch {
    return {
      ok: false,
      message:
        "送信中にエラーが発生しました。お手数ですが、お電話またはメールにて直接ご連絡ください。",
    };
  }
}
