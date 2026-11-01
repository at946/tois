import { Icon } from "@iconify/react";
import type { Question } from "../types";

interface Props {
  question: Question;
}

export function ShareButton({ question }: Props) {
  const shareX = () => {
    if (!question) return;
    const shareUrl = window.location.href;
    const text = `"${question.text}" #tois\n\n`;
    const params = new URLSearchParams({ text, url: shareUrl });
    window.open(
      `https://twitter.com/intent/tweet?${params.toString()}`,
      "_blank",
    );
  };

  return (
    <button
      type="button"
      onClick={shareX}
      className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-600 text-xs font-medium transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer mt-6"
      title="Xでこの問いをシェア"
    >
      <Icon
        icon="ri:twitter-x-fill"
        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110"
      />
      <span className="font-mono tracking-tight">Share</span>
    </button>
  );
}
