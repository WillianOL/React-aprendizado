import React from 'react';
import { GlobalContext } from './GlobalContext';

const Usuario = () => {
  // Com o .useContext passamos o contexto para termos acesso aos valores e funções criados
  // e passados através do Provider.
  // Desestruturando os dados passados no contexto global
  const { ativo, trocarEstado } = React.useContext(GlobalContext);

  return (
    <div>
      <p>Usuário: {ativo ? 'Ativo' : 'inativo'}</p>
      <button onClick={trocarEstado}>Trocar</button>
    </div>
  );
};

export default Usuario;
