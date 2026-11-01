export type Scene = "checkin" | "self" | "team";
export type SceneOption = Scene | "all";

export interface Question {
  id: number;
  text: string;
  scene: Scene;
  source: {
    theory: string;
    description: string;
  };
}
