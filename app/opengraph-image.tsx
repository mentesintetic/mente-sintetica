import { ImageResponse } from "next/og";

export const alt = "Mente Sintética — Automação e Inteligência Artificial para Negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#09090B", color: "#FAFAFA", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="56" viewBox="0 0 48 40">
            <polygon points="2,38 9,38 17,16 10,16" fill="#FF5500" />
            <polygon points="15,38 22,38 34,6 27,6" fill="#FF5500" />
            <polygon points="28,38 35,38 46,14 39,14" fill="#FF5500" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 4 }}>MENTE SINTÉTICA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          <div>Menos trabalho repetitivo.</div>
          <div style={{ color: "#FF5500", fontStyle: "italic" }}>Mais crescimento.</div>
        </div>
        <div style={{ fontSize: 28, color: "#A1A1AA" }}>Automação de processos · Assistentes de IA · mentesintetica.com.br</div>
      </div>
    ),
    size
  );
}
