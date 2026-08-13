import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionWatermark from "./SectionWatermark";
import { companyInfo } from "@/data/company";

interface ProfileRow {
  label: string;
  value: React.ReactNode;
}

export default function CompanyProfile() {
  const rows: ProfileRow[] = [
    { label: "会社名", value: companyInfo.name },
    {
      label: companyInfo.representativeTitle,
      value: companyInfo.representativeName,
    },
    { label: "所在地", value: companyInfo.fullAddress },
    { label: "設立", value: companyInfo.established },
    { label: "資本金", value: companyInfo.capital },
    { label: "法人番号", value: companyInfo.corporateNumber },
    {
      label: "電話番号",
      value: (
        <a href={companyInfo.phoneHref} className="hover:text-accent-strong">
          {companyInfo.phone}
        </a>
      ),
    },
    {
      label: "メールアドレス",
      value: (
        <a href={companyInfo.emailHref} className="hover:text-accent-strong">
          {companyInfo.email}
        </a>
      ),
    },
    {
      label: "古物商許可",
      value: `${companyInfo.license.authority} ${companyInfo.license.number}`,
    },
    {
      label: "事業内容",
      value: (
        <ul className="flex flex-col gap-2.5">
          {companyInfo.businessScope.map((scope) => (
            <li key={scope} className="flex gap-2.5">
              <span className="mt-[0.6em] h-px w-3 flex-shrink-0 bg-accent" />
              <span>{scope}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section id="company" className="bg-background-subtle py-28 sm:py-36">
      <div className="relative overflow-hidden">
        <SectionWatermark word="COMPANY" align="right" />
        <Container>
          <SectionHeading eyebrow="Company" title="会社概要" />
        </Container>
      </div>
      <Container>
        <Reveal delay={100} className="mt-16 border-b border-border">
          <table className="w-full table-fixed border-collapse text-sm">
            <caption className="sr-only">一株式会社の会社概要</caption>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <th
                    scope="row"
                    className="w-20 py-7 pr-3 text-left align-top text-[12px] font-medium leading-relaxed tracking-[0.02em] text-foreground/50 sm:w-48 sm:py-8 sm:pr-6 sm:text-[13px] sm:tracking-[0.04em]"
                  >
                    {row.label}
                  </th>
                  <td className="py-7 align-top text-sm leading-relaxed text-foreground-strong sm:py-8 sm:text-[15px]">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
