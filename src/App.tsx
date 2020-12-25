import React from 'react';
import MenuSorteios from './components/menu-sorteios/MenuSorteios';
import DisplayNumero from './components/display-numero/DisplayNumero';
import { Box } from 'bumbag';

function App() {
  return (
    <Box height="100vh">
      <MenuSorteios />
      <DisplayNumero />
    </Box>
  );
}

export default App;
