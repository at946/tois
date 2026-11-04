import type { Depth, DepthOption } from "../types";

export function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const depth = (params.get("depth") as Depth) || "all";

  return {
    qId: q ? parseInt(q, 10) : null,
    depth,
  };
}

export function updateUrl(qId: number | null, depth: DepthOption) {
  const params = new URLSearchParams();
  if (qId !== null) params.set("q", qId.toString());
  if (depth !== "all") params.set("depth", depth);

  const newSearch = params.toString();
  const newUrl = newSearch ? `/?${newSearch}` : "/";
  window.history.replaceState({}, "", newUrl);
}
