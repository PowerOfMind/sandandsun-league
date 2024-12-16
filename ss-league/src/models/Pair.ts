// src/models/Pair.ts
export interface Match {
  id: number;
  date: string;
  opponent: string;
  result: "win" | "loss";
}

export interface Pair {
  id: number;
  name: string;
  matches: Match[];
}
