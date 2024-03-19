import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADICIONAR':
      return [...state, action.value];
    case 'REMOVER':
      return state.filter((item) => item !== action.value);
    default:
      return new Error();
  }
}

const Exemplo = () => {
  const [state, dispath] = React.useReducer(reducer, ['Cadeira', 'Mesa']);

  return (
    <div>
      <h1>Exemplo simples</h1>
      <button onClick={() => dispath({ type: 'REMOVER', value: 'Cadeira' })}>
        Remover cadeira
      </button>
      <button onClick={() => dispath({ type: 'ADICIONAR', value: 'Pratos' })}>
        Adicionar pratos
      </button>
      {state}
    </div>
  );
};

export default Exemplo;
