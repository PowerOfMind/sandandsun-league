// src/components/PairList.tsx
import React from 'react';
import { Pair } from '../models/Pair';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PairListProps {
  pairs: Pair[];
}

const PairList: React.FC<PairListProps> = ({ pairs }) => {
  const navigate = useNavigate();

  const handlePairClick = (pairId: number) => {
    navigate(`/pairs/${pairId}`);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lista de Parejas
      </Typography>
      <List>
        {pairs.map((pair) => (
          <React.Fragment key={pair.id}>
            <ListItem component="li" onClick={() => handlePairClick(pair.id)}>
              <ListItemText 
                primary={pair.name} 
                secondary={`Partidos Jugados: ${pair.matches.length}`} 
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default PairList;
