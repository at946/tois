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
import type { DepthOption, Question } from "./types";
import { getRandomFilteredQuestionId } from "./utils/question";
import { getUrlParams, updateUrl } from "./utils/url";

export default function App() {
  useGA4();

  const [selectedDepth, setSelectedDepth] = useState<DepthOption>(
    () => getUrlParams().depth,
  );

  const [questionId, setQuestionId] = useState<number | null>(() => {
    const { qId, depth } = getUrlParams();
    if (qId !== null) return qId;
    return getRandomFilteredQuestionId(depth);
  });

  useEffect(() => {
    updateUrl(questionId, selectedDepth);
  }, [questionId, selectedDepth]);

  const currentQuestion: Question | undefined = questions.find(
    (q) => q.id === questionId,
  );

  const handleNextCard = () => {
    const nextId = getRandomFilteredQuestionId(selectedDepth);
    setQuestionId(nextId);
    updateUrl(nextId, selectedDepth);
  };

  const handleDepthChange = (newDepth: DepthOption) => {
    setSelectedDepth(newDepth);
    const nextId = getRandomFilteredQuestionId(newDepth);
    setQuestionId(nextId);
    updateUrl(nextId, newDepth);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-between p-6 select-none">
      <Header selectedDepth={selectedDepth} onDepthChange={handleDepthChange} />

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
