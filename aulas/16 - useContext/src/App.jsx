import React from 'react';
import Usuario from './Usuario';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    // Envolver os componentes na função que retornar os dados do contexto
    <GlobalStorage>
      <Usuario />
    </GlobalStorage>
  );
}

export default App;
