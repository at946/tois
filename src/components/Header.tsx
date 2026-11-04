import { DEPTH_LABELS } from "../constants";
import type { DepthOption } from "../types";

interface Props {
  selectedDepth: DepthOption;
  onDepthChange: (newDepth: DepthOption) => void;
}

export function Header({ selectedDepth, onDepthChange }: Props) {
  return (
    <header className="max-w-xl mx-auto w-full flex justify-between items-center py-4">
      <h1 className="text-xl font-bold tracking-wider text-stone-900">Tois</h1>

      {/* シーンセレクター */}
      <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
        <select
          value={selectedDepth}
          onChange={(e) => onDepthChange(e.target.value as DepthOption)}
          className="bg-white border border-stone-200 px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
        >
          {Object.entries(DEPTH_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
