import type { Question } from "../../types";
import { EmptyContent } from "./EmptyContent";
import { QuestionCardContent } from "./QuestionCardContent";

interface Props {
  question: Question;
}

export function QuestionCard({ question }: Props) {
  return (
    <div className="w-full bg-white border border-stone-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-65 md:min-h-75">
      {!question ? (
        <EmptyContent />
      ) : (
        <QuestionCardContent question={question} />
      )}
    </div>
  );
}
