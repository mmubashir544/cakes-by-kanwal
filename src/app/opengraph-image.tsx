import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE_NAME } from "@/lib/seo";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoPath = join(process.cwd(), "public", "images", "logo.png");
  const logoBase64 = readFileSync(logoPath).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf7f2",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, #f6d9db 0%, rgba(246,217,219,0) 45%), radial-gradient(circle at 85% 85%, #f5f1e9 0%, rgba(245,241,233,0) 55%)",
        }}
      >
        <img
          src={logoSrc}
          alt={SITE_NAME}
          width={220}
          height={220}
          style={{
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(90, 69, 71, 0.25)",
            marginBottom: 36,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontFamily: "serif",
            color: "#5a4547",
            fontWeight: 700,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            fontFamily: "serif",
            color: "#a23a51",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Custom Cakes &bull; Cupcakes &bull; Macarons
        </div>
      </div>
    ),
    { ...size }
  );
}
