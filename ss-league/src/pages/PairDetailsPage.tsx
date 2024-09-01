// src/pages/PairDetailsPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Pair } from '../models/Pair';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const mockPairs: Pair[] = [
  // Los mismos datos mockeados del HomePage
];

const PairDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pair = mockPairs.find((pair) => pair.id === Number(id));

  if (!pair) {
    return <Typography variant="h6">Pareja no encontrada</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Detalles de {pair.name}
      </Typography>
      <List>
        {pair.matches.map((match) => (
          <React.Fragment key={match.id}>
            <ListItem>
              <ListItemText
                primary={`Fecha: ${match.date}`}
                secondary={`Oponente: ${match.opponent} - Resultado: ${match.result}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default PairDetailsPage;
