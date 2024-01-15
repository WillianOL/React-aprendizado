import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Dados from './Dados';
import LimparDado from './LimparDado';

function App() {
  return (
    <GlobalStorage>
      <Dados />
      <LimparDado />
    </GlobalStorage>
  );
}

export default App;
