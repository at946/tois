export function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const scene = (params.get("scene") as Scene) || "all";

  return {
    qId: q ? parseInt(q, 10) : null,
    scene,
  };
}

export function updateUrl(qId: number | null, scene: SceneOption) {
  const params = new URLSearchParams();
  if (qId !== null) params.set("q", qId.toString());
  if (scene !== "all") params.set("scene", scene);

  const newSearch = params.toString();
  const newUrl = newSearch ? `/?${newSearch}` : "/";
  window.history.replaceState({}, "", newUrl);
}
