import { useEffect, useState } from "react";
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
import { getRandomFilteredQuestionId } from "./utils/question";
import { getUrlParams, updateUrl } from "./utils/url";

export default function App() {
  useGA4();

  const [selectedScene, setSelectedScene] = useState<SceneOption>(
    () => getUrlParams().scene,
  );

  const [questionId, setQuestionId] = useState<number | null>(() => {
    const { qId, scene } = getUrlParams();
    if (qId !== null) return qId;
    return getRandomFilteredQuestionId(scene);
  });

  useEffect(() => {
    updateUrl(questionId, selectedScene);
  }, [questionId, selectedScene]);

  const currentQuestion: Question | undefined = questions.find(
    (q) => q.id === questionId,
  );

  const handleNextCard = () => {
    const nextId = getRandomFilteredQuestionId(selectedScene);
    setQuestionId(nextId);
    updateUrl(nextId, selectedScene);
  };

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
