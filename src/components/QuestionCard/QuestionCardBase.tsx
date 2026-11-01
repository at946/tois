import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function QuestionCardBase({ children }: Props) {
  return (
    <div className="w-full bg-white border border-stone-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col justify-between min-h-65 md:min-h-75">
      {children}
    </div>
  );
}
