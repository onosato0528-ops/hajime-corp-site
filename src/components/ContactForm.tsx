"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { contactInquiryTypes } from "@/data/company";
import { submitContactForm, type ContactFormPayload } from "@/lib/contact";

type FieldErrors = Partial<Record<keyof ContactFormPayload, string>>;

const initialFormData: ContactFormPayload = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
  agreedToPrivacyPolicy: false,
};

type SubmitStatus =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "notice"; message: string };

function validate(data: ContactFormPayload): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name.trim()) {
    errors.name = "氏名を入力してください。";
  }

  if (!data.email.trim()) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "メールアドレスの形式が正しくありません。";
  }

  if (!data.inquiryType) {
    errors.inquiryType = "お問い合わせ種別を選択してください。";
  }

  if (!data.message.trim()) {
    errors.message = "お問い合わせ内容を入力してください。";
  }

  if (!data.agreedToPrivacyPolicy) {
    errors.agreedToPrivacyPolicy = "プライバシーポリシーへの同意が必要です。";
  }

  return errors;
}

const inputClass =
  "w-full border border-border bg-background px-4 py-3.5 text-[15px] text-foreground-strong outline-none transition-colors placeholder:text-foreground/35 focus:border-accent-strong";

const labelClass = "text-[13px] font-medium tracking-[0.08em] text-foreground/55";
const requiredTagClass = "ml-2 text-[10px] font-medium normal-case tracking-normal text-accent-strong";
const optionalTagClass = "ml-2 text-[10px] font-medium normal-case tracking-normal text-foreground/40";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormPayload>(initialFormData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });
  const formId = useId();

  function updateField<K extends keyof ContactFormPayload>(
    key: K,
    value: ContactFormPayload[K]
  ) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus({ type: "submitting" });
    const result = await submitContactForm(formData);

    if (result.ok) {
      setStatus({ type: "success", message: result.message });
      setFormData(initialFormData);
      setErrors({});
    } else {
      setStatus({ type: "notice", message: result.message });
    }
  }

  const isSubmitting = status.type === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <label htmlFor={`${formId}-companyName`} className={labelClass}>
            会社名<span className={optionalTagClass}>任意</span>
          </label>
          <input
            id={`${formId}-companyName`}
            name="companyName"
            type="text"
            autoComplete="organization"
            className={inputClass}
            value={formData.companyName}
            onChange={(event) => updateField("companyName", event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor={`${formId}-name`} className={labelClass}>
            氏名<span className={requiredTagClass}>必須</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={inputClass}
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
          {errors.name ? (
            <p id={`${formId}-name-error`} className="text-xs text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <label htmlFor={`${formId}-email`} className={labelClass}>
            メールアドレス<span className={requiredTagClass}>必須</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={inputClass}
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className="text-xs text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor={`${formId}-phone`} className={labelClass}>
            電話番号<span className={optionalTagClass}>任意</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor={`${formId}-inquiryType`} className={labelClass}>
          お問い合わせ種別<span className={requiredTagClass}>必須</span>
        </label>
        <select
          id={`${formId}-inquiryType`}
          name="inquiryType"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.inquiryType)}
          aria-describedby={errors.inquiryType ? `${formId}-inquiryType-error` : undefined}
          className={inputClass}
          value={formData.inquiryType}
          onChange={(event) => updateField("inquiryType", event.target.value)}
        >
          <option value="">選択してください</option>
          {contactInquiryTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.inquiryType ? (
          <p id={`${formId}-inquiryType-error`} className="text-xs text-red-700">
            {errors.inquiryType}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor={`${formId}-message`} className={labelClass}>
          お問い合わせ内容<span className={requiredTagClass}>必須</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={inputClass}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="text-xs text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-8">
        <div className="flex items-start gap-3">
          <input
            id={`${formId}-agree`}
            name="agreedToPrivacyPolicy"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.agreedToPrivacyPolicy)}
            aria-describedby={
              errors.agreedToPrivacyPolicy ? `${formId}-agree-error` : undefined
            }
            className="mt-1 h-4 w-4 flex-shrink-0 border-border text-accent-strong"
            checked={formData.agreedToPrivacyPolicy}
            onChange={(event) => updateField("agreedToPrivacyPolicy", event.target.checked)}
          />
          <label htmlFor={`${formId}-agree`} className="text-sm leading-relaxed text-foreground">
            <Link
              href="/privacy"
              className="font-medium text-accent-strong underline underline-offset-2"
            >
              プライバシーポリシー
            </Link>
            に同意する<span className={requiredTagClass}>必須</span>
          </label>
        </div>
        {errors.agreedToPrivacyPolicy ? (
          <p id={`${formId}-agree-error`} className="text-xs text-red-700">
            {errors.agreedToPrivacyPolicy}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-5 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center border border-foreground-strong bg-foreground-strong px-9 py-4 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:border-accent-strong hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "送信中…" : "送信する"}
        </button>

        <div role="status" aria-live="polite">
          {status.type === "success" || status.type === "notice" ? (
            <p
              className={`border px-5 py-4 text-sm leading-relaxed ${
                status.type === "success"
                  ? "border-accent-strong bg-background-subtle text-foreground-strong"
                  : "border-border bg-background-subtle text-foreground"
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
