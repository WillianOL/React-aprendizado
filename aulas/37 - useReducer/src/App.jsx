import React from 'react';
import Exemplo from './Exemplo';

// state para o estado passado, action é a ação passada no dispath.
function reducer(state, action) {
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    case 'SOMAR10':
      return state + 10;
    case 'TIRAR10':
      return state - 10;
    default:
      throw new Error();
  }

  // if(action === 'aumentar') {
  //   return state + 1
  // }
  // if(action === 'diminuir') {
  //   return state - 1
  // }

  // return new Error('Action não existe')
}

function App() {
  // state - estado; dispath: ação a ser tomada;
  // dois argumentos, o primeiro é a função redutora(que vai executar as ações) e o estado inicial.
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <button
        onClick={() => {
          dispatch('AUMENTAR');
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch('DIMINUIR');
        }}
      >
        -
      </button>
      {state}
      <button onClick={() => dispatch('SOMAR10')}>+10</button>
      <button onClick={() => dispatch('TIRAR10')}>-10</button>
      <Exemplo />
    </>
  );
}

export default App;
