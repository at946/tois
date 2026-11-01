export type Scene = "checkin" | "self" | "team";

export interface Question {
  id: number;
  text: string;
  scene: Scene;
  source: {
    theory: string;
    description: string;
    url?: string;
  };
}
