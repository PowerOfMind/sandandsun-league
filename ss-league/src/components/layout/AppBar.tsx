// src/components/layout/AppBar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import { useNavigate } from 'react-router-dom';

const MyAppBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
          <SportsVolleyballIcon />
        </IconButton>
        <Typography variant="h6">
          Liga de Vóley Playa
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
