import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NextQuestionButton } from "./components/NextQuestionButton";
import { EmptyContent } from "./components/QuestionCard/EmptyContent";
import { QuestionCardBase } from "./components/QuestionCard/QuestionCardBase";
import { QuestionCardContent } from "./components/QuestionCard/QuestionCardContent";
import { ShareButton } from "./components/ShareButton";
import { questions } from "./data/questions";
import { useGA4 } from "./hooks/useGA4";
import type { Question, SceneOption } from "./types";
import { getUrlParams, updateUrl } from "./utils/url";

// 指定されたシーンからランダムに1つの問いを選ぶ
function getRandomFilteredQuestionId(scene: SceneOption): number | null {
  const filtered = questions.filter((q) => {
    return scene === "all" || q.scene === scene;
  });

  if (filtered.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex].id;
}

// --- Component ---

export default function App() {
  useGA4();

  // URL初期値の読み込み
  const [selectedScene, setSelectedScene] = useState<SceneOption>(
    () => getUrlParams().scene,
  );

  const [questionId, setQuestionId] = useState<number | null>(() => {
    const { qId, scene } = getUrlParams();
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

      <Footer />
    </div>
  );
}
