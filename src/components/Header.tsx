import { SCENE_LABELS } from "../constants";
import type { SceneOption } from "../types";

interface Props {
  selectedScene: SceneOption;
  onSceneChange: (newScene: SceneOption) => void;
}

export function Header({ selectedScene, onSceneChange }: Props) {
  return (
    <header className="max-w-xl mx-auto w-full flex justify-between items-center py-4">
      <h1 className="text-xl font-bold tracking-wider text-stone-900">Tois</h1>

      {/* シーンセレクター */}
      <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
        <select
          value={selectedScene}
          onChange={(e) => onSceneChange(e.target.value as SceneOption)}
          className="bg-white border border-stone-200 px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-stone-400 transition-colors cursor-pointer"
        >
          {Object.entries(SCENE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
