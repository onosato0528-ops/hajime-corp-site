# 一株式会社 コーポレートサイト

Next.js（App Router）+ TypeScript + Tailwind CSS で構築した、一株式会社のコーポレートサイトです。

## 技術スタック

- Next.js 16（App Router / Turbopack）
- TypeScript
- Tailwind CSS v4
- システムフォント（Google Fonts 等の外部フォント読み込みなし）

## 起動方法（開発サーバー）

```bash
npm install
npm run dev
```

`http://localhost:3000` を開いて確認してください。

## ビルド方法

```bash
npm run build
npm run start
```

`npm run lint` でESLint、`npx tsc --noEmit` でTypeScriptの型チェックを実行できます。

## ディレクトリ構成（主なもの）

```
src/
  app/
    layout.tsx          … 全体レイアウト、metadataBase、Organization構造化データ
    page.tsx             … トップページ（各セクションを組み立て）
    privacy/page.tsx      … プライバシーポリシーページ
    sitemap.ts            … sitemap.xml
    robots.ts             … robots.txt
    icon.svg               … favicon（仮デザイン）
    opengraph-image.tsx    … OGP画像（動的生成）
  components/            … Header, Hero, Business, Strengths, Philosophy,
                            CompanyProfile, LicenseInformation, Contact,
                            ContactForm, Footer など
  data/company.ts        … 会社情報の一元管理ファイル（★変更はここ）
  config/site.ts          … 公開URL・お問い合わせ送信先などの環境設定
  lib/contact.ts           … お問い合わせフォームの送信処理
```

## 会社情報の変更場所

会社名・所在地・代表者・資本金・古物商許可番号・事業内容など、サイト内で使用する会社情報はすべて [`src/data/company.ts`](src/data/company.ts) に集約しています。表記を変更したい場合はこのファイルのみを編集してください。ヘッダーのナビゲーション項目やお問い合わせ種別の選択肢もここで管理しています。

## お問い合わせフォームを実際に送信可能にする方法

現在、お問い合わせフォーム（[`src/components/ContactForm.tsx`](src/components/ContactForm.tsx) / [`src/lib/contact.ts`](src/lib/contact.ts)）は送信先エンドポイントが未設定のため、必須項目のバリデーションは行いますが、実際の送信は行わず「送信機能は現在準備中です」という案内を表示します（送信完了したように見せない仕様です）。

実際に送信できるようにするには、環境変数 `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` に送信先のURLを設定してください（`.env.example` を参考に `.env.local` を作成）。

```bash
# .env.local
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

- **Formspree等のフォーム送信サービスを使う場合**：発行されたエンドポイントURLをそのまま設定するだけで送信できます。
- **Resendや自前のサーバーAPIを使う場合**：`/api/contact` のようなRoute Handlerを実装し（メール送信処理はResend等のSDKを利用）、そのURL（例: `/api/contact`）を設定してください。`src/lib/contact.ts` の `submitContactForm` は `fetch(endpoint, { method: "POST", body: JSON.stringify(payload) })` という一般的な形でPOSTするだけの実装なので、送信先API側がこのリクエストを受け取れる形であればそのまま接続できます。

## 公開URLの設定場所

公開URLが未確定のため、現状は `https://example.com` を仮URLとして使用しています（`src/config/site.ts`）。canonical URL、OGP、sitemap.xml、robots.txt、構造化データ（Organization JSON-LD）はすべてこの設定値を参照しています。

公開URLが決まったら、環境変数 `NEXT_PUBLIC_SITE_URL` を設定してください。

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://example.co.jp
```

## 法人番号について

[`src/data/company.ts`](src/data/company.ts) の `corporateNumber`（値: `2011101106765`）が、国税庁 法人番号公表サイトで確認済みの13桁の法人番号です。会社概要テーブル（[`CompanyProfile.tsx`](src/components/CompanyProfile.tsx)）および構造化データ（`layout.tsx` のOrganization JSON-LD の `identifier`）に反映済みです。

- 会社法人等番号（登記関連の12桁番号: `0111-01-106765`）とは異なる番号体系のため、今後この値を変更する際は混同しないよう注意してください。
- 番号自体を変更する場合は、`src/data/company.ts` の `corporateNumber` のみを更新すれば、会社概要テーブルと構造化データの両方に反映されます。

## アクセス解析について

現時点でGoogle Analytics等のアクセス解析ツールは導入していません。プライバシーポリシー（[`src/app/privacy/page.tsx`](src/app/privacy/page.tsx)）にもその旨を記載しています。将来的に導入する場合は、同ファイル内の「8. アクセス解析について」セクション付近のコメントを参照し、取得する情報・利用目的等を明記するよう本文を修正してください。

## 公開前に確認すべき項目

- [ ] `NEXT_PUBLIC_SITE_URL` に本番の公開URLを設定したか
- [ ] `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` を設定し、お問い合わせフォームの送信先を本番用に接続したか（未設定のままだと「準備中」表示のままになります）
- [ ] 会社概要・法人番号・古物商許可番号・所在地・電話番号・メールアドレス等の内容に誤りがないか
- [ ] favicon（`src/app/icon.svg`）・OGP画像（`src/app/opengraph-image.tsx`）が仮デザインのままで問題ないか、正式なデザインに差し替える必要がないか
- [ ] `npm run build` がエラーなく通ることを本番デプロイ前に再確認したか
- [ ] プライバシーポリシーの内容が実際の運用（Cookie利用の有無、アクセス解析の導入有無等）と一致しているか
