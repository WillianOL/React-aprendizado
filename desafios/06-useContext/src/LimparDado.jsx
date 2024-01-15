import React from 'react';
import { GlobalContext } from './GlobalContext';

const LimparDado = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar dados</button>;
};

export default LimparDado;
