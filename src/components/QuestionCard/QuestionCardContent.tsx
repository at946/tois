import { SCENE_LABELS } from "../../constants";
import type { Question } from "../../types";

interface Props {
  question: Question;
}

export function QuestionCardContent({ question }: Props) {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-4">
        <span className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
          {SCENE_LABELS[question.scene]}
        </span>
      </div>

      <div className="my-auto">
        <p
          className="text-xl md:text-2xl font-medium leading-relaxed text-stone-900 text-center"
          style={{ wordBreak: "auto-phrase" }}
        >
          {question.text}
        </p>
      </div>

      <div className="pt-6 border-t border-stone-100 text-center">
        <span
          className="text-xs text-stone-600 font-mono"
          title={question.source.description}
        >
          {question.source.theory}
        </span>
      </div>
    </>
  );
}
