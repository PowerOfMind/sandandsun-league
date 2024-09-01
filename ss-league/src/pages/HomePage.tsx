// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import PairList from '../components/PairList';
import { Pair } from '../models/Pair';
import { getPairs } from '../services/PairService';
import { CircularProgress, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPairs();
        setPairs(data);
      } catch {
        setError('Error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <PairList pairs={pairs} />
    </div>
  );
};

export default HomePage;
