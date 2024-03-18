import React from 'react';
// import Sobre from './Sobre';
const Sobre = React.lazy(() => import('./Sobre'));

function App() {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Sobre />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(!ativo)}>Carregar</button>
    </>
  );
}

export default App;
