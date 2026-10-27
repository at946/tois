// functions/api/og.tsx
import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";
import { questions } from "../../src/data/questions";

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const idStr = url.searchParams.get("q");

  // qパラメータがない場合は、サービスのデフォルトOGP画像を生成
  if (!idStr) {
    return new ImageResponse(
      // @ts-expect-error
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafaf9",
          padding: "80px",
          fontFamily: "sans-serif",
          border: "16px solid #e7e5e4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{ fontSize: "28px", fontWeight: "bold", color: "#1c1917" }}
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
            tois.pages.dev
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
      },
    );
  }

  // 個別の問いがある場合（既存の処理）
  const questionId = parseInt(idStr, 10);
  const target = questions.find((q) => q.id === questionId) || questions[0];

  return new ImageResponse(
    // @ts-expect-error
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fafaf9",
        padding: "80px",
        fontFamily: "sans-serif",
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
          style={{ fontSize: "28px", fontWeight: "bold", color: "#1c1917" }}
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
    },
  );
};
