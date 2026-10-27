// functions/_middleware.ts
import { questions } from "../src/data/questions";

export const onRequest: PagesFunction[] = [
  async (context) => {
    const response = await context.next();
    const url = new URL(context.request.url);
    const _userAgent = context.request.headers.get("user-agent") || "";

    // XやTwitterなどのボット判定、あるいは通常のアクセスでも動的に差し替える場合
    const qId = url.searchParams.get("q");
    if (!qId) return response;

    const questionId = parseInt(qId, 10);
    const target = questions.find((q) => q.id === questionId);
    if (!target) return response;

    // 動的なOGP画像のURL
    const ogImageUrl = `${url.origin}/api/og?q=${target.id}`;
    const pageTitle = `Tois — 「${target.text}」`;

    // HTMLRewriterを使って静的HTMLの<head>内メタタグを動的に書き換える
    return new HTMLRewriter()
      .on("meta[property='og:title']", {
        element(el) {
          el.setAttribute("content", pageTitle);
        },
      })
      .on("meta[property='og:image']", {
        element(el) {
          el.setAttribute("content", ogImageUrl);
        },
      })
      .on("meta[name='twitter:card']", {
        element(el) {
          el.setAttribute("content", "summary_large_image");
        },
      })
      .on("meta[name='twitter:title']", {
        element(el) {
          el.setAttribute("content", pageTitle);
        },
      })
      .on("meta[name='twitter:image']", {
        element(el) {
          el.setAttribute("content", ogImageUrl);
        },
      })
      .transform(response);
  },
];
