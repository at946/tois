import { Icon } from "@iconify/react";

interface Props {
  onClick: () => void;
}

export function NextQuestionButton({ onClick }: Props) {
  return (
    <div className="mt-8 w-full">
      <button
        type="button"
        onClick={onClick}
        className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 px-6 rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
      >
        <Icon icon="lucide:refresh-cw" className="w-4 h-4" />
        <span>次の問いを引く</span>
      </button>
    </div>
  );
}
