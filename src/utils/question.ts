import { questions } from "../data/questions";
import type { DepthOption } from "../types";

export function getRandomFilteredQuestionId(depth: DepthOption): number | null {
  const filtered = questions.filter((q) => {
    return depth === "all" || q.depth === depth;
  });

  if (filtered.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex].id;
}
