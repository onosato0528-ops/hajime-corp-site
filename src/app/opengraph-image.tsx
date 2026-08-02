import { ImageResponse } from "next/og";
import { companyInfo } from "@/data/company";

export const alt = `${companyInfo.name}｜モバイル端末・通信機器の仕入れ・販売・買取・輸出入`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "56px",
              backgroundColor: "#171717",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "24px", height: "4px", backgroundColor: "#ffffff" }} />
          </div>
          <div style={{ fontSize: 40, color: "#51606f", display: "flex" }}>
            {companyInfo.name}
          </div>
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: 56,
            fontWeight: 700,
            color: "#171717",
            display: "flex",
            lineHeight: 1.4,
          }}
        >
          モバイル端末・通信機器の
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#171717",
            display: "flex",
            lineHeight: 1.4,
          }}
        >
          仕入れ・販売・買取・輸出入
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: 28,
            color: "#262626",
            display: "flex",
          }}
        >
          東京都新宿区 / 古物商許可取得
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
