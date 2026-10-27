/// <reference types="@cloudflare/workers-types" />
import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";
import { questions } from "./questions";

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    _ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/api/og") {
      try {
        // Noto Sans JP のフォントデータを外部から取得（Satori用）
        const fontData = await fetch(
          "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-jp@latest/japanese-400-normal.ttf",
        ).then((res) => res.arrayBuffer());

        const idStr = url.searchParams.get("q");

        // --- デフォルトOGP ---
        if (!idStr) {
          return new ImageResponse(
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#fafaf9",
                padding: "80px",
                fontFamily: "Noto Sans JP, sans-serif",
                border: "16px solid #e7e5e4",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#1c1917",
                  }}
                >
                  Tois
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1,
                  padding: "0 40px",
                  gap: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#1c1917",
                    lineHeight: 1.3,
                  }}
                >
                  A minimal tool for reflection and dialogue.
                </p>
                <p style={{ fontSize: "24px", color: "#78716c" }}>
                  問いを通じて、思考の前提を揺さぶる。
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "2px solid #e7e5e4",
                  paddingTop: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    color: "#57534e",
                    fontFamily: "monospace",
                  }}
                >
                  tois.workers.dev
                </span>
                <span
                  style={{
                    fontSize: "22px",
                    color: "#a8a29e",
                    fontFamily: "monospace",
                  }}
                >
                  Reflection App
                </span>
              </div>
            </div>,
            {
              width: 1200,
              height: 630,
              fonts: [
                {
                  name: "Noto Sans JP",
                  data: fontData,
                  weight: 400,
                  style: "normal",
                },
              ],
            },
          );
        }

        // --- 個別の問いのOGP ---
        const questionId = parseInt(idStr, 10);
        const target =
          questions.find(
            (q: { id: number; text: string; source: { theory: string } }) =>
              q.id === questionId,
          ) || questions[0];

        return new ImageResponse(
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#fafaf9",
              padding: "80px",
              fontFamily: "Noto Sans JP, sans-serif",
              border: "16px solid #e7e5e4",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#1c1917",
                }}
              >
                Tois
              </span>
              <span
                style={{
                  fontSize: "24px",
                  color: "#78716c",
                  fontFamily: "monospace",
                }}
              >
                #{target.id}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                padding: "0 40px",
              }}
            >
              <p
                style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  color: "#1c1917",
                  lineHeight: 1.4,
                  textAlign: "center",
                }}
              >
                {target.text}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "2px solid #e7e5e4",
                paddingTop: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  color: "#57534e",
                  fontFamily: "monospace",
                }}
              >
                #{target.source.theory}
              </span>
              <span
                style={{
                  fontSize: "22px",
                  color: "#a8a29e",
                  fontFamily: "monospace",
                }}
              >
                A minimal tool for reflection
              </span>
            </div>
          </div>,
          {
            width: 1200,
            height: 630,
            fonts: [
              {
                name: "Noto Sans JP",
                data: fontData,
                weight: 400,
                style: "normal",
              },
            ],
          },
        );
      } catch (e: any) {
        // エラー発生時に詳細を出力してError 1101の原因を特定
        return new Response(
          `OGP Generation Error: ${e?.message || e}\n${e?.stack}`,
          {
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
          },
        );
      }
    }

    // 2. OGPタグ書き換え & 静的ファイル配信
    const qId = url.searchParams.get("q");
    const assetResponse = await env.ASSETS.fetch(request);

    if (
      qId &&
      assetResponse.headers.get("content-type")?.includes("text/html")
    ) {
      const questionId = parseInt(qId, 10);
      const target = questions.find(
        (q: { id: number; text: string }) => q.id === questionId,
      );

      if (target) {
        const ogImageUrl = `${url.origin}/api/og?q=${target.id}`;
        const pageTitle = `Tois — 「${target.text}」`;

        return new HTMLRewriter()
          .on("meta[property='og:title']", {
            element(el: Element) {
              el.setAttribute("content", pageTitle);
            },
          })
          .on("meta[property='og:image']", {
            element(el: Element) {
              el.setAttribute("content", ogImageUrl);
            },
          })
          .on("meta[name='twitter:title']", {
            element(el: Element) {
              el.setAttribute("content", pageTitle);
            },
          })
          .on("meta[name='twitter:image']", {
            element(el: Element) {
              el.setAttribute("content", ogImageUrl);
            },
          })
          .transform(assetResponse);
      }
    }

    return assetResponse;
  },
};
