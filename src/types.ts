export type Depth = "light" | "medium" | "deep";
export type DepthOption = Depth | "all";

export interface Question {
  id: number;
  text: string;
  depth: Depth;
  source: {
    theory: string;
    description: string;
  };
}
