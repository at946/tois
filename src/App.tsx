import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { type Question, questions, type Scene } from "./questions";

const GA_MEASUREMENT_ID = "G-47SEHKC1BC";

// --- Label Mappings ---

const SCENE_LABELS: Record<Scene | "all", string> = {
  all: "場面: すべて",
  checkin: "チェックイン",
  self: "内省",
  team: "チーム",
};

// --- Helpers ---

// 指定されたシーンからランダムに1つの問いを選ぶ
function getRandomFilteredQuestionId(scene: Scene | "all"): number | null {
  const filtered = questions.filter((q) => {
    return scene === "all" || q.scene === scene;
  });

  if (filtered.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex].id;
}

function getInitialUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const scene = (params.get("scene") as Scene) || "all";

  return {
    qId: q ? parseInt(q, 10) : null,
    scene,
  };
}

function updateUrl(qId: number | null, scene: Scene | "all") {
  const params = new URLSearchParams();
  if (qId !== null) params.set("q", qId.toString());
  if (scene !== "all") params.set("scene", scene);

  const newSearch = params.toString();
  const newUrl = newSearch ? `/?${newSearch}` : "/";
  window.history.replaceState({}, "", newUrl);
}

// --- Component ---

export default function App() {
  // GA4の動的ロード（本番環境のみ）
  useEffect(() => {
    if (!import.meta.env.PROD) {
      console.log("[GA4] Development mode: Tracking disabled.");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inlineScript);

    console.log("[GA4] Production mode: Tracking enabled.");
  }, []);

  // URL初期値の読み込み
  const [selectedScene, setSelectedScene] = useState<Scene | "all">(
    () => getInitialUrlParams().scene,
  );

  const [questionId, setQuestionId] = useState<number | null>(() => {
    const { qId, scene } = getInitialUrlParams();
    if (qId !== null) return qId;

    const initialId = getRandomFilteredQuestionId(scene);
    if (initialId !== null) {
      updateUrl(initialId, scene);
    }
    return initialId;
  });

  // IDに該当する問いを取得
  const currentQuestion: Question | undefined = questions.find(
    (q) => q.id === questionId,
  );

  // 次の問いを引く
  const handleNextCard = () => {
    const nextId = getRandomFilteredQuestionId(selectedScene);
    setQuestionId(nextId);
    updateUrl(nextId, selectedScene);
  };

  // 場面フィルター変更
  const handleSceneChange = (newScene: Scene | "all") => {
    setSelectedScene(newScene);
    const nextId = getRandomFilteredQuestionId(newScene);
    setQuestionId(nextId);
    updateUrl(nextId, newScene);
  };

  const handleShareX = () => {
    if (!currentQuestion) return;
    const shareUrl = window.location.href; // 場面・IDが入ったフルURLをシェア
    const text = `"${currentQuestion.text}" #tois\n\n`;
    const params = new URLSearchParams({ text, url: shareUrl });
    window.open(
      `https://twitter.com/intent/tweet?${params.toString()}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-between p-6 select-none">
      {/* ヘッダー & フィルター */}
      <header className="max-w-xl mx-auto w-full flex justify-between items-center py-4">
        <h1 className="text-xl font-bold tracking-wider text-stone-900">
          Tois
        </h1>

        {/* シーンセレクター */}
        <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
          <select
            value={selectedScene}
            onChange={(e) => handleSceneChange(e.target.value as Scene | "all")}
            className="bg-white border border-stone-200 px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
          >
            {Object.entries(SCENE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* メインコンテンツエリア */}
      <main className="max-w-xl mx-auto w-full my-auto flex flex-col items-center">
        {!currentQuestion ? (
          /* 不正なIDまたは該当する問いがないときのエラー画面 */
          <div className="w-full bg-white border border-stone-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col items-center justify-center text-center min-h-65 md:min-h-75">
            <p className="text-lg font-medium text-stone-600 mb-2">
              問いが見つかりませんでした
            </p>
            <p className="text-xs text-stone-400 mb-6">
              選択した場面に合致する問いが存在しないか、不正なIDです。
            </p>
            <button
              type="button"
              onClick={handleNextCard}
              className="bg-stone-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            >
              条件をリセットして問いを引く
            </button>
          </div>
        ) : (
          /* 正常に問いが表示されるカード */
          <>
            <div className="w-full bg-white border border-stone-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-65 md:min-h-75 transition-all duration-300">
              {/* カード上部：属性タグのバッジ表示 */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                  {SCENE_LABELS[currentQuestion.scene]}
                </span>
              </div>

              <div className="my-auto">
                <p
                  className="text-xl md:text-2xl font-medium leading-relaxed text-stone-900 text-center"
                  style={{ wordBreak: "auto-phrase" }}
                >
                  {currentQuestion.text}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 text-center">
                {currentQuestion.source.url ? (
                  <a
                    href={currentQuestion.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={currentQuestion.source.description}
                    className="text-xs text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline font-mono transition-colors flex items-center gap-1 cursor-pointer justify-center"
                  >
                    <span>{currentQuestion.source.theory}</span>
                    <Icon
                      icon="lucide:external-link"
                      className="w-3 h-3 opacity-70"
                    />
                  </a>
                ) : (
                  <span
                    className="text-xs text-stone-600 font-mono"
                    title={currentQuestion.source.description}
                  >
                    {currentQuestion.source.theory}
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleShareX}
              className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-600 text-xs font-medium transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer mt-6"
              title="Xでこの問いをシェア"
            >
              <Icon
                icon="ri:twitter-x-fill"
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110"
              />
              <span className="font-mono tracking-tight">Share</span>
            </button>
          </>
        )}

        {/* 次の問いを引くボタン */}
        {currentQuestion && (
          <div className="mt-8 w-full">
            <button
              type="button"
              onClick={handleNextCard}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 px-6 rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
            >
              <Icon icon="lucide:refresh-cw" className="w-4 h-4" />
              <span>次の問いを引く</span>
            </button>
          </div>
        )}
      </main>

      {/* フッター */}
      <footer className="max-w-xl mx-auto w-full text-center py-4 text-xs text-stone-500">
        Tois — A minimal tool for reflection and dialogue.
      </footer>
    </div>
  );
}
