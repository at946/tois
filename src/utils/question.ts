import { questions } from "../questions";
import type { SceneOption } from "../types";

export function getRandomFilteredQuestionId(scene: SceneOption): number | null {
  const filtered = questions.filter((q) => {
    return scene === "all" || q.scene === scene;
  });

  if (filtered.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex].id;
}
