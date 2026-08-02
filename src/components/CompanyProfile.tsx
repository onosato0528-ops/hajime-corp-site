import Container from "./Container";
import SectionHeading from "./SectionHeading";
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
      <Container>
        <SectionHeading eyebrow="Company" title="会社概要" />

        <div className="mt-16 overflow-x-auto border-b border-border">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <caption className="sr-only">一株式会社の会社概要</caption>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <th
                    scope="row"
                    className="w-40 whitespace-nowrap py-6 pr-6 text-left align-top text-[13px] font-medium tracking-wide text-foreground/55 sm:w-56"
                  >
                    {row.label}
                  </th>
                  <td className="py-6 align-top text-[15px] leading-loose text-foreground-strong">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
