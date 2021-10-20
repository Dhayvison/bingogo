import React from 'react';
import Div100vh from 'react-div-100vh';
import DisplayNumero from './components/display-numero/DisplayNumero';
import MenuSorteios from './components/menu-sorteios/MenuSorteios';

function App() {
  return (
    <Div100vh>
      <MenuSorteios />
      <DisplayNumero />
    </Div100vh>
  );
}

export default App;
