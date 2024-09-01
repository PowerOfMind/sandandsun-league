// src/hooks/usePairs.ts
import { useState, useEffect } from "react";
import { Pair } from "../models/Pair";
import { getPairs } from "../services/PairService";

const usePairs = () => {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPairs();
      setPairs(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { pairs, loading };
};

export default usePairs;
