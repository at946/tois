import { useState } from "react";
import { Header } from "./components/Header";
import { NextQuestionButton } from "./components/NextQuestionButton";
import { EmptyContent } from "./components/QuestionCard/EmptyContent";
import { QuestionCardBase } from "./components/QuestionCard/QuestionCardBase";
import { QuestionCardContent } from "./components/QuestionCard/QuestionCardContent";
import { ShareButton } from "./components/ShareButton";
import { useGA4 } from "./hooks/useGA4";
import { questions } from "./questions";
import type { Question, Scene, SceneOption } from "./types";

// 指定されたシーンからランダムに1つの問いを選ぶ
function getRandomFilteredQuestionId(scene: SceneOption): number | null {
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

function updateUrl(qId: number | null, scene: SceneOption) {
  const params = new URLSearchParams();
  if (qId !== null) params.set("q", qId.toString());
  if (scene !== "all") params.set("scene", scene);

  const newSearch = params.toString();
  const newUrl = newSearch ? `/?${newSearch}` : "/";
  window.history.replaceState({}, "", newUrl);
}

// --- Component ---

export default function App() {
  useGA4();

  // URL初期値の読み込み
  const [selectedScene, setSelectedScene] = useState<SceneOption>(
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
  const handleSceneChange = (newScene: SceneOption) => {
    setSelectedScene(newScene);
    const nextId = getRandomFilteredQuestionId(newScene);
    setQuestionId(nextId);
    updateUrl(nextId, newScene);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-between p-6 select-none">
      <Header selectedScene={selectedScene} onSceneChange={handleSceneChange} />

      <main className="max-w-xl mx-auto w-full my-auto flex flex-col items-center">
        <QuestionCardBase>
          {!currentQuestion ? (
            <EmptyContent />
          ) : (
            <QuestionCardContent question={currentQuestion} />
          )}
        </QuestionCardBase>

        {currentQuestion && <ShareButton question={currentQuestion} />}

        <NextQuestionButton onClick={handleNextCard} />
      </main>

      {/* フッター */}
      <footer className="max-w-xl mx-auto w-full text-center py-4 text-xs text-stone-500">
        Tois — A minimal tool for reflection and dialogue.
      </footer>
    </div>
  );
}
