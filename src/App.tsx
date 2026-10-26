import { Icon } from "@iconify/react";
import { useState } from "react";
import { type Question, questions } from "./questions";

export default function App() {
  const getRandomQuestion = (currentId?: number): Question => {
    let filtered = questions;
    if (currentId !== undefined && questions.length > 1) {
      filtered = questions.filter((q) => q.id !== currentId);
    }
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
  };

  const [currentQuestion, setCurrentQuestion] = useState<Question>(() =>
    getRandomQuestion(),
  );

  const handleNextCard = () => {
    const next = getRandomQuestion(currentQuestion.id);
    setCurrentQuestion(next);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col justify-between p-6 select-none">
      {/* ヘッダー */}
      <header className="max-w-xl mx-auto w-full flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:sparkles" className="w-5 h-5 text-stone-700" />
          <h1 className="text-xl font-bold tracking-wider text-stone-900">
            Tois
          </h1>
        </div>
        <span className="text-xs text-stone-500 font-mono">
          #{currentQuestion.id}
        </span>
      </header>

      {/* メインカードエリア */}
      <main className="max-w-xl mx-auto w-full my-auto flex flex-col items-center">
        <div className="w-full bg-white border border-stone-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-65 md:min-h-75 transition-all duration-300">
          <div className="my-auto">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-stone-900 text-center">
              {currentQuestion.text}
            </p>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-stone-100">
            {currentQuestion.source.url ? (
              <a
                href={currentQuestion.source.url}
                target="_blank"
                rel="noopener noreferrer"
                title={currentQuestion.source.description}
                className="text-xs text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline font-mono transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>#{currentQuestion.source.theory}</span>
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
                #{currentQuestion.source.theory}
              </span>
            )}

            <span className="text-xs text-stone-400 font-mono">Tois</span>
          </div>
        </div>

        {/* 次の問いを引くボタン（全幅でシンプルに配置） */}
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
      </main>

      {/* フッター */}
      <footer className="max-w-xl mx-auto w-full text-center py-4 text-xs text-stone-500">
        Tois — A minimal tool for reflection and dialogue.
      </footer>
    </div>
  );
}
