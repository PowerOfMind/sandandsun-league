// src/services/PairService.ts
import { Pair } from "../models/Pair";

const mockPairs: Pair[] = [
  {
    id: 1,
    name: "Pareja 1",
    matches: [
      { id: 1, date: "2023-08-01", opponent: "Pareja 2", result: "win" },
      { id: 2, date: "2023-08-15", opponent: "Pareja 3", result: "loss" },
    ],
  },
  {
    id: 2,
    name: "Pareja 2",
    matches: [
      { id: 3, date: "2023-08-05", opponent: "Pareja 1", result: "loss" },
    ],
  },
  {
    id: 3,
    name: "Pareja 3",
    matches: [
      { id: 4, date: "2023-08-10", opponent: "Pareja 1", result: "win" },
    ],
  },
];

export const getPairs = async (): Promise<Pair[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPairs), 500); // Simula retardo de red
  });
};

export const getPairById = async (id: number): Promise<Pair | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPairs.find((pair) => pair.id === id)), 500);
  });
};
