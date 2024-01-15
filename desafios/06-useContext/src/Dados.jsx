import React from 'react';
import { GlobalContext } from './GlobalContext';

const Dados = () => {
  const { produto } = React.useContext(GlobalContext);
  console.log(produto);

  if (produto === null) return null;
  return (
    <div>
      <h2>Produto: {produto[3].nome}</h2>
    </div>
  );
};

export default Dados;
